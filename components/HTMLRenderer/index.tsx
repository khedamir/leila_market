import React from "react";

interface HTMLRendererProps {
  htmlContent: string;
}

function HTMLRenderer({ htmlContent }: HTMLRendererProps) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HTMLRenderer;
