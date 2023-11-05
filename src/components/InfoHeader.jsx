import React from "react";

const InfoHeader = () => {
  return (
    <div className="bg-red-500 w-11/12 md:w-3/4 h-14 mx-auto m-8 md:mb-5 mt-4 md:mt-7 mb-9 flex flex-col md:flex-row items-center justify-between shadow-md">
      <div className="text-white mx-2 md:mx-0 text-center md:text-left md:ml-7">
        <h3>
          For the best experience, use <b>inshorts</b> app on your smartphone
        </h3>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <a href="https://play.google.com/store/apps/details?id=com.nis.app&pcampaignid=web_share">
          <img
            className="h-9 w-auto mx-2"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="App Store"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.nis.app&pcampaignid=web_share">
          {" "}
          <img
            className="h-9 w-auto mx-2"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="Play Store"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoHeader;
