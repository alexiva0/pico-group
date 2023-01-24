import React from 'react';
import cnCreate from 'utils/cnCreate';
import Picture from './i/Team.jpg';
import ContentArea from 'components/ContentArea/ContentArea';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ImageBox from 'components/ImageBox/ImageBox';
import './About.css';

const cn = cnCreate('about');
const About: React.FC = () => (
  <div className={cn()}>
    <ContentArea>
      <Grid vAlign="center">
        <GridColumn desktop="7">
        <ImageBox image={Picture} imgAlt="Pico-group in March 2020. From the left: Rishabh Upadhyay, George Thomas, Olivier Maillet, Florian Blanchet, Dmitry Golubev, Marco Marin Suarez, Joonas Peltonen, Bayan Karimi, Jukka Pekola, Yu-Cheng Chang, Elsa Mannila, Azat Gubaydullin, Elena Egorova, Diego Subero, Danial Majidi." />
        </GridColumn>
        <GridColumn desktop="5">
          <div className={cn('content')}>
            <h2 className={cn('title')}>About us</h2>
            <p className={cn('paragraph')}>We investigate mesoscopic physics and its sensor applications. The{'\u00A0'}main{'\u00A0'}focus is on charge transport and thermal properties of metallic, superconducting and hybrid nanostructures.</p>
            <p className={cn('paragraph')}>Particular research topics include electronic thermometry and refrigeration, nonequilibrium effects, Josephson devices, quantized and coherent charge pumping, noise, fluctuations and full counting statistics of{'\u00A0'}charge and heat transport. Samples and devices are fabricated in the{'\u00A0'}clean room of{'\u00A0'}the{'\u00A0'}Micronova centre for micro and nanotechnology.</p>
          </div>
        </GridColumn>
      </Grid>
    </ContentArea>
  </div>
);

export default About;
