import React, { useState } from 'react';
import useAppContext from 'hooks/useAppContext';
import Collapse from 'components/Collapse/Collapse';
import cnCreate from 'utils/cnCreate';
import './ImageBox.css';

export interface IImageBoxProps {
    image: string;
    imgAlt?: string;
    footnoteText?: string;
    isFootnoteCollapsed?: boolean;
    classes?: {
        root?: string;
        image?: string;
    };
}

const cn = cnCreate('image-box');
const ImageBox: React.FC<IImageBoxProps> = ({
    image,
    imgAlt,
    footnoteText,
    isFootnoteCollapsed = false,
    classes = {},
}) => {
    const { isMobileWide, isMobile } = useAppContext();
    const [isNoteOpened, setNoteOpened] = useState(false);
    const alt = imgAlt ? imgAlt : footnoteText;
    const initialFootnoteHeight = isMobile ? 36 : 50;

    const handleTextHover = () => {
        !isMobileWide && setNoteOpened(true);
    };

    const handleTextUnhover = () => {
        !isMobileWide && setNoteOpened(false);
    };

    const handleTextClick = () => {
        isMobileWide && setNoteOpened(!isNoteOpened);
    };

    const renderFootnote = () => (
        isFootnoteCollapsed ? (
            <div
                className={cn('footnote', { unfolded: isNoteOpened })}
                onClick={handleTextClick}
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextUnhover}
            >
                <Collapse initialHeight={initialFootnoteHeight} isOpened={isNoteOpened}>
                    <p className={cn('text')}>{footnoteText}</p>
                </Collapse>
            </div>
        ) : (
            <div className={cn('footnote')}>
                <p className={cn('text')}>{footnoteText}</p>
            </div>
        )
    );

    return (
        <div className={cn('', { 'footnote-collapsed': isFootnoteCollapsed }, [classes.root])}>
            <img className={cn('image', {}, [classes.image])} alt={alt} src={image} />
            {footnoteText && renderFootnote()}
        </div>
    );
};

export default ImageBox;
