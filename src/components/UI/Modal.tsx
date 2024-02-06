import { useRef, type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  className?: string;
  onClose: () => void;
  isOpen: boolean;
};

export const Modal = ({ children, className, onClose, isOpen }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (isOpen) {
      modal?.showModal();
    }
  }, [isOpen]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`bg-slate-900 backdrop:bg-backdrop m-auto max-w-md sm:max-w-lg md:max-w-4xl outline-none shadow-md ${
        className ? className : ''
      }`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById('modal')!
  );
};
