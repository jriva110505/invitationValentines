"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);

  const handleYesClick = () => {
    router.push("/hobbies");
  };

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const messages = [
    "CAN YOU BE MY VALENTINES DATE?? 💖",
    "WAIT… WHAT? 😳",
    "PLEASE SAY YES 😢",
    "OKAY NOW YOU'RE BREAKING MY HEART 💔",
    "THIS IS GETTING PAINFUL 😭",
    "YOU HAVE NO CHOICE NOW 😈",
  ];

  const images = [
    "/marry.jpg",
    "/waitwhat.jpg",
    "/please.jpg",
    "/sad.jpg",
    "/last.jpg",
    "/taray.jpg",
  ];

  const currentIndex = Math.min(noCount, messages.length - 1);

  return (
    <div
      style={{
        backgroundColor: "#d4a3f9",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        alt="bear"
        style={{
          width: "200px",
          marginBottom: "1.5rem",
          transition: "all 0.3s ease",
        }}
      />

      {/* TEXT */}
      <h1
        style={{
          color: "#d1007d",
          fontWeight: "900",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          userSelect: "none",
        }}
      >
        {messages[currentIndex]}
      </h1>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <button
          onClick={handleYesClick}
          style={{
            backgroundColor: "#00c853",
            border: "none",
            borderRadius: "40px",
            padding: `${14 + noCount * 4}px ${50 + noCount * 10}px`,
            fontWeight: "900",
            fontSize: `${1.2 + noCount * 0.15}rem`,
            color: "black",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          YES 💖
        </button>

        {noCount < 5 && (
          <button
            onClick={handleNoClick}
            style={{
              backgroundColor: "#ff1744",
              border: "none",
              borderRadius: "30px",
              padding: "12px 40px",
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "black",
              cursor: "pointer",
            }}
          >
            NO 😤
          </button>
        )}
      </div>
    </div>
  );
}
