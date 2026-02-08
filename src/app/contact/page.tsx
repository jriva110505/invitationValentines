"use client";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleYesClick = () => {
    router.push("/education"); // Navigate to Education page on YES button click
  };

  return (
    <div
      style={{
        backgroundColor: "#d4a3f9", // Light purple background like in the pic
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#d1007d", // Pink/magenta text color
          fontWeight: "900",
          fontSize: "2.8rem",
          lineHeight: 1.2,
          marginBottom: "2rem",
          userSelect: "none",
        }}
      >
        AND NOW THIS IS <br />
        THE FINAL PART <br />
        ARE YOU <br />
        READY???
      </h1>

      <button
        onClick={handleYesClick}
        style={{
          backgroundColor: "#d1007d", // Same pink color as text
          border: "none",
          borderRadius: "30px",
          padding: "12px 48px",
          fontWeight: "700",
          fontSize: "1.2rem",
          color: "black",
          cursor: "pointer",
          userSelect: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b00065";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d1007d";
        }}
      >
        YES
      </button>
    </div>
  );
}
