import React, { useState } from "react";

export const AddEdenRpc = () => {
  const [modal, setModal] = useState(null);
  const closeModal = () => setModal(null);

  const onClick = async () => {
    if (window.ethereum) {
      if (
        typeof window.ethereum.request === "function" &&
        typeof window.ethereum.request({
          method: "wallet_addEthereumChain",
        }) === "object"
      ) {
        // See if the wallet_addEthereumChain method is supported
        const attempt = await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x1",
              rpcUrls: ["https://api.edennetwork.io/v1/rpc"],
              chainName: "Eden RPC",
              nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
              },
              blockExplorerUrls: ["https://etherscan.io/"],
            },
          ],
        });
        // Unsupported
        if (attempt == null) {
          setModal(
            <p>
              {"Your wallet does not support adding a custom RPC, please "}
              <a href="https://metamask.io/download/" target="_blank">
                {"use MetaMask"}
              </a>
              {" or any other supported wallet."}
            </p>
          );
        }
      }
    } else {
      // No window.ethereum
      setModal(
        <p>
          {"Please "}
          <a href="https://metamask.io/download/" target="_blank">
            {"install MetaMask"}
          </a>
          {" to use this feature."}
        </p>
      );
    }
  };

  return (
    <div>
      <button className="rpcBtn" onClick={onClick}>
        {"Connect Wallet to Protect"}
      </button>
      {!!modal && (
        <div className="overlay">
          <div className="modal">
            <button className="modal__close" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="modal__text">{modal}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEdenRpc;
