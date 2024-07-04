"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./page.css";

const animals = [
  {
    name: "dog",
    image: "/images/dog.png",
    name_ja_kana: "いぬ",
    name_en: "dog",
  },
  {
    name: "cat",
    image: "/images/cat.png",
    name_ja_kana: "ねこ",
    name_en: "cat",
  },
  {
    name: "cow",
    image: "/images/cow.png",
    name_ja_kana: "うし",
    name_en: "cow",
  },
  {
    name: "panda",
    image: "/images/panda.png",
    name_ja_kana: "パンダ",
    name_en: "panda",
  },
  {
    name: "elephant",
    image: "/images/elephant.png",
    name_ja_kana: "ぞう",
    name_en: "elephant",
  },
  {
    name: "rabbit",
    image: "/images/rabbit.png",
    name_ja_kana: "うさぎ",
    name_en: "rabbit",
  },
];

export default function Page() {
  const [currentAnimal, setCurrentAnimal] = useState(animals[0]);
  const [idx, setIdx] = useState(0);
  const lastClickTimeRef = useRef(0);
  const nodeRef = useRef(null);

  const handleTapOrSwipe = () => {
    console.log("Check!");
    const currentTime = Date.now();
    if (currentTime - lastClickTimeRef.current < 100) return;
    lastClickTimeRef.current = currentTime;
    setIdx(idx + 1 > animals.length - 1 ? 0 : idx + 1);
    setCurrentAnimal(animals[idx]);

    // const randomIndex = Math.floor(Math.random() * animals.length);
    // // 現在のアニマルと同じアニマルが出ていたら再度選択
    // if (currentAnimal.name === animals[randomIndex].name) {
    //   handleTapOrSwipe();
    // } else {
    //   setCurrentAnimal(animals[randomIndex]);
    // }
  };

  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden bg-red-100"
      onTouchStart={handleTapOrSwipe}
    >
      <div className="absolute top-0 left-0 m-4">
        <Link href="/">
          <button className="p-2 text-2xl text-slate-900">
            <FaArrowLeft />
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{currentAnimal.name_ja_kana}</h1>
        <p className="text-sm">{currentAnimal.name_en}</p>
        <TransitionGroup>
          <CSSTransition
            key={currentAnimal.name}
            timeout={500}
            classNames="fade"
            nodeRef={nodeRef}
          >
            <Image
              ref={nodeRef}
              src={currentAnimal.image}
              alt={currentAnimal.name}
              width={400}
              height={400}
              style={{
                width: "auto",
                height: "auto",
              }}
              priority={true}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
