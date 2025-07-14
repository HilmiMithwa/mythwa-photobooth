import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

export default function Frame2() {
  const themes = {
    classic: {
      name: 'Classic',
      bg: 'bg-gray-100',
      border: 'border-black',
      shadow: 'shadow-md'
    }
  };

  const [capturedImages, setCapturedImages] = useState([]);
  const webCamRef = useRef(null);
  const maxFrames = 4;

  const capturePhoto = () => {
    if (webCamRef.current && capturedImages.length < maxFrames) {
      const imageSrc = webCamRef.current.getScreenshot();
      setCapturedImages([...capturedImages, imageSrc]);
    }
  };

  const frameStyle = themes.classic;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
        <div id="webcam-container" className="rounded-lg overflow-hidden border shadow-md">
          <Webcam
            audio={false}
            ref={webCamRef}
            screenshotFormat="image/jpeg"
            className="rounded"
            width={320}
            height={240}
          />
        </div>
        <button
          onClick={capturePhoto}
          disabled={capturedImages.length >= maxFrames}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {capturedImages.length < maxFrames ? "Capture" : "Frame Penuh"}
        </button>

        <div className={`grid grid-cols-1 grid-rows-4 gap-2 p-4 rounded-xl border-4 w-full max-w-xs ${frameStyle.bg} ${frameStyle.border} ${frameStyle.shadow}`}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center">
              {capturedImages[index] ? (
                <img src={capturedImages[index]} alt={`Captured ${index + 1}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Kosong</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}