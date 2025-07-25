import React from "react";

const page = async () => {
  // const data format

  return (
    <main className="flex flex-wrap items-center justify-center gap-2 mt-10 p-10">
      {/* projects funded */}
      <div className="p-5 rounded-xl space-y-5  bg-white/20 border-2 w-full max-w-xs text-white text-center">
        <h1 className=" font-bold text-4xl">10</h1>
        <h4 className="font-semibold text-2xl">Projects Funded</h4>
      </div>
      {/* Total Contribution */}
      <div className="p-5 rounded-xl space-y-5  bg-white/20 border-2 w-full max-w-xs text-white text-center">
        <h1 className=" font-bold text-4xl">10</h1>
        <h4 className="font-semibold text-2xl">Total Contribution</h4>
      </div>
      {/* Vote cast*/}
      <div className="p-5 rounded-xl space-y-5  bg-white/20 border-2 w-full max-w-xs text-white text-center">
        <h1 className=" font-bold text-4xl">10</h1>
        <h4 className="font-semibold text-2xl">Vote cast</h4>
      </div>
      {/* Active voted projects */}
      <div className="p-5 rounded-xl space-y-5  bg-white/20 border-2 w-full max-w-xs text-white text-center">
        <h1 className=" font-bold text-4xl">10</h1>
        <h4 className="font-semibold text-2xl">Active voted projects</h4>
      </div>
    </main>
  );
};

export default page;
