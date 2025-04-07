"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

type CertificateViewerProps = {
  fileUrl: string;
};

const CertificateViewer = ({ fileUrl }: CertificateViewerProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: "750px" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default CertificateViewer;
