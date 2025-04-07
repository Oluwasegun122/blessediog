// components/PDFViewer.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type PDFViewerProps = {
  fileUrl: string;
  type: "pdf" | "image";
};

export default function PDFViewer({ fileUrl, type }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (type === "pdf") {
      // Create object URL for PDF
      const fetchPdf = async () => {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        setPdfUrl(URL.createObjectURL(blob));
      };
      fetchPdf();
    }
  }, [fileUrl, type]);

  if (type === "image") {
    return (
      <div className="flex justify-center items-center h-full">
        <Image
          src={fileUrl}
          alt="Certificate"
          width={800}
          height={600}
          className="object-contain max-h-full"
          quality={100}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {pdfUrl ? (
        <iframe
          src={`${pdfUrl}#view=fitH`}
          className="w-full h-full border-none"
          title="PDF Viewer"
        />
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading PDF...</p>
        </div>
      )}
    </div>
  );
}
