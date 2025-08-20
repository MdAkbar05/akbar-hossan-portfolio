"use client";
import { useEffect } from "react";
import { MdVisibility } from "react-icons/md";

const ViewCounter = () => {
  useEffect(() => {
    // Check if the app is running in production or online
    const isOnline = navigator.onLine;
    const isProduction = process.env.NODE_ENV === "production";

    if (isOnline && isProduction) {
      // Create the script element only when online and in production
      const script = document.createElement("script");

      script.src = "https://unpkg.com/siteviews@1.0.4/package.js";
      script.type = "application/javascript";
      script.setAttribute("scriptfor", "siteviews");
      script.setAttribute("project-name", "my-project");
      script.setAttribute("output-element-id", "views");
      script.setAttribute("refresh", "10");
      script.setAttribute("user-info", "true");

      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Fallback for offline or development mode
      console.warn(
        "SiteViews script not loaded: Ensure your app is deployed and you're online."
      );
      const fallbackElement = document.getElementById("views");
      if (fallbackElement) {
        fallbackElement.textContent = "Offline";
      }
    }
  }, []);
  return (
    <div>
      <p className="text-gray-400 flex items-center gap-2">
        <MdVisibility size={24} />{" "}
        <span
          className="w-6 h-6 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin"
          id="views"
        ></span>
      </p>
    </div>
  );
};

export default ViewCounter;
