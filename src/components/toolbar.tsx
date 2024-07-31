import React, { useState } from "react";
import { Bold, Italic, Underline } from "lucide-react";

interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onBold, onItalic, onUnderline }) => {
  return (
    <div className="flex gap-2">
      <button onClick={onBold} className="text-gray-400 hover:text-gray-600">
        <Bold />
      </button>
      <button onClick={onItalic} className="text-gray-400 hover:text-gray-600">
        <Italic />
      </button>
      <button
        onClick={onUnderline}
        className="text-gray-400 hover:text-gray-600"
      >
        <Underline />
      </button>
    </div>
  );
};

export default Toolbar;
