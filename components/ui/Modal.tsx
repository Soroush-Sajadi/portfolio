import React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose,
  children,
  isCloseButton = false,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity mb-16",
        {
          "opacity-100 pointer-events-auto": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="bg-white inline-grid rounded-lg shadow-lg p-6 z-10">
        {children}
        {isCloseButton && (
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};
