import { useContext } from 'react';
import appContext, { AppContextType } from 'context/AppContext/context';

const useAppContext = (): AppContextType => {
    const { isMobile, isTablet, isMobileWide, isDesktopWide } = useContext(appContext);

    return { isMobile, isTablet, isMobileWide, isDesktopWide };
};

export default useAppContext;
