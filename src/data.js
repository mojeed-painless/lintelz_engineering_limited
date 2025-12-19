import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaCrosshairs } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa6";
import { BsCompass } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import icon1 from './assets/images/icon1.jpg';
import icon2 from './assets/images/icon2.jpg';
import icon3 from './assets/images/icon3.jpg';
import icon4 from './assets/images/icon4.jpg';
import icon5 from './assets/images/icon6.jpg';
import icon6 from './assets/images/icon7.jpg';
import projectAsset1 from './assets/images/project-asset2.jpg';
import projectAsset2 from './assets/images/project-asset1.jpg';
import projectAsset3 from './assets/images/project-asset7.jpg';
import teamAsset1 from './assets/images/team-asset1.jpg';
import teamAsset2 from './assets/images/team-asset2.jpg';
import teamAsset3 from './assets/images/team-asset3.jpg';
import teamAsset4 from './assets/images/team-asset4.jpg';
import teamAsset5 from './assets/images/team-asset5.jpg';
import teamAsset6 from './assets/images/team-asset6.jpg';
import teamAsset7 from './assets/images/team-asset7.jpg';
import teamAsset8 from './assets/images/team-asset8.jpg';
import teamAsset9 from './assets/images/team-asset9.jpg';
import teamAsset10 from './assets/images/team-asset10.jpg';




export const navLinks = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Projects", href: "/projects" },
    { id: 5, name: "Contact", href: "/contact" }
];

export const socialLinks = [
    { id: 4, href: "#", icon: FaLinkedin },
    { id: 1, href: "https://wa.me/2347036814897", icon: FaWhatsappSquare },
    { id: 2, href: "#", icon: FaInstagramSquare },
    { id: 3, href: "#", icon: FaFacebookSquare },
    { id: 5, href: "https://x.com/LintelzEngLtd", icon: FaSquareXTwitter }
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





export const aboutMenu = [
    { id: 1, to: '#goal', Icon: GoGoal, title: 'Goals',},
    { id: 2, to: '#principle', Icon: FaCrosshairs, title: 'Cooperate Principle',},
    { id: 3, to: '#approach', Icon: FaPersonBooth, title: 'Approach',},
    { id: 4, to: '#strategy', Icon: BsCompass, title: 'Strategy',},
    { id: 5, to: '#team', Icon: RiTeamFill, title: 'Team',},
]






export const team = [
    { 
        id: 1, 
        image: teamAsset1,
        name: 'ENGR. OLAWUYI AFOLABI RIDWAN',
        portfolio: 'Executive Director',
    },
    { 
        id: 2, 
        image: teamAsset2,
        name: 'ENGR. ADEBUMOLA ISMAILA ABIODUN',
        portfolio: 'Managing Director',
    },
    { 
        id: 3, 
        image: teamAsset3,
        name: 'ENGR. AMEEN KOLAPO GARBA',
        portfolio: 'Project Manager',
    },
    { 
        id: 4,
        image: teamAsset4, 
        name: 'ENGR. OLAWOYIN INIOLUWA AYODELE',
        qualification: 'B.TECH, M.E.M, MNSE, R.Engr, MBA in view',
        portfolio: 'Lead Engineer',
    },
    { 
        id: 5, 
        image: teamAsset5,
        name: 'ENGR. LAWAL HAFEEZ OPEYEMI',
        qualification: 'MNSE, MNICE, MNIGE, COREN No. (R67962)',
        portfolio: 'Quality Assurance Manager',
    },
    { 
        id: 6, 
        image: teamAsset6,
        name: 'ENGR. JABAR RASHEED TAIWO',
        portfolio: 'Lead Engineer',
    },
    { 
        id: 7, 
        image: teamAsset7,
        name: 'SHITTA—BEY SIRAJDEEN OLABODE',
        portfolio: 'Chief Surveyor',
    },
    { 
        id: 8, 
        image: teamAsset8,
        name: 'ENGR. AHMED WASIU',
        portfolio: 'Chief Electrical Officer',
    },
    { 
        id: 9, 
        image: teamAsset9,
        name: 'ENGR. ABDULQUDUS ISHOLA OLOTA',
        portfolio: 'Safety Officer and Site Engineer',
    },
    { 
        id: 10, 
        image: teamAsset10,
        name: 'ABDULSALAM OPEYEMI SALAM',
        portfolio: 'Legal Practitioner',
    },
]