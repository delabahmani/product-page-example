import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  thumbnails: string[];
};

const Carousel = ({ images, thumbnails }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeImage, setActiveImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [isModalHovered, setIsModalHovered] = useState<number | null>(null);
  const [isDesktopHovered, setIsDesktopHovered] = useState<number | null>(null);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="flex w-full select-none flex-col items-center lg:w-1/2">
      <div className="flex items-center lg:w-full lg:flex-col lg:justify-center">
        <div
          className="relative left-14 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border-2 border-neutral-white bg-neutral-white lg:left-0 lg:hidden"
          onClick={() =>
            setCurrentImage((prev) =>
              currentImage > 0 ? prev - 1 : images.length - 1,
            )
          }
        >
          <img
            src="/assets/icon-previous.svg"
            alt=""
            className="h-[10px] w-[8px]"
          />
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            className="w-screen lg:w-auto"
            key={currentImage}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img
              className="mx-auto h-[300px] w-screen cursor-pointer object-cover lg:h-[500px] lg:w-auto lg:rounded-xl"
              onClick={() => {
                if (isDesktop) {
                  setActiveImage(true);
                  setSelectedImage(currentImage);
                }
              }}
              width={1400}
              height={1400}
              src={images[currentImage]}
              alt=""
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="relative right-14 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border-2 border-neutral-white bg-neutral-white lg:hidden"
          onClick={() =>
            setCurrentImage((prev) =>
              currentImage == images.length - 1 ? 0 : prev + 1,
            )
          }
        >
          <img
            src="/assets/icon-next.svg"
            alt=""
            className="h-[10px] w-[8px] "
          />
        </div>

        {isDesktop && (
          <div className="mt-4 flex justify-center space-x-4 lg:mt-9 lg:space-x-6">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="relative h-20 w-20 cursor-pointer lg:h-[95px] lg:w-[95px]"
                onClick={() => setCurrentImage(index)}
                onMouseEnter={() => setIsDesktopHovered(index)}
                onMouseLeave={() => setIsDesktopHovered(null)}
              >
                <img
                  src={thumbnail}
                  alt="thumbnails of sneakers"
                  className="thumbnail h-full w-full rounded-lg object-cover"
                />
                {(index === isDesktopHovered || index === currentImage) && (
                  <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 z-20 rounded-lg bg-neutral-white opacity-60"></div>
                )}

                {index === currentImage && (
                  <div className="absolute inset-0 z-20 rounded-lg border-2 border-orange-neutral"></div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeImage && isDesktop && (
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-neutral-black bg-opacity-70">
            <div className="relative  rounded-lg p-4">
              <button onClick={() => setActiveImage(false)}>
                <img
                  src="/assets/icon-close.svg"
                  alt=""
                  className="filter-close absolute -top-1 right-4 h-[22px] w-[22px]"
                />
              </button>

              <div className="relative flex items-center">
                <button
                  className="absolute -left-5 flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-2 border-neutral-white bg-neutral-white"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      selectedImage > 0 ? prev - 1 : images.length - 1,
                    )
                  }
                >
                  <img
                    src="/assets/icon-previous.svg"
                    alt=""
                    className="filter-next mr-1 h-[16px] w-[13px]"
                  />
                </button>

                <img
                  src={images[selectedImage]}
                  alt=""
                  className="w-[550px] rounded-2xl"
                />

                <button
                  className="absolute -right-5 flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-2 border-neutral-white bg-neutral-white "
                  onClick={() =>
                    setSelectedImage((prev) =>
                      selectedImage == images.length - 1 ? 0 : prev + 1,
                    )
                  }
                >
                  <img
                    src="/assets/icon-next.svg"
                    alt=""
                    className="filter-next ml-1 h-[16px] w-[13px]"
                  />
                </button>
              </div>

              <div className="mt-4 flex justify-center space-x-7">
                {thumbnails.map((thumbnail, index) => (
                  <div
                    key={index}
                    className="relative h-20 w-20 cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                    onMouseEnter={() => setIsModalHovered(index)}
                    onMouseLeave={() => setIsModalHovered(null)}
                  >
                    <img
                      src={thumbnail}
                      alt="thumbnails of sneakers"
                      className={`thumbnail h-full w-full rounded-lg object-cover`}
                    />
                    {(index === isModalHovered || index === selectedImage) && (
                      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-lg bg-neutral-white opacity-50"></div>
                    )}
                    {index === selectedImage && (
                      <div className="absolute inset-0 z-20 rounded-lg border-2 border-orange-neutral"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
