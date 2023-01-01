import React from 'react';
import { DashboardCharts } from '../components/DashboardCharts';
import { SingleSection } from '../components/SingleSection';
import { SingleTaskSection } from '../components/SingleTaskSection';

export const Home = () => {
  return (
    <div className='page-wrapper'>
      <h2>Контролна табла</h2>
      <div className='home-container'>
        <SingleSection title='Следећи задаци'>
          <SingleTaskSection
            sectionTag='Кукуруз'
            sectionInfo='Предстоји заливање на површини 3'
            sectionTime='3 дана'
            delay={false}
          />
          <SingleTaskSection
            sectionTag='Пшеница'
            sectionInfo='Каснимо са ђубрењем површине 5'
            sectionTime='1 дан'
            delay={true}
          />
        </SingleSection>
        <SingleSection title='Површине'>
          <DashboardCharts />
        </SingleSection>
        <SingleSection title='Следећи задаци'>
          <SingleTaskSection
            sectionTag='Кукуруз'
            sectionInfo='Инфо инфо инфо инфо инфо инфо'
            sectionTime='3 дана'
            delay={false}
          />
          <SingleTaskSection
            sectionTag='Кукуруз'
            sectionInfo='Инфо инфо инфо инфо инфо инфо'
            sectionTime='3 дана'
            delay={true}
          />
        </SingleSection>
        <SingleSection title='Следећи задаци'>
          <SingleTaskSection
            sectionTag='Кукуруз'
            sectionInfo='Инфо инфо инфо инфо инфо инфо'
            sectionTime='3 дана'
            delay={false}
          />
          <SingleTaskSection
            sectionTag='Кукуруз'
            sectionInfo='Инфо инфо инфо инфо инфо инфо'
            sectionTime='3 дана'
            delay={true}
          />
        </SingleSection>
      </div>
    </div>
  );
};
