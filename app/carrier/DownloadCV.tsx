"use client";
import React, { useEffect, useState } from "react";

export const DownloadCV = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(`${window.location.protocol}//${window.location.host}`);
    }
  }, []);

  return (
    <div className="column text-center mb-24">
      <a href={`${baseUrl}/CV.pdf`} download>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Download CV as PDF
        </button>
      </a>
    </div>
  );
};
