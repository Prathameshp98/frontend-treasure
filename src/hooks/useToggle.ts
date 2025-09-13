import { useState, useCallback } from 'react';

interface UseToggleReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const useToggle = (initialValue = false): UseToggleReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useToggle;
