import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Chip from './Chip/Chip';
import './ChipsPanel.css';

const MOBILE_DISPLAYED_CHIP_NUMBER = 7;

interface IContent {
    title: number | string;
    content: JSX.Element | JSX.Element[];
}

export interface IChipsPanelProps {
    className?: string | string[];
    data: IContent[];
}

const cn = cnCreate('chips-panel');
const ChipsPanel: React.FC<IChipsPanelProps> = ({
    className = '',
    data,
}) => {
    const { isMobile } = useAppContext();
    const [chosenChip, setChosenChip] = useState(0);
    const mobileDisplayedChipData = data.slice(0, MOBILE_DISPLAYED_CHIP_NUMBER - 1);
    const mobileWrappedChipData = data.slice(MOBILE_DISPLAYED_CHIP_NUMBER - 1);

    const handleChipClick = (i: number) => () => {
        setChosenChip(i);
    };

    const renderDesktopRow = () => (
        data.map(({ title }, i) => (
            <Chip
                key={`${title} + ${i}`}
                className={cn('chip')}
                onClick={handleChipClick(i)}
                isChosen={chosenChip === i}
            >
                {title}
            </Chip>
        ))
    );

    const renderMobileRow = () => (
        <>
            {mobileDisplayedChipData.map(({ title }, i) => (
                <Chip
                    key={`${title} + ${i}`}
                    className={cn('chip')}
                    onClick={handleChipClick(i)}
                    isChosen={chosenChip === i}
                >
                    {title}
                </Chip>
            ))}
            <Chip
                data={mobileWrappedChipData}
                className={cn('chip')}
                onClick={handleChipClick(MOBILE_DISPLAYED_CHIP_NUMBER)}
                isChosen={chosenChip === MOBILE_DISPLAYED_CHIP_NUMBER}
            >
                Earlier
            </Chip>
        </>
    );

    return (
        <div className={cn('', className)}>
            <div className={cn('panel')}>
                <div className={cn('wrap')}>
                    {isMobile ? renderMobileRow() : renderDesktopRow()}
                </div>
            </div>
            <div className={cn('content')}>
                {data[chosenChip].content}
            </div>
        </div>
    );
};

export default ChipsPanel;
