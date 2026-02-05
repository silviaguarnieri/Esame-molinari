
import imgSil from "../assets/imgSil.jpg";



export const about = {
    h1: "SILVIA GUARNIERI / ☁️",
    pAbout: "Helloo! Mi chiamo Silvia, sono una studentessa 🎓 magistrale in Digital Design e Communication 💻 , con una forte passione per l‍a fotografia 💡 e la cultura visiva. Colleziono oggetti di design ♟️ e magazine, pratico danza classica dall’età di cinque anni 🩰 e trovo ispirazione nel viaggio e nel movimento ✈️ . ",
    imgsilvia: imgSil,
}

import imgskill1 from "../assets/suite_adobe.svg";
import imgskill2 from "../assets/microsoft.svg";
import imgskill3 from "../assets/figma.svg";
import imgskill4 from "../assets/vsc.svg";

export const skills = [
    { id: 1, skill: "suite Adobe", imgSkill: imgskill1 },
    { id: 5, skill: "Figma", imgSkill: imgskill3 },
    { id: 8, skill: "Vsc", imgSkill: imgskill4 },
    { id: 2, skill: "Microsoft 365", imgSkill: imgskill2 },
];

export const contact = [
    { id: 1, 
        contactTitle: "EMAIL / 📧",
        contactLink: "mailto:silvia5200@icloud.com",
    },
    { id: 2,
        contactTitle: "INSTAGRAM / 📷 ",
        contactLink: "https://www.instagram.com/silviaguarnierii/",
    },
    { id: 3,
        contactTitle: "LINKEDIN / 💼",
        contactLink: "https://www.linkedin.com/in/silvia-guarnieri-2a275620b/",
    }

]

import imgFolio01 from "../assets/Folio_01.jpg";
import imgFolio02 from "../assets/Folio_02.jpg";
import imgFolio03 from "../assets/Folio_03.jpg";    
export const projects = [
    {
        id: 1,
        nome:"Folio 01",
        imgProject: imgFolio01,
        descrizione: "Capp App / Design System",
        projectLink: "https://www.behance.net/gallery/243528717/Capp-Design-System",
        year: "2024"
    },
    {
        id: 2,
        nome:"Folio 02",
        imgProject: imgFolio02,
        descrizione: "Brand Bible",
        projectLink: "#",
        year: "2025"   
    },
    {
        id: 3,
        nome:"Folio 03",
        imgProject: imgFolio03,
        descrizione: "Brand & accessibility guidelines",
        projectLink: "#", 
        year: "2025"
    }
];
