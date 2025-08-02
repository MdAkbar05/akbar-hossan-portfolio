"use client";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send email, store data, etc.)
  };

  return (
    <footer className=" w-full flex  items-center justify-center dark:bg-tartiary dark:text-mute bg-quarterary border-t dark:border-slate-800 border-slate-300 text-primary fixed bottom-0 z-50">
      <div id="footer" className=" container mx-auto  ">
        {/* Copy right text  */}
        <p className="sm:text-sm md:text-base text-center font-thin  md:pb-0">
          Copyright © 2025 MD_Akbar_Hossan. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
