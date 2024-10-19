import { useState } from "react";
import Images from "../components/images";
import MainLayout from "../components/mainLayout";
import SwiperCarousel from "../components/swiperCarousel";
import { useInView, motion } from "framer-motion";

const IMAGES = [
  {
    id: 1,
    url: "/images/std-1.jpg",
  },
  {
    id: 2,
    url: "/images/std-2.jpg",
  },
  {
    id: 3,
    url: "/images/std-3.jpg",
  },
  {
    id: 4,
    url: "/images/std-4.jpg",
  },
  {
    id: 5,
    url: "/images/std-5.jpg",
  },
  {
    id: 6,
    url: "/images/std-6.jpg",
  },
  {
    id: 7,
    url: "/images/std-7.jpg",
  },
  {
    id: 8,
    url: "/images/std-8.jpg",
  },
  {
    id: 9,
    url: "/images/std-9.jpg",
  },
  {
    id: 10,
    url: "/images/std-10.jpg",
  },
  {
    id: 11,
    url: "/images/std-11.jpg",
  },
  {
    id: 12,
    url: "/images/std-12.jpg",
  },
  {
    id: 13,
    url: "/images/std-13.jpg",
  },
  {
    id: 14,
    url: "/images/std-14.jpg",
  },

];

export default function Memorable({
  windowWidth,
  refImage,
}: {
  windowWidth: number;
  refImage: React.RefObject<HTMLHeadingElement>;
}) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const text1 = useInView(refImage, { margin: "-100px 0px", once: true });
  return (
    <>
      <MainLayout className="gap-10">
        <h1 ref={refImage} className="latin-25 text-center relative">
          Nosotros
          <motion.span
            animate={text1 ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="bg-white absolute top-0 -right-3 w-full h-full origin-right"
          />
        </h1>

        <div className="flex flex-col gap-5 z-10">
          {IMAGES.map((image, i) => (
            <Images
              onClick={() => setImageIndex(i)}
              url={image.url}
              id={i}
              key={i}
            />
          ))}
        </div>
      </MainLayout>
      {imageIndex !== null && (
        <SwiperCarousel
          windowWidth={windowWidth}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          IMAGES={IMAGES}
        />
      )}
    </>
  );
}
