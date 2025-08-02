"use client";

import Image from "next/image";

const BannerLink = ({ src, image, title, width, height }) => {
  return (
    <Link
      className={` md:hidden lg:block z-50 rounded-lg  w-72 h-auto border-4 border-secondary`}
      href={src}
      title={title}
    >
      <Image
        src={image}
        alt="Endpoint Code"
        width={width ? width : 1000}
        height={height ? height : 1000}
        className="object-cover relative"
      />
    </Link>
  );
};

export default BannerLink;
