"use client";

import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";
import { ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const DialogModule = ({ isOpen, onClose, title, children }: DialogProps) => {
  useDisableBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Dialog Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md mx-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-6">{children}</div>
        <div className="flex justify-center items-center">
          <button
            onClick={onClose}
            className="py-2 px-4 text-xs text-black font-semibold rounded-md hover:underline">
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogModule;
