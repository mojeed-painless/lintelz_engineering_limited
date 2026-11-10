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
import projectAsset5a from './assets/images/project-asset5a.jpg';
import projectAsset6Thumbnail from './assets/images/project-asset6-thumbnaiil.jpg';
import projectAsset6 from './assets/images/project-asset6.jpg';
import projectAsset6a from './assets/images/project-asset6a.jpg';
import projectAsset6b from './assets/images/project-asset6b.jpg';
import projectAsset6c from './assets/images/project-asset6c.jpg';
import projectAsset6d from './assets/images/project-asset6d.jpg';
import projectAsset6e from './assets/images/project-asset6e.jpg';
import projectAsset6f from './assets/images/project-asset6f.jpg';
import projectAsset6g from './assets/images/project-asset6g.jpg';
import projectAsset6h from './assets/images/project-asset6h.jpg';
import projectAsset6i from './assets/images/project-asset6i.jpg';
import projectAsset6j from './assets/images/project-asset6j.jpg';
import projectAsset9 from './assets/images/project-asset9.png';
import projectAsset9a from './assets/images/project-asset9a.jpg';
import projectAsset9b from './assets/images/project-asset9b.png';
import projectAsset9c from './assets/images/project-asset9c.png';
import projectAsset13 from './assets/images/project-asset13.jpg';
import projectAsset13a from './assets/images/project-asset13a.jpg';
import projectAsset14 from './assets/images/project-asset14.jpg';
import projectAsset14a from './assets/images/project-asset14a.jpg';
import projectAsset14b from './assets/images/project-asset14b.jpg';
import projectAsset14c from './assets/images/project-asset14c.jpg';
import projectAsset14d from './assets/images/project-asset14d.jpg';
import projectAsset14e from './assets/images/project-asset14e.jpg';
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
import teamAsset11 from './assets/images/team-asset11.jpg';




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
        id: 13,
        image: projectAsset13,
        title: 'Semi Detached 2 Storey Building',
        description: '3 Units of Semi Detached 2 Storey Building at Millenium Homes, BIS Drive, Victoria Island, Lagos.',
        gallery: [
            { src: projectAsset13 },
            { src: projectAsset13a },
        ],
    },
    {
        id: 9,
        image: projectAsset9,
        title: '4 Bedroom Duplex',
        description: '4 Bedroom Duplex at Agbon-Ifor Street, Idimu, Lagos',
        gallery: [
            { src: projectAsset9 },
            { src: projectAsset9a },
            { src: projectAsset9b },
            { src: projectAsset9c },
        ],
    },
    {
        id: 14,
        image: projectAsset14,
        title: 'Millenium Housing Estate',
        description: '8 Units of 4 Bedroom 2 Storey Terrace at T.O.O Gemelle Residences, Millenium Housing Estate, Oniru, Victoria Island.',
        gallery: [
            { src: projectAsset14 },
            { src: projectAsset14a },
            { src: projectAsset14b },
            { src: projectAsset14c },
            { src: projectAsset14d },
            { src: projectAsset14e },
        ],
    },
    {
        id: 6,
        image: projectAsset6Thumbnail,
        title: 'Parkview Estate',
        description: '10 Units of 4 Bedroom 2 Storey Terrace at Parkview Estate, Soule Close off Gerrard Road, Ikoyi.',
        gallery: [
            { src: projectAsset6 },
            { src: projectAsset6a },
            { src: projectAsset6b },
            { src: projectAsset6c },
            { src: projectAsset6d },
            { src: projectAsset6e },
            { src: projectAsset6f },
            { src: projectAsset6g },
            { src: projectAsset6h },
            { src: projectAsset6i },
            { src: projectAsset6j },
        ],
    },
    {
        id: 1,
        image: projectAsset1,
        title: 'Cashew Factory',
        description: 'Construction of Cashew factory, Effsow, Mowe, Ogun State.',
        gallery: [
            { src: projectAsset1 },
        ],
    },
    {
        id: 2,
        image: projectAsset2,
        title: 'Pile Installation',
        description: 'Pile installation Ap tank farm, Ijora, Lagos State.',
        gallery: [
            { src: projectAsset2 },
        ],
    },
    {
        id: 3,
        image: projectAsset3,
        title: 'Retaining Wall',
        description: 'Construction of retaining wall, Oghara. Delta State.',
        gallery: [
            { src: projectAsset3 },
        ],
    },
    {
        id: 4,
        image: projectAsset4,
        title: 'School Hostel',
        description: 'Construction of SCHOOL hostel at The Rehla Academy, Abeokuta, Ogun State.',
        gallery: [
            { src: projectAsset4 },
        ],
    },
    {
        id: 5,
        image: projectAsset5,
        title: 'Residential Vila',
        description: 'Renovation work for residential vila, Asokoro, Abuja.',
        gallery: [
            { src: projectAsset5 },
            { src: projectAsset5a },
        ],
    },
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
        id: 11, 
        image: teamAsset11,
        name: 'ENGR. SULAIMAN AJADI',
        portfolio: 'Construction Manager',
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
        portfolio: 'Safety Officer',
    },
    { 
        id: 10, 
        image: teamAsset10,
        name: 'ABDULSALAM OPEYEMI SALAM',
        portfolio: 'Legal Practitioner',
    },
]





export const teamProfile = [
    { 
        id: 1, 
        image: teamAsset1,
        name: 'ENGR. OLAWUYI AFOLABI RIDWAN',
        portfolio: 'Executive Director',
        yearsOfExperience: '4',
        education: [
            {
                cert: [
                    "Project Management: Project Management Professionals, PMP (In progress)",
                    "Google Project Management Certification 2020",
                    "B Eng. Civil Engineering (B.Eng.) - Civil Engineering 2016 University of Ilorin, Ilorin, Kwara State."
                ]
            }
        ],  
        experience: [
            {
                responsibility: [
                    "Supervised the construction of the 3 storey building for the proposed residential development for WESTLINK HERITAGE COURT at Palmgrove, Lagos state. (ongoing)"
                ],
            },
            {
                responsibility: [
                    "Supervised the 4 bedroom duplex residential building at Idimu, Lagos state. (ongoing) Bullrun Resources Limited"
                ],
            },
            {
                title: "Site Engineer September 2020 – August 2022",
                responsibility: [
                    "Assisted in the project planning phase, including work schedule, resource forecasting, and setting of milestones.",
                    "Monitored construction activities to ensure work was completed according to plans, specifications, and safety standards",
                    "Inspected materials and workmanship to ensure compliance with quality standards and project requirements",
                    "Performed surveying tasks to establish correct positions and levels for structures and marked them out on site",
                    "Worked closely with architects, engineers, contractors, and other professionals to meet project requirements",
                    "Maintained accurate records of construction activities, progress reports, and project changes",
                    "Addressed issues arising during the construction process and provided effective solutions",
                    "Maintained clear communication with all stakeholders, including clients, contractors, and team members",
                    "Ensured compliance with local building codes, regulations, and standards while monitoring project costs and budgets",
                    "Assisted in the procurement of materials and equipment for the project",
                    "Interacted with clients to provide project updates and address concerns"
                ],
            },
        ],
    },




    { 
        id: 2, 
        image: teamAsset2,
        name: 'ENGR. ADEBUMOLA ISMAILA ABIODUN',
        portfolio: 'Managing Director',
        yearsOfExperience: '15',
        education: [
            {
                cert: [
                    "Master’s in Construction Project Management (MCPM) – University of Ibadan (2020–2023)",
                    "B.Eng. (Hons) Civil Engineering – University of Ilorin, Kwara State (2013–2016)",
                    "HND Civil Engineering – Rufus Giwa Polytechnic, Owo (2006–2008)" 
                ]
            },
            {
                title: 'PROFESSIONAL BODIES & CERTIFICATIONS',
                cert: [
                    "Council for the Regulation of Engineering in Nigeria (COREN)",
                    "Member, Nigeria Society of Engineers (NSE)",
                    "Member, Nigeria Institute of Civil Engineers (NICE)"
                ]
            },
            {
                title: 'Professional Training',
                cert: [
                    "Project Management Institute (PMI)",
                    "Google Project Management Certificate (In view)"
                ]
            }
        ],
        experience: [
            {
                responsibility: [
                    "Led and coordinated the execution of Project Verde’s construction (2019–present)",
                    "Supervised the construction of tank base pedestals, rings, and bund walls for LPG and PMS tanks (2019–present)",
                    "Coordinated the construction of rigid pavement and stormwater reservoirs for site infrastructure and drainage management (2019–present)",
                    "Supervised the construction of 144 piles for spherical tank foundations (May 2017 – June 2019)",
                    "Oversaw the construction of key civil facilities including jetty, substation, administrative building, drainage systems, and site pavements (May 2017 – June 2019)",
                    "Led the comprehensive renovation of a high-end residential villa in Asokoro, including swimming pool, gym, drivers’ lodge, pavilion, and duplexes, while preserving architectural integrity (May 2017 – June 2019)",
                    "Supervised structural and aesthetic upgrades to the swimming pool and surrounding areas (May 2017 – June 2019)",
                    "Oversaw the renovation of the gym facility (May 2017 – June 2019)",
                    "Managed the construction of school hostels (2008–2009)",
                    "Led the renovation and conversion of residential duplexes into classrooms, clinics, and offices in compliance with safety and educational standards (2018–2019)",
                    "Coordinated design modifications to adapt residential layouts for academic and medical use while maintaining structural integrity (2018–2019)",
                    "Oversaw the erection of spherical tanks, including welding works and accessory installations, ensuring compliance with safety and quality standards (May 2017 – June 2019)"
                ]
            }
        ]
    },







    { 
        id: 11, 
        image: teamAsset11,
        name: 'ENGR. SULAIMAN AJADI',
        portfolio: 'Construction Manager',
        yearsOfExperience: '4',
        education: [
            {
                cert: [
                    "Bachelor OF Engineering- University Of Ilorin, Ilorin Kwara State (2014) ",
                    "A-LEVELS, Kwara State Polytechnic, Ilorin, Kwara State. Ilorin, Kwara State. (2008)"
                ]
            },
            {
                title: 'Professional Certificates',
                cert: [
                    "Registered Engineer with Council for Regulation of Engineering in Nigeria (COREN)",
                    "Member Nigeria Society of Engineers (NSE)",
                    "Member Nigerian Institute of Civil Engineers (NICE)"
                ]
            }
        ],  
        experience: [
            {
                title: "CHIEF TECHNICAL OFFICER-SPECCONSTRUCT LIMITED (03/2021 – CURRENT)",
                responsibility: [
                    "Defined and implemented processes and standards to ensure efficient, sustainable delivery of high-quality services from planning to execution.",
                    "Expertly managed relationships of team, strategically selecting team players to fulfill the project needs.",
                    "Designed and implemented, methodologies to achieve projects of qualities in shortest time possible.",
                    "Managed the Drainage system construction at urban prime 2 Estate for Landwey Investment Limited."
                ],
            },
            {
                title: "HEAD OF PROJECTS-SPECTARCULHAR STRUCTURES LIMITED (02/2018 – 01/2021)",
                responsibility: [
                    "Planned the day to day activities on and off sites, maintained and monitored procurement of materials.",
                    "Formally represented organisation in negotiations and official events.",
                    "Controlled Project expenditure in line with organisation budgets to achieve desired results.",
                    "Coordinated the drainage construction and road woks at Frontier estate for Landwey investment limited"
                ],
            },
            {
                title: "SITE MANAGER- ARECT Builders Limited (02/2016 – 02/2018)",
                responsibility: [
                    "Ensured workforce complied with operational standards and safety regulations by closely monitoring operations.",
                    "Oversaw the construction of 5 floors structures from start to completion.",
                    "Managed the reconstruction of Drainage and solid waste system at Jibril Martin Memorial School Iponri.",
                    "Screened, selected and assisted with training new employees."
                ],
            },
        ],
    },








    { 
        id: 3, 
        image: teamAsset3,
        name: 'ENGR. AMEEN KOLAPO GARBA',
        portfolio: 'Project Manager',
        yearsOfExperience: '8',
        education: [
            {
                cert: [
                    "B.Eng. Chemical Engineering – University of Ilorin, Ilorin, Kwara State (2016)"
                ]
            }
        ],  
        experience: [
            {
                title: "AMEENKOL ESTATE AND COMMERCIALS LIMITED (MD/CEO) - 2020 - TILL DATE",
                responsibility: [
                    "Coordinated and managed the overall affairs of the company",
                    "Guided clients through proper property documentation, including survey and legal processes",
                    "Assisted clients in building profitable real estate investment portfolios",
                    "Sourced issue-free properties on behalf of clients"
                ],
            },
            {
                title: "OXFORD COMMERCIAL INTERNATIONAL SERVICES LIMITED (SALES TEAM MANAGER) 2018 – 2020",
                responsibility: [
                    "Convincing customers to buy a product.",
                    "Helping customers make selections by building their confidence.",
                    "Payments are processed by check, cash, or other credit cards.",
                    "Attending trainings to get updated on the company’s services."
                ],
            },
        ],
    },




    { 
        id: 4,
        image: teamAsset4, 
        name: 'ENGR. OLAWOYIN INIOLUWA AYODELE',
        qualification: 'B.TECH, M.E.M, MNSE, R.Engr, MBA in view',
        portfolio: 'Lead Engineer',
        yearsOfExperience: '11',
        education: [
            {
                cert: [
                    "Masters in Business Administration (In view)", 
                    "Entrepreneurship and Operations Management, School of Business, University of Ibadan, Ibadan, Oyo State",
                    "Professional Masters in Engineering Project Management 2018 Industrial and Productiion Engineering Department, University of Ibadan, Ibadan, Oyo State",
                    "Occupational Safety & Health Academy (Supervisor) 2012, Elak Multi Resources, Port Harcourt, Rivers State",
                    "Bachelor Of Technology in Civil Engineering. (B.Tech) 2006-2011, Ladoke Akintola University Of Technology, Ogbomoso, Oyo State"
                ]
            }
        ],  
        experience: [
            {
                responsibility: [
                    "Monitoring and Supervision of the construction of 34km of Rivers Channelization and the construction of hydraulic structures across the rivers, Oyo State. (May, 2023 – June,2024)",
                    "Supervision of the construction of hydraulics structures at Ogbere Tioya ,Ibadan for Ibadan Urban Flood Management Project (I.U.F.M.P) (May, 2023 – June,2024)",
                    "Supervision of the construction of a Pile Foundation for a five floors residential building with a penthouse at Fatai Arobieke street,Lekki Pennisula Scheme, Lagos state. (May, 2023 – June,2024)",
                    "Rehabilitation of 32km Ejigbo-Ifeodan-Owu Ile, Oyo State boundary road.(Supervision of the construction of hydraulic structures and earth works). (Nov.2022 – April,2023)",
                    "Supervision of the construction of a Two storey building shopping complex(Brick structure)at bank olodo, Oyo State. (Nov.2022 – April,2023)",
                    "Supervision of a proposed development of a 5 bedroom duplex at ologede area,olodo,ibadan,Oyo state. (Nov.2022 – April,2023)",
                    "Supervision of the construction of Armoury, commandant's residence,married officers quarters and corporal below quarters and 5kilometers road network of the Nigerian Airforce Institute of Safety,Ipetu Ijesha,Osun state. (Nov.2022 – April,2023)",
                    "Structural designs of several reinforced concrete structures such as domestic buildings,shopping complex,church auditoriums,Armoury,etc. (Nov.2022 – April,2023)",
                    "Supervision of maintenance works (buildings and infrastrucrures),procurements for Precious Corner Stone University,ibadan ,Oyo State. (Nov.2022 – April,2023)",
                    "Supervision of maintenance work for Caxton building Coldroom for Fan Milk,Eleyele,ibadan,Oyo state. (Nov.2022 – April,2023)",
                    "Supervision of the construction of Crest view academy ,Kuje ,F.C.T – Abuja. (Nov.2022 – April,2023)"
                ],
            },
        ],
    },




    { 
        id: 5, 
        image: teamAsset5,
        name: 'ENGR. LAWAL HAFEEZ OPEYEMI',
        qualification: 'MNSE, MNICE, MNIGE, COREN No. (R67962)',
        portfolio: 'Quality Assurance Manager',
        yearsOfExperience: '8',
        education: [
            {
                cert: [
                    "Association for Consulting Engineering in Nigeria (ACEN-YPF) (2018)",
                    "B.Sc. (2nd Class Hons.) Civil Eng., University of Ilorin (2016)",
                    "National Diploma(Distinction) Civil Eng., Federal Polytechnic, Kaura Namoda Zamfara State (2011)",
                    "O. Level Certificate, Senior School Certificate (WAEC) (1999)"
                ]
            },
            {
                title: 'Other Certification',
                cert: [
                    "Council for Regulation of Engineering in Nigeria 2022",
                    "Operation of Humbodlt triaxial Machine (Unconsolidated Undrained test) 2019",
                    "Operation of Oedometer test machine (Consolidation test) 2018",
                    "Testing and analysis of samples in accordance with British Standard 2018",
                    "Data Interpretation and Report Writing 2018"
                ]
            }
        ],  
        experience: [
            {
                title: "PROJECT COORDINATOR OF GEOTECHNICAL INVESTIGATION AND SUPERVISION FOR:",
                responsibility: [
                    "Unravelling the cause of the collapse 21 storey building under construction at Gerald road, Ikoyi, Lagos State.",
                    "Subsoil Investigation for the proposed development for Louisville Towers, Eko Atlantic city, Victoria Island, Lagos State.",
                    "Subsoil Investigation for the proposed Development of 100units Building in Magodo Estate, Lagos State",
                    "Subsoil Investigation for the proposed 8.75km Lekki- Regional Road, Lagos State.",
                    "Subsurface soil Investigation for the proposed 4th Mainland Bridge, Lekki, Lagos State.",
                    "Subsoil Investigation for the proposed Development at Lagos Entertainment Centre Development (National Theatre), Costain, Lagos State",
                    "Subsoil Investigation for the proposed 20 storey Building for Total la definition at Eko Atlantic city, Victoria Island, Lagos State."
                ],
            },
            {
                title: "LABORATORY TESTING AND DATA ANALYSIS FOR PROPOSED DEVELOPMENT FOR:",
                responsibility: [
                    "Shell (Snid), Lagos",
                    "Gt Bank Ado Road, Ajah, Lagos",
                    "Lagos-Ibadan Rail Project, Omi-Adio, Abeokuta, Ogun State",
                    "Egan Ayobo Bridge, Igando, Lagos",
                    "Puma Nig Ltd/Decl, Lagos",
                    "Lekki Free Trade Zone, Lagos"
                ],
            },
        ],
    },




    { 
        id: 6, 
        image: teamAsset6,
        name: 'ENGR. JABAR RASHEED TAIWO',
        portfolio: 'Lead Engineer',
        yearsOfExperience: '8',
        education: [
            {
                cert: [
                    "University of llorin, llorin, Nigeria - B.Engr (Hons) Civil Engineering 2016"
                ]
            }
        ],  
        experience: [
            {
                title: "KIMZEE GLOBAL INVESTMENT LIMITED, OSOGBO. JUNE 2024- PRESENT PROJECT ENGINEER",
                responsibility: [
                    "Manages the construction of the 4-span Lameco fly-over.",
                    "Supervise pile drilling, pile cap, pier construction, precast beam installation and capping beam construction.",
                    "Provides technical supervision, ensuring safety and efficiency.",
                    "Conducts quality control checks to ensure strict adherence to project specifications.",
                    "Coordinates equipment utilization to optimize project progress.",
                    "Compiles and submit regular project reports to stakeholders."
                ],
            },
            {
                title: "EAGLELINE CONSUITS, 303 HERBERT MACAULAY WAY, YABA, LAGOS. FEB 2023 - FEB 2024 PROJECT MANAGER",
                responsibility: [
                    "Supervised and coordinated multiple construction projects, including the construction of two blocks of a four-storey building with a total of 16 units of 3-bedroom flats.",
                    "Managed a team of site Engineers, providing guidance, training and support to ensure projects objectives were met within established time-lines and budget constraints.",
                    "Developed and implemented project plans, work schedules and resource allocation strategies to optimize project efficiency and productivity.",
                    "Conducted regular site inspections and project meetings to review project status, identify potential risks or issues, and implement corrective measures as needed."
                ],
            },
        ],
    },




    { 
        id: 7, 
        image: teamAsset7,
        name: 'SHITTA—BEY SIRAJDEEN OLABODE',
        portfolio: 'Chief Surveyor',
        yearsOfExperience: '21',
        education: [
            {
                cert: [
                    "HND Surveying and Geoinformatics Yabatech 2001",
                    "PGD Planning Studies LASU Ojo. 2006",
                    "PGD-Geographical Information Studies FSS Oyo. 2009",
                    "Masters Urban Regional Planning LASU Ojo. 2010",
                    "PD — Surveying and Geoinformatics FSS Oyo. 2016",
                    "Master in Business Admin (Marketing Option) LASU Ojo. 2019"
                ]
            }
        ],  
        experience: [
            {
                responsibility: [
                    "ALONGE OGUNMOYERO & CO NIESV PORTHARCOURT (2001 - 2002)",
                    "LAGOS BUILDING INVESTMENT CO LTD (1996 - 2002)",
                    "DEEMRANBEY & ASSOCIATES (2001 - 2002)",
                    "OFFICE OF THE STATE SURVEYOR GENERAL, ALAUSA, LAGOS STATE. (2004 TILL DATE)",
                    "ZULSIRAJ GLOBAL CONCEPT LTD (2013 TILL DATE)",
                ]
            },
        ],
    },




    { 
        id: 8, 
        image: teamAsset8,
        name: 'ENGR. AHMED WASIU',
        portfolio: 'Chief Electrical Officer',
        yearsOfExperience: '8',
        education: [
            {
                cert: [
                    "B.Eng. Electrical / Electronic Engineering, University of Ilorin, Ilorin, Kwara State Second Class (Upper) Honours (2011 - 2016)"
                ]
            },
            {
                title: 'Other Certification',
                cert: [
                    "Quality Management System and Safety Training Ariosh Limited, 2017",
                    "General Health, Safety and Environmental (HSE) Awareness, 2017",
                    "Project Management Professional (PMP), 2017",
                    "Health Safety and Environment (HSE) Level 1 & 2, 2017",
                    "Nigerian Society of Electrical and Electronics Engineering, Member.",
                    "Nigerian Society of Engineers, Member GMNSE 2018.",
                    "Council for Regulation of Engineering in Nigeria COREN, 2023."
                ]
            }
        ],  
        experience: [
            {
                title: "INTERNATIONAL ENERGY SERVICES LIMITED / SENIOR I&C DESIGN ENGINEER (SEPT 2024 - TILL DATE)",
                responsibility: [
                    "Organized and co-ordinate of design or drafting duties",
                    "Preparing Instrument and F&G datasheet",
                    "Develop Instrument and F&G (Index, IO List, Cause and Effect Matrix, MTO, Hookup Drawings, Cable Schedule, Wiring Diagram, Loop Diagram and Location Layout)",
                    "Preparing Instrument Specification."
                ],
            },
            {
                title: "Key Projects:",
                responsibility: [
                    "NLNG: Hydrogen Gas Detection System for Analyzer Houses",
                    "TSL: TSL Pipeline System Connecting Dangote Refinery and Petrolex Facility",
                    "NLNG: Power Improvement to Non-plant Facilities Connected to Substation 28",
                    "SPDC: SOKU Condensate Spiking System Upgrade"
                ],
            },
            {
                title: "LABORATORY TESTING AND DATA ANALYSIS FOR PROPOSED DEVELOPMENT FOR:",
                responsibility: [
                    "Shell (Snid), Lagos",
                    "Gt Bank Ado Road, Ajah, Lagos",
                    "Lagos-Ibadan Rail Project, Omi-Adio, Abeokuta, Ogun State",
                    "Egan Ayobo Bridge, Igando, Lagos",
                    "Puma Nig Ltd/Decl, Lagos",
                    "Lekki Free Trade Zone, Lagos"
                ],
            },
            {
                responsibility: [
                    "ARIOSH LIMITED / INTERMEDIATE I&C DESIGN ENGINEER (JUN 2020 – AUG 2024)",
                    "ARIOSH LIMITED / JUNIOR I&C DESIGN ENGINEER (NOV 2017 - MAY 2020)",
                    "ARIOSH LIMITED / TRAINEE I&C DESIGN ENGINEER (NOV 2016 - OCT 2017)",
                ]
            },
        ],
    },




    { 
        id: 9, 
        image: teamAsset9,
        name: 'ENGR. ABDULQUDUS ISHOLA OLOTA',
        portfolio: 'Safety Officer',
        yearsOfExperience: '8',
        education: [
            {
                cert: [
                    "B.Eng. Chemical Engineering, University of Ilorin, Ilorin, Kwara State. - 2016",
                    "Graduate Member, Nigerian Society of Engineers",
                    "Graduate Members, Council for the Regulation of Engineering in Nigeria."
                ]
            }
        ],  
        experience: [
            {
                title: "MUKESON NIG. LTD SITE ENGINEER",
                responsibility: [
                    "Construction of hostel complexes at University of Ilorin. 2021",
                    "Construction of residential duplexes at Osogbo& IBADAN 2021/2022",
                    "Construction of sub-base and Asphalt laying for a 905m road in Oro Town, 2023"
                ],
            },
            {
                title: "ARBICO LTD",
                responsibility: [
                    "Construction of retaining walls and raft foundations for a 7 storied Ilorin International Hostels. 2023"
                ],
            },
        ],
    },




    { 
        id: 10, 
        image: teamAsset10,
        name: 'ABDULSALAM OPEYEMI SALAM',
        portfolio: 'Legal Practitioner',
        yearsOfExperience: '',
        education: [
            {
                cert: [
                    "Bar Part II Nigerian Law School, Kano Campus. B.L (Second Class Upper Division) (2021 – 2022)",
                    "Common and Islamic Law University of Ilorin. LLB. (Second Class Lower Division) (2015 – 2021)"
                ]
            }
        ],  
        experience: [
            {
                responsibility: [
                    "(2023 – Till Date) Legal Associate, Andrias & Co (Legal Practitioners)",
                    "(April – May, 2022) Legal Extern, A. O Muhammed & Co (Prime Chambers)",
                    "(Sept – Oct, 2018) Legal Intern, Yusuf Olaolu Ali & Co",
                ]
            },
        ],
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
        id: '01',
        category: 'Civil Engineering',
        title: 'Rigid Pavement & Stormwater Infrastructure',
        description: 'Coordinated the construction of rigid pavement and stormwater reservoirs, critical for site infrastructure and drainage management.',
        date: '2019 — Present',
        location: 'Nigeria',
        type: 'Civil',
        featured: true,
    },
    {
        id: '02',
        category: 'Foundation Engineering',
        title: 'Spherical Tank Foundations',
        description: "Supervised the construction of 144 piles for spherical tanks' foundations.",
        date: 'May 2017 — June 2019',
        location: 'Nigeria',
        type: 'Structural',
    },
    {
        id: '03',
        category: 'Industrial Construction',
        title: 'Spherical Tank Installation',
        description: 'Oversaw the erection of spherical tanks, welding processes and installation of accessories, ensuring adherence to safety protocols and quality standards.',
        date: 'May 2017 — June 2019',
        location: 'Nigeria',
        type: 'Industrial',
    },
    {
        id: '04',
        category: 'Infrastructure Development',
        title: 'Industrial Site Development',
        description: 'Oversaw the construction of key civil facilities, including the jetty, substation, administrative building, drainage systems, and site pavements.',
        date: 'May 2017 — June 2019',
        location: 'Nigeria',
        type: 'Civil',
    },
    {
        id: '05',
        category: 'Residential Development',
        title: 'Luxury Villa Renovation',
        description: 'Led the comprehensive renovation of a high-end residential villa in Asokoro, transforming the swimming pool, gym, drivers\' lodge, pavilion and duplexes while preserving architectural integrity.',
        date: 'May 2017 — June 2019',
        location: 'Asokoro, Abuja',
        type: 'Residential',
    },
    {
        id: '06',
        category: 'Residential Development',
        title: 'Swimming Pool & Surrounding Area Upgrade',
        description: 'Supervised structural and aesthetic upgrades of the swimming pool and surrounding area.',
        date: 'May 2017 — June 2019',
        location: 'Asokoro, Abuja',
        type: 'Residential',
    },
    {
        id: '07',
        category: 'Construction Management',
        title: 'School Hostel Construction',
        description: 'Managed the construction of school hostels.',
        date: '2008 — 2009',
        location: 'Nigeria',
        type: 'Construction',
    },
    {
        id: '08',
        category: 'Educational Facility Upgrade',
        title: 'Residential Duplex Conversion',
        description: 'Led the renovation and conversion of existing residential duplexes into classrooms, clinics, and offices, ensuring all structural modifications complied with safety and educational standards.',
        date: '2018 — 2019',
        location: 'Nigeria',
        type: 'Construction',
    },
    {
        id: '09',
        category: 'Hydraulic Engineering',
        title: 'Rivers Channelization & Hydraulic Structures',
        description: 'Monitoring and supervision of the construction of 34km of river channelization and hydraulic structures across the rivers, Oyo State.',
        date: 'May 2023 — June 2024',
        location: 'Oyo State',
        type: 'Civil',
    },
    {
        id: '10',
        category: 'Flood Management',
        title: 'Ogbere Tioya Hydraulic Structures',
        description: 'Supervision of the construction of hydraulic structures at Ogbere Tioya, Ibadan for the Ibadan Urban Flood Management Project.',
        date: 'May 2023 — June 2024',
        location: 'Ibadan, Oyo State',
        type: 'Civil',
    },
    {
        id: '11',
        category: 'Foundation Engineering',
        title: 'Pile Foundation for Residential Development',
        description: 'Supervision of the construction of a pile foundation for a five-storey residential building with a penthouse at Fatai Arobieke Street, Lekki Peninsula Scheme, Lagos State.',
        date: 'May 2023 — June 2024',
        location: 'Lekki, Lagos State',
        type: 'Structural',
    },
    {
        id: '12',
        category: 'Road Rehabilitation',
        title: 'Ejigbo-Ifeodan-Owu Road Rehabilitation',
        description: 'Rehabilitation of 32km Ejigbo-Ifeodan-Owu boundary road with supervision of hydraulic structures and earthworks.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Oyo State',
        type: 'Civil',
    },
    {
        id: '13',
        category: 'Commercial Building',
        title: 'Two-Storey Shopping Complex',
        description: 'Supervision of the construction of a two-storey shopping complex with brick structure at Bank Olodo, Oyo State.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Bank Olodo, Oyo State',
        type: 'Commercial',
    },
    {
        id: '14',
        category: 'Residential Development',
        title: 'Five-Bedroom Duplex Development',
        description: 'Supervision of a proposed development of a five-bedroom duplex at Ologede Area, Olodo, Ibadan, Oyo State.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Olodo, Ibadan',
        type: 'Residential',
    },
    {
        id: '15',
        category: 'Institutional Construction',
        title: 'Air Force Institute of Safety Facilities',
        description: "Supervision of the construction of armoury, commandant's residence, married officers' quarters, corporal quarters and 5km road network for the Nigerian Air Force Institute of Safety, Ipetu Ijesha, Osun State.",
        date: 'Nov 2022 — Apr 2023',
        location: 'Ipetu Ijesha, Osun State',
        type: 'Institutional',
    },
    {
        id: '16',
        category: 'Structural Design',
        title: 'Reinforced Concrete Structures',
        description: 'Structural designs of several reinforced concrete structures such as domestic buildings, shopping complexes, church auditoriums, and armouries.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Nigeria',
        type: 'Structural',
    },
    {
        id: '17',
        category: 'Maintenance Works',
        title: 'Precious Corner Stone University Maintenance',
        description: 'Supervision of maintenance works, including buildings and infrastructure, and procurements for Precious Corner Stone University, Ibadan, Oyo State.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Ibadan, Oyo State',
        type: 'Maintenance',
    },
    {
        id: '18',
        category: 'Coldroom Maintenance',
        title: 'Caxton Building Coldroom Maintenance',
        description: 'Supervision of maintenance work for the Caxton Building Coldroom for Fan Milk, Eleyele, Ibadan, Oyo State.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Eleyele, Ibadan',
        type: 'Maintenance',
    },
    {
        id: '19',
        category: 'Educational Development',
        title: 'Crest View Academy Construction',
        description: 'Supervision of the construction of Crest View Academy, Kuje, FCT – Abuja.',
        date: 'Nov 2022 — Apr 2023',
        location: 'Kuje, FCT – Abuja',
        type: 'Educational',
    },
    {
        id: '20',
        category: 'Geotechnical Investigation',
        title: 'Collapse Investigation at Gerald Road',
        description: 'Geotechnical investigation into the cause of the collapse of a 21-storey building under construction at Gerald Road, Ikoyi, Lagos State.',
        date: 'Ongoing',
        location: 'Ikoyi, Lagos State',
        type: 'Geotechnical',
    },
    {
        id: '21',
        category: 'Geotechnical Investigation',
        title: 'Louisville Towers Investigation',
        description: 'Subsoil investigation for the proposed development of Louisville Towers, Eko Atlantic City, Victoria Island, Lagos State.',
        date: 'Ongoing',
        location: 'Eko Atlantic City, Lagos',
        type: 'Geotechnical',
    },
    {
        id: '22',
        category: 'Geotechnical Investigation',
        title: 'Magodo Estate Development',
        description: 'Subsoil investigation for the proposed development of 100-unit building in Magodo Estate, Lagos State.',
        date: 'Ongoing',
        location: 'Magodo, Lagos State',
        type: 'Geotechnical',
    },
    {
        id: '23',
        category: 'Geotechnical Investigation',
        title: 'Lekki Regional Road Investigation',
        description: 'Subsoil investigation for the proposed 8.75km Lekki Regional Road, Lagos State.',
        date: 'Ongoing',
        location: 'Lekki, Lagos State',
        type: 'Geotechnical',
    },
    {
        id: '24',
        category: 'Geotechnical Investigation',
        title: 'Lekki Regional Road Soil Study',
        description: 'Subsoil investigation for the proposed 8.75km Lekki Regional Road, Lagos State.',
        date: 'Ongoing',
        location: 'Lekki, Lagos State',
        type: 'Geotechnical',
    },
    {
        id: '25',
        category: 'Geotechnical Investigation',
        title: 'Lagos Entertainment Centre Development',
        description: 'Subsurface soil investigation for the proposed Lagos Entertainment Centre Development at National Theatre, Costain, Lagos State.',
        date: 'Ongoing',
        location: 'Costain, Lagos State',
        type: 'Geotechnical',
    },
    {
        id: '26',
        category: 'Geotechnical Investigation',
        title: 'Total Eko Atlantic Tower Investigation',
        description: 'Subsoil investigation for the proposed 20-storey building for Total La Definition at Eko Atlantic City, Victoria Island, Lagos State.',
        date: 'Ongoing',
        location: 'Eko Atlantic City, Lagos',
        type: 'Geotechnical',
    },
];