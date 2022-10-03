import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Chip.css';

export interface IChipProps {
    className?: string | string[];
    isChosen: boolean;
    onClick: () => void;
}

const cn = cnCreate('chip');
const Chip: React.FC<IChipProps> = ({
    className = '',
    isChosen = false,
    children,
    onClick,
}) => (
    <div
        className={cn('', { chosen: isChosen }, className)}
        onClick={onClick}
    >
        {children}
    </div>
);

export default Chip;
