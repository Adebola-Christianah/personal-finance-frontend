import React, { ReactNode } from 'react';
import { X } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, modalTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-20 inset-0 flex justify-center items-center ">
      {/* Background overlay for modal */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black bg-opacity-50 z-40" 
      ></div>

      {/* Modal content */}
      <div className="bg-white p-8 rounded-lg shadow-xl md:w-[36%] w-[95%] z-50 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
         <X/>
        </button>
        <div className="text-gray-900 font-semibold text-base mb-4">{modalTitle}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
