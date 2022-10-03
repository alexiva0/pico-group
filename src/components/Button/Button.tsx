import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Button.css';

export interface IButtonProps {
    className?: string | string[];
    href?: string;
    disabled?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const cn = cnCreate('button');
const Button: React.FC<IButtonProps> = ({
    className = '',
    href,
    disabled,
    children,
    onClick,
}) => {
    const ElementType = href ? 'a' : 'button';

    const handleClick = React.useCallback((e: React.SyntheticEvent<EventTarget>): void => {
        if (disabled) {
            e.preventDefault();

            return;
        }

        onClick && onClick(e);
    }, [disabled, onClick]);

    return (
        <ElementType
            type="button"
            className={cn({
                disabled,

            }, className)}
            onClick={handleClick}
            href={href}
            target={href ? '_self' : undefined}
            disabled={!href && disabled}
        >
            <div className={cn('inner')}>
                {children}
            </div>
        </ElementType>
    );
};

export default Button;
