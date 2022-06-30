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
        title: 'People',
        url: '/people',
        submenu: [
            {
                title: 'Group members',
                url: '/group-members',
            },
            {
                title: 'Administration',
                url: '/administration',
            },
            {
                title: 'Former group members',
                url: '/former-group-members',
            },
            {
                title: 'Recent visiting scientists',
                url: '/recent-visiting-scientists',
            },
            {
                title: 'Guestbook',
                url: '/guestbook',
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
