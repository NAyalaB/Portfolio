'use client'

import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import Navbar from "../navbar/Navbar";

import FooterComponent from "../footer/Footer";

interface ClientProps{
    children:ReactNode
}

const RenderNavbarFooter : React.FC<ClientProps> = ({children}) => {
    const pathname = usePathname();
    const showNavbarFooter = pathname !== "/404" && pathname !== "/loadings" ;

    return (
<div>
    {showNavbarFooter ? <Navbar/> : null}
    {children}
    {showNavbarFooter ? <FooterComponent/> : null}
</div>
    )
};

export default RenderNavbarFooter;