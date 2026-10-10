import { useEffect } from "react";

export default function VideoModal({ videoUrl, onClose }) {
  useEffect(() => {
    if (!videoUrl) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoUrl, onClose]);

  if (!videoUrl) return null;

  return (
    <div
      className="modal active"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Visualização do projeto"
      >
        <button
          className="close-modal"
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          &times;
        </button>
        <div className="video-container">
          <iframe
            src={videoUrl}
            title="Demonstração do projeto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
