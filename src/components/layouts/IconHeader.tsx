import Image from "next/image";
import { useEffect, useState } from "react";

interface IconHeaderProps {
  isMobileOrTablet: boolean;
}

const IconHeader = ({ isMobileOrTablet }: IconHeaderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to desktop size until component mounts
  const src =
    mounted && isMobileOrTablet
      ? "/images/banner-logo.png"
      : "/images/bannerHeader.svg";
  const width = mounted && isMobileOrTablet ? 60 : 440;
  const height = mounted && isMobileOrTablet ? 50 : 67;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: mounted && isMobileOrTablet ? "50px" : "67px",
      }}
    >
      <Image
        src={src}
        alt={src}
        width={width}
        height={height}
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default IconHeader;
