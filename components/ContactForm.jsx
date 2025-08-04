"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRouter, useSearchParams } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "sending" | "sent" | ""

  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const extraMessage = searchParams.get("plan")
      ? `\n\nI want to discuss with the plan: ${searchParams.get("plan")}`
      : "";

    const finalMessage = formData.message + extraMessage;

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: finalMessage,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        emailParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setStatus(""), 2000);
      })
      .catch((error) => {
        console.error("Email failed:", error);
        alert("Failed to send email. Please try again.");
        setStatus("");
      });
  };

  return (
    <>
      <form
        onSubmit={sendEmail}
        className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800"
      >
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
            Lets communicate!
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            Your are welcome to contact me.
          </p>
          <div className="mt-6">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="you@example.com"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="message"
                rows="2"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                type="submit"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent"
                  : "Send Message"}
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div
            className="text-sm text-blue-900 dark:text-blue-300 text-center"
            onClick={() => router.push("/")}
          >
            Go back to
            <a className="font-medium underline" href="#">
              Home
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
