import React from "react";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import NftPricingItem from "../components/NftPricing/NftPricingItem";
import { Link } from "react-router-dom";
const NftPricingPage = () => {
  return (
    <>
      {/* ============ Banner ========== */}
      <EasBanner title="EAS NFT Pricing" />
      {/* =========== Nft Pricing ============== */}
      <section className="nft-pricing">
        <div className="container">
          <div className="nft-pricing-wrapper">
            <div className="nft-pricing-item">
 
            </div>
            <div class="table-responsive">
              <table class="table">
                <caption>List of users</caption>
                <thead>
                  <tr>
                    <th scope="col">NFT Type</th>
                    <th scope="col">Price (Ether)</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                    
                    </td>
                    <NftPricingItem
                      price="0.02 ETH"
                      description="Address NFTs include any address in the world that you claim yourself as an NFT on easnft.com through our claim process. Includes all categories (Residential, Commercial, Industrial, Parks, Travel Hubs, etc). If you claim an NFT address which is already included in our Gold, Platinum, or Charity Collections, your NFT will be subject to collection pricing."
                    />
                  </tr>
                  <tr>
                    <td scope="row">
                      <Link to={"/"}>
                      Standard Address NFTs
                      </Link>
                    </td>
                    <NftPricingItem
                      price="0.02 ETH"
                      description="Address NFTs include any address in the world that you claim yourself as an NFT on easnft.com through our claim process. Includes all categories (Residential, Commercial, Industrial, Parks, Travel Hubs, etc). If you claim an NFT address which is already included in our Gold, Platinum, or Charity Collections, your NFT will be subject to collection pricing."
                    />
                  </tr>
                  <tr>
                    <td scope="row">
                      <Link to={"/"}>
                      Standard Address NFTs
                      </Link>
                    </td>
                    <NftPricingItem
                      price="0.02 ETH"
                      description="Address NFTs include any address in the world that you claim yourself as an NFT on easnft.com through our claim process. Includes all categories (Residential, Commercial, Industrial, Parks, Travel Hubs, etc). If you claim an NFT address which is already included in our Gold, Platinum, or Charity Collections, your NFT will be subject to collection pricing."
                    />
                  </tr>
                  <tr>
                    <td scope="row">
                      <Link to={"/"}>
                      Standard Address NFTs
                      </Link>
                    </td>
                    <NftPricingItem
                      price="0.02 ETH"
                      description="Address NFTs include any address in the world that you claim yourself as an NFT on easnft.com through our claim process. Includes all categories (Residential, Commercial, Industrial, Parks, Travel Hubs, etc). If you claim an NFT address which is already included in our Gold, Platinum, or Charity Collections, your NFT will be subject to collection pricing."
                    />
                  </tr>
                  <tr>
                    <td scope="row">
                      <Link to={"/"}>
                      Standard Address NFTs
                      </Link>
                    </td>
                    <NftPricingItem
                      price="0.02 ETH"
                      description="Address NFTs include any address in the world that you claim yourself as an NFT on easnft.com through our claim process. Includes all categories (Residential, Commercial, Industrial, Parks, Travel Hubs, etc). If you claim an NFT address which is already included in our Gold, Platinum, or Charity Collections, your NFT will be subject to collection pricing."
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftPricingPage;
