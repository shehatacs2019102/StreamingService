import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/startpage-assets/Logo.png";
import cross from "../assets/startpage-icons/cross.svg";
import TrendingSwiper from "../swiper-components/TrendingSwiper";
import download from "../assets/startpage-icons/download.svg";
import kids from "../assets/startpage-icons/kids.svg";
import tele from "../assets/startpage-icons/television.svg";
import mobile from "../assets/startpage-icons/mobile.svg";
import Banner from "../sub-components-intro-page/Banner";
import BannerContent from "../sub-components-intro-page/BannerContent";
import BannerH1 from "../sub-components-intro-page/BannerH1";
import BannerH2 from "../sub-components-intro-page/BannerH2";
import BannerH3 from "../sub-components-intro-page/BannerH3";
import GetStartedButton from "../sub-components-intro-page/GetStartedButton";
import BannerTopBar from "../sub-components-intro-page/BannerTopBar";
import Logo from "../sub-components-general/Logo";
import BannerBottom from "../sub-components-intro-page/BannerBottom";
import IntroStudio from "../sub-components-intro-page/IntroStudio";
import IntroStudioHeader from "../sub-components-intro-page/IntroStudioHeader";
import IntroStudioPresentation from "../sub-components-intro-page/IntroStudioPresentation";
import IntroStudioPresentationCard from "../sub-components-intro-page/IntroStudioPresentationCard";
import IntroStudioPresentationIcon from "../sub-components-intro-page/IntroStudipPresentationIcon";
import IntroStudioPresentationParagraph from "../sub-components-intro-page/IntroStudioPresentationParagraph";
import DropDownButton from "../sub-components-intro-page/DropDownButton.jsx";
import DropDownCard from "../sub-components-intro-page/DropDownCard.jsx";
import DropDownIcon from "../sub-components-intro-page/DropDownIcon.jsx";
import DropDownContainer from "../sub-components-intro-page/DropDownContainer.jsx";
import Introbackground from "../sub-components-intro-page/Introbackground.jsx";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", serif;
  overflow-x: hidden;
  overflow-y: visible;
`;

const dropinfo = [
  {
    header: "What is StreamOn",
    info: "StreamOn is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    header: "how much does StreamOn cost",
    info: "Watch StreamOn on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 100 to EGP 240 a month. No extra costs, no contracts.",
  },
  {
    header: "where can i watch",
    info: "Watch anywhere, anytime. Sign in with your StreamOn account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    header: "how can i cancel",
    info: "StreamOn is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "what can i watch on StreamOn",
    info: "StreamOn has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];
const presentation = [
  {
    header: "Enjoy on your TV",
    info: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.",
    url: `${tele}`,
  },
  {
    header: "watch offline",
    info: "Save your favorites easily and always have something to watch.",
    url: `${download}`,
  },
  {
    header: "Watch Everywhere",
    info: "Stream unlimited movies and TV shows on your phone, tablet,laptop, and TV.",
    url: `${mobile}`,
  },
  {
    header: "profiles for kids",
    info: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    url: `${kids}`,
  },
];


export default function IntroPage(props) {
  const [show, setShow] = useState(null);
  const { handlelogin } = props;
  const handleClick = (id) => {
    handlelogin(id);
  };
  const handleOpen = (index) => {
    if (index === show) {
      setShow(null);
    } else {
      setShow(index);
    }
  };
  return (
    <Container>
      
      <Banner>
        <BannerTopBar>
         
          <Logo type="Banner" src={logo} alt="" /> <h2>StreamOn</h2>
      
         
        </BannerTopBar>
        <BannerContent>
          <BannerH1>Unlimited movies, TV shows, and more</BannerH1>
          <BannerH2>Starts at 15 USD. Cancel anytime.</BannerH2>
          <BannerH3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </BannerH3>
        </BannerContent>
        <GetStartedButton
          id="login"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          Get Started
        </GetStartedButton>
      </Banner>
      <BannerBottom />
      <IntroStudio>
      <Introbackground/>
        <IntroStudioHeader>Trending Now</IntroStudioHeader>
        <TrendingSwiper />
        <IntroStudioHeader>More Reasons to Join</IntroStudioHeader>
        <IntroStudioPresentation>
          {presentation.map((card) => {
            return (
              <IntroStudioPresentationCard>
                <h2>{card.header}</h2>
                <IntroStudioPresentationParagraph>
                  {card.info}
                </IntroStudioPresentationParagraph>
                <IntroStudioPresentationIcon src={card.url} />
              </IntroStudioPresentationCard>
            );
          })}
        </IntroStudioPresentation>
        <IntroStudioHeader>Frequently Asked Questions</IntroStudioHeader>
        {dropinfo.map((info, i) => {
          return (
            <DropDownContainer id={i}>
              <DropDownButton
                id={i}
                onClick={(e) => {
                  handleOpen(e.currentTarget.id);
                }}
              >
                {info.header}
                <DropDownIcon id={i} show={show} src={cross} alt=""/>
              </DropDownButton>
              <DropDownCard id={i} show={show}>{info.info}</DropDownCard>
            </DropDownContainer>
          );
        })}
      </IntroStudio>
    </Container>
  );
}
