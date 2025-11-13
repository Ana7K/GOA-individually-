import gsap from "gsap";
import { useRef, type MouseEvent } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorners";
import { storyItems } from "../constants";

const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    // ############ only test purpose start #############
    const { width, height, left, top } = element.getBoundingClientRect();

    // ############ only test purpose end ###############

    // const rect = element.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          {storyItems.title}
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title={storyItems.animatedTitle}
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src={storyItems.img}
                  alt={storyItems.alt}
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              {storyItems.paragraph}
            </p>

            <Button
              id={storyItems.buttonId}
              title={storyItems.buttonTitle}
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
