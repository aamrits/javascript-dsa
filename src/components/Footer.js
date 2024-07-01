import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#718792] text-center p-4 text-white">
      <aside>
        <p>
          This website is developed by{" "}
          <a
            className="underline hover:text-blue-200"
            href="https://github.com/aamrits"
            target="_blank"
            rel="noreferrer"
          >
            Amrit
          </a>
          . Copyright © {new Date().getFullYear()}
        </p>
      </aside>
    </div>
  );
};

export default Footer;
