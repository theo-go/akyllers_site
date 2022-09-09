import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import axios from "axios";
import { ethers, BigNumber } from "ethers";
import { Contract, API_URL } from "./config";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentComponent = () => {
    const { activate, deactivate, library, account } = useWeb3React();

    const [minted, setMinted] = useState(0);

    const [accountType, setAccountType] = useState(null);
    const [allowedToMint, setAllowedToMint] = useState(0);
    const [accountTypeCheck, setAccountTypeCheck] = useState(false);

    const [mintNumber, setMintNumber] = useState(1);

    const [data, setData] = useState([]);



    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 97],
    });

    const onConnectClicked = async () => {
        try {
            await activate(injected);
            setAccountTypeCheck(true);
        } catch (ex) {
            console.log(ex);
        }
    };

    const onDisconnectClicked = () => {
        try {
            deactivate();
            setAccountType();
        } catch (ex) {
            console.log(ex);
        }
    };

    const mintMax = () => {
        if (account) {
            mintNFT();
        } else {
            notifymessage("Please connect the wallet", "warning");
        }
    };

    const isOG = async (id) => {
        const res = await axios(
            `https://as5lll3ro3.execute-api.eu-west-3.amazonaws.com/OG-1/${id}`
        );
        return res;
    };

    const isAllowList = async (id) => {
        const res = await axios(
            `https://plkdglm61e.execute-api.eu-west-3.amazonaws.com/Allowlist1/${id}`
        );
        return res;
    };

    const isFreeMint = async (id) => {
        const res = await axios(
            `https://6y39evztyh.execute-api.eu-west-3.amazonaws.com/freemint-r/${id}`
        );
        return res;
    };

    useEffect(() => {
        if (account) {
            isOG(account).then((res) => {
                if (res.data && res.data.length > 0) {
                    setAccountType("OG");
                    setData(res.data);
                    setAllowedToMint(3);
                    console.log(accountType);
                }
            });
        }
    }, [accountTypeCheck]);

    useEffect(() => {
        setInterval( async () => {
            const signer = new ethers.providers.Web3Provider(
                window.ethereum
            ).getSigner();
            const contract = new ethers.Contract(
                Contract.address,
                Contract.abi,
                signer
            );
            const mintedAlready = await contract.totalSupply();
            setMinted(mintedAlready.toNumber());
        },1000)
    }, []);

    const mintNFT = async () => {
        const chainId = 1; // 1: ethereum mainnet, 4: rinkeby
        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1" }], // 0x4 is rinkeby. Ox1 is ethereum mainnet.
                });
            } catch (err) {
                notifymessage("Please check the Ethereum mainnet", "error");
                return false;
            }
        }
        const signer = new ethers.providers.Web3Provider(
            window.ethereum
        ).getSigner();
        const contract = new ethers.Contract(
            Contract.address,
            Contract.abi,
            signer
        );

        const isOpen = await contract.paused();
        if (!isOpen) {
                const leftToMint = await contract.balanceOf(account);
                let mintPriceHex = await contract.cost();
                try {
                    const res = await contract.Presalemint(mintNumber ? mintNumber : 1,  data , {value: 0});
                    //console.log(`${mintNumber} NFT's minted. Price: ${mintNumber * 0.05} Eth.`);
                    notifymessage("Mint success!", "success");
                } catch (error) {
                    notifymessage(
                        "Mint failed! Please check your wallet.",
                        "error"
                    );
                    console.log("Error: ", error);
                }

        } else {
            notifymessage("Mint is closed", "warning");
        }
        return false;
    };

    const notifymessage = (msg, type) => {
        toast(msg, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            type,
            theme: "dark",
        });
    };

    return (
        <div className="MintContainer">
            <div className="MintDiv vh-centered">
                <p className="MintBtn" onClick={mintMax}>
                    MINT
                </p>
                NFT's to be minted: 
                <input type="number" placeholder="Mint" max={2} min={1} onChange={(e) => setMintNumber(e.target.value)} value={mintNumber}  />
                <p className="MintCount">{minted} / 4444 Minted</p>
            </div>
            {account ? (
                <>
                    <div className="ConnectDiv" onClick={onDisconnectClicked}>
                        Disconnect <span>from</span>{" "}
                        {account
                            ? account.slice(0, 5) +
                              "..." +
                              account.slice(38, 60)
                            : ""}
                    </div>
                </>
            ) : (
                <div className="ConnectDiv" onClick={onConnectClicked}>
                    Connect Wallet
                </div>
            )}
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </div>
    );
};
export default ContentComponent;
