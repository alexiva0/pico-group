import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Popup.css';
import Modal from 'react-modal';

interface IPopupProps {
    isOpened: boolean;
    isCloseButton?: boolean;
    isFullScreenMode?: boolean;
    onClose: () => void;
};

const cn = cnCreate('popup');
const Popup: React.FC<IPopupProps> = ({
    isOpened,
    isCloseButton = true,
    isFullScreenMode,
    onClose,
    children,
}) => {
    const renderCloseButton = (): JSX.Element => (
        <div className={cn('close')} onClick={onClose}>
            <svg width="30" height="30" viewBox="0 0 30 30" className={cn('close-icon')}>
                <path d="M26 4L4 26" stroke="#E7E7E7" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                <path d="M4 4L26 26" stroke="#E7E7E7" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );

    return (
        <Modal
            className={cn('content')}
            portalClassName={cn({
                opened: isOpened,
                full: isFullScreenMode,
            })}
            overlayClassName={cn('overlay')}
            bodyOpenClassName="popup-open"
            isOpen={isOpened}
            onRequestClose={onClose}
            ariaHideApp={false}
            contentLabel="screen"
        >
            <>
                <div className={cn('tile')}>
                    {isCloseButton && renderCloseButton()}
                    <div className={cn('wrap')}>
                        {children}
                    </div>
                </div>
                <div className={cn('background')} onClick={onClose} />
            </>
        </Modal>
    );
};

export default Popup;
