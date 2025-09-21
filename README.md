FundChain

FundChain is a decentralized application (DApp) built on the Ethereum blockchain that allows users to create and manage funds for various causes or projects. It provides a secure and transparent way to pool money for shared goals.

Features

Create Funds: Easily create new funds for different causes or projects.

Donate to Funds: Contribute money to a fund using cryptocurrency.

Fund Management: Fund creators can track donations and manage the fund's details.

Transparent: All transactions are on the blockchain for full transparency.

Technologies Used

Ethereum: Blockchain platform for creating and managing smart contracts.

Solidity: Programming language for writing smart contracts.

Web3.js: JavaScript library to interact with the Ethereum blockchain.

React: Front-end framework for building the user interface.

Node.js: Backend environment for handling server-side logic.

IPFS: Decentralized file storage for fund-related files.

Prerequisites

Before you begin, ensure you have the following installed:

Node.js (version >= 14.x)

npm (version >= 6.x)

Truffle (for smart contract development)

Metamask (or any other Ethereum wallet)

Installation
1. Clone the repository
git clone https://github.com/terddyy/FundChain.git
cd FundChain

2. Install dependencies

Install both front-end and back-end dependencies using npm:

npm install

3. Set up environment variables

Create a .env file in the root of the project and add the following environment variables:

REACT_APP_INFURA_PROJECT_ID=<your_infura_project_id>
REACT_APP_INFURA_PROJECT_SECRET=<your_infura_project_secret>


You can create an Infura project here
 for Ethereum network access.

4. Deploy smart contracts

In the project directory, navigate to the contracts folder and use Truffle to deploy the smart contracts.

truffle migrate --network <network_name>


Make sure to replace <network_name> with the desired Ethereum network (e.g., development, rinkeby, or mainnet).

5. Start the application

Run the following command to start the development server:

npm start


Your app will be running at http://localhost:3000 in your browser.

Usage

Once the application is running, you can:

Create a Fund: Navigate to the "Create Fund" page and fill in the required details (fund name, description, target amount, etc.).

Donate: Choose a fund and make a donation using your Ethereum wallet (Metamask or similar).

Track Donations: Fund creators can view the total contributions in real-time.

Contributing

We welcome contributions to the FundChain project. To contribute:

Fork this repository.

Clone your forked repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -am 'Add feature').

Push to the branch (git push origin feature-branch).

Open a Pull Request.

License

FundChain is licensed under the MIT License
.
