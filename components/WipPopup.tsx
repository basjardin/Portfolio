"use client";

import { useState, useCallback } from "react";

export default function WipPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const handleClose = useCallback(() => {
    setIsActive(false);
    setTimeout(() => setIsOpen(false), 400);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`popup-overlay ${isActive ? "active" : ""}`}
      onClick={handleOverlayClick}
      onKeyDown={(e) => e.key === "Escape" && handleClose()}
      role="dialog"
      aria-label="Site en travaux"
    >
      <div className="popup-card">
        <div className="icon-container">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl">Site en Travaux</h2>
        <p className="text-base">
          Ce site est actuellement en cours de développement. <br />
          Certaines fonctionnalités peuvent ne pas être totalement terminées.
        </p>
        <button type="button" className="popup-button text-base" onClick={() => handleClose()}>
          Continuer la visite
        </button>
      </div>
    </div>
  );
}
