import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import cross from "../assets/icons-intro-page/cross.svg";
import TrendingSwiper from "../swiper-components/TrendingSwiper";
import download from "../assets/icons-intro-page/download.svg";
import kids from "../assets/icons-intro-page/kids.svg";
import tele from "../assets/icons-intro-page/television.svg";
import mobile from "../assets/icons-intro-page/mobile.svg";
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
import IntroBackground from "../sub-components-intro-page/Introbackground.jsx";

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

const DemoBanner = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid #628eff;
`;

const dropinfo = [
  {
    header: "What is StreamFlow",
    info: "StreamFlow is a front-end portfolio project: a responsive UI for browsing movies and watching their trailers. It is not a real streaming service.",
  },
  {
    header: "Do I need an account",
    info: "No. There are no accounts, sign-ups or payments. Click \"Enter Demo\" to go straight to the movie browser.",
  },
  {
    header: "Where do the trailers come from",
    info: "Trailers are embedded YouTube videos. No movies are hosted or streamed by this project.",
  },
  {
    header: "What was it built with",
    info: "React, styled-components, React Router and Swiper, with a responsive layout for desktop, tablet and mobile.",
  },
];
const presentation = [
  {
    header: "Responsive layout",
    info: "Adapts from large desktop screens down to phones.",
    url: `${tele}`,
  },
  {
    header: "Trailer previews",
    info: "Pick a movie to change the backdrop and open its trailer.",
    url: `${download}`,
  },
  {
    header: "Mobile navigation",
    info: "A bottom bar and compact header on small screens.",
    url: `${mobile}`,
  },
  {
    header: "Category browsing",
    info: "Swipe through trending titles and genres.",
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
      <DemoBanner>
        Portfolio demo project — not a real streaming service. No accounts,
        no sign-up, no payments.
      </DemoBanner>
      <Banner>
        <BannerTopBar>
          <Logo type="Banner" src={logo} alt="" />
        </BannerTopBar>
        <BannerContent>
          <BannerH1>StreamFlow</BannerH1>
          <BannerH2>A movie-browsing UI demo</BannerH2>
          <BannerH3>
            A front-end portfolio project built with React. Browse titles and
            watch trailers.
          </BannerH3>
        </BannerContent>
        <GetStartedButton
          id="dashboard"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          Enter Demo
        </GetStartedButton>
      </Banner>
      <BannerBottom />
      <IntroStudio>
        <IntroBackground />
        <IntroStudioHeader>Trending Now</IntroStudioHeader>
        <TrendingSwiper />
        <IntroStudioHeader>Features</IntroStudioHeader>
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
                <DropDownIcon id={i} show={show} src={cross} alt="" />
              </DropDownButton>
              <DropDownCard id={i} show={show}>
                {info.info}
              </DropDownCard>
            </DropDownContainer>
          );
        })}
      </IntroStudio>
    </Container>
  );
}
