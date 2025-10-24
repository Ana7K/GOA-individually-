import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [isOpen, children]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-content">
        {children}
        <button className="close-modal" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
}