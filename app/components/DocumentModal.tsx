"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function DocumentModal() {
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
      {/* Trigger Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button
          onClick={() => openModal("cv")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View CV
        </button>

        <button
          onClick={() => openModal("resume")}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View Resume
        </button>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/75" aria-hidden="true" />

        {/* Full-screen container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-6xl h-[90vh] bg-white rounded-lg flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <Dialog.Title className="text-xl font-bold">
                {activeDoc ? documents[activeDoc].title : ""}
              </Dialog.Title>
              <div className="flex gap-2">
                <a
                  href={activeDoc ? documents[activeDoc].url : "#"}
                  download={activeDoc ? documents[activeDoc].downloadName : ""}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Download
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              {activeDoc && (
                <iframe
                  src={`${documents[activeDoc].url}#view=fitH`}
                  className="w-full h-full border-0"
                  title={documents[activeDoc].title}
                />
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
