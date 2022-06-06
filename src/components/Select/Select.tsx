import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Select.css';
import cnCreate from 'utils/cnCreate';

export interface ISelectProps {
    label?: string;
    labelId?: string;
    currentValue?: string;
    isDisabled?: boolean;
    required?: boolean;
    placeholder?: string;
    items: string[];
    className?: string;
    onSelect?: (
        e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, dataItem: string,
    ) => void;
    onOpened?: () => void;
    onClosed?: () => void;
}

const cn = cnCreate('select');
const Select: React.FC<ISelectProps> = ({
    label,
    labelId,
    currentValue,
    isDisabled,
    required,
    placeholder,
    items,
    className,
    onSelect,
    onOpened,
    onClosed,
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (isOpened) {
            document.addEventListener('click', handleClickOutside);
            // document.addEventListener('click', handleOpened);
        } else {
            document.removeEventListener('click', handleClickOutside);
            // document.addEventListener('click', handleClosed);
        }
    }, [isOpened]);

    // const handleOpened = () => {
    //     onOpened && onOpened();
    // };

    // const handleClosed = () => {
    //     onClosed && onClosed();
    // };

    const handleClickOutside = (e: MouseEvent): void => {
        // if (e.target instanceof Node && selectNode.contains(e.target) || !isOpened) {
        //     return;
        // }

        // setIsOpened(false) , () => {
        //     if (!this.state.isOpened) {
        //         this.handleClosed();
        //     }
        // });
    };

    const handleOpenDropdown = (): void => {
        setIsOpened(!isOpened);
    };

    const handleSelectItem = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void => {
        // const currentItem = items[activeIndex].value;
        // const item = items.find(elem => elem.value === currentItem);

        // if (!item) {
        //     return;
        // }

        setIsOpened(false);
        // onSelect && onSelect(e, item);
        // handleClosed();
    };

    const handleHoverItem = (index: number) => (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();

        setActiveIndex(index);
    };


    // handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): boolean => {
    //     const { activeIndex, isOpened, filteredItems } = this.state;
    //     const { isDisabled } = this.props;

    //     if (filteredItems.length === 0 || isDisabled) {
    //         return true;
    //     }

    //     if (e.key === 'ArrowDown' && isOpened && activeIndex < filteredItems.length - 1) {
    //         this.setState({ activeIndex: activeIndex + 1 }, () => {
    //             this.scrollList(this.state.activeIndex);
    //         });

    //         e.preventDefault();

    //         return false;
    //     }
    //     if (e.key === 'ArrowUp' && isOpened && activeIndex > 0) {
    //         this.setState((prevState) => ({ activeIndex: prevState.activeIndex - 1 }), () => {
    //             this.scrollList(this.state.activeIndex);
    //         });

    //         e.preventDefault();

    //         return false;
    //     }
    //     if (e.key === 'Enter' && isOpened) {
    //         this.handleSelectItem(e);

    //         return false;
    //     }
    //     if (e.key === 'Enter' && !isOpened) {
    //         this.setState({ isOpened: true });
    //         this.handleOpened();

    //         return false;
    //     }
    //     if (e.key === 'Tab') {
    //         this.setState({ isOpened: false });

    //         return false;
    //     }

    //     return true;
    // }

    // scrollList(activeIndex: number): void {
    //     if (!this.itemsNodeList) {
    //         return;
    //     }

    //     const wrapper = this.itemWrapperNode;
    //     const wrapperScroll = wrapper.scrollTop;
    //     const wrapperHeight = wrapper.offsetHeight;

    //     const item = this.itemsNodeList[activeIndex];

    //     if (!item) {
    //         return;
    //     }

    //     const itemOffset = item.offsetTop;
    //     const itemHeight = item.offsetHeight;

    //     if (itemOffset + itemHeight > wrapperScroll + wrapperHeight) {
    //         wrapper.scrollTop = itemOffset + itemHeight - wrapperHeight;
    //     }

    //     if (itemOffset < wrapperScroll) {
    //         wrapper.scrollTop = itemOffset;
    //     }
    // }


    const getItemWrapper = useRef<HTMLElement | null>(null);
    const getSelectNode = useRef<HTMLElement | null>(null);
    // const getNodeList = useRef<HTMLElement | null>(null);

    // renderTitle() {
    //     const { placeholder, items, currentValue } = this.props;
    //     const item = items.find(elem => elem.value === currentValue);
    //     let inputTitle: string | JSX.Element | Element | undefined = placeholder;

    //     if (item && item.title) {
    //         inputTitle = item.selectedView ? item.selectedView : item.title;
    //     }

    //     return (

    //     );
    // }

    const renderChildren = () => {
        return (
            <div className={cn('list')}>
                <div className={cn('list-inner')}>
                {/* <div className={cn('list-inner')} ref={getItemWrapper}> */}
                    {items.map((item, i) => (
                        <div
                            className={cn('list-item', {
                                active: activeIndex === i,
                            })}
                            key={`${i}_${item}`}
                            onClick={handleSelectItem}
                            onMouseEnter={handleHoverItem(i)}
                            // ref={this.getNodeList}
                        >
                            <div className={cn('item-title')}>
                                {item}
                            </div>
                        </div>
                    ))}
                    {/* {type === SelectTypes.COMBOBOX && !currentItems.length && (
                        <div className={cn('not-found')}>{notFoundText}</div>
                    )} */}
                </div>
            </div>
        );
    };

    return (
        <div
            className={cn({
                open: isOpened,
                disabled: isDisabled,
            }, className)}
            // ref={this.getSelectNode}
        >
            <div className={cn('inner')}>
                {label && (
                    <label htmlFor={labelId}>
                        {label}
                        {required && <span className={cn('require-mark')}>*</span>}
                    </label>
                )}
                <div
                    className={cn('control')}
                    // onKeyDown={this.handleKeyDown}
                >
                    <div
                        className={cn('title', {
                            placeholder: !!placeholder && !currentValue,
                        })}
                        tabIndex={0}
                        onClick={handleOpenDropdown}
                    >
                        <div className={cn('title-inner')}>
                            {!!placeholder && !currentValue}
                        </div>
                    </div>
                    <div className={cn('icon-box')} tabIndex={1} onClick={handleOpenDropdown}>
                        <svg width="30" height="30" viewBox="0 0 30 30" className={cn('icon')}>
                            <path d="M4 10L15 21L26 10" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                {renderChildren()}
            </div>
        </div>
    );
};

export default Select;
