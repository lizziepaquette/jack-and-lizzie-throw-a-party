import React from 'react';
import styled from 'styled-components'

const JacksTwentyNinthBday = () => {
  const scheduleItems = [
    {
      header: <>3 - 4:30pm: <a href='https://www.sfmoma.org/exhibition/ragnar-kjartansson-the-visitors/' target='_blank' rel='noopener noreferrer'>The Visitors @ SFMoma</a></>,
      description: "Ever since I first saw The Visitors a year ago, I've wanted to take it in again with friends. We'll try to get to the museum for 3 so that we can catch the 3:35 showing."
    },
    {
      header: <>5:15pm - 8pm: Deep Chill @ <a href='https://maps.app.goo.gl/VwCDp1mChTQXLz8a7' target='_blank' rel='noopener noreferrer'>Bernard&apos;s</a></>,
      description: "Bernard has been kind enough to open up his home to us. It's the perfect cozy space for each of us to rest however we like, have some coffee/tea/dinner, and gear up for a night out. Address is linked above - Message me if you're planning on coming and I'll provide unit access info!"
    },
    {
      header: <><h3>8:15pm - 11pm: Natural Wines @ <a href='https://maps.app.goo.gl/qJ3vYjHr2tA5ar299' target='_blank' rel='noopener noreferrer'>Ruby Wine</a></h3></>,
      description: "Perhaps no place I'd rather enjoy natural wine than Ruby :-) We'll aim to get there just in time to catch the sun setting on Portrero Hill and let the wine flow from there!"
    },
    {
      header: <><h3>11:30pm - late: <a href='https://www.instagram.com/p/C6wZp0vxq0s/?hl=en' target='_blank' rel='noopener noreferrer'>Soulful House @ Bar Part Time</a> or <a href='https://ra.co/events/1919543'>Deep South House @ F8</a> or <a href='https://ra.co/events/1901002'>Cyber1A Jungle Set @ Public Works</a></h3></>,
      description: "These are all very good options and I think we'll decide night of. My hunch is that we'll go to F8 if we want more of a focus on the set itself, and we'll go to BPT if we want to stay centered on natural wine and hanging."
    }
  ];
  return (
    <PageWrapper>
      <h1>Jack&apos;s 29th Birthday Party</h1>
      <AgendaWrapper>
        <h2>Theme: Gems and Jewels</h2>
        <ItalicDescription>
          In the spirit of my new nose piercing and all the human gems I&apos;m surrounded by! Jewel tones, actual gems or jewels, clothes that make you feel like a gem, etc. - it all works!
        </ItalicDescription>
        <h2>Schedule:</h2>
        <ScheduleItemsWrapper>
          {
            scheduleItems.map(
              si => (
                <>
                  <h3>{si.header}</h3>
                  <ItalicDescription>
                    {si.description}
                  </ItalicDescription>
                </>
              )
            )
          }
        </ScheduleItemsWrapper>
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

const ScheduleItemsWrapper = styled.div`
  padding-left: 15px;
`;

const ItalicDescription = styled.div`
  font-style: italic;
`;

export default JacksTwentyNinthBday;