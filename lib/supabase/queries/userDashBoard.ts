import { createBrowserClientSupabase } from "../supabaseBrowser";
import { createClient } from "../supabaseServer";

interface Funds {
  id: string;
  userId: string;
  amount: number;
  created_at: string;
  // add other columns if needed
}

export interface DashboardData {
  projectsFunded: number;
  totalContribution: number;
  totalVotesCast: number;
  ActiveVotedProject: number;
}

export async function getUserDashboardData(): Promise<DashboardData> {
  const supabase = await createClient();

  // gets user id
  const user = await supabase.auth.getUser();
  const currentUserId = user.data.user?.id;

  // projects funded

  const [fundsQuery, votesQuery] = await Promise.all([
    supabase.from("Funds").select("*").eq("userId", currentUserId),
    supabase
      .from("Votes")
      .select("*, projectId(id,status)")
      .eq("userId", currentUserId),
  ]);

  console.log(votesQuery.data);

  return {
    projectsFunded: fundsQuery.data?.length || 0, // count holds the total matching rows
    totalContribution:
      fundsQuery.data?.reduce((sum, fund) => (sum += fund.amount), 0) || 0,
    totalVotesCast: votesQuery.data?.length || 0,
    ActiveVotedProject:
      votesQuery.data?.filter((item) => item.projectId.status === "approved")
        .length || 0,
  };
}
