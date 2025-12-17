import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navLinks = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Projects", href: "/projects" },
    { id: 5, name: "Contact", href: "/contact" }
];

export const socialLinks = [
    { id: 4, href: "https://linkedin.com/in/your-profile", icon: FaLinkedin },
    { id: 1, href: "https://wa.me/your-number", icon: FaWhatsappSquare },
    { id: 2, href: "https://instagram.com/your-profile", icon: FaInstagramSquare },
    { id: 3, href: "https://facebook.com/your-page", icon: FaFacebookSquare },
    { id: 5, href: "https://twitter.com/your-profile", icon: FaSquareXTwitter }
];