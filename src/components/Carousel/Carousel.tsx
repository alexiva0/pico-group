import React, { useState, useEffect, useCallback } from 'react';
import cnCreate from 'utils/cnCreate';
import throttle from 'lodash.throttle';
import BP from 'constants/breakpoints';
import SwiperCore, { Pagination } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';

SwiperCore.use([Pagination]);

export const Theme = {
    GALLERY: 'gallery',
    TABS: 'tabs',
} as const;

const SlidesPerView = {
    AUTO: 'auto',
} as const;

type ThemeType = typeof Theme[keyof typeof Theme];
type SlidesPerViewType = typeof SlidesPerView[keyof typeof SlidesPerView];

export type SlidesSettingsType = {
    [key: number]: {
        slidesPerView: number | SlidesPerViewType;
        slidesPerGroup?: number;
        spaceBetween: number;
    };
};

export interface ICarouselProps {
    className?: string;
    slidesSettings?: SlidesSettingsType;
    loop?: boolean;
    theme?: ThemeType;
    pagination?: PaginationOptions,
    initialSlide?: number;
    centeredSlides?: boolean;
    onNextClick?: (index: number) => void;
    onPrevClick?: (index: number) => void;
    onChange?: (currentIndex: number, previousIndex: number, slidesPerView?: number | 'auto') => void;
}

const defaultSlidesSettings: SlidesSettingsType = {
    [BP.MOBILE_SMALL_START]: {
        slidesPerView: 'auto',
        spaceBetween: 10,
    },
    [BP.MOBILE_BIG_START]: {
        slidesPerView: 'auto',
        spaceBetween: 20,
    },
    [BP.DESKTOP_MIDDLE_START]: {
        slidesPerView: 'auto',
        spaceBetween: 25,
    },
};

const cn = cnCreate('carousel');
const Carousel: React.FC<ICarouselProps> = ({
    className,
    slidesSettings = defaultSlidesSettings,
    pagination,
    theme = 'carousel',
    loop = false,
    initialSlide = 1,
    centeredSlides = false,
    children,
    onNextClick,
    onPrevClick,
    onChange,

}) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
    const [isBeginning, setBeginning] = useState(true);
    const [isEnd, setEnd] = useState(false);

    const handlePrevClick = React.useCallback(() => {
        if (!swiperInstance) {
            return;
        }

        swiperInstance.slidePrev();
        onPrevClick?.(swiperInstance.realIndex);
    }, [swiperInstance, onPrevClick]);

    const handleNextClick = useCallback(() => {
        if (!swiperInstance) {
            return;
        }

        swiperInstance.slideNext();
        onNextClick?.(swiperInstance.realIndex);
    }, [swiperInstance, onNextClick]);

    const handleSwiper = useCallback(
        (swiper: SwiperCore) => {
            setSwiperInstance(swiper);
        },
        [],
    );

    const handleReachBeginnig = useCallback(() => {
        setBeginning(true);
    }, []);

    const handleReachEnd = useCallback(() => {
        setEnd(true);
    }, []);

    const handleFromEdge = useCallback((swiper: SwiperCore) => {
        setBeginning(swiper.isBeginning);
        setEnd(swiper.isEnd);
    }, []);

    const handleSlideChange = useCallback(
        ({ realIndex, previousIndex, params }: SwiperCore) => {
            onChange?.(realIndex, previousIndex, params.slidesPerView);
        },
        [onChange],
    );

    const handleNavDisplay = (swiper: SwiperCore) => {
        setBeginning(swiper.isBeginning);
        setEnd(swiper.isEnd);
    };

    const handleSwiperResize = useCallback(() => {
        throttle((swiper: SwiperCore) => {
            handleNavDisplay(swiper);

            if (swiper.params.slidesPerView === SlidesPerView.AUTO) {
                swiper.slides.css('width', '');
            }
        }, 300);
    }, []);

    useEffect(() => {
        if (!swiperInstance) {
            return undefined;
        }

        setEnd(false);

        const windowResizeHandler = () => handleNavDisplay(swiperInstance);
        const windowResizeHandlerThrottled = throttle(windowResizeHandler, 300);

        window.addEventListener('resize', windowResizeHandlerThrottled);

        return () => {
            window.removeEventListener('resize', windowResizeHandlerThrottled);
        };
    }, [swiperInstance]);

    return (
        <div className={cn('', { theme }, className)}>
            <Swiper
                className={cn('swiper')}
                breakpoints={slidesSettings}
                watchSlidesVisibility
                loop={false}
                pagination={{ clickable: true, ...pagination }}
                initialSlide={initialSlide - 1}
                centeredSlides={centeredSlides}
                onSwiper={handleSwiper}
                onReachBeginning={handleReachBeginnig}
                onReachEnd={handleReachEnd}
                onFromEdge={handleFromEdge}
                onSlideChange={handleSlideChange}
                onResize={handleSwiperResize}
            >
                {React.Children.map(children, (child, i) => (
                    <SwiperSlide key={i} className={cn('slide')}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={cn('arrow', { prev: true, disabled: !loop && isBeginning })}
                onClick={handlePrevClick}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
                    <path d="M20.5 25.5L9.5 14.5L20.5 3.5" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div
                className={cn('arrow', { next: true, disabled: !loop && isEnd })}
                onClick={handleNextClick}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
                    <path d="M9.5 25.5L20.5 14.5L9.5 3.5" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Carousel;
