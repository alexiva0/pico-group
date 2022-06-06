import React, { useState, useEffect, useCallback, useMemo } from 'react';
import throttle from 'lodash.throttle';
import BP from 'constants/breakpoints';
import { AppContextProvider } from './context';

const AppContext: React.FC = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobileWide, setIsMobileWide] = useState(false);
    const [isDesktopWide, setIsDesktopWide] = useState(false);

    const handleResize = useCallback((): void => {
        const windowWidth = window.innerWidth;

        setIsMobile(windowWidth < BP.MOBILE_BIG_START);
        setIsTablet(windowWidth < BP.DESKTOP_SMALL_START && windowWidth >= BP.MOBILE_BIG_START);
        setIsMobileWide(windowWidth < BP.DESKTOP_SMALL_START);
        setIsDesktopWide(windowWidth >= BP.DESKTOP_MIDDLE_START);
    }, []);

    const handleSetThrottled = useMemo(() => throttle(handleResize, 20), [handleResize]);

    useEffect(() => {
        handleSetThrottled();
        window.addEventListener('resize', handleSetThrottled);

        return (): void => {
            window.removeEventListener('resize', handleSetThrottled);
        };
    }, [handleSetThrottled]);

    return (
        <AppContextProvider value={{ isMobile, isTablet, isMobileWide, isDesktopWide }}>
            {children}
        </AppContextProvider>
    );
};

export default AppContext;
