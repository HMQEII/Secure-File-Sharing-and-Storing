## Installation Steps
To set up the project locally:
1. clone the repo
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
