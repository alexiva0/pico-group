import { createContext } from 'react';

export type AppContextType = {
    isMobile: boolean;
    isTablet: boolean;
    isMobileWide: boolean;
    isDesktopWide: boolean;
};

const appContext = createContext<AppContextType>({
    isMobile: false,
    isTablet: false,
    isMobileWide: false,
    isDesktopWide: false,
});

const { Provider: AppContextProvider } = appContext;

export { AppContextProvider };
export default appContext;
