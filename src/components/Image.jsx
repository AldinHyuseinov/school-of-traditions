import { useEffect, useState } from "react";
import "../assets/css/image.css";

export default function Image(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") handleClose();
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  return (
    <>
      <img src={props.image} alt={props.alt} onClick={handleImageClick} className="thumbnail" />

      {isOpen && (
        <div className={`overlay ${isClosing ? "fade-out" : "fade-in"}`} onClick={handleClose}>
          <img
            src={props.image}
            alt={props.alt}
            className={`full-image ${isClosing ? "shrink-out" : "zoom-in"}`}
          />
        </div>
      )}
    </>
  );
}
