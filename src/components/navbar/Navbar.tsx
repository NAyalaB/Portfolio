'use client'

import { Dropdown } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC =() => {

  return (
    <div className="top-0 left-0 m-4 ">
      <Dropdown label={<Image
      src="/assets/botonMenu.svg"
      alt="Menu"
      width={30}
      height={30}
        />
      }
      inline
      className="no-arrow" 
      >
        
        <Link href="/perfil">
      <Dropdown.Item className="p-1">Acerca de mi</Dropdown.Item>
        </Link>

      <Link href="/proyectos">
      <Dropdown.Item className="p-1">Proyectos</Dropdown.Item>
      </Link>

      <Link href="/contacto">
      <Dropdown.Item className="p-1">Contacto</Dropdown.Item>
      </Link>
      
    </Dropdown>
    </div>
    
  );
};

export default Navbar;