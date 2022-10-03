import React, { useState, useEffect, useMemo, useCallback } from 'react';
import cnCreate from 'utils/cnCreate';
import { usePopper } from 'react-popper';
import './Tooltip.css';

interface ITooltipProps {
  triggerElement: React.RefObject<HTMLElement>;
};

const cn = cnCreate('tooltip');
const Tooltip: React.FC<ITooltipProps> = ({ triggerElement, children }) => {
  const currentTrigger = triggerElement.current;

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(() => ({
    modifiers: [
        {
            name: 'arrow',
            options: { element: arrowElement },
        },
        {
            name: 'flip',
            options: {
                fallbackPlacements: ['left', 'right' , 'top' , 'bottom'],
            },
        },
        {
            name: 'eventListeners',
            options: {
                scroll: isOpen,
                resize: isOpen,
            },
        },
    ],
}), [ arrowElement, isOpen]);

  const { styles, attributes, update } = usePopper(currentTrigger, popperElement, options);

  useEffect(() => {
    update && update();
  }, [children, update]);

  const handleMouseEnter = useCallback((e: MouseEvent): void => {
    if (!isOpen) {
        setIsOpen(true);
    }
  }, [isOpen, setIsOpen]);

  const handleOutsideEvent = useCallback((e: MouseEvent): void => {
    const isTargetInPopper = e.target instanceof Element && popperElement && popperElement.contains(e.target);
    const isTargetInTrigger = e.target instanceof Element && currentTrigger && currentTrigger.contains(e.target);

    if (!isTargetInPopper && !isTargetInTrigger) {
        setIsOpen(false);
    }
  }, [currentTrigger, popperElement, setIsOpen]);

  useEffect(() => {
      currentTrigger && currentTrigger.addEventListener('mouseenter', handleMouseEnter);

      if (isOpen) {
          document.addEventListener('mouseover', handleOutsideEvent);
      } else {
          document.removeEventListener('mouseover', handleOutsideEvent);
      }
      return () => {
          currentTrigger && currentTrigger.removeEventListener('mouseenter', handleMouseEnter);
          document.removeEventListener('mouseover', handleOutsideEvent);
      };
  }, [
    isOpen, currentTrigger,
    handleOutsideEvent, handleMouseEnter,
  ]);

  return (
    <div className={cn('', { opened: isOpen })}>
      <div
        className={cn('inner')}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div
            ref={setArrowElement}
            className={cn('arrow')}
            style={styles.arrow}
        />
        <div className={cn('body')}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Tooltip;
