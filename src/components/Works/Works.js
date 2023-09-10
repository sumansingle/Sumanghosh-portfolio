import React from "react";
import NewsfeedPhoto from "../../assets/NewsFeed.jpg";
import BookMyShowPhoto from "../../assets/BookMyShow.jpg";
import BitDecodersPhoto from "../../assets/bitdecoders.png";
import WeatherAppPhoto from "../../assets/weather.png";
import EventaGameBookingPhoto from "../../assets/eventbooking.png";
import EcommercePhoto from "../../assets/ecommerce.png";
import PortfolioPhoto from "../../assets/portfolio.png";
import CoffeHousePhoto from "../../assets/coffehouse.png";
import JsDocumentPhoto from "../../assets/jsdocument.png";
import ZomatoPhoto from "../../assets/Zomato.jpg";
import PhotoGellory from "../../assets/PhotoGellory.jpg";
import "./Works.css";

function Works() {
  return (
    <>
      <div className="res-top">
        <h2 className="project-header">My Project</h2>
        <div className="project-list">
          <div className="project">
            <img src={NewsfeedPhoto} alt="" />
            <a href="https://6cqryk.csb.app/">
              <p>Newsfeed Project</p>
            </a>
          </div>
          <div className="project">
            <img src={BookMyShowPhoto} alt="" />
            <a href="https://gleeful-tiramisu-14f673.netlify.app/">
              <p>BookMyShow Project</p>
            </a>
          </div>
          <div className="project">
            <img src={ZomatoPhoto} alt="" />
            <a href="profound-profiterole-974e29.netlify.app">
              <p>Zomato Project</p>
            </a>
          </div>
          <div className="project">
            <img src={BitDecodersPhoto} alt="" />
            <a href="https://www.bitdecoders.com/">
              <p>BitDecoders Project</p>
            </a>
          </div>
          <div className="project">
            <img src={EventaGameBookingPhoto} alt="" />
            <a href="https://sunny-twilight-7535ec.netlify.app/">
              <p>EventGameBooking Project</p>
            </a>
          </div>
          <div className="project">
            <img src={WeatherAppPhoto} alt="" />
            <a href="https://coruscating-chimera-55ee88.netlify.app/">
              <p>WeatherApp Project</p>
            </a>
          </div>
          <div className="project">
            <img src={EcommercePhoto} alt="" />
            <a href="https://incandescent-begonia-6e132a.netlify.app/">
              <p>Ecommerce Project</p>
            </a>
          </div>
          <div className="project">
            <img src={PortfolioPhoto} alt="" />
            <a href="https://dazzling-stroopwafel-bf1f0c.netlify.app/">
              <p>Portfolio Project</p>
            </a>
          </div>
          <div className="project">
            <img src={PhotoGellory} alt="" />
            <a href="https://bright-scone-6b5b57.netlify.app/">
              <p>Photo Gellory Project</p>
            </a>
          </div>
          <div className="project">
            <img src={CoffeHousePhoto} alt="" />
            <a href="https://cooffehousecom.netlify.app/">
              <p>CoffeHouse Project</p>
            </a>
          </div>
          <div className="project">
            <img src={JsDocumentPhoto} alt="" />
            <a href="https://admirable-peony-4e01d6.netlify.app/">
              <p>JsDocument Project</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
