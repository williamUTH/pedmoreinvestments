import { useState } from "react";

export default function GridView({ item, col }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = item.images || [item.img];
  const isHayseech = item?.id === 2 || item?.id === 5 || item?.id === 7;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className={col}>
        <div className="project-item">
          <div className="project-thumb project-gallery">
            <div
              className={`gallery-container${
                isHayseech ? " fit-contain-with-bars" : ""
              }`}
            >
              <img
                src={`/assets/img/project/${images[currentImageIndex]}`}
                alt={`${item.title} - Image ${currentImageIndex + 1}`}
                style={
                  isHayseech
                    ? { width: "100%", height: "100%", objectFit: "contain" }
                    : undefined
                }
              />
              {images.length > 1 && (
                <>
                  <button className="gallery-nav prev" onClick={prevImage}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="gallery-nav next" onClick={nextImage}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <div className="gallery-dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`gallery-dot ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                  <div className="gallery-counter">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="project-content">
            <h3 className="title">{item.title}</h3>
            <div className="project-details">
              {item.units && (
                <div className="detail-item">
                  <strong>Units:</strong> {item.units}
                </div>
              )}
              {item.description && (
                <div className="detail-item">
                  <strong>Description:</strong> {item.description}
                </div>
              )}
              {item.size && (
                <div className="detail-item">
                  <strong>Size:</strong> {item.size}
                </div>
              )}
              {item.siteSize && (
                <div className="detail-item">
                  <strong>Site Size:</strong> {item.siteSize}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
