import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import Chip from './Chip/Chip';
import './ChipsPanel.css';

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
    const [chosenChip, setChosenChip] = useState(0);

    const handleChipClick = (i: number) => () => {
        setChosenChip(i);
    };

    return (
        <div className={cn('', className)}>
            <div className={cn('panel')}>
                <div className={cn('wrap')}>
                    {data.map(({ title }, i) => (
                        <Chip
                            key={`${title} + ${i}`}
                            className={cn('chip')}
                            onClick={handleChipClick(i)}
                            isChosen={chosenChip === i}
                        >
                            {title}
                        </Chip>
                    ))}
                </div>
            </div>
            <div className={cn('content')}>
                {data[chosenChip].content}
            </div>
        </div>
    );
};

export default ChipsPanel;
