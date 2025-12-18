import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import icon1 from './assets/images/icon1.jpg';
import icon2 from './assets/images/icon2.jpg';
import icon3 from './assets/images/icon3.jpg';
import icon4 from './assets/images/icon4.jpg';
import icon5 from './assets/images/icon6.jpg';
import icon6 from './assets/images/icon7.jpg';
import projectAsset1 from './assets/images/project-asset2.jpg'
import projectAsset2 from './assets/images/project-asset1.jpg'
import projectAsset3 from './assets/images/project-asset7.jpg'


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

export const servicesCards = [
    { 
        id: 1, 
        icon: icon4, 
        title: 'Architectural Design', 
        description: 'Comprehensive design solutions from site analysis to 3D visualization and detailed construction drawings.',
    },
    { 
        id: 2, 
        icon: icon5, 
        title: 'Structural Engineering', 
        description: 'Integrated engineering designs that ensure safety, efficiency, and seamless performance of all building systems.',
    },
    { 
        id: 3, 
        icon: icon1, 
        title: 'Project Development', 
        description: 'End-to-end execution of buildings and major civil infrastructure projects, delivered to the highest industry standards.',
    },
    { 
        id: 4, 
        icon: icon3, 
        title: 'Geotechnical Engineering', 
        description: 'Expert soil investigation, foundation works, land reclamation, and marine engineering solutions for complex sites.',
    },
    { 
        id: 5, 
        icon: icon2, 
        title: 'Consultancy Services', 
        description: 'Professional material testing, inspections, supervision, and technical consultancy to ensure quality and compliance.',
    },
    { 
        id: 6, 
        icon: icon6, 
        title: 'Project Management', 
        description: 'Strategic planning, cost control, scheduling, and risk management for successful project delivery.',
    }
]





export const projects = [
    {
        id: 1,
        image: projectAsset1,
        title: 'Cashew Factory',
        description: 'Construction of Cashew factory, Effsow, Mowe, Ogun State.',
        action: '/projects',
    },
    {
        id: 2,
        image: projectAsset2,
        title: 'Pile Installation',
        description: 'Pile installation Ap tank farm, Ijora, Lagos State.',
        action: '/projects',
    },
    {
        id: 3,
        image: projectAsset3,
        title: 'Retaining Wall',
        description: 'Construction of retaining wall, Oghara. Delta State.',
        action: '/projects',
    }
]