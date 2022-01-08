import React from "react";
//Components Imports
// _________________
// _________________
// _________________
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Services from "../../components/Services";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Mission from "../../components/Mission";
import "./Home.css";
// Material UI icons imports
// _________________________
// _________________________
// _________________________
import HttpIcon from "@material-ui/icons/Http";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WebIcon from "@material-ui/icons/Web";

// additional dependencies import
// _________________________
// _________________________
// _________________________
import Zoom from "react-reveal/Zoom";
import Projects from "../../components/Projects";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Header />
        <Banner />
      </div>
      <div className="home_content">
        <AboutUs />
        <Mission />
        <div className="service_component_container">
          <Zoom>
            <div className="services_container">
              <h2 className="services_header">Our Services</h2>
              <div className="team_head">
                <div className=" team_header_und title-underline center">
                  <span></span>
                </div>
              </div>
            </div>
          </Zoom>
          <div className="service_items">
            <Services
              icon={<HttpIcon fontSize="large" />}
              title={"Website development"}
              // text={"lorem ipsum dolor sit amet"}
            />
            <Services
              icon={<PhoneAndroidIcon fontSize="large" />}
              title={"App development"}
              // text={"lorem ipsum dolor sit amet"}
            />
            <Services
              icon={<WebIcon fontSize="large" />}
              title={"UI/UX design"}
              // text={"lorem ipsum dolor sit amet"}
            />
          </div>
        </div>
      </div>
      <div className="project" id="projects">
        <h2 className="services_header">Check Some Of Our Projects</h2>
        <div className="project_container">
        <Projects
          imageUrl={
            "https://keen-kowalevski-48e46f.netlify.app/images/portfolio/lnp.jpg"
          }
          websiteLink={"https://lineupfit.com/"}
          title={"Lineupfit"}
        />
        <Projects
          imageUrl={
            "https://keen-kowalevski-48e46f.netlify.app/images/portfolio/ecommerce.jpg"
          }
          websiteLink={"https://gallant-meitner-b1ef62.netlify.app/"}
          title={"E-commerce web app"}
        />
        <Projects
          imageUrl={
            "https://keen-kowalevski-48e46f.netlify.app/images/portfolio/yumco.jpg"
          }
          websiteLink={"http://yumcokw.com/en/"}
          title={"yumco landing page"}
        />
        <Projects
          imageUrl={"https://i.imgur.com/942Ogsc.png"}
          websiteLink={"http://sayadmedical.com/index.php/en/"}
          title={"Sayad Medical landing page"}
        />
        <Projects
          imageUrl={
            "https://th.bing.com/th/id/R.f3bd4af9a8610fb9be71d4ea71c7b048?rik=3cs2O8Sm5SAhzA&pid=ImgRaw&r=0 "
          }
          title={"Local Medical Desktop App"}
        />
        <Projects
          imageUrl={
            "https://th.bing.com/th/id/R.a12f847ff952d6028dc2c8e400000a2b?rik=lKM85qEpTGMAIQ&pid=ImgRaw&r=0"
          }
          title={"Local Financial Dashboard Web App"}
        />
      
         <a className="project_link" href="http://www.ties-education.org/" target="_blank" rel="noreferrer">
        <div className="single_project_container">
          <img className="project_img ties_education" src="http://www.ties-education.org/images/2018/12/22/logo-footer.png" alt="project_image" />
          <p className="project_title">education website</p>
        </div>
      </a>
      </div>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
