import React from 'react';

type Props = {
  image: {
    src: string;
    alt: string;
  };
};
export const ImagePreview: React.FC<Props> = ({ image: { src, alt } }) => {
  return (
    <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex center justify-center">
      <img className="object-cover" src={src} alt={alt} />
    </div>
  );
};
