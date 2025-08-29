"use client";

import { useEffect } from "react";

export default function TestSaveUser() {
  useEffect(() => {
    async function callApi() {
      const res = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "hello from client" }),
      });

      const data = await res.json();
      console.log("Response from API:", data);
    }

    callApi();
  }, []);

  return <p>✅ افتح الـ Console في المتصفح وشوف البيانات</p>;
}