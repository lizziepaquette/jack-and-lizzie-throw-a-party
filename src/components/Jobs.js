import React from "react"
import scriptLoader from "react-async-script-loader";
import RepoCard from "react-repo-card";
import Clouds from '../assets/photos/clouds.mp4';
import styled from 'styled-components';


const MyVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;


const PartifulBackground = styled.div`
  color: white;
    object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
//   padding: 20px 0px 30px 20px;
  background: url(https://assets.getpartiful.com/backgrounds/aquatica/web.jpg), linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(16, 33, 21) 0%, rgb(61, 132, 73) 38%, rgb(32, 69, 43) 100%);
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;
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
    font-size: 2.5em;
    font-weight: 600;
    text-transform: uppercase;
    // letter-spacing: 3px;
    // font-family: 'Montserrat', sans-serif;
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
            <h1>{ title }</h1>
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
//     font-weight: 500;
//     text-transform: uppercase;
//     // letter-spacing: 3px;
//     font-family: 'Montserrat', sans-serif;

//     // @media only screen and (max-width: 600px) {
//     //     padding: 1% 25px 1% 100px;
//     // }
`;

//https://github.com/lepture/github-cards
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
            <Title> <br/> Meet the Developers </Title>
            <InfoWrapper>
                { infoSectionProps.map(sec => <InfoSection { ...sec } /> ) }
            </InfoWrapper>
            </PartifulBackground>
            </div>
        );
}

export default scriptLoader(["//cdn.jsdelivr.net/github-cards/latest/widget.js"]) (Jobs);