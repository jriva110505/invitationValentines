"use client";

import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const router = useRouter();
  const token = getToken();

  // Extract username from JWT manually
  let username = "USER";
  if (token) {
    try {
      const payloadBase64 = token.split('.')[1]; // get the payload
      const payloadJson = atob(payloadBase64);  // decode from base64
      const payload = JSON.parse(payloadJson); // parse JSON
      if (payload.username) username = payload.username.toUpperCase();
    } catch {
      username = "INVALID TOKEN";
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");   
    router.push("/login");           
  };

  return (
    <div className="w-full h-screen bg-[url('/qq.jpg')] bg-cover bg-center flex flex-col items-center pt-14 text-white relative">

      {/* NAV RIGHT */}
      <div className="absolute top-5 right-5 flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
          HOME
        </button>

        <button
          onClick={handleLogout}
          className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
          LOGOUT
        </button>
      </div>

      {/* WELCOME */}
      <h1 className="text-[60px] md:text-[75px] font-extrabold italic tracking-wide">
        WELCOME, ({username})
      </h1>

      {/* TOKEN BOX */}
      <div className="mt-10 w-[85%] max-w-5xl bg-white rounded-[50px] p-10 text-black shadow-2xl">
        <h2 className="text-2xl font-semibold mb-5">YOUR BEARER TOKEN:</h2>

        <div className="w-full min-h-[300px] border p-5 text-lg break-all rounded-lg">
          {token || "(TOKEN) HERE"}
        </div>
      </div>
    </div>
  );
}
