import React from 'react';
import styled from 'styled-components'

const JacksTwentyNinthBday = () => {
  const scheduleItems = [
    {
      header: <>3 - 4:30pm: <a href='https://www.sfmoma.org/exhibition/ragnar-kjartansson-the-visitors/' target='_blank' rel='noopener noreferrer'>The Visitors @ SFMoma</a></>,
      description: "Ever since I first saw The Visitors a year ago, I've wanted to take it in again with friends. We'll try to get to the museum for 3 so that we can catch the 3:35 showing. No need to buy tickets in advance - we get access to The Visitors as part of an SF MoMA day pass so we can purchase on arrival!"
    },
    {
      header: <>5:15pm - 8pm: Deep Chill @ <a href='https://maps.app.goo.gl/VwCDp1mChTQXLz8a7' target='_blank' rel='noopener noreferrer'>Bernard&apos;s</a></>,
      description: "Bernard has been kind enough to open up his home to us. It's the perfect cozy space for each of us to rest however we like, have some coffee/tea/dinner, and gear up for a night out. Address is linked above - when you arrive, ring the intercom for APT 108 and Bernard will let you in!"
    },
    {
      header: <><h3>8:15pm - 11pm: Natural Wines @ <a href='https://rubywinesf.com' target='_blank' rel='noopener noreferrer'>Ruby Wine</a></h3></>,
      description: "Perhaps no place I'd rather enjoy natural wine than Ruby :-) We'll aim to get there just in time to catch the sun setting on Portrero Hill and let the wine flow from there! Bring a jacket as the inside is tiny and we'll certainly be outside in their parklet."
    },
    {
      header: <><h3>11:30pm - late: <a href='https://ra.co/events/1925941' target='_blank' rel='noopener noreferrer'>Move D @ Monarch</a> or <a href='https://www.instagram.com/p/C6wZp0vxq0s/?hl=en' target='_blank' rel='noopener noreferrer'>Soulful House @ Bar Part Time</a> or <a href='https://ra.co/events/1919543' target='_blank' rel='noopener noreferrer'>Deep South House @ F8</a> or <a href='https://ra.co/events/1901002' target='_blank' rel='noopener noreferrer'>Cyber1A Jungle Set @ Public Works</a></h3></>,
      description: "These are all very good options and I think we'll decide night of. I'm leaning toward Move D @ Monarch, but we all know I find BPT irresistable..."
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