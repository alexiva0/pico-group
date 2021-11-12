import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Popup.css';
import Modal from 'react-modal';

type Props = {
    isOpened: boolean;
    isCloseButton?: boolean;
    isFullScreenMode?: boolean;
    onClose: () => void;
};

const cn = cnCreate('popup');
const Popup: React.FC<Props> = ({
    isOpened,
    isCloseButton = true,
    isFullScreenMode,
    onClose,
    children,
}) => {
    const renderCloseButton = (): JSX.Element => (
        <div className={cn('close')} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" className={cn('close-icon')}>
                <path d="M18.3002 5.71022C17.9102 5.32022 17.2802 5.32022 16.8902 5.71022L12.0002 10.5902L7.11022 5.70021C6.72022 5.31021 6.09021 5.31021 5.70021 5.70021C5.31021 6.09021 5.31021 6.72022 5.70021 7.11022L10.5902 12.0002L5.70021 16.8902C5.31021 17.2802 5.31021 17.9102 5.70021 18.3002C6.09021 18.6902 6.72022 18.6902 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C17.2802 18.6902 17.9102 18.6902 18.3002 18.3002C18.6902 17.9102 18.6902 17.2802 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z" />
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
