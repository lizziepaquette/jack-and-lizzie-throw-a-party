import React from 'react'
import styled from 'styled-components'
import clipArtSwapPhoto from '../assets/swapparty/clip-art-swap.jpeg'
import swapBackground from '../assets/swapparty/swapguy.webp'
import locationPng from '../assets/swapparty/partiful-location.png'
import crownPng from '../assets/swapparty/partiful-crown.png'

const SwapHeader = styled.h1`
  font-size: 61px;
  margin: 0px;
  font-weight: 400;
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;

  @media screen and (max-width: 720px) {
    font-size: 39px;
  }
`

const SwapWrapper = styled.div`
  color: white;
  padding: 75px 0px 30px 75px;
  background: url(https://assets.getpartiful.com/backgrounds/forest/web.jpg), linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(16, 33, 21) 0%, rgb(61, 132, 73) 38%, rgb(32, 69, 43) 100%);
  text-align: center;
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;
`

const SwapPartyArt = styled.img`
  width: 75%;
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

const ItineraryList = styled.ol`
  padding-left: 20px;
`;

const SwapHome = () => {
  return <PageWrapper className="App">
      <SwapWrapper bgImg={ swapBackground } >
        <SwapHeader><span>Stuff Swap: A Spring Cleaning Party</span></SwapHeader>
        <SwapPartyArt src={ clipArtSwapPhoto }></SwapPartyArt>
        <EventDetails>
          <DateHeader>Saturday, Feb 17</DateHeader>
          <StartTime>3:30 pm PST</StartTime>
          <HostingInfoWrapper>
            <HostInfo>
              <CrownIcon src={ crownPng } />
              <span>Hosted by Jack & Lizzie Throw Parties, Inc.</span>
            </HostInfo>
            <LocationInfo>
              <LocationIcon src={ locationPng } />
              <span>5110 Telegraph Ave. Unit 222 Oakland, CA 94609</span>
            </LocationInfo>
          </HostingInfoWrapper>
          <div>
            <ItineraryList>
              <li>Bring stuff (clothes, accessories, furniture, whatever!) that you no longer want</li>
              <li>We set you up with a station to display said stuff</li>
              <li>Friends roaming around will ask if they can have some of your stuff</li>
              <li>You&apos;ll roam around and ask other friends if you can have some of their stuff</li>
              <br></br>
            </ItineraryList>
            <p>We&apos;ll have drinks on hand but of course BYOB if there&apos;s anything you&apos;d like to drink!
              We&apos;ll also probably order in food at some point. Open invite so bring any friends that want to swap some stuff!
            </p>
          </div>
        </EventDetails>
      </SwapWrapper>
    </PageWrapper>
}

export default SwapHome;