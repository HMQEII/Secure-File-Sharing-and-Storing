import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        
        // Check and switch to correct network if necessary
        const chainId = await provider.getNetwork().then((network) => network.chainId);
        const desiredChainId = 1337; // Hardhat's default chainId for local network
        if (chainId !== desiredChainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x539' }], // 0x539 is Hardhat Network's chainId in hex
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              // Handle case where the desired chain is not available in MetaMask
              alert("Please add the correct network to MetaMask!");
            }
            console.error('Error while switching network:', switchError);
          }
        }

        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        // let contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };

    provider && loadProvider();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10%",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "white", letterSpacing: "10px" }}>D-FILE</h1>
        <div
          style={{
            background: "#9e23d7c6",
            color: "#383838",
            borderRadius: "10px",
            padding: "auto",
            height: "30px",
            width: "fit-content",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#ffffffe0" }}>
            Account : {account ? account : "Not connected"}
          </p>
        </div>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;
