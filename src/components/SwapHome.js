import React from 'react'
import styled from 'styled-components'
import clipArtSwapPhoto from '../assets/swapparty/clip-art-swap.jpeg'
import swapBackground from '../assets/swapparty/swapguy.webp'
import locationPng from '../assets/swapparty/partiful-location.png'
import crownPng from '../assets/swapparty/partiful-crown.png'
import SwapPartifulLogo from '../assets/swapparty/swap-partiful.png'

const SwapHeader = styled.h1`
  font-size: 61px;
  margin: 0px;
  font-weight: 400;
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;

  @media screen and (max-width: 720px) {
    font-size: 39px;
  }
`

const SwapPartifulLogoImg = styled.img`
  text-align: left;
`;

const SwapWrapper = styled.div`
  color: white;
  padding: 20px 30px 30px 20px;
  background: url(https://assets.getpartiful.com/backgrounds/forest/web.jpg), linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(16, 33, 21) 0%, rgb(61, 132, 73) 38%, rgb(32, 69, 43) 100%);
  //text-align: center;
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;
`

const SwapPartyArt = styled.img`
  width: 90%;
  aspect-ratio: 1 / 1;
  padding: 10px 0px;
`

const EventDetails = styled.div`
  text-align: left;
  color: #ffffff99;
  padding-right: 25px;
`;

const StartTime = styled.div`
  font-size: 22px;
  @media screen and (max-width: 720px) {
      font-size: 20px;
  }
`;

const DateHeader = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: white;
  @media screen and (max-width: 720px) {
      font-size: 28px;
  }
`;

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`

const HostingInfoWrapper = styled.div`
  margin: 30px 0px;
`

const HostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
`

const LocationIcon = styled.img`
  height: 20px;
  width: 20px;
  // padding: 10px 0px;
  margin-right: 10px;
  opacity: 0.5;
`
const CrownIcon = styled.img`
  height: 20px;
  width: 20px;
  opacity: 0.5;
  // padding: 10px 0px;
  margin-right: 10px;
`

const SwapHome = () => {
  return <PageWrapper className="App">
      <SwapWrapper bgImg={ swapBackground } >
        <div style={{ textAlign: 'left' }}>
          <a href="#">
            <SwapPartifulLogoImg width='150px' src={SwapPartifulLogo.src} />
         </a>
        </div>
        <div style={{ padding: '0px 15px', textAlign: 'center'}}>
          <SwapHeader>Swap Meet: A Spring Cleaning Party</SwapHeader>
          <SwapPartyArt src={ clipArtSwapPhoto.src }></SwapPartyArt>
          <EventDetails>
            <DateHeader>Saturday, Feb 10</DateHeader>
            <StartTime>3:30 pm PST</StartTime>
            <HostingInfoWrapper>
              <HostInfo>
                <CrownIcon src={ crownPng.src } />
                <span>Hosted by Jack & Lizzie Throw Parties, Inc.</span>
              </HostInfo>
              <LocationInfo>
                <LocationIcon src={ locationPng.src } />
                <span>5110 Telegraph Ave. Unit 222 Oakland, CA 94609</span>
              </LocationInfo>
            </HostingInfoWrapper>
            <div>
                
                Welcome to the latest innovative event in the Bay! Swap clothes, fun trinkets, miscellaneous artifacts, and even a few kisses &#128521;
                <br></br>
                <br></br>
                It takes two to tango and even more to party, so we highly encourage you to bring additional friends with stuff along with you! 

                Take as few or as many items as you want. We will experiment with the swapping structure throughout the night.  
                <br></br>
                <br></br>
                Dresses will be flowing and so will the drinks, as this is a party, first and foremost! Light snacks will be present and we can order food as well. You are welcome to bring any additional drinks or snacks you may desire! 

            </div>
          </EventDetails>
        </div>
      </SwapWrapper>
    </PageWrapper>
}

export default SwapHome;