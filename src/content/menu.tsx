export interface ICommonMenu {
    title: string;
    url: string;
}

export interface iMenu extends ICommonMenu {
    submenu: ICommonMenu[];
};

export const menu = [
    {
        title: 'Research',
        url: '/research',
        submenu: [
            {
                title: 'Maxwell’s demon and stochastic thermodynamics',
                url: '/maxwell’s-demon-and-stochastic-thermodynamics',
            },
            {
                title: 'Electronic cooling',
                url: '/electronic-cooling',
            },
            {
                title: 'Electronic refrigeration',
                url: '/electronic-refrigeration',
            },
            {
                title: 'Quantum heat engine',
                url: '/quantum-heat-engine',
            },
            {
                title: 'Single-electron turnstile',
                url: '/single-electron-turnstile',
            },
            {
                title: 'Temperature and thermometry',
                url: '/temperature-and-thermometry',
            },
        ],
    },
    {
        title: 'Team',
        url: '/team',
        submenu: [
            {
                title: 'Senior Researchers',
                url: '/senior-researchers',
            },
            {
                title: 'Postdoctoral Researchers',
                url: '/postdoctoral-researchers',
            },
            {
                title: 'Ph.D. Students',
                url: '/phd-students',
            },
            {
                title: 'Former group members',
                url: '/former-group-members',
            },
        ],
    },
    {
        title: 'Collaboration',
        url: '/collaboration',
        submenu: [],
    },
    {
        title: 'Publications',
        url: '/publications',
        submenu: [
            {
                title: 'By year',
                url: '/years',
            },
            {
                title: 'PhD Theses',
                url: '/phd-theses',
            },
        ],
    },
    {
        title: 'News & PR',
        url: '/news-press',
        submenu: [
            {
                title: 'News',
                url: '/news',
            },
            {
                title: 'Press releases',
                url: '/press',
            },
        ],
    },
];
