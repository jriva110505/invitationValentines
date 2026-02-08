"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/contact");
  };

  return (
    <div
      style={{
        backgroundColor: "#d4a3f9",
        height: "100vh",
        padding: "2rem",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Next Button */}
      <button
        onClick={handleNext}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#d1007d",
          borderRadius: "30px",
          border: "none",
          padding: "12px 28px",
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "black",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        Next
      </button>

      {/* BIG IMAGE */}
      <div
        className="fade-up float"
        style={{
          width: "280px",
          height: "280px",
          marginBottom: "2rem",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        }}
      >
        <Image
          src="/1.webp"
          alt="Jerome Riva"
          width={500}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Text Box */}
      <div
        className="fade-up"
        style={{
          border: "2px solid #6a5acd",
          padding: "1.8rem 2.2rem",
          maxWidth: "750px",
          color: "black",
          fontSize: "1.15rem",
          lineHeight: "1.7",
          textAlign: "left",
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: "15px",
          animationDelay: "0.3s",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.2rem",
            fontSize: "1.3rem",
          }}
        >
          BUT BEFORE WE START LET ME INTRODUCE MYSELF
        </p>

        <p>
          Hi love, my name is Jerome Riva. I am an IT student studying at Naga
          College. I am a handsome, tall, and dark in-love person named{" "}
          <strong>Xiena Nicole Nacora.</strong>
        </p>
      </div>
    </div>
  );
}
