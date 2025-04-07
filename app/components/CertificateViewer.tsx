// components/CertificateViewer.tsx
"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Image from "next/image";

type CertificateViewerProps = {
  fileUrl: string;
  fileType: "pdf" | "image";
};

const CertificateViewer = ({ fileUrl, fileType }: CertificateViewerProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (fileType === "pdf") {
    return (
      <div className="h-[70vh] w-full">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-50">
      <Image
        src={fileUrl}
        alt="Certificate"
        width={800}
        height={600}
        className="object-contain max-h-full max-w-full"
        quality={100}
      />
    </div>
  );
};

export default CertificateViewer;
