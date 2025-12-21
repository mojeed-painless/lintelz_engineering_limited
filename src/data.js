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
import projectAsset4 from './assets/images/project-asset4.jpg';
import projectAsset5 from './assets/images/project-asset5.jpg';
import projectAsset6 from './assets/images/project-asset9.jpg';
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
    },
    {
        id: 4,
        image: projectAsset4,
        title: 'School Hostel',
        description: 'Construction of SCHOOL hostel at The Rehla Academy, Abeokuta, Ogun State.',
        action: '/projects',
    },
    {
        id: 5,
        image: projectAsset5,
        title: 'Residential Vila',
        description: 'Renovation work for residential vila, Asokoro, Abuja.',
        action: '/projects',
    },
    // {
    //     id: 6,
    //     image: projectAsset6,
    //     title: 'Retaining Wall',
    //     description: 'Construction of retaining wall, Oghara. Delta State.',
    //     action: '/projects',
    // },
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




export const servicesLists = [
    {
        id: 'Architecture',
        services: [
            'Site Analysis',
            'Feasibility Studies',
            'Preliminary Surveys',
            'Brief and scope analysis',
            'Conceptual and Preliminary design',
            '3D Modelling and Rendering',
            'Engineering design (Structural, Mechanical, Electrical and Plumbing designs)',
            'Detailed design and working drawings',
        ]
    },
    {
        id: 'Consultation',
        services: [
            "Complete building construction execution (Residential, Commercial and Institutional buildings)",
            "Complete infrastructure design and execution (Roads, drainage, highways, bridges, dams, railways, canal lining, etc.)",
            "Concrete and steel design and construction",
            "Shoreline and coastal defense",
            "Material testing",
            "Non-Destructive Testing (NDT)",
            "Consultation",
            "Installation",
            "On-site supervision",
            "Periodic supervision and inspection"
        ]
    },
    {
        id: 'Geotechnic',
        services: [
            "Preliminary soil sampling and testing",
            "Material testing",
            "Foundation design and construction",
            "Borehole drilling",
            "Water treatment services",
            "Sewage treatment",
            "Land reclamation",
            "Ports and jetties"
        ]
    },
    {
        id: 'Management',
        services: [
            "Project planning, initiation, execution and control",
            "Project scheduling management",
            "Project estimating and costing",
            "Project quality control and assurance",
            "Value engineering",
            "Project risk analysis and management"
        ]
    },
]







export const executedProjects = [
    {
        id: 1,
        project: 'Supervised the construction of tank base pedestals, rings, and bund walls for both LPG and PMS tanks',
        time: '(2019-present)',
    },
    {
        id: 2,
        project: 'Coordinated the construction of rigid pavement and stormwater reservoirs, critical for site infrastructure and drainage management.',
        time: '(2019-present)',
    },
    {
        id: 3,
        project: "Supervised the construction of 144 piles for spherical tanks' foundations.",
        time: '(May 2017 – June 2019)',
    },
    {
        id: 4,
        project: 'Oversaw the erection of spherical tanks, the welding process and installation of accessories, while ensuring adherence to safety protocols and quality standards.',
        time: '(May 2017 – June 2019)',
    },
    {
        id: 5,
        project: 'Oversaw the construction of key civil facilities, including the jetty, substation, administrative building, drainage systems, and site pavements, ensuring efficient and timely completion.',
        time: '(May 2017 – June 2019)',
    },
    {
        id: 6,
        project: "Led the comprehensive renovation of a high-end residential villa in Asokoro, managing the transformation of the swimming pool, gym, drivers' lodge, pavilion, and duplexes to meet luxury standards while preserving the original architectural integrity.",
        time: '(May 2017 – June 2019)',
    },
    {
        id: 7,
        project: "Supervised structural and aesthetic upgrades of the swimming pool and surrounding area",
        time: '(May 2017 – June 2019)',
    },
    {
        id: 8,
        project: 'Oversaw the renovation of the gym.',
        time: '(May 2017 – June 2019)',
    },
    {
        id: 9,
        project: 'Managed the construction of school hostels',
        time: '(2008-2009)',
    },
    {
        id: 10,
        project: "Led the renovation and conversion of existing residential duplexes into classrooms, clinics, and offices, ensuring that all structural modifications complied with safety regulations and educational facility standards.",
        time: '(2018-2019)',
    },
    {
        id: 11,
        project: "Monitoring and Supervision of the construction of 34km of Rivers Channelization and the construction of hydraulic structures across the rivers, Oyo State.",
        time: '(May, 2023 – June,2024)',
    },
    {
        id: 12,
        project: "Supervision of the construction of hydraulics structures at Ogbere Tioya, Ibadan for Ibadan Urban Flood Management Project (I.U.F.M.P)",
        time: '(May, 2023 – June,2024)',
    },
    {
        id: 13,
        project: "Supervision of the construction of a Pile Foundation for a five floors residential building with a penthouse at Fatai Arobieke street, Lekki Pennisula Scheme, Lagos state.",
        time: '(May, 2023 – June,2024)',
    },
    {
        id: 14,
        project: "Rehabilitation of 32km Ejigbo-Ifeodan-Owu Ile, Oyo State boundary road.(Supervision of the construction of hydraulic structures and earth works).",
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 15,
        project: "Supervision of the construction of a Two storey building shopping complex (Brick structure) at Bank Olodo, Oyo State.",
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 16,
        project: "Supervision of a proposed development of a 5 bedroom duplex at Ologede area, Olodo,Ibadan, Oyo state.",
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 17,
        project: "Supervision of the construction of Armoury, commandant's residence, married officers quarters and corporal below quarters and 5kilometers road network of the Nigerian Airforce Institute of Safety, Ipetu Ijesha,Osun state.",
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 18,
        project: "Structural designs of several reinforced concrete structures such as Domestic buildings, Shopping complex, Church auditoriums, Armoury, etc. ",
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 19,
        project: 'Supervision of maintenance works (buildings and infrastrucrures), procurements for Precious Corner Stone University, Ibadan, Oyo State. ',
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 20,
        project: 'Supervision of maintenance work for Caxton building Coldroom for Fan Milk, Eleyele, Ibadan, Oyo State.',
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 21,
        project: 'Supervision of the construction of Crest view academy, Kuje, F.C.T – Abuja.',
        time: '(Nov.2022 – April,2023)',
    },
    {
        id: 22,
        project: "Geotechnical Investigation of the cause of the collapse 21 storey building under construction at Gerald road, Ikoyi, Lagos State.",
    },
    {
        id: 23,
        project: 'Subsoil Investigation for the proposed development for Louisville Towers, Eko Atlantic city, Victoria Island, Lagos State.',
    },
    {
        id: 24,
        project: 'Subsoil Investigation for the proposed Development of 100units Building in Magodo Estate, Lagos State.',
    },
    {
        id: 25,
        project: "Subsoil Investigation for the proposed 8.75km Lekki - Regional Road, Lagos State.",
    },
    {
        id: 26,
        project: 'Subsoil Investigation for the proposed 8.75km Lekki - Regional Road, Lagos State.',
    },
    {
        id: 27,
        project: 'Subsoil Investigation for the proposed Development at Lagos Entertainment Centre Development (National Theatre), Costain, Lagos State.',
    },
    {
        id: 28,
        project: 'Subsoil Investigation for the proposed 20 storey Building for Total la definition at Eko Atlantic city, Victoria Island, Lagos State.',
    },
]