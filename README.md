Web3 Front End Developer Interview Assignment
Overview
This repository contains a simple React-based web application that interacts with an ERC20 token on the Sepolia Test Network. The application allows users to mint tokens and transfer them to another Ethereum address using MetaMask.

Features
Two-step form:
Step 1: Mint tokens by specifying the amount.
Step 2: Transfer tokens to another Ethereum address.
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)
MetaMask extension installed in your browser
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:

If you're using npm:

bash
Copy code
npm install
If you're using yarn:

bash
Copy code
yarn install
Configure environment variables:

Create a .env file in the root directory of your project:

plaintext
Copy code
REACT_APP_INFURA_ID=your_infura_project_id
REACT_APP_TOKEN_ADDRESS=0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd
Replace your_infura_project_id with your Infura Project ID. You can get it by signing up at Infura.

Run the application:

If you're using npm:

bash
Copy code
npm start
If you're using yarn:

bash
Copy code
yarn start
Access the application:

Open your browser and go to http://localhost:3000 to view the application.

How to Use
Connect MetaMask:

Make sure MetaMask is installed and connected to the Sepolia Test Network.

Step 1: Mint Tokens

Enter the amount of tokens to mint in the input field.
Click the "Mint Tokens" button to mint the specified amount of tokens.
Step 2: Transfer Tokens

Enter the recipient's Ethereum address in the input field.
Click the "Transfer Tokens" button to transfer the minted tokens to the specified address.
Technologies Used
React
ethers.js or web3.js
Bootstrap (or any other front-end UI library)
Deployment
This application is deployed on Vercel. Access the live version here: Live Demo

Troubleshooting
Ensure MetaMask is connected to the Sepolia Test Network.
Check the browser console for any errors.
Verify the input values before submitting the forms.
