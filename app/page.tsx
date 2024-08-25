"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);
  // create the board
  // store the board in state
  // return the board
  // update the board
  // create game ticker
  // create game controls
  // create game rules
  // create a button to start the game
  return (
    <main className="h-screen w-screen flex justify-center bg-black-500">
      <h1 className="text-3xl text-center font-mono mt-4">Game of Life</h1>
    </main>
  );
}
