import React from "react";

const ClaimNewNfts = () => {
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Claim New Address NFTs</h3>
        <p>
          You can select up to five addresses below to create an Address NFT
          bundle.
        </p>
        <div className="claim-content-wrapper">
          <div className="claim-content-items d-flex align-items-center gap-3 my-4">
            <div className="claim-content-item d-flex align-items-center gap-2">
              <span>1</span>
              <p>Select Addresses</p>
            </div>
            <div className="claim-content-item d-flex align-items-center gap-2">
              <span>2</span>
              <p>Confirm Details</p>
            </div>
          </div>
          <div className="account-input-fluid-item">
            <input type="email" />
          </div>
          <button className="save-change-btn custom-btn" type="submit">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ClaimNewNfts;
