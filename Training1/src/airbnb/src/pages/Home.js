import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./Home.css";
import { places } from "../data";
import Place from "../components/items/Place";
import { homes } from "../data";
import { acties } from "../data";
import Card from "../components/items/Card";

export default function Home() {
  return (
    <div className="home_page">
      <Header />
      <div className="section hero_section">
        <div className="hero_content">
          <div className="hero_title">Not sure where to go? Perfect.</div>
          <div className="action_btn">I'm flexible</div>
        </div>
      </div>

      <div className="section explore_section">
        <div className="heading">Explore nearby</div>
        <div className="explore_container">
          {places.map((place) => {
            return (
              <div className="place_item" key={place.name}>
                <Place
                  key={place.name}
                  urlImg={place.urlImg}
                  name={place.name}
                  driveTime={place.driveTime}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="section home_section">
        <div className="heading">Live anywhere</div>
        <div className="home_container">
          {homes.map((home, index) => {
            return (
              <div className="home_item" key={home.title}>
                <Card key={home.title} urlImg={home.urlImg} title={home.title} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="section hosting_section">
        <div className="hosting_container">
          <div className="hosting_content">
            <h2>Try hosting</h2>
            <p>
              Earn extra income and unclock new opportunities by sharing your
              space
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="section acti_section">
        <div className="heading">Live anywhere</div>
        <div className="acti_container">
          {acties.map((acti) => {
            return (
              <div className="acti_item" key={acti.title}>
                <Card
                  key={acti.subTitle}
                  urlImg={acti.urlImg}
                  title={acti.title}
                  subTitle={acti.subTitle}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
