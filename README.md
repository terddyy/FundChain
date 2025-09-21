FundChain: Empowering Causes with Blockchain 🦾

FundChain is a decentralized application (DApp) built on the Ethereum blockchain, designed to allow users to create, manage, and donate to funds for various causes or projects. It offers a secure, transparent, and decentralized platform to pool money for shared goals, leveraging the power of blockchain to ensure trust and transparency.

🚀 Features

Create Funds: Easily set up a fund for a cause or project with all the essential details.

Donate to Funds: Contribute funds using Ethereum (ETH) through a seamless, transparent process.

Manage Fund Details: Track donations, manage fund goals, and keep an eye on progress.

Full Transparency: Every transaction is publicly available on the Ethereum blockchain, ensuring transparency and trust.

No Middleman: Transactions are directly handled on the blockchain, reducing administrative overhead.

🔧 Technologies Used

Ethereum: A decentralized blockchain platform that powers the smart contracts.

Solidity: The programming language used for writing smart contracts on the Ethereum blockchain.

Web3.js: JavaScript library to interact with the Ethereum blockchain from the front-end.

React: The front-end framework to build the dynamic and user-friendly interface.

Node.js: Backend environment to handle server-side logic and API integration.

IPFS: Decentralized storage solution to securely store fund-related files and data.

💡 Prerequisites

Before you start, make sure to have the following installed:

Node.js (version >= 14.x)

npm (version >= 6.x)

Truffle (for Ethereum smart contract development and deployment)

Metamask or another Ethereum-compatible wallet

🛠️ Installation
1. Clone the repository
git clone https://github.com/terddyy/FundChain.git
cd FundChain

2. Install dependencies

Use npm to install both the front-end and back-end dependencies:

npm install

3. Set up environment variables

Create a .env file in the root directory of the project and add the following variables:

REACT_APP_INFURA_PROJECT_ID=<your_infura_project_id>
REACT_APP_INFURA_PROJECT_SECRET=<your_infura_project_secret>


You can create an Infura project here
 to get your project ID and secret for Ethereum network access.

4. Deploy smart contracts

In the contracts folder, use Truffle to deploy the smart contracts:

truffle migrate --network <network_name>


Replace <network_name> with the desired Ethereum network (e.g., development, rinkeby, mainnet).

5. Start the application

Run the development server:

npm start


The app will be live at http://localhost:3000 in your browser.

🚀 Usage

Once your app is running, here's what you can do:

Create a Fund: Navigate to the "Create Fund" page and fill in the required details like the fund name, description, and target amount.

Donate: Choose a fund and make a donation via Ethereum wallet (like Metamask).

Track Donations: Fund creators can view the real-time donations for their cause.

🤝 Contributing

We love contributions! If you'd like to help make FundChain even better, follow these steps:

Fork this repository to your GitHub account.

Clone your forked repository to your local machine.

Create a new branch for your feature or bug fix:

git checkout -b feature-branch


Make your changes, then commit them:

git commit -am 'Add feature'


Push to your branch:

git push origin feature-branch


Open a Pull Request to merge your changes into the main repository.

📜 License

FundChain is licensed under the MIT License. See the LICENSE
 file for more details.

🌐 Links

FundChain Website
 (Add your website link here)

GitHub Repository

Feel free to reach out if you have any questions or feedback! We'd love to hear from you! 🚀
