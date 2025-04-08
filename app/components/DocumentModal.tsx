"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

type DocumentModalProps = {
  triggerType?: "button" | "link" | "dropdown" | "none";
  buttonStyle?: "primary" | "secondary" | "text";
  buttonText?: string;
  placement?: "navbar" | "footer" | "hero" | "about";
};

export default function DocumentModal({
  triggerType = "button",
  buttonStyle = "primary",
  buttonText = "View Documents",
  placement = "about",
}: DocumentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<"cv" | "resume" | null>(null);

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

  // Styling based on placement and type
  const getButtonClass = () => {
    if (buttonStyle === "secondary") {
      return "px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700";
    }
    if (buttonStyle === "text") {
      return "text-current hover:text-blue-600";
    }
    // Default primary
    return "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700";
  };

  return (
    <>
      {/* Conditional Trigger Rendering */}
      {triggerType !== "none" && (
        <div
          className={`inline-flex ${
            placement === "navbar" ? "relative group" : ""
          }`}
        >
          {triggerType === "dropdown" ? (
            <>
              <button
                className={`${getButtonClass()} bg-gray-800 text-white p-2 hover:bg-gray-700 rounded-full`}
              >
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute right-0 mt-8 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                  placement === "navbar" ? "hidden group-hover:block" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setActiveDoc("cv");
                    setIsOpen(true);
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left"
                >
                  View CV
                </button>
                <button
                  onClick={() => {
                    setActiveDoc("resume");
                    setIsOpen(true);
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left"
                >
                  View Resume
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-y-2 hidden md:block">
              <div>
                <button
                  onClick={() => {
                    setActiveDoc("cv");
                    setIsOpen(true);
                  }}
                  className={`${getButtonClass()} w-full text-left justify-between`}
                >
                  <span>View CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setActiveDoc("resume");
                    setIsOpen(true);
                  }}
                  className={`${getButtonClass()} w-full text-left justify-between`}
                >
                  <span>View Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal (Reusable across all placements) */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[1000]"
      >
        <div
          className="fixed inset-0 bg-black/75 z-[1000]"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-[1001]">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-[95vw] h-[95vh] bg-white rounded-lg flex flex-col shadow-2xl">
              <div className="flex justify-between items-center p-3 border-b">
                <Dialog.Title className="text-xl font-bold">
                  {activeDoc ? documents[activeDoc].title : ""}
                </Dialog.Title>
                <div className="flex gap-2">
                  <a
                    href={activeDoc ? documents[activeDoc].url : "#"}
                    download={
                      activeDoc ? documents[activeDoc].downloadName : ""
                    }
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </div>
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
        </div>
      </Dialog>
    </>
  );
}
