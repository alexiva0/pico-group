import React from 'react';
import cnCreate from 'utils/cnCreate';
import './ImageBox.css';

export interface IImageBoxProps {
    image: string;
    imgAlt?: string;
    footnote?: string;
    classes?: {
        root?: string;
        image?: string;
    };
}

const cn = cnCreate('image-box');
const ImageBox: React.FC<IImageBoxProps> = ({ image, imgAlt, footnote, classes = {} }) => {
    const alt = imgAlt ? imgAlt : footnote;

    return (
        <div className={cn('', {}, [classes.root])}>
            <img className={cn('image', {}, [classes.image])} alt={alt} src={image} />
            {footnote && (
                <div className={cn('footnote')}>
                    <p className={cn('text')}>{footnote}</p>
                </div>
            )}
        </div>
    );
};

export default ImageBox;
