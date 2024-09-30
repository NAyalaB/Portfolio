"use client";
import { Footer } from "flowbite-react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterComponent: React.FC = () => {
  return (
    <Footer container >
      <div className="w-full bottom-4 left-0 mt-6" >
        <Footer.Divider />
        <div className="w-full pt-4 sm:flex sm:items-center sm:justify-between">
          <Link href="/perfil">
            <h1>Ayala Noelia</h1>
          </Link>
          <div className="mt-4 mr-6 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.linkedin.com/in/noelia-ayala-ab77803a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Footer.Icon icon={BsLinkedin} />
            </a>
            <a
              href="https://github.com/NAyalaB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Footer.Icon icon={BsGithub} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
