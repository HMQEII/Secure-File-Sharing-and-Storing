# 📦 DecentralizedFileSharing

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square)
![Hardhat](https://img.shields.io/badge/Hardhat-2.14.1-purple?style=flat-square)

## Project Overview
DecentralizedFileSharing is a secure and decentralized storage solution inspired by services like Google Drive, leveraging blockchain technology for data integrity and security. The architecture consists of a React frontend for user interaction and smart contracts deployed on the Ethereum blockchain to manage file uploads and retrievals.

### Architecture Components
- **Frontend**: Built using React, providing a seamless user interface to interact with the storage system.
- **Smart Contracts**: Deployed on the Ethereum network that handle file storage logic securely.
- **Database (if applicable)**: Currently not applicable as data management relies on blockchain technology.

## 🌟 Features
- Secure file uploads and downloads utilizing blockchain technology.
- Decentralized access control mechanisms.
- User-friendly interface built with React for easy navigation.
- Responsive design compatible with various devices.

## Installation Steps
To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/DecentralizedFileSharing.git
   ```

2. Navigate into the project directory:
   ```bash
   cd DecentralizedFileSharing/
   ```

3. Install root dependencies:
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   ```

4. Navigate into the client directory:
   ```bash
   cd client/
   ```

5. Install client dependencies:
   ```bash
   npm install
   ```

## Usage Instructions
To start the development server for the frontend application:

1. From within the `client` folder, run:
   ```bash
   npm start
   ```
   
This command will launch your React application in your default web browser.

For deploying smart contracts, use the deploy script located in `scripts/deploy.js`.

## Project Structure Overview

```
📁 //
  📄 .gitignore 
  📄 README.md 
  📁 client/
    📄 .gitignore 
    📄 README.md 
    📄 package-lock.json 
    📄 package.json 
    📁 public/
      📄 favicon.ico 
      📄 index.html 
      📄 logo192.png 
      📄 logo512.png 
      📄 manifest.json 
      📄 robots.txt 
    📁 src/
      📄 App.css 
      🌐 App.js  
      🧪 App.test.js  
      💻 components/
        🔤 Display.css   
        🔤 Display.js    
        🔤 FileUpload.css    
        🔤 FileUpload.js     
        🔤 Modal.css     
        🔤 Modal.js      
      🖥️ index.css    
      🖥️ index.js     
      🖼️ logo.svg    
      📝 reportWebVitals.js  
      ⚙️ setupTests.js  
  📁 contracts/
    ✏️ Lock.sol   
    ✏️ Upload.sol  
  💻 hardhat.config.js   
  ⚙️ package-lock.json   
  ⚙️ package.json    
  💾 scripts/
    🚀 deploy.js     
  🔍 test/
    🔒 Lock.js      
```

## Development and Deployment

### Developer Information
Developers should have Node.js installed along with Truffle or Hardhat setup for managing smart contracts.

### Deployment Instructions
To deploy your contracts, ensure you are in the root directory and run:
```bash
npx hardhat run scripts/deploy.js --network <your-network>
```
Replace `<your-network>` with your desired Ethereum network configuration in `hardhat.config.js`.

### Environment Variables Setup (Example)
You can set environment variables necessary for deployment in a `.env` file at the root level of your project without actual secrets included:

```
API_KEY=your_api_key_here
PRIVATE_KEY=your_private_key_here
```

## License Information
This project is currently unlicensed.

Version: 1  
Last updated: 2025-03-21T06:19:01.391Z