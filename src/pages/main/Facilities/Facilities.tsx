import React from 'react';
import cnCreate from 'utils/cnCreate';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import Image from "./i/Pico-ryhma_69s.jpeg";
import './Facilities.css';

const cn = cnCreate('facilities');
const Facilities = () => (
  <div className={cn()}>
    <ContentArea>
      <div className={cn('inner')}>
        <div className={cn('container')}>
          <Grid>
            <GridColumn all="6">
              <div className={cn('content')}>
                <h2 className={cn('title')}>
                  Facilities
                </h2>
                <p className={cn('paragraph')}>With our offices and labs located in <a href="/">Micronova</a>, Finland’s National Research Infrastructure for micro- and nanotechnology, we have immediate access to state-of-the-art nanofabrication and measurement facilities.</p>
                <p className={cn('paragraph')}>Key equipment for our group in Micronova’s cleanroom include <a href="/">thin film deposition in the electron beam evaporator</a>, <a href="/">LEO Supra 40 Scanning Electron Microscope (SEM) with Electron Beam Lithography (EBL)</a>, a dedicated <a href="/">Electron Beam Writer (Raith EBPG 5200+)</a> and an atomic layer deposition tool <a href="/">TFS500 ALD</a>.</p>
                <p className={cn('paragraph')}>In our fourth floor lab, we have two dedicated Delvotec 53XX wire bonders for bonding samples.</p>
              </div>
            </GridColumn>
            <GridColumn all="6">
              <div className={cn('video-box')}>
                <iframe className={cn("video")} title="National Research Infrastructure for Micro- and Nanotechnologies" src="http://www.youtube.com/embed/-BNgQF_anx4?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"></iframe>
              </div>
            </GridColumn>
          </Grid>
        </div>
        <Grid>
          <GridColumn all="6">
              <img src={Image} className={cn('image')} alt="Two of our dilution refrigerators in the fourth floor lab" />
              <div className={cn('footnote')}>
                Two of our dilution refrigerators in the fourth floor lab
              </div>
          </GridColumn>
          <GridColumn all="6">
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
