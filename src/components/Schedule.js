import React from 'react'
import LightBlueVelvet from '../assets/photos/light-blue-velvet.jpg'
import styled from 'styled-components'


const InfoSection = ({ title, content }) => {
  return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
  )
}

const InfoWrapper = styled.div`
    color: white;
    padding: 70px 5% 5% 35px;
    background-image: url(${LightBlueVelvet});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
`

const Bdiv = styled.div`

`

const Schedule = () => {
  const infoSectionProps = [
    {
      title: '2pm - 4pm: The Coffee Movement',
      content: <div>
        <div>
          One Saturday this past December, I went down the rabbit hole that is the US Coffee Championships. What did I find?
          One of 2022&apos;s Barista finalists owned a shop in SF!!<br /><br /> Their shop in the Richmond is beautiful, they get their beans
          from some of the world&apos;s best roasters, and if you tell the owner that you loved your coffee, he may respond with, &quot;You deserve it&quot;...
          Self-love highly encouraged!
        </div>
      </div>
    },
    {
      title: '4:15pm - 6:30pm: Roosevelt & Edison Escape Rooms @ Palace Games',
      content: <div>
            <div>
              Our Escape Room-designing friend Matthew Stein doesn&apos;t just hand out room recommendations, but Palace Games&apos; rooms were one of the
              3 places in the Bay that he touted! <br /><br /> Each room fits 4-8 solvers, so we&apos;ll divide up and have some fun!
            </div>
        </div>
    },
    {
      title: '6:45pm - 8:15pm: Pollo a la Brasa from Jaranitas',
      content: <div>
            <div>
              May tweak this but... we&apos;ll step out of our escape rooms and into the lovely Palace of Fine Arts, toss down some park blankets on the grass, get
              Pollo a la Brasa (Peruvian roasted chicken) delivered from Jaranitas, break open beverages of our chosing, and recharge while the sun sets over the Golden Gate.
            </div>
        </div>
    },
    {
      title: '9pm - Whenever: Bar Part Time',
      content: <div>
            <div>
              The natural wine... The dj sets... The fog... The disco ball...<br /><br />
              <strong>WE ALL KNEW IT WAS COMING BUT I STILL WANT IT, DAMMIT!!</strong>
            </div>
        </div>
    }
  ]
  return (
        <InfoWrapper>
            { infoSectionProps.map(sec => <InfoSection { ...sec } />) }
        </InfoWrapper>
  )
}

export default Schedule