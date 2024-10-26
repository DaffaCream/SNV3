"use client";
import Image from "next/image";
import background from "../../public/bg1.jpg";
import netflixlogo from "../../public/NetflixInitialLogo.png";
import { Play } from "solar-icon-set/videoaudiosound";
import { DangerCircle } from "solar-icon-set/essentionalui";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "./modal";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconSize, setIconSize] = useState(12); // Nilai awal
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIconSize(isSmallScreen ? 12 : 24);
  }, [isSmallScreen]);

  return (
    <Fragment>
      <section className="relative w-full h-56 md:h-3/4 lg:h-screen mb-3">
        <Image
          alt="background"
          src={background}
          className="lg:w-full lg:h-screen object-cover brightness-[60%] absolute top-0 left-0  -z-10"
        />
        <div className="relative h-[280px] md:h-[420px] lg:h-screen flex flex-col justify-center md:justify-center lg:justify-center gap-4 lg:gap-8 mx-5 lg:mt-0">
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 lg:gap-3 items-center">
              <Image
                src={netflixlogo}
                alt="netflix-logo"
                className="w-[14px] h-[28px] lg:w-[24px] lg:h-[38px]"
              />
              <h2 className="font-normal text-[14] lg:text-xl text-gray-300">
                NETPLIX
              </h2>
            </div>
            <h1 className="w-3/4 lg:w-1/2 ">Haloo Sayanggg👋🏻</h1>
            <p className="lg:w-1/2">
              art has always found a way <br />
              to speak to my heart <br />
              and you&apos;ve been my favorite piece.
            </p>
          </div>
          <div className="flex gap-x-3 mt-0 lg:mt-4">
            <button className=" bg-white " onClick={() => setShowModal(true)}>
              <Play color="#0f172a" size={iconSize} iconStyle="Bold" /> Play
            </button>
            {showModal && (
              <Modal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
              />
            )}

            <button className="bg-slate-800 text-white">
              <DangerCircle color="#ffff" size={iconSize} iconStyle="Linear" />{" "}
              More Info
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
