"use client";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export const Carousel = () => {
  const [data, setData] = useState([]);
  //   console.log(data);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://v1.appbackend.io/v1/rows/xRv80uDqDgtX",
          {
            cache: "no-store",
          }
        );
        const { data } = await result.json();
        setData(data);
      } catch (error) {
        console.error("Error fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Slider {...settings}>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div className="relative" key={item.id}>
              <Image
                src={item.attachment}
                alt="thumbnail"
                width={340}
                height={219}
                className="rounded-md md:hover:scale-125 md:hover:rotate-5 md:transition-all md:duration-300 lg:hover:scale-125 lg:hover:rotate-5 lg:transition-all lg:duration-300"
              />
            </div>
          );
        })}
    </Slider>
  );
};
