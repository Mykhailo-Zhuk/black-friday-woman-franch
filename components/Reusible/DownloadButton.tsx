import React from "react";

const DownloadButton = () => {
  return (
    <a
      href="/files/sample.pdf" // Path to your PDF file in the public directory
      download="sample.pdf" // Specify the download filename
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      Download PDF
    </a>
  );
};

export default DownloadButton;
