import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RecentNewsItem from "./RecentNewsItem";
const RecentNewSlider = () => {
  return (
    <>
      <section className="recent_news_press cpy-6">
        <div className="recent_news-overlay"></div>
        <div className="recent_new_header cpb-7">
          <span className="focus-color">What's Going on?</span>
          <h4 className="recent-title">Recent News & Press Releases</h4>
        </div>
        <div className="recent-news-press-content">
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
              Navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
            >
              <SwiperSlide>
             <RecentNewsItem
             date="JUNE 5, 2023"
             title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
             dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
             />
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="recent-new-slider-con">
                  <button className="alt-custom-btn">Press Releases</button>
                  <div className="recent-item-content">
                    <p>JUNE 5, 2023</p>
                    <h3>
                      EAS Launches Platform to Map the World’s Addresses as
                      NFT-based Digital Rights
                    </h3>
                    <span>
                      Ethereum Address Service (“EAS”) is thrilled to announce
                      the launch of its ground-breaking platform...
                    </span>
                  </div>
                </div> */}
                    <RecentNewsItem
             date="JUNE 5, 2023"
             title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
             dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
             />
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="recent-new-slider-con">
                  <button className="alt-custom-btn">Press Releases</button>
                  <div className="recent-item-content">
                    <p>JUNE 5, 2023</p>
                    <h3>
                      EAS Launches Platform to Map the World’s Addresses as
                      NFT-based Digital Rights
                    </h3>
                    <span>
                      Ethereum Address Service (“EAS”) is thrilled to announce
                      the launch of its ground-breaking platform...
                    </span>
                  </div>
                </div> */}
                 <RecentNewsItem
             date="JUNE 5, 2023"
             title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
             dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
             />
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="recent-new-slider-con">
                  <button className="alt-custom-btn">Press Releases</button>
                  <div className="recent-item-content">
                    <p>JUNE 5, 2023</p>
                    <h3>
                      EAS Launches Platform to Map the World’s Addresses as
                      NFT-based Digital Rights
                    </h3>
                    <span>
                      Ethereum Address Service (“EAS”) is thrilled to announce
                      the launch of its ground-breaking platform...
                    </span>
                  </div>
                </div> */}
                   <RecentNewsItem
             date="JUNE 5, 2023"
             title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
             dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
             />
              </SwiperSlide>
              <SwiperSlide>
                {/* <div className="recent-new-slider-con">
                  <button className="alt-custom-btn">Press Releases</button>
                  <div className="recent-item-content">
                    <p>JUNE 5, 2023</p>
                    <h3>
                      EAS Launches Platform to Map the World’s Addresses as
                      NFT-based Digital Rights
                    </h3>
                    <span>
                      Ethereum Address Service (“EAS”) is thrilled to announce
                      the launch of its ground-breaking platform...
                    </span>
                  </div>
                </div> */}
                     <RecentNewsItem
             date="JUNE 5, 2023"
             title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
             dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
             />
              </SwiperSlide>
            </Swiper>
            <div className="slider-nav">
              <div className="prev">
                <FaChevronLeft />
              </div>
              <div className="next">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentNewSlider;
