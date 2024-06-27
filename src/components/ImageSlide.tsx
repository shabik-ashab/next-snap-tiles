"use client";

import React from "react";
import { ImageData, Slide } from "./GetImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Tile } from "./Tile";

const ImageSlide = ({
  images,
  slideImages,
}: {
  images: ImageData[];
  slideImages: Slide[];
}) => {
  const [index, setIndex] = React.useState(-1);

  const handleClick = (index: number) => {
    setIndex(index);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-6">
        {images.map((image, index) => (
          <Tile
            key={image.id}
            image={image}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slideImages}
      />
    </div>
  );
};

export default ImageSlide;
