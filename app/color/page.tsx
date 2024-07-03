"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const colors = [
    "red",
    "pink",
    "orange",
    "yellow",
    "green",
    "lightblue",
    "blue",
    "brown",
    "black",
    "white",
  ];
  const [color, setColor] = useState("");

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-0 left-0 m-4">
        <Link href="/">
          <button className="p-2 bg-green-500 text-white rounded">
            もどる
          </button>
        </Link>
      </div>

      <button
        onClick={changeBackgroundColor}
        className="p-2 bg-blue-500 text-white rounded animate-bounce"
      >
        いろをかえる
      </button>
    </div>
  );
}
