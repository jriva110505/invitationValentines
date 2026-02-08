"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/about");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Animations */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .card {
          animation: fadeInScale 1s ease-out forwards,
                     float 4s ease-in-out infinite;
        }

        .start-btn:hover {
          transform: scale(1.08);
        }
      `}</style>

      {/* Card */}
      <div
        className="card"
        style={{
          backgroundColor: "#e9b3f3",
          padding: "4rem",
          borderRadius: "30px",
          textAlign: "center",
          width: "80%",
          maxWidth: "900px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ letterSpacing: "3px", fontSize: "0.9rem" }}>
          WELCOME TO MY
        </p>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            margin: "1rem 0",
          }}
        >
          VALENTINE&apos;S <br /> INVITATION
        </h1>

        <p style={{ marginBottom: "2.5rem", fontSize: "1rem" }}>
          MADE BY YOUR LABLAB JEROME
        </p>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="start-btn"
          style={{
            backgroundColor: "#d1007d",
            color: "black",
            fontSize: "1.2rem",
            padding: "14px 50px",
            borderRadius: "40px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s ease",
          }}
        >
          Start 💖
        </button>
      </div>
    </div>
  );
}
