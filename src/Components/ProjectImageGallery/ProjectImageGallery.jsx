import "./ProjectImageGallery.css"

import React, { useState, useEffect } from "react";

export default function ProjectImageGallery({ projectTag, imgCount }) {
  const sources = [];
  for (let i = 0; i < imgCount; i++) {
    sources.push(`images/projects/${projectTag}/${i}.webp`);
  }

  const [activeImage, setActiveImage] = useState(null);

  // Making sure that when focusing on an image from the gallery,
  // we cannot scroll until it is closed.
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };

  }, [activeImage]);

  return (
    <div className="project_image_gallery">
      {sources.map((src, index) => (
        <div className="gallery_img_wrp" key={index} onClick={() => setActiveImage(src)}>
          <img className="gallery_img" key={index} src={src} alt="" />
        </div>
      ))}
      {activeImage && (
        <div className="lightbox_overlay" onClick={() => setActiveImage(null)}>
          <button className="close_button" onClick={() => setActiveImage(null)}>&times;</button>
          <div className="lightbox_content" onClick={(e) => e.stopPropagation()} style={{aspectRatio: "1/1"}}>
            <img className="lightbox_img" src={activeImage} alt={activeImage} />
          </div>
        </div>
      )}
    </div>
  )
}