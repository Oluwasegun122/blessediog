"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
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
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Image
        src={fileUrl}
        alt="Certificate"
        width={1200}
        height={800}
        className="object-contain h-full w-auto"
        quality={100}
      />
    </div>
  );
};

export default CertificateViewer;
