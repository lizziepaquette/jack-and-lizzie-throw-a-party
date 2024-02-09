import React from "react"
import scriptLoader from "react-async-script-loader";
import RepoCard from "react-repo-card";
import Clouds from '../assets/photos/clouds.mp4';
import styled from 'styled-components';
import SwapPartifulLogo from '../assets/swapparty/swap-partiful.png'

const SwapPartifulLogoImg = styled.img`
  text-align: left;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 0px;
  padding-top: 20px;
  filter: invert(0%);
  > a {
    opacity: 80%;
    cursor: pointer;
    &:hover {
      opacity: 150%;
      > img {
         width: 150%;
      }
    }
  }
`;

const PartifulBackground = styled.div`
  color: white;
    // object-fit: cover;
  background-repeat: repeat;
  // width: 100vw;
   height: 200vh;
  //position: fixed;
  //top: 0;
  //left: 0;
//   padding: 20px 0px 30px 20px;
  background: url(https://assets.getpartiful.com/backgrounds/aquatica/web.jpg), linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(16, 33, 21) 0%, rgb(61, 132, 73) 38%, rgb(32, 69, 43) 100%);
  font-family: "Space Grotesk", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 400px;
  overflow: visible;
`;

const CardDiv = styled.div`
    float: left;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    color: white;
    -webkit-text-stroke: 1px gray;
    margin: 5%;
`;

const Title = styled.div`
    // text-transform: uppercase;
   font-family: "Space Grotesk", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 44px;
  font-weight: 500px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 12px;
    position: relative;
    -webkit-text-stroke: 1px gray;
    text-align: center;
`;

const InfoSection = ({ title, content }) => {
    return (
        <CardDiv>
            <h4>{ title }</h4>
            { content }
        </CardDiv>
    );
}

// https://stackoverflow.com/questions/2603700/how-to-align-3-divs-left-center-right-inside-another-div
const InfoWrapper = styled.div`
  display: flex;                  /* establish flex container */
  flex-direction: row;            /* default value; can be omitted */
  flex-wrap: wrap;
//   justify-content: flex-start
  justify-content: center;
  mergin-left: 5px;
  width: 100%;

//     // @media only screen and (max-width: 600px) {
//     //     padding: 1% 25px 1% 100px;
//     // }
`;

//https://github.co  m/lepture/github-cards
const Jobs = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    // window.AirbnbAPI.bootstrap();
  } else {
      console.log("whyyyyy not")
  }

    const infoSectionProps = [
            {
                title: "Lizzie Paquette",
                content: <div className="github-card" data-github="lizziepaquette" data-width="300" data-height="" data-theme="default"></div>
            },
            {
                title: "Jack Ricci",
                content:  <div className="github-card" data-github="justjack555" data-width="300" data-height="" data-theme="default"></div>
            },
            {
                title: "Github Repository",
                content: <div className="github-card" data-github="lizziepaquette/jack-and-lizzie-throw-a-party" data-width="300" data-height="" data-theme="default"></div>

            }
        ];
        return (
            <div>
            <PartifulBackground>
            <div style={{ textAlign: 'left' }}>
                <a href="#/">
                <SwapPartifulLogoImg width='150px' src={SwapPartifulLogo} />
                </a>
            </div>

            <Title> <br/> Meet the Developers </Title>
            <InfoWrapper>
                { infoSectionProps.map(sec => <InfoSection { ...sec } /> ) }
            </InfoWrapper>
            </PartifulBackground>
            </div>
        );
}

export default scriptLoader(["//cdn.jsdelivr.net/github-cards/latest/widget.js"]) (Jobs);