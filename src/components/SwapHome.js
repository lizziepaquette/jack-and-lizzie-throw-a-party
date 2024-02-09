import React from 'react'
import styled from 'styled-components'
import clipArtSwapPhoto from '../assets/swapparty/clip-art-swap.jpeg'
import swapBackground from '../assets/swapparty/swapguy.webp'
import locationPng from '../assets/swapparty/partiful-location.png'
import crownPng from '../assets/swapparty/partiful-crown.png'

const SwapHeader = styled.h1`
  font-size: 61px;
  text-shadow: -1px 0 SkyBlue, 0 1px DarkGreen, 1px 0 LightSalmon, 0 -1px DarkGreen;
  margin: 0px;
  font-weight: 400;
  text-transform: uppercase;
  // font-family: 'Montserrat', sans-serif;
    text-align: center;
  color: white;
  font-family: Syne,Avant Garde,Tahoma,Verdana,sans-serif;
    z-index: 3;

`

const SwapWrapper = styled.div`
  padding: 75px 0px 30px 75px;
  background: url(https://assets.getpartiful.com/backgrounds/forest/web.jpg), linear-gradient(0deg, rgb(2, 0, 36) 0%, rgb(16, 33, 21) 0%, rgb(61, 132, 73) 38%, rgb(32, 69, 43) 100%);
  background-repeat: repeat-y;
  animation: slide 10s infinite;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 3;
`

const SwapPartyArt = styled.img`
  width: 75%;
  aspect-ratio: 1 / 1;
  padding: 10px 0px;

`

const EventDetails = styled.div`
  text-align: left;
  color: #ffffff99;
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
  @media screen and (max-width: 768px) {};
  @keyframes slide {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-70%);
    }
  }
  overflow: hidden;
}
`

const HostingInfoWrapper = styled.div`
  margin: 30px 0px;
`

const HostInfo = styled.div`
  display: flex;
  align-items: center;
`

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
`

const SwapHome = () => {
  return <div> <PageWrapper className="App">
        <SwapHeader>Stuff Swap: A Spring Cleaning Party</SwapHeader>
        <SwapPartyArt src={ clipArtSwapPhoto }></SwapPartyArt>
        <EventDetails>
          <DateHeader>Saturday, Feb 17</DateHeader>
          <StartTime>3:30 pm PST</StartTime>
          <HostingInfoWrapper>
            <HostInfo>
              <img />
              <span>Hosted by Jack & Lizzie Throw Parties, Inc.</span>
            </HostInfo>
            <LocationInfo>
              <img />
              <span>5110 Telegraph Ave. Unit 222 Oakland, CA 94609</span>
            </LocationInfo>
          </HostingInfoWrapper>
          <div>
            <h2>What:</h2>
            <ol>
              <li>Bring stuff (clothes, accessories, furniture, whatever!) that you no longer want</li>
              <li>We set you up with a station to display said stuff</li>
              <li>Friends roaming around will ask if they can have some of your stuff</li>
              <li>You&apos;ll roam around and ask other friends if you can have some of their stuff</li>
              <br></br>
            </ol>
            <p>We&apos;ll have drinks on hand but of course BYOB if there&apos;s anything you&apos;d like to drink!
              We&apos;ll also probably order in food at some point. Open invite so bring any friends that want to swap some stuff!
            </p>
          </div>
          <div>
            <h2>Where:</h2>
            <img src={ locationPng } />
            <img src={ crownPng } />
            <h3>
              5110 Telegraph Ave. <br></br>
              Unit 222 <br></br>
              Oakland, CA 94609
            </h3>
          </div>
          <div>
            <h2>When:</h2>
            <h3 style={{ marginBottom: '0px' }}>
              Saturday Feb. 10, 2024 <br></br>
              3 pm PST til whenever
            </h3>
          </div>
        </EventDetails>
      {/* </SwapWrapper> */}

    </PageWrapper>
                <SwapWrapper bgImg={ swapBackground }/>
</div>
}

export default SwapHome;