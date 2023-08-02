import React, { useState, useEffect } from "react";
import "../Style/dashboard.css";
import MyNfts from "../components/Dashboard/MyNfts";

// import dashboardSidebar from "../components/dashboard/dashboardSidebar";
// import ImageCard from "../components/dashboard/ImageCard";
// import axios from "axios";
// import FilterType from "../components/dashboard/FilterType/FilterType";
const DashboardPage = () => {
  const [filterActive, setFilterActive] = useState([false]);
  const toggleFilterMenu = () => {
    setFilterActive(!filterActive);
  };

  const [activeFilter, SetActiveFilter] = useState(2);
  const toggleFilter = (index) => {
    SetActiveFilter(index);
  };

  return (
    <>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className={`${filterActive ? "" : "active"} sidebar-filter`}>
                <div className="filter-close-menu" onClick={toggleFilterMenu}>
                  <img src="./images/dashboard/close.svg" alt="" />
                </div>
                <div className="dashboard-sideber-wrapper">
                  <div className="filter-items">
                    <div className="filter-list-items">
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 1
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(1);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/account.svg" alt="" />
                            </div>
                            <span>Account Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 2
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(2);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/my-nft.svg" alt="" />
                            </div>
                            <span>My NFTs</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 3
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(3);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/claim.svg" alt="" />
                            </div>
                            <span>Claim New NFTs</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 4
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(4);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img
                                src="/images/dashboard/referrals.svg"
                                alt=""
                              />
                            </div>
                            <span>My Referrals</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 5
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(5);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img
                                src="/images/dashboard/knowledge.svg"
                                alt=""
                              />
                            </div>
                            <span>Knowledge Base</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
              <div className={`${filterActive ? "" : "active"} overlays`}></div>
              <div className="dashboard-wrapper">
                <div className="filter-menu-item-con">
                  <button
                    className="filter-menu-icon"
                    onClick={toggleFilterMenu}
                  >
                    <img src="/images/dashboard/filter-menu.svg" alt="" />
                  </button>
                </div>
                <div className="dashboard-content-item">
                  <div
                    className={
                      activeFilter === 1
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <h1>Account Details</h1>
                  </div>

                  <div
                    className={
                      activeFilter === 2
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <MyNfts />
                  </div>
                  <div
                    className={
                      activeFilter === 3
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <h1>Claim New NFTs</h1>
                  </div>
                  <div
                    className={
                      activeFilter === 4
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <h1>My Referrals</h1>
                  </div>
                  <div
                    className={
                      activeFilter === 5
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <h1>Knowledge Base</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
