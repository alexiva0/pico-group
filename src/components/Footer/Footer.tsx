import React from 'react';
import cnCreate from 'utils/cnCreate';
import { NavLink } from 'react-router-dom';
import useAppContext from 'hooks/useAppContext';
import ContentArea from 'components/ContentArea/ContentArea';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import './Footer.css';

const cn = cnCreate('footer');
const Footer: React.FC = () => {
  const { isMobile } = useAppContext();

  const renderCopyright = () => (
    <p className={cn('copyright')}>© 2017-2021</p>
  );

  return (
    <footer className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <Grid>
            <GridColumn all="8" tablet="6" mobile="12">
              <div className={cn('wrap')}>
                <NavLink to="/" className={cn('logo')}>PICO</NavLink>
                {!isMobile && renderCopyright()}
              </div>
            </GridColumn>
            <GridColumn all="4" tablet="6" mobile="12">
              <a href="mailto: jukka.pekola@aalto.fi" className={cn('info', { email: true })}>
                <svg width="30" height="30" viewBox="0 0 30 30" className={cn('icon')}>
                  <path d="M25.7148 6H4.28516C3.02258 6 2 6.97558 2 8.16667V21.1667C2 22.3648 3.0301 23.3333 4.28516 23.3333H25.7148C26.9669 23.3333 28 22.3689 28 21.1667V8.16667C28 6.9777 26.9815 6 25.7148 6ZM25.3948 7.44444C24.9279 7.88476 16.8933 15.4627 16.6159 15.7243C16.1842 16.1336 15.6104 16.3589 15 16.3589C14.3896 16.3589 13.8158 16.1335 13.3827 15.723C13.1961 15.547 5.25015 8.05275 4.60518 7.44444H25.3948ZM3.52344 20.8727V8.46157L10.1066 14.6705L3.52344 20.8727ZM4.60614 21.8889L11.1867 15.6892L12.3069 16.7457C13.0263 17.4278 13.9827 17.8034 15 17.8034C16.0173 17.8034 16.9737 17.4278 17.6917 16.7471L18.8133 15.6892L25.3939 21.8889H4.60614ZM26.4766 20.8727L19.8934 14.6705L26.4766 8.46157V20.8727Z" fill="#E7E7E7"/>
                </svg>
                <p className={cn('text')}>jukka.pekola@aalto.fi</p>
              </a>
              <div className={cn('info')}>
                <svg width="30" height="30" viewBox="0 0 30 30" className={cn('icon')}>
                  <path d="M7.26878 19.1308C9.84295 21.992 12.9417 24.2446 16.4784 25.8386C17.825 26.432 19.6258 27.1359 21.6322 27.2566C21.7566 27.2616 21.8755 27.2667 21.9999 27.2667C23.3465 27.2667 24.4281 26.8342 25.3096 25.9442C25.315 25.9392 25.3258 25.9291 25.3312 25.9191C25.6448 25.5671 26.0018 25.2503 26.3749 24.9134C26.6291 24.6871 26.8887 24.4508 27.1374 24.2094C28.2893 23.0932 28.2893 21.6752 27.1266 20.5941L23.8765 17.5721C23.3249 17.0391 22.6651 16.7575 21.9729 16.7575C21.2807 16.7575 20.6155 17.0391 20.0477 17.567L18.1116 19.3672C17.9332 19.2716 17.7493 19.1862 17.5763 19.1057C17.3599 19.0051 17.1598 18.9096 16.9814 18.804C15.2184 17.7631 13.6177 16.4055 12.0872 14.6607C11.3139 13.7505 10.7947 12.9862 10.4324 12.2069C10.9408 11.7794 11.4166 11.3319 11.8763 10.8945C12.0386 10.7386 12.2062 10.5827 12.3738 10.4268C12.9579 9.88377 13.2716 9.25523 13.2716 8.61663C13.2716 7.97804 12.9633 7.3495 12.3738 6.80644L10.7623 5.308C10.573 5.13201 10.3946 4.96104 10.2107 4.78505C9.85376 4.44313 9.48062 4.09115 9.11288 3.77436C8.55586 3.2665 7.90151 3 7.2093 3C6.52249 3 5.86273 3.2665 5.28408 3.77939L3.26152 5.65998C2.52605 6.34383 2.10964 7.1735 2.02311 8.13391C1.92036 9.33568 2.15831 10.6129 2.77481 12.1566C3.7212 14.545 5.14888 16.7625 7.26878 19.1308ZM3.34264 8.23951C3.40754 7.57074 3.68334 7.0126 4.2025 6.52988L6.21424 4.65935C6.5279 4.37776 6.87401 4.23194 7.2093 4.23194C7.53918 4.23194 7.87447 4.37776 8.18272 4.6694C8.54505 4.98116 8.88575 5.308 9.25348 5.65495C9.43735 5.83094 9.62663 6.00693 9.81591 6.18795L11.4275 7.68639C11.7628 7.99815 11.9358 8.31493 11.9358 8.62669C11.9358 8.93844 11.7628 9.25523 11.4275 9.56698C11.2598 9.72286 11.0922 9.88377 10.9245 10.0396C10.4216 10.5123 9.95111 10.9598 9.43195 11.3872C9.42113 11.3973 9.41572 11.4023 9.40491 11.4124C8.95605 11.8297 9.02635 12.227 9.13451 12.5287C9.13992 12.5437 9.14533 12.5538 9.15074 12.5689C9.56714 13.4991 10.1458 14.3841 11.0489 15.4401C12.6713 17.3005 14.3802 18.7437 16.2621 19.8549C16.4947 19.9957 16.7434 20.1063 16.976 20.217C17.1923 20.3175 17.3924 20.4131 17.5708 20.5187C17.5925 20.5287 17.6087 20.5388 17.6303 20.5488C17.8088 20.6343 17.9818 20.6745 18.1549 20.6745C18.5875 20.6745 18.8687 20.4181 18.9607 20.3326L20.9832 18.452C21.2969 18.1604 21.6376 18.0045 21.9729 18.0045C22.3839 18.0045 22.7192 18.2408 22.9301 18.452L26.191 21.4791C26.84 22.0825 26.8346 22.7362 26.1748 23.3747C25.9477 23.601 25.7097 23.8172 25.4556 24.0435C25.077 24.3854 24.6822 24.7374 24.3253 25.1347C23.7034 25.7582 22.9625 26.0498 22.0053 26.0498C21.9134 26.0498 21.8161 26.0448 21.7241 26.0398C19.9503 25.9342 18.3009 25.2905 17.0625 24.7424C13.6988 23.2289 10.7461 21.0818 8.29629 18.3565C6.27914 16.0988 4.92175 13.9969 4.02404 11.7442C3.46702 10.3615 3.25612 9.2502 3.34264 8.23951Z" fill="#E7E7E7"/>
                </svg>
                <p className={cn('text')}>+358 40 700 9290</p>
              </div>
              <div className={cn('info')}>
                <svg width="30" height="30" viewBox="0 0 30 30" className={cn('icon')}>
                  <path d="M15.494 2C9.70655 2 5 6.37287 5 11.75C5 18.5084 14.4726 27.3874 14.8748 27.7628C15.0462 27.9204 15.2701 28 15.494 28C15.7179 28 15.9417 27.9204 16.1131 27.7628C16.5154 27.3874 25.988 18.5084 25.988 11.75C25.988 6.37287 21.2814 2 15.494 2ZM15.494 26.0126C13.4057 23.9359 6.749 16.9126 6.749 11.75C6.749 7.26988 10.672 3.625 15.494 3.625C20.316 3.625 24.239 7.26988 24.239 11.75C24.239 16.9078 17.5823 23.9359 15.494 26.0126Z" fill="#E7E7E7"/>
                  <path d="M15.4941 6.875C12.6012 6.875 10.2471 9.06225 10.2471 11.75C10.2471 14.4378 12.6012 16.625 15.4941 16.625C18.3869 16.625 20.7411 14.4378 20.7411 11.75C20.7411 9.06225 18.3869 6.875 15.4941 6.875ZM15.4941 15C13.5649 15 11.9961 13.5424 11.9961 11.75C11.9961 9.95762 13.5649 8.5 15.4941 8.5C17.4232 8.5 18.9921 9.95762 18.9921 11.75C18.9921 13.5424 17.4232 15 15.4941 15Z" fill="#E7E7E7"/>
                </svg>
                <p className={cn('text')}>Micronova, Tietotie 3, Espoo, Finland</p>
              </div>
            </GridColumn>
          </Grid>
          {isMobile && renderCopyright()}
        </div>
      </ContentArea>
    </footer>
  );
};

export default Footer;
