import React from 'react';
import styled from 'styled-components'

const JacksTwentyNinthBday = () => {
  return (
    <PageWrapper>
      <h1>Jack&apos;s 29th Birthday Party</h1>
      <AgendaWrapper>
        <h2>Theme: Gems and Jewels</h2>
        <h2>Schedule:</h2>
        <ul>
          <li>3:30pm - 4:30pm: <a href='https://www.sfmoma.org/exhibition/ragnar-kjartansson-the-visitors/' target='_blank' rel='noopener noreferrer'>The Visitors @ SFMoma</a></li>
          <li>5:30pm - 8pm: Deep Chill @ Bernard&apos;s</li>
          <li>8:15pm - 11pm: Natural Wines @ Ruby Wine</li>
          <li>11:30pm - late: <a href='https://ra.co/events/1919543' target='_blank' rel='noopener noreferrer'>Soulful House @ Bar Part Time</a> or <a href='https://ra.co/events/1919543'>Deep South House @ F8</a> or Cyber1A Jungle Set @ Public Works </li>
        </ul>
      </AgendaWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
`;

const AgendaWrapper = styled.div`
  text-align: left;
  margin: 15px;
`;

export default JacksTwentyNinthBday;