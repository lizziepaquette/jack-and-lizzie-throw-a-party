import React from 'react'
import styled from 'styled-components'
// import NightSky from '../assets/photos/stock-footage-elegant-soft-shiny-dark-blue-oxford-blue-velvet-fabric-textile-abstract-fashion-interior-fabric.webm'

const SpotifyIframe = styled.iframe`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 15%;
    // height:100vh;
    // width: 100vh;
    position: fixed;
    top: 200px;
    width: 70%;
    height 55%;
`

const MyVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
`

const CursiveTxt = styled.h1`
    color: white;
    font-family: 'Allura';
    font-size: 550%;
    // letter-spacing: 2px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 150px;
    margin-right: 10%;
    margin-left: 15%;
    position: fixed;
    top: 100px;
    width: 70%;
    height 70%;
`

const NightSkyBackground = () => {
  console.log("NightSky: ", NightSky.src);
  return (
    <MyVideo className='videoTag' autoPlay loop muted>
      <source src={NightSky.src} type='video/mp4' />
    </MyVideo>
  );
}

const PageWrapper = styled.div``

const Playlist = () => (
  <PageWrapper>
    {/* <NightSkyBackground/> */}
    <CursiveTxt>
      Saturday the 27th of May
    </CursiveTxt>

    {/* <SpotifyIframe
      title="Menu"
      src="https://open.spotify.com/embed/playlist/0enlhEdYk1fU71Zzxh1n7d?utm_source=generator"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </SpotifyIframe> */}
  </PageWrapper>
)

export default Playlist
