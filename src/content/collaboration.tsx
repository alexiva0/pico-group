export interface ICollaborations {
    text: string;
    list: IListItem[];
};

export interface IListItem {
    linkText: string,
    linkHref: string,
    location: string,
}

export const collaborations = {
    text: 'We actively collaborate with several research groups of experimental and theoretical mesoscopic physics in Europe, US, and Japan.',
    list: [
        {
            linkText: 'Centre for Metrology and Accreditation, Mikes',
            linkHref: 'http://www.mikes.fi/',
            location: 'Helsinki, Finland',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 0H13.3333V7.50013H8.33333V0ZM8.33333 12.5001V7.50013H0V12.5001H8.33333ZM13.3333 12.5001V7.50013H30V12.5001H13.3333ZM13.3333 12.5001H8.33333V20H13.3333V12.5001Z" fill="#003580"/>
                    <path d="M13.3333 7.50013H8.33333V12.5001H13.3333V7.50013Z" fill="#003580"/>
                </svg>
            ),
        },
        {
            linkText: 'Micro- and Nanofabrication Centre',
            linkHref: 'http://www.micronova.fi/units/minfab/',
            location: 'Espoo, Finland',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 0H13.3333V7.50013H8.33333V0ZM8.33333 12.5001V7.50013H0V12.5001H8.33333ZM13.3333 12.5001V7.50013H30V12.5001H13.3333ZM13.3333 12.5001H8.33333V20H13.3333V12.5001Z" fill="#003580"/>
                    <path d="M13.3333 7.50013H8.33333V12.5001H13.3333V7.50013Z" fill="#003580"/>
                </svg>
            ),
        },
        {
            linkText: 'NanoScience Centre',
            linkHref: 'http://www.jyu.fi/science/muut_yksikot/nsc/en',
            location: 'Jyväskylä, Finland',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 0H13.3333V7.50013H8.33333V0ZM8.33333 12.5001V7.50013H0V12.5001H8.33333ZM13.3333 12.5001V7.50013H30V12.5001H13.3333ZM13.3333 12.5001H8.33333V20H13.3333V12.5001Z" fill="#003580"/>
                    <path d="M13.3333 7.50013H8.33333V12.5001H13.3333V7.50013Z" fill="#003580"/>
                </svg>
            ),
        },
        {
            linkText: 'Nanoway Cryoelectronics',
            linkHref: 'http://www.nanoway.fi/',
            location: 'Espoo, Finland',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 0H13.3333V7.50013H8.33333V0ZM8.33333 12.5001V7.50013H0V12.5001H8.33333ZM13.3333 12.5001V7.50013H30V12.5001H13.3333ZM13.3333 12.5001H8.33333V20H13.3333V12.5001Z" fill="#003580"/>
                    <path d="M13.3333 7.50013H8.33333V12.5001H13.3333V7.50013Z" fill="#003580"/>
                </svg>
            ),
        },
        {
            linkText: 'VTT Micro and Nanoelectronics',
            linkHref: 'http://www.vtt.fi/palvelut/cluster1/topic1_7/sensors_quantumsensors.jsp',
            location: 'Espoo, Finland',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33333 0H13.3333V7.50013H8.33333V0ZM8.33333 12.5001V7.50013H0V12.5001H8.33333ZM13.3333 12.5001V7.50013H30V12.5001H13.3333ZM13.3333 12.5001H8.33333V20H13.3333V12.5001Z" fill="#003580"/>
                    <path d="M13.3333 7.50013H8.33333V12.5001H13.3333V7.50013Z" fill="#003580"/>
                </svg>
            ),
        },

        {
            linkText: 'CNRS and University of Joseph Fourier',
            linkHref: 'http://www.grenoble.cnrs.fr/fr/',
            location: 'Grenoble, France',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <g clip-path="url(#clip0_794_2396)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30 20V0H0V20H30Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.93 20V0H0V20H9.93V20Z" fill="#27569F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.0003 20V0H20.0703V20H30.0003Z" fill="#CC2136"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_794_2396">
                            <rect width="30" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            linkText: 'Physikalisch-Technische Bundesanstalt (PTB)',
            linkHref: 'http://www.ptb.de/index_en.html',
            location: 'Berlin and Braunschweig, Germany',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <g clip-path="url(#clip0_794_2390)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H30V6.66669H0V0Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66699H30V13.3337H0V6.66699Z" fill="#CC2229"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13.333H30V19.9996H0V13.333Z" fill="#F2CA30"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_794_2390">
                            <rect width="30" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            linkText: 'Karlsruhe Institute of Technology',
            linkHref: 'http://www.kit.edu/',
            location: 'Karlsruhe, Germany',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <g clip-path="url(#clip0_794_2390)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H30V6.66669H0V0Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66699H30V13.3337H0V6.66699Z" fill="#CC2229"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13.333H30V19.9996H0V13.333Z" fill="#F2CA30"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_794_2390">
                            <rect width="30" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            linkText: 'University of Ulm',
            linkHref: 'http://www.uni-ulm.de/',
            location: 'Germany',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <g clip-path="url(#clip0_794_2390)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H30V6.66669H0V0Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66699H30V13.3337H0V6.66699Z" fill="#CC2229"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13.333H30V19.9996H0V13.333Z" fill="#F2CA30"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_794_2390">
                            <rect width="30" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            linkText: 'Kinki University',
            linkHref: 'http://alice.math.kindai.ac.jp/',
            location: 'Higashi-Osaka, Japan',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path d="M15 16C18.3137 16 21 13.3137 21 10C21 6.68629 18.3137 4 15 4C11.6863 4 9 6.68629 9 10C9 13.3137 11.6863 16 15 16Z" fill="#BC002D"/>
                </svg>
            ),
        },
        {
            linkText: 'NEC Nanoelectronics Research Laboratories',
            linkHref: 'http://www.nec.co.jp/rd/Eng/Overview/kyoten/kokunai/tsukuba/index.html',
            location: 'Tsukuba, Japan',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="white"/>
                    <path d="M15 16C18.3137 16 21 13.3137 21 10C21 6.68629 18.3137 4 15 4C11.6863 4 9 6.68629 9 10C9 13.3137 11.6863 16 15 16Z" fill="#BC002D"/>
                </svg>
            ),
        },
        {
            linkText: 'Scuola Normale Superiore',
            linkHref: 'http://www.sns.it/it/laboratori/laboratoriscienze/nest/',
            location: 'Pisa, Italy',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <g clip-path="url(#clip0_794_2395)">
                        <path d="M10 0H0V20H10V0Z" fill="#009246"/>
                        <path d="M20 0H10V20H20V0Z" fill="white"/>
                        <path d="M30 0H20V20H30V0Z" fill="#CE2B37"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_794_2395">
                            <rect width="30" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            linkText: 'Institute of Solid State Physics and Landau Institute',
            linkHref: 'http://www.issp.ac.ru/main/',
            location: 'Chernogolovka, Russia',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V9.99975H30V0Z" fill="white"/>
                    <path d="M30 10H0V19.9998H30V10Z" fill="#D52B1E"/>
                    <path d="M30 6.66602H0V13.3325H30V6.66602Z" fill="#0039A6"/>
                </svg>
            ),
        },
        {
            linkText: 'Chalmers University of Technology',
            linkHref: 'http://www.mc2.chalmers.se/mc2/qdp/',
            location: 'Gothenburg, Sweden',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M30 0H0V20H30V0Z" fill="#006AA7"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.375 0H13.125V8.13047H9.375V0ZM9.375 11.8805V8.13047H0V11.8805H9.375ZM13.125 11.8805V20H9.375V11.8805H13.125ZM13.125 11.8805H30V8.13047H13.125V11.8805Z" fill="#FECC00"/>
                    <path d="M13.125 8.13047H9.375V11.8805H13.125V8.13047Z" fill="#FECC00"/>
                </svg>
            ),
        },
        {
            linkText: 'University of Warwick',
            linkHref: 'http://www2.warwick.ac.uk/',
            location: 'Coventry, UK',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <mask id="mask0_794_2392" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="20">
                    <path d="M0 0V20H30V0H0Z" fill="#012169"/>
                    </mask>
                    <g mask="url(#mask0_794_2392)">
                        <path d="M0 -0.0332031V19.9668H30V-0.0332031H0Z" fill="#012169"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4498 10L-6.2666 1.64179L-4.44571 -2L15.0021 7.72388L34.4498 -2L36.2707 1.64179L19.5543 10L36.2707 18.3582L34.4498 22L15.0021 12.2761L-4.44571 22L-6.2666 18.3582L10.4498 10Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9675 10.0014L-5.96289 1.03626L-4.74896 -1.3916L15.0023 8.48402L34.7535 -1.3916L35.9675 1.03626L18.0371 10.0014L35.9675 18.9666L34.7535 21.3945L15.0023 11.5188L-4.74896 21.3945L-5.96289 18.9666L11.9675 10.0014Z" fill="#C8102E"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3948 13.3934V20.1795H11.6087V13.3934H-5.35645V6.60736H11.6087V-0.178711H18.3948V6.60736H35.36V13.3934H18.3948Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.0376 12.0362V20.1795H12.9659V12.0362H-5.35645V7.96458H12.9659V-0.178711H17.0376V7.96458H35.36V12.0362H17.0376Z" fill="#C8102E"/>
                    </g>
                </svg>
            ),
        },
        {
            linkText: 'Royal Holloway University of London',
            linkHref: 'http://www.rhul.ac.uk/Physics/Nanophysics/index.htm',
            location: 'Egham, UK',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <mask id="mask0_794_2392" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="20">
                    <path d="M0 0V20H30V0H0Z" fill="#012169"/>
                    </mask>
                    <g mask="url(#mask0_794_2392)">
                        <path d="M0 -0.0332031V19.9668H30V-0.0332031H0Z" fill="#012169"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4498 10L-6.2666 1.64179L-4.44571 -2L15.0021 7.72388L34.4498 -2L36.2707 1.64179L19.5543 10L36.2707 18.3582L34.4498 22L15.0021 12.2761L-4.44571 22L-6.2666 18.3582L10.4498 10Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9675 10.0014L-5.96289 1.03626L-4.74896 -1.3916L15.0023 8.48402L34.7535 -1.3916L35.9675 1.03626L18.0371 10.0014L35.9675 18.9666L34.7535 21.3945L15.0023 11.5188L-4.74896 21.3945L-5.96289 18.9666L11.9675 10.0014Z" fill="#C8102E"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3948 13.3934V20.1795H11.6087V13.3934H-5.35645V6.60736H11.6087V-0.178711H18.3948V6.60736H35.36V13.3934H18.3948Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.0376 12.0362V20.1795H12.9659V12.0362H-5.35645V7.96458H12.9659V-0.178711H17.0376V7.96458H35.36V12.0362H17.0376Z" fill="#C8102E"/>
                    </g>
                </svg>
            ),
        },
        {
            linkText: 'University of Stony Brook, Department of Physics and Astronomy',
            linkHref: 'http://www.physics.sunysb.edu/physics/faculty.shtml',
            location: 'New York, USA',
            flag: () => (
                <svg width="30" height="20" viewBox="0 0 30 20">
                    <path d="M0 0H30V20H0V0Z" fill="white"/>
                    <path d="M0 0H30V1.53846H0V0Z" fill="#BF0A30"/>
                    <path d="M0 3.07692H30V4.61538H0V3.07692Z" fill="#BF0A30"/>
                    <path d="M0 6.15385H30V7.69231H0V6.15385Z" fill="#BF0A30"/>
                    <path d="M0 9.23077H30V10.7692H0V9.23077Z" fill="#BF0A30"/>
                    <path d="M0 12.3077H30V13.8462H0V12.3077Z" fill="#BF0A30"/>
                    <path d="M0 15.3846H30V16.9231H0V15.3846Z" fill="#BF0A30"/>
                    <path d="M0 18.4615H30V20H0V18.4615Z" fill="#BF0A30"/>
                    <path d="M0 0H15.1979V10.7672H0V0Z" fill="#002868"/>
                    <path d="M1.43833 1.00078L1.30002 0.575195L1.16323 1.00078H0.714844L1.07811 1.26373L0.938274 1.68931L1.30002 1.42484L1.66328 1.68931L1.52345 1.26373L1.88672 1.00078H1.43833Z" fill="white"/>
                    <path d="M3.95839 1.00078L3.82007 0.575195L3.68176 1.00078H3.2349L3.59664 1.26373L3.45833 1.68931L3.82007 1.42484L4.18182 1.68931L4.04351 1.26373L4.40525 1.00078H3.95839Z" fill="white"/>
                    <path d="M6.47844 1.00078L6.34013 0.575195L6.20182 1.00078H5.75343L6.1167 1.26373L5.97839 1.68931L6.34013 1.42484L6.70188 1.68931L6.56356 1.26373L6.92531 1.00078H6.47844Z" fill="white"/>
                    <path d="M8.99698 1.00078L8.85866 0.575195L8.72187 1.00078H8.27349L8.63675 1.26373L8.49692 1.68931L8.85866 1.42484L9.22193 1.68931L9.0821 1.26373L9.44536 1.00078H8.99698Z" fill="white"/>
                    <path d="M11.6022 1.26373L11.9654 1.00078H11.517L11.3787 0.575195L11.2404 1.00078H10.7935L11.1553 1.26373L11.017 1.68931L11.3787 1.42484L11.7405 1.68931L11.6022 1.26373Z" fill="white"/>
                    <path d="M14.1222 1.26373L14.484 1.00078H14.0371L13.8988 0.575195L13.7605 1.00078H13.3121L13.6753 1.26373L13.537 1.68931L13.8988 1.42484L14.2605 1.68931L14.1222 1.26373Z" fill="white"/>
                    <path d="M2.56005 1.65435L2.42173 2.07993H1.97487L2.33662 2.34288L2.1983 2.76846L2.56005 2.50552L2.92179 2.76846L2.78348 2.34288L3.14674 2.07993H2.69836L2.56005 1.65435Z" fill="white"/>
                    <path d="M5.21842 2.07993L5.0801 1.65435L4.94179 2.07993H4.49493L4.85667 2.34288L4.71836 2.76846L5.0801 2.50552L5.44185 2.76846L5.30353 2.34288L5.66528 2.07993H5.21842Z" fill="white"/>
                    <path d="M7.73695 2.07993L7.60016 1.65435L7.46184 2.07993H7.01346L7.37673 2.34288L7.23689 2.76846L7.60016 2.50552L7.9619 2.76846L7.82359 2.34288L8.18533 2.07993H7.73695Z" fill="white"/>
                    <path d="M10.257 2.07993L10.1187 1.65435L9.9819 2.07993H9.53352L9.89526 2.34288L9.75695 2.76846L10.1187 2.50552L10.4804 2.76846L10.3421 2.34288L10.7054 2.07993H10.257Z" fill="white"/>
                    <path d="M12.7771 2.07993L12.6387 1.65435L12.5004 2.07993H12.0536L12.4153 2.34288L12.277 2.76846L12.6387 2.50552L13.0005 2.76846L12.8622 2.34288L13.2239 2.07993H12.7771Z" fill="white"/>
                    <path d="M1.43833 3.16061L1.30002 2.73351L1.16323 3.16061L0.714844 3.15909L1.07811 3.42204L0.938274 3.84914L1.30002 3.58467L1.66328 3.84914L1.52345 3.42204L1.88672 3.15909L1.43833 3.16061Z" fill="white"/>
                    <path d="M3.95839 3.16061L3.82007 2.73351L3.68176 3.16061L3.2349 3.15909L3.59664 3.42204L3.45833 3.84914L3.82007 3.58467L4.18182 3.84914L4.04351 3.42204L4.40525 3.15909L3.95839 3.16061Z" fill="white"/>
                    <path d="M6.47844 3.16061L6.34013 2.73351L6.20182 3.16061L5.75343 3.15909L6.1167 3.42204L5.97839 3.84914L6.34013 3.58467L6.70188 3.84914L6.56356 3.42204L6.92531 3.15909L6.47844 3.16061Z" fill="white"/>
                    <path d="M8.99698 3.16061L8.85866 2.73351L8.72187 3.16061L8.27349 3.15909L8.63675 3.42204L8.49692 3.84914L8.85866 3.58467L9.22193 3.84914L9.0821 3.42204L9.44536 3.15909L8.99698 3.16061Z" fill="white"/>
                    <path d="M11.517 3.16061L11.3787 2.73351L11.2404 3.16061L10.7935 3.15909L11.1553 3.42204L11.017 3.84914L11.3787 3.58467L11.7405 3.84914L11.6022 3.42204L11.9654 3.15909L11.517 3.16061Z" fill="white"/>
                    <path d="M14.1222 3.42204L14.484 3.15909L14.0371 3.16061L13.8988 2.73351L13.7605 3.16061L13.3121 3.15909L13.6753 3.42204L13.537 3.84914L13.8988 3.58467L14.2605 3.84914L14.1222 3.42204Z" fill="white"/>
                    <path d="M2.56005 3.75946L2.42173 4.18505H1.97487L2.33662 4.44799L2.1983 4.87358L2.56005 4.61063L2.92179 4.87358L2.78348 4.44799L3.14674 4.18505H2.69836L2.56005 3.75946Z" fill="white"/>
                    <path d="M5.21842 4.18505L5.0801 3.75946L4.94179 4.18505H4.49493L4.85667 4.44799L4.71836 4.87358L5.0801 4.61063L5.44185 4.87358L5.30353 4.44799L5.66528 4.18505H5.21842Z" fill="white"/>
                    <path d="M7.73695 4.18505L7.60016 3.75946L7.46184 4.18505H7.01346L7.37673 4.44799L7.23689 4.87358L7.60016 4.61063L7.9619 4.87358L7.82359 4.44799L8.18533 4.18505H7.73695Z" fill="white"/>
                    <path d="M10.257 4.18505L10.1187 3.75946L9.9819 4.18505H9.53352L9.89526 4.44799L9.75695 4.87358L10.1187 4.61063L10.4804 4.87358L10.3421 4.44799L10.7054 4.18505H10.257Z" fill="white"/>
                    <path d="M12.7771 4.18505L12.6387 3.75946L12.5004 4.18505H12.0536L12.4153 4.44799L12.277 4.87358L12.6387 4.61063L13.0005 4.87358L12.8622 4.44799L13.2239 4.18505H12.7771Z" fill="white"/>
                    <path d="M1.43833 5.26572L1.30002 4.83862L1.16323 5.26572L0.714844 5.2642L1.07811 5.52715L0.938274 5.95273L1.30002 5.68978L1.66328 5.95273L1.52345 5.52715L1.88672 5.2642L1.43833 5.26572Z" fill="white"/>
                    <path d="M3.95839 5.26572L3.82007 4.83862L3.68176 5.26572L3.2349 5.2642L3.59664 5.52715L3.45833 5.95273L3.82007 5.68978L4.18182 5.95273L4.04351 5.52715L4.40525 5.2642L3.95839 5.26572Z" fill="white"/>
                    <path d="M6.47844 5.26572L6.34013 4.83862L6.20182 5.26572L5.75343 5.2642L6.1167 5.52715L5.97839 5.95273L6.34013 5.68978L6.70188 5.95273L6.56356 5.52715L6.92531 5.2642L6.47844 5.26572Z" fill="white"/>
                    <path d="M8.99698 5.26572L8.85866 4.83862L8.72187 5.26572L8.27349 5.2642L8.63675 5.52715L8.49692 5.95273L8.85866 5.68978L9.22193 5.95273L9.0821 5.52715L9.44536 5.2642L8.99698 5.26572Z" fill="white"/>
                    <path d="M11.517 5.26572L11.3787 4.83862L11.2404 5.26572L10.7935 5.2642L11.1553 5.52715L11.017 5.95273L11.3787 5.68978L11.7405 5.95273L11.6022 5.52715L11.9654 5.2642L11.517 5.26572Z" fill="white"/>
                    <path d="M14.1222 5.52715L14.484 5.2642L14.0371 5.26572L13.8988 4.83862L13.7605 5.26572L13.3121 5.2642L13.6753 5.52715L13.537 5.95273L13.8988 5.68978L14.2605 5.95273L14.1222 5.52715Z" fill="white"/>
                    <path d="M2.56005 5.89497L2.42173 6.32056H1.97487L2.33662 6.58351L2.1983 7.00909L2.56005 6.74614L2.92179 7.00909L2.78348 6.58351L3.14674 6.32056H2.69836L2.56005 5.89497Z" fill="white"/>
                    <path d="M5.21842 6.32056L5.0801 5.89497L4.94179 6.32056H4.49493L4.85667 6.58351L4.71836 7.00909L5.0801 6.74614L5.44185 7.00909L5.30353 6.58351L5.66528 6.32056H5.21842Z" fill="white"/>
                    <path d="M7.73695 6.32056L7.60016 5.89497L7.46184 6.32056H7.01346L7.37673 6.58351L7.23689 7.00909L7.60016 6.74614L7.9619 7.00909L7.82359 6.58351L8.18533 6.32056H7.73695Z" fill="white"/>
                    <path d="M10.257 6.32056L10.1187 5.89497L9.9819 6.32056H9.53352L9.89526 6.58351L9.75695 7.00909L10.1187 6.74614L10.4804 7.00909L10.3421 6.58351L10.7054 6.32056H10.257Z" fill="white"/>
                    <path d="M12.7771 6.32056L12.6387 5.89497L12.5004 6.32056H12.0536L12.4153 6.58351L12.277 7.00909L12.6387 6.74614L13.0005 7.00909L12.8622 6.58351L13.2239 6.32056H12.7771Z" fill="white"/>
                    <path d="M1.43833 7.40123L1.30002 6.97413L1.16323 7.40123L0.714844 7.39971L1.07811 7.66266L0.938274 8.08976L1.30002 7.82529L1.66328 8.08976L1.52345 7.66266L1.88672 7.39971L1.43833 7.40123Z" fill="white"/>
                    <path d="M3.95839 7.40123L3.82007 6.97413L3.68176 7.40123L3.2349 7.39971L3.59664 7.66266L3.45833 8.08976L3.82007 7.82529L4.18182 8.08976L4.04351 7.66266L4.40525 7.39971L3.95839 7.40123Z" fill="white"/>
                    <path d="M6.47844 7.40123L6.34013 6.97413L6.20182 7.40123L5.75343 7.39971L6.1167 7.66266L5.97839 8.08976L6.34013 7.82529L6.70188 8.08976L6.56356 7.66266L6.92531 7.39971L6.47844 7.40123Z" fill="white"/>
                    <path d="M8.99698 7.40123L8.85866 6.97413L8.72187 7.40123L8.27349 7.39971L8.63675 7.66266L8.49692 8.08976L8.85866 7.82529L9.22193 8.08976L9.0821 7.66266L9.44536 7.39971L8.99698 7.40123Z" fill="white"/>
                    <path d="M11.517 7.40123L11.3787 6.97413L11.2404 7.40123L10.7935 7.39971L11.1553 7.66266L11.017 8.08976L11.3787 7.82529L11.7405 8.08976L11.6022 7.66266L11.9654 7.39971L11.517 7.40123Z" fill="white"/>
                    <path d="M14.1222 7.66266L14.484 7.39971L14.0371 7.40123L13.8988 6.97413L13.7605 7.40123L13.3121 7.39971L13.6753 7.66266L13.537 8.08976L13.8988 7.82529L14.2605 8.08976L14.1222 7.66266Z" fill="white"/>
                    <path d="M2.56005 8.00009L2.42173 8.42567H1.97487L2.33662 8.68862L2.1983 9.1142L2.56005 8.85125L2.92179 9.1142L2.78348 8.68862L3.14674 8.42567H2.69836L2.56005 8.00009Z" fill="white"/>
                    <path d="M5.21842 8.42567L5.0801 8.00009L4.94179 8.42567H4.49493L4.85667 8.68862L4.71836 9.1142L5.0801 8.85125L5.44185 9.1142L5.30353 8.68862L5.66528 8.42567H5.21842Z" fill="white"/>
                    <path d="M7.73695 8.42567L7.60016 8.00009L7.46184 8.42567H7.01346L7.37673 8.68862L7.23689 9.1142L7.60016 8.85125L7.9619 9.1142L7.82359 8.68862L8.18533 8.42567H7.73695Z" fill="white"/>
                    <path d="M10.257 8.42567L10.1187 8.00009L9.9819 8.42567H9.53352L9.89526 8.68862L9.75695 9.1142L10.1187 8.85125L10.4804 9.1142L10.3421 8.68862L10.7054 8.42567H10.257Z" fill="white"/>
                    <path d="M12.7771 8.42567L12.6387 8.00009L12.5004 8.42567H12.0536L12.4153 8.68862L12.277 9.1142L12.6387 8.85125L13.0005 9.1142L12.8622 8.68862L13.2239 8.42567H12.7771Z" fill="white"/>
                    <path d="M1.43833 9.50635L1.30002 9.07924L1.16323 9.50635L0.714844 9.50483L1.07811 9.76777L0.938274 10.1934L1.30002 9.93041L1.66328 10.1934L1.52345 9.76777L1.88672 9.50483L1.43833 9.50635Z" fill="white"/>
                    <path d="M3.95839 9.50635L3.82007 9.07924L3.68176 9.50635L3.2349 9.50483L3.59664 9.76777L3.45833 10.1934L3.82007 9.93041L4.18182 10.1934L4.04351 9.76777L4.40525 9.50483L3.95839 9.50635Z" fill="white"/>
                    <path d="M6.47844 9.50635L6.34013 9.07924L6.20182 9.50635L5.75343 9.50483L6.1167 9.76777L5.97839 10.1934L6.34013 9.93041L6.70188 10.1934L6.56356 9.76777L6.92531 9.50483L6.47844 9.50635Z" fill="white"/>
                    <path d="M8.99698 9.50635L8.85866 9.07924L8.72187 9.50635L8.27349 9.50483L8.63675 9.76777L8.49692 10.1934L8.85866 9.93041L9.22193 10.1934L9.0821 9.76777L9.44536 9.50483L8.99698 9.50635Z" fill="white"/>
                    <path d="M11.517 9.50635L11.3787 9.07924L11.2404 9.50635L10.7935 9.50483L11.1553 9.76777L11.017 10.1934L11.3787 9.93041L11.7405 10.1934L11.6022 9.76777L11.9654 9.50483L11.517 9.50635Z" fill="white"/>
                    <path d="M14.1222 9.76777L14.484 9.50483L14.0371 9.50635L13.8988 9.07924L13.7605 9.50635L13.3121 9.50483L13.6753 9.76777L13.537 10.1934L13.8988 9.93041L14.2605 10.1934L14.1222 9.76777Z" fill="white"/>
                </svg>
            ),
        },
    ],
};
