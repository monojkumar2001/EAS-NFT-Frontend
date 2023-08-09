import { useState } from "react";
import "../Style/nftUseCases.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NftUseCaseItem from "../components/NftUseCase/NftUseCaseItem";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
const NFTUseCases = () => {
  return (
    <>
      {/* ================ NFT USE CASES ==================== */}
      <section className="nft-use-case cpt-9">
        <div className="container">
          <div className="nft-use-case-wrapper row">
            <div className="col-lg-7 col-md-12">
              <div className="nft-use-case-content">
                <span className="focus-color">NFT USE CASES</span>
                <h2 className="section-title">How Does My NFT Make Money?</h2>
                <p>
                  EAS NFTs generate royalties and revenue from buying and
                  trading as well as real-time data not available in today’s
                  real estate market.
                </p>
                <p>
                  Our entire lives can be simplified into our interactions
                  within an ecosystem of addresses. Where we live, where we
                  work, where we eat, and where we socialize to name a few. Our
                  emotional connection with these addresses provides valuable
                  data as to how we view and value our surrounding universe. EAS
                  captures this data and much more.
                </p>
                <p>
                  EAS is also committed to sharing the majority of revenue from
                  data monetization with our NFT owners. In a world where the
                  individual has little control over the monetization of his,
                  her or their personal data, we give the power back to the
                  consumer (in our world, the rich don’t get richer, you do).{" "}
                </p>
                <div className="nft-use-case-list-item">
                  <p>EAS NFTs have three primary use cases:</p>
                  <ul>
                    <li>1. Gaming & Mapping</li>
                    <li>2. Market Intelligence</li>
                    <li>3. Liquid Pricing Comparables</li>
                    <li>4. Real-World Data</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="nft-use-case-img">
                <LazyLoadImage
                  src="/images/use-cases/dripping-metaverse.png"
                  alt="NFT Use Case Images"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NFT USE CASES LIST =================== */}
      <section className="nft-use-case-list">
        <div className="container">
          <div className="nft-use-case-list-wrapper">
            <div className="nft-use-case-list-Item">
              <span className="focus-color">NFT Use Case</span>
              <h2 className="nft-list-case-title">Gaming & Mapping</h2>
              <p>
                With the EAS proprietary trading card game called Address
                Quest™, EAS NFT owners win <b>real cash and prizes</b> by
                building unique collections of addresses and neighborhoods.
                Follow us on social media, where we will announce ways to win
                each month!
              </p>
              <p>
                NFT owners can also purchase digital plots of land called
                Neighborhood NFTs and generate royalties from the sale of
                Address NFTs within the Neighborhood’s designated postal code.
                EAS Neighborhoods are the only NFTs in the market where buyers,
                and not just creators, participate in royalties. Read more about
                our Neighborhood NFTs.{" "}
                <span>
                  <Link to={""}>Neighborhood NFTs</Link>
                </span>
                .
              </p>
            </div>
            <NftUseCaseItem />
          </div>
        </div>
      </section>

      {/* ================ Recent News & Press Releases =============== */}
      <section className="recent_news_press">
        <div className="recent_new_header">
          <span className="focus-color">What's Going on?</span>
          <h4 className="recent-title">Recent News & Press Releases</h4>
        </div>
        <div className="recent-news-wrapper">
<Swiper
spaceBetween={20}
slidesPerView={3}
modules={[Navigation, Pagination, A11y]}
breakpoints={{
    450: {
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 1.5,
    },
    1050: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  }}
navigation={{
    prevEl: ".prev",
    nextEl: ".next",
  }}
>
<SwiperSlide>
    <div className="recent-new-slider-con">
        <button className="alt-custom-btn">
        Press Releases
        </button>
        <div className="recent-item-content">
        <p>JUNE 5, 2023</p>
        <h3>EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights</h3>
        <span>Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform...</span>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="recent-new-slider-con">
        <button className="alt-custom-btn">
        Press Releases
        </button>
        <div className="recent-item-content">
        <p>JUNE 5, 2023</p>
        <h3>EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights</h3>
        <span>Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform...</span>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="recent-new-slider-con">
        <button className="alt-custom-btn">
        Press Releases
        </button>
        <div className="recent-item-content">
        <p>JUNE 5, 2023</p>
        <h3>EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights</h3>
        <span>Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform...</span>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="recent-new-slider-con">
        <button className="alt-custom-btn">
        Press Releases
        </button>
        <div className="recent-item-content">
        <p>JUNE 5, 2023</p>
        <h3>EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights</h3>
        <span>Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform...</span>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="recent-new-slider-con">
        <button className="alt-custom-btn">
        Press Releases
        </button>
        <div className="recent-item-content">
        <p>JUNE 5, 2023</p>
        <h3>EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights</h3>
        <span>Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform...</span>
        </div>
    </div>
</SwiperSlide>
</Swiper>
<div className="slider-nav">
                <div className="prev">
                  <FaChevronLeft/>
                </div>
                <div className="next">
                <FaChevronRight/>
                </div>
              </div>
        </div>
      </section>
    </>
  );
};

export default NFTUseCases;
