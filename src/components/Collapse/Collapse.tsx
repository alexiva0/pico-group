import React from 'react';

interface IProps {
    className?: string;
    classNameContainer?: string;
    isOpened: boolean;
};

const BROWSER_DELAY = 100;

const Collapse: React.FC<IProps> = ({
    className,
    classNameContainer,
    children,
    isOpened = false,
}) => {
    const canUpdate = React.useRef(false);
    const timer = React.useRef<number | undefined>(undefined);
    const rootNode = React.useRef<HTMLInputElement>(null);
    const [height, setHeight] = React.useState('0px');
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

    React.useEffect(() => {
        switch (true) {
            case !canUpdate.current && isOpened:
                setHeight('auto');
                break;
            case !canUpdate.current && !isOpened:
                setHeight('0px');
                break;
            case isOpened:
                animateSlide('auto', duration);
                break;
            default:
                animateSlide('0px', BROWSER_DELAY);
        }

        canUpdate.current = true;

        return (): void => clearTimeout(timer.current);
    }, [isOpened, duration]);

    return (
        <div
            className={className}
            style={{ overflow: 'hidden', height, transition }}
            ref={rootNode}
        >
            <div className={classNameContainer}>{children}</div>
        </div>
    );
};

export default Collapse;
