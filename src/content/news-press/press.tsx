export interface IPress {
    year: number,
    releases: IRelease[],
};

export interface IRelease {
    date: string,
    text: () => React.ReactElement,
};

export const press = [
    {
        year: 2016,
        releases: [
            {
                date: '11 May 2016',
                text: () => (
                    <p>
                        <a href="https://youtu.be/2AvIOzVJMCM" target="_blank" rel="noreferrer">What is information?</a> (video) – © 2015 of <a href="https://www.newscientist.com/" target="_blank" rel="noreferrer">New Scientist</a>
                    </p>
                ),
            },
            {
                date: '12 Jan 2016',
                text: () => (
                    <p>
                        <a href="http://phys.org/news/2016-01-maxwell-demon-self-contained-information-powered-refrigerator.html" target="_blank" rel="noreferrer">Maxwell’s demon as a self-contained, information-powered refrigerator</a> – <a href="http://phys.org/" target="_blank" rel="noreferrer">phys.org</a>
                    </p>
                ),
            },
            {
                date: '11 Jan 2016',
                text: () => (
                    <p>
                        <a href="http://physicsworld.com/cws/article/news/2016/jan/11/autonomous-maxwells-demon-displays-chilling-power" target="_blank" rel="noreferrer">Autonomous Maxwell’s demon displays chilling power</a> – <a href="http://physicsworld.com/" target="_blank" rel="noreferrer">physics world.com</a>
                    </p>
                ),
            },
            {
                date: '11 Jan 2016',
                text: () => (
                    <p>
                        <a href="https://www.sciencedaily.com/releases/2016/01/160111122526.htm" target="_blank" rel="noreferrer">Maxwell’s demon as a self-contained, information-powered refrigerator</a> – <a href="https://www.sciencedaily.com/" target="_blank" rel="noreferrer">ScienceDaily</a>
                    </p>
                ),
            },
        ],
    },
    {
        year: 2015,
        releases: [
            {
                date: '30 Dec 2015',
                text: () => (
                    <p>
                        <a href="https://physics.aps.org/articles/v8/127" target="_blank" rel="noreferrer">Viewpoint: Exorcising Maxwell’s Demon</a> – <a href="http://www.aps.org/" target="_blank" rel="noreferrer">APS physics</a>
                    </p>
                ),
            },
            {
                date: '12 Apr 2015',
                text: () => (
                    <p>
                        <a href="https://ec.europa.eu/digital-single-market/news/infernos-fet-open-project" target="_blank" rel="noreferrer">Do you know what “Maxwell’s demon” (MD) is?</a> – <a href="https://ec.europa.eu/digital-single-market/en/fet-open" target="_blank" rel="noreferrer">EC: FET Open</a>
                    </p>
                ),
            },
        ],
    },
    {
        year: 2012,
        releases: [
            {
                date: '28 March 2012',
                text: () => (
                    <p>
                        <a href="http://www.physorg.com/news/2012-03-neutrons-uncover-density-fermion-liquids.html" target="_blank" rel="noreferrer">Neutrons uncover new density waves in fermion liquids</a> – <a href="http://www.physicsorg.com/" target="_blank" rel="noreferrer">physicsorg.com</a>
                    </p>
                ),
            },
        ],
    },
    {
        year: 2008,
        releases: [
            {
                date: '30 December 2008',
                text: () => (
                    <p>
                        <a href="https://pico.aalto.fi/wp-content/themes/default/content/sivun_kuvat/hs_30122008.png" target="_blank" rel="noreferrer">Lämpötila selville elektronin tarkkuudella</a> – <a href="http://hs.fi/" target="_blank" rel="noreferrer">Helsingin Sanomat</a>
                    </p>
                ),
            },
            {
                date: '17 December 2008',
                text: () => (
                    <p>
                        <a href="http://www.itviikko.fi/teknologia/2008/12/17/suomalaiskeksinnolla-tarkkuutta-huippukylmiin-oloihin/200832517/7" target="_blank" rel="noreferrer">Suomalaiskeksinnöllä tarkkuutta huippukylmiin oloihin</a> – <a href="http://www.itviikko.fi/" target="_blank" rel="noreferrer">IT-viikko</a>
                    </p>
                ),
            },
            {
                date: '2 December 2008',
                text: () => (
                    <p>
                        <a href="http://physicsworld.com/cws/article/news/36927" target="_blank" rel="noreferrer">New thermometer could help redefine temperature</a> – <a href="http://physicsworld.com/" target="_blank" rel="noreferrer">physicsworld.com</a>
                    </p>
                ),
            },
        ],
    },
    {
        year: 2007,
        releases: [
            {
                date: '6 August 2007',
                text: () => (
                    <p>
                        <a href="http://www.prosessori.fi/uutiset/uutinen.asp?id=50615" target="_blank" rel="noreferrer">TKK:n tutkijat rakensivat lämpötransistorin</a> – <a href="http://www.prosessori.fi/" target="_blank" rel="noreferrer">Prosessori</a>
                    </p>
                ),
            },
            {
                date: '20 July 2007',
                text: () => (
                    <p>
                        <a href="http://www.nature.com/nnano/reshigh/2007/0707/full/nnano.2007.249.html" target="_blank" rel="noreferrer">Heat management: ‘Nanofridges’ cool off</a> – <a href="http://www.nature.com/nnano/index.html" target="_blank" rel="noreferrer">Nature Nanotechnology</a>
                    </p>
                ),
            },
            {
                date: '13 July 2007',
                text: () => (
                    <p>
                        <a href="http://physicsweb.org/articles/news/11/7/14" target="_blank" rel="noreferrer">First “heat transistor” unveiled</a> – <a href="http://physicsweb.org/" target="_blank" rel="noreferrer">PhysicsWeb</a>
                    </p>
                ),
            },
            {
                date: '12 July 2007',
                text: () => (
                    <p>
                        <a href="http://www.yleradio1.fi/tiede/tiedeuutiset/id11783.shtml" target="_blank" rel="noreferrer">Maailman pienin jääkaappi</a> – <a href="http://www.yleradio1.fi/tiede/" target="_blank" rel="noreferrer">Yle Radio 1 Tiedeuutiset</a>
                    </p>
                ),
            },
            {
                date: '12 July 2007',
                text: () => (
                    <p>
                        <a href="http://www.tekniikkatalous.fi/doc.ot?f_id=1197001" target="_blank" rel="noreferrer">TKK:n tutkijat rakensivat maailman pienimmän jääkaapin</a> – <a href="http://www.tekniikkajatalous.fi/" target="_blank" rel="noreferrer">Tekniikka & Talous</a>
                    </p>
                ),
            },
            {
                date: '12 July 2007',
                text: () => (
                    <p>
                        <a href="http://www.mtv3.fi/uutiset/arkisto.shtml/arkistot/kotimaa/2007/07/543485" target="_blank" rel="noreferrer">Maailman pienin jääkaappi rakennettiin Suomessa</a> – <a href="httm://www.mtv3.fi/uutiset" target="_blank" rel="noreferrer">MTV3</a>
                    </p>
                ),
            },
            {
                date: '10 July 2007',
                text: () => (
                    <p>
                        <a href="http://sciencenow.sciencemag.org/cgi/content/full/2007/710/3" target="_blank" rel="noreferrer">The Tiniest Refrigerator</a> – <a href="http://www.sciencemag.org/" target="_blank" rel="noreferrer">Science</a>
                    </p>
                ),
            },
            {
                date: '6 July 2007',
                text: () => (
                    <p>
                        <a href="http://www.tgdaily.com/content/view/32792/118/" target="_blank" rel="noreferrer">Scientists develop heat transistor that someday could cool chips</a> – <a href="http://www.tgdaily.com/index.php" target="_blank" rel="noreferrer">TgDaily</a>
                    </p>
                ),
            },
            {
                date: '24 January 2007',
                text: () => (
                    <p>
                        <a href="http://physicsweb.org/articles/news/11/1/20" target="_blank" rel="noreferrer">Refrigerator cools one electron at a time</a> – <a href="http://physicsweb.org/" target="_blank" rel="noreferrer">PhysicsWeb</a>
                    </p>
                ),
            },
        ],
    },
];
