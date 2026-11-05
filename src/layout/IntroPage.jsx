import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import cross from "../assets/icons-intro-page/cross.svg";
import TrendingSwiper from "../swiper-components/TrendingSwiper";
import responsive from "../assets/icons-intro-page/responsive.svg";
import trailer from "../assets/icons-intro-page/trailer.svg";
import mobileNav from "../assets/icons-intro-page/mobile-nav.svg";
import categories from "../assets/icons-intro-page/categories.svg";
import Banner from "../sub-components-intro-page/Banner";
import BannerContent from "../sub-components-intro-page/BannerContent";
import BannerH1 from "../sub-components-intro-page/BannerH1";
import BannerH2 from "../sub-components-intro-page/BannerH2";
import BannerH3 from "../sub-components-intro-page/BannerH3";
import GetStartedButton from "../sub-components-intro-page/GetStartedButton";
import BannerTopBar from "../sub-components-intro-page/BannerTopBar";
import Logo from "../sub-components-general/Logo";
import HeroRow from "../sub-components-intro-page/HeroRow";
import HeroSpotlight from "../sub-components-intro-page/HeroSpotlight";
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
import { faqItems } from "../data/faq";

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
  background: #0b0506;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const presentation = [
  {
    header: "Responsive layout",
    info: "Adapts from large desktop screens down to phones.",
    url: `${responsive}`,
  },
  {
    header: "Trailer previews",
    info: "Pick a movie to change the backdrop and open its trailer.",
    url: `${trailer}`,
  },
  {
    header: "Mobile navigation",
    info: "A bottom bar and compact header on small screens.",
    url: `${mobileNav}`,
  },
  {
    header: "Category browsing",
    info: "Swipe through trending titles and genres.",
    url: `${categories}`,
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
        <HeroRow>
          <BannerContent>
            <BannerH2>A movie-browsing UI demo</BannerH2>
            <BannerH1>StreamFlow</BannerH1>
            <BannerH3>
              A front-end portfolio project built with React. Browse titles and
              watch trailers.
            </BannerH3>
            <GetStartedButton
              id="dashboard"
              onClick={(e) => {
                handleClick(e.target.id);
              }}
            >
              Enter Demo
            </GetStartedButton>
          </BannerContent>
          <HeroSpotlight />
        </HeroRow>
      </Banner>
      <IntroStudio>
        <IntroBackground />
        <IntroStudioHeader>Popular picks</IntroStudioHeader>
        <TrendingSwiper />
        <IntroStudioHeader>Features</IntroStudioHeader>
        <IntroStudioPresentation>
          {presentation.map((card) => {
            return (
              <IntroStudioPresentationCard>
                <IntroStudioPresentationIcon src={card.url} />
                <h2>{card.header}</h2>
                <IntroStudioPresentationParagraph>
                  {card.info}
                </IntroStudioPresentationParagraph>
              </IntroStudioPresentationCard>
            );
          })}
        </IntroStudioPresentation>
        <IntroStudioHeader>Frequently Asked Questions</IntroStudioHeader>
        {faqItems.map((info, i) => {
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
