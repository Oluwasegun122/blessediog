"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function DocumentModal({
  triggerStyle = "button", // 'button' or 'link'
  buttonText = "View Documents", // Custom button text
}: {
  triggerStyle?: "button" | "link";
  buttonText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<"cv" | "resume" | null>(null);

  const openModal = (docType: "cv" | "resume") => {
    setActiveDoc(docType);
    setIsOpen(true);
  };

  const documents = {
    cv: {
      title: "Curriculum Vitae",
      url: "/documents/Faith_Obajafa_CV.pdf",
      downloadName: "Faith_Obajafa_CV.pdf",
    },
    resume: {
      title: "Professional Resume",
      url: "/documents/Faith_Obajafa_Resume.pdf",
      downloadName: "Faith_Obajafa_Resume.pdf",
    },
  };

  return (
    <>
      {/* Navbar Trigger - Simple Link Version */}
      {triggerStyle === "link" ? (
        <div className="relative group">
          <button
            onClick={() => openModal("cv")}
            className="text-white hover:text-blue-300 px-3 py-2"
          >
            {buttonText}
          </button>

          {/* Optional dropdown for direct access */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
            <button
              onClick={() => openModal("cv")}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left"
            >
              View CV
            </button>
            <button
              onClick={() => openModal("resume")}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left"
            >
              View Resume
            </button>
          </div>
        </div>
      ) : (
        /* Original Button Triggers */
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => openModal("cv")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            View CV
          </button>
          <button
            onClick={() => openModal("resume")}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center"
          >
            View Resume
          </button>
        </div>
      )}

      {/* Modal (same as before) */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[1000]"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/75 z-[1000]"
          aria-hidden="true"
        />

        {/* Full-screen container */}
        <div className="fixed inset-0 z-[1001]">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-[95vw] h-[95vh] bg-white rounded-lg flex flex-col shadow-2xl">
              {/* Modal content remains the same */}
              {/* ... */}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
