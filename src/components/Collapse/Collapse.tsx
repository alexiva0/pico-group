import React, { useRef, useState, useEffect } from 'react';

interface IProps {
    className?: string;
    classNameContainer?: string;
    initialHeight?: number;
    isOpened: boolean;
};

const BROWSER_DELAY = 100;

const Collapse: React.FC<IProps> = ({
    className,
    classNameContainer,
    initialHeight = 0,
    children,
    isOpened = false,
}) => {
    const canUpdate = useRef(false);
    const timer = useRef<number | undefined>(undefined);
    const rootNode = useRef<HTMLInputElement>(null);
    const [height, setHeight] = useState(`${initialHeight}px`);
    const duration: number = 300;
    const transition: string = `height ${duration / 1000}s`;

    const animateSlide = (finalHeight: string, delay: number): void => {
        if (!rootNode.current) {
            return;
        }
        setHeight(`${rootNode.current.scrollHeight}px`);
        timer.current = window.setTimeout(() => {
            setHeight(finalHeight);
        }, delay);
    };

    useEffect(() => {
        switch (true) {
            case !canUpdate.current && isOpened:
                setHeight('auto');
                break;
            case !canUpdate.current && !isOpened:
                setHeight(`${initialHeight}px`);
                break;
            case isOpened:
                animateSlide('auto', duration);
                break;
            default:
                animateSlide(`${initialHeight}px`, BROWSER_DELAY);
        }

        canUpdate.current = true;

        return (): void => clearTimeout(timer.current);
    }, [isOpened, initialHeight, duration]);

    return (
        <div
            className={className}
            style={{ overflow: 'hidden', width: '100%', height, transition }}
            ref={rootNode}
        >
            <div className={classNameContainer}>{children}</div>
        </div>
    );
};

export default Collapse;
