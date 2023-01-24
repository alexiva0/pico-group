import React from 'react';
import cnCreate from 'utils/cnCreate';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/Pico-ryhma_69s.jpg";
import Image2 from "./i/Photo_666.jpg";
import './Facilities.css';

const cn = cnCreate('facilities');
const Facilities: React.FC = () => (
  <div className={cn()}>
    <ContentArea>
      <div className={cn('inner')}>
        <div className={cn('container')}>
          <Grid vAlign="center">
            <GridColumn all="6" mobile="12" tablet="12" className={cn('column', { 'no-padding': true })}>
              <div className={cn('content')}>
                <h2 className={cn('title')}>
                  Facilities
                </h2>
                <p className={cn('paragraph')}>With our offices and labs located in Micronova, Finland’s National Research Infrastructure for micro- and nanotechnology, we have immediate access to state-of-the-art nanofabrication and measurement facilities.</p>
                <p className={cn('paragraph')}>Key equipment for our group in Micronova’s cleanroom include thin film deposition in the electron beam evaporator, LEO Supra 40 Scanning Electron Microscope (SEM) with Electron Beam Lithography (EBL), a dedicated <a target="_blank" rel="noreferrer" href="https://www.raith.com/product/ebpg-plus/">Electron Beam Writer (Raith EBPG 5200+)</a> and an atomic layer deposition tool TFS500 ALD.</p>
                <p className={cn('paragraph')}>In our fourth floor lab, we have two dedicated Delvotec 53XX wire bonders for bonding samples.</p>
              </div>
            </GridColumn>
            <GridColumn all="6" mobile="12" tablet="12">
              <ImageBox image={Image1} imgAlt="Machine" />
            </GridColumn>
          </Grid>
        </div>
        <Grid vAlign="center">
          <GridColumn all="6" mobile="12" tablet="12" className={cn('column', { order: '2' })}>
            <ImageBox image={Image2} imgAlt="Two of our dilution refrigerators in the fourth floor lab." />
          </GridColumn>
          <GridColumn all="6" mobile="12" tablet="12" className={cn('column', { order: '1', 'no-padding': true })}>
            <h3 className={cn('subtitle')}>
              Low temperature experiments
            </h3>
            <div className={cn('content')}>
              <p className={cn('paragraph')}>Three 3He/4He dilution refrigerators (PDR) down to &lt; 50 mK with approximately 4 hour cool down time.</p>
              <p className={cn('paragraph')}>BlueFors 3He/4He dry dilution refrigerator, down to 15 mK temperature for high frequency experiments.</p>
              <p className={cn('paragraph')}>They are each equipped with carefully filtered signal lines for low noise measurements, and with Coulomb blockade absolute thermometry (CBT). The plastic dilution refrigerators (PDR) which are built in house provide us with fast cool down times and thus high throughput in sample characterization.</p>
            </div>
          </GridColumn>
        </Grid>
      </div>
    </ContentArea>
  </div>
);

export default Facilities;
