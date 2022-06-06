import React from 'react';
import cnCreate from 'utils/cnCreate';
import Picture from './i/Team.jpeg';
import ContentArea from 'components/ContentArea/ContentArea';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import './About.css';

const cn = cnCreate('about');
const About: React.FC = () => (
  <div className={cn()}>
    <ContentArea>
      <Grid>
        <GridColumn desktop="7">
          <img alt="team" src={Picture} className={cn('image')} />
        </GridColumn>
        <GridColumn desktop="5">
          <div className={cn('content')}>
            <h2 className={cn('title')}>About us</h2>
            <p className={cn('paragraph')}>We investigate mesoscopic physics and its sensor applications. The{'\u00A0'}main{'\u00A0'}focus is on charge transport and thermal properties of metallic, superconducting and hybrid nanostructures.</p>
            <p className={cn('paragraph')}>Particular research topics include electronic thermometry and refrigeration, nonequilibrium effects, Josephson devices, quantized and coherent charge pumping, noise, fluctuations and full counting statistics of{'\u00A0'}charge and heat transport. Samples and devices are fabricated in the{'\u00A0'}clean room of{'\u00A0'}the{'\u00A0'}Micronova centre for micro and nanotechnology.</p>
            <p className={cn('paragraph')}>We perform our low-temperature experiments (10 mK – 4 K) in our{'\u00A0'}laboratory in the Micronova building, jointly run by{'\u00A0'}Aalto University.</p>
          </div>
        </GridColumn>
      </Grid>
    </ContentArea>
  </div>
);

export default About;
