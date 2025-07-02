import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";
import { About } from "../about";
import { Element } from "react-scroll";
import useContent from "../../content_option";

export const Home = () => {
  const { meta, introdata, section } = useContent();
  return (
      <HelmetProvider>
          <Element name="home">
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
                      <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }} alt="intro_img"
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                            introdata.animated.third,
                            introdata.animated.fourth,
                            introdata.animated.fifth,
                            introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                      delay: 50,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="portfolio" smooth={true} duration={50} offset={-60} className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                                              {section.portfolio}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="contact" smooth={true} duration={50} offset={-60}>
                    <div id="button_h" className="ac_btn btn">
                                              {section.contact}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
              </section>
          </Element>
          <Element name="portfolio"><Portfolio /></Element>
          <Element name="about"><About /></Element>
          <Element name="contact"><ContactUs /></Element>
          <br></br>
    </HelmetProvider>
  );
};
