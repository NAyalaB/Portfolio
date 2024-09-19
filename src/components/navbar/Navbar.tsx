'use client'

import { Dropdown } from "flowbite-react";
import Link from "next/link";

const Navbar: React.FC =() => {

  return (
    <div className="top-0 left-0 m-4 pb-32">
      <Dropdown label="Menu" inline>
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