import {
  faClock,
  faCoffee,
  faImages,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import nuromorphic from "./portfolio/App/nuromorphic.jpg";
import Taxiapp from "./portfolio/App/Taxiapp.jpg";
import groceryapp from "./portfolio/App/groceryapp.jpg";
import gamingdashboard from "./portfolio/Dashboard/gamingdashboard.jpg";
import Dashboard from "./portfolio/Dashboard/Dashboard.png";
import DarkDashboard from "./portfolio/Dashboard/dark.png";
import LightDashboard from "./portfolio/Dashboard/LightDashboard.png";
import ELearningWebsite from "./portfolio/Website/ELearningWebsite.png";
import CompstripsWebsite from "./portfolio/Website/CompstripsWebsite.jpg";
import ECommerce from "./portfolio/Website/ECommerce.jpg";
// Home Page

// About Row
export const personalInfo = {
  name: "Alice Barkley",
  birthdate: "09/13/1996",
  email: "info@domain.com",
  phone: "+ (123) 456-7890",
  skype: "John_Doe",
  address: "12345 Fake ST NoWhere AB Country",
};

// Resume Row
export const expertise = [
  {
    name: "",
    title: "Jan2020-Nov2022 - UI/UX Designer",
    subtitle: "UX Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
  },
  {
    title: "2016 - 2017",
    subtitle: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
  },
  {
    title: "2015 - 2016",
    subtitle: "UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.",
  },
];

export const education = [
  {
    title: "Jan 2023 - July 2024",
    subtitle: "Master of Computer Science (Software Engineering)",
    description: "Staffordshire University, Stoke-on-Trent, United Kingdom",
  },
  {
    title: "Jul 2015 - Jun 2019",
    subtitle: "Bachelor of Computer Engineering",
    description: "Gujarat Technological University",
  },
];

// Figures Row

export const figures = [
  {
    icon: <FontAwesomeIcon icon={faClock} size="3x" />,
    figure: "500",
    title: "Hours Worked",
  },
  {
    icon: <FontAwesomeIcon icon={faImages} size="3x" />,
    figure: "50K",
    title: "Project Finished",
  },
  {
    icon: <FontAwesomeIcon icon={faSmile} size="3x" />,
    figure: "200K",
    title: "Happy Clients",
  },
  {
    icon: <FontAwesomeIcon icon={faCoffee} size="3x" />,
    figure: "2K",
    title: "Happy Clients",
  },
];

export const experience = [
  {
    title: " UI/UX Designer",
    date: "Jan2020-Nov2022",
    company: "FABVOGUESTUDIO | Surat ",
    description: [
      "Project: Grocery Shopping App, E-Learning Website, Fintech App.",
      "I learned many things like creating animation prototypes in Figma, components, Masking, overflow scrolling, interactions, etc.",
      "Design conceptual wireframes, high-fidelity mock-ups, information architecture diagrams,",
      "Interaction specifications, and functional prototypes",
    ],
  },
  {
    title: "Intern UI/UX Designer – Internship",
    date: "Jul2019-Dec2019",
    company: "FABVOGUE Studio | Surat",
    description: [
      "Projects: Qr code scanner Design, Wheel on map (handicap mobility), Iwad taxi booking App.",
      " During this time period, I have gained so much knowledge and tools knowledge like AdobePhotoshop, Adobe Illustrator, Figma, Zeplin, Adobe premiere pro, and much more.",
      " Creating user flows, wireframes, prototypes, and mockups.",
    ],
  },
];

// Portfolio Row

// Other imports...

export const portfolioNav = [
  {
    id: 0,
    title: "All",
    images: [
      {
        name: "Nuromorphic",
        image: nuromorphic,
        link: "https://www.figma.com/proto/kUQZTa5fI7UGhFGfA7p41D/Neuromorphic-Travel-App?node-id=0-241&scaling=scale-down",
      },
      {
        image: Taxiapp,
        link: "https://www.figma.com/proto/1MiBFOaiyPnTS1vRiFZ7up/Untitled?node-id=1-1562&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1532",
        name: "Taxiapp",
      },
      {
        name: "Grocery App",
        image: groceryapp,
        link: "https://www.figma.com/proto/Flw0jmLdT8hVdHugpdP8p4/fruits-shoping?scaling=scale-down&page-id=0%3A1&starting-point-node-id=90%3A0&node-id=90-0",
      },
      {
        name: "Gaming Dashboard",
        image: gamingdashboard,
        link: "https://xd.adobe.com/view/548dbfc3-22b7-409b-957c-63407020b4a3-01de/",
      },
      {
        name: "Dashboard",
        image: Dashboard,
        link: "https://www.figma.com/file/l4wWC8WS2exFgiOb4ynJyD/Untitled?type=design&node-id=0-1&mode=design&t=UQf1bcqp9Sv92eC1-0",
      },
      {
        name: "Dark-Dashboard",
        image: DarkDashboard,
        link: "https://www.figma.com/proto/4aet6xAoOmADbBm2fIBNEB/Dashboard-(Community)?type=design&node-id=21-408&t=uVD8Dzz85fNk7u0Q-1&scaling=min-zoom&page-id=0%3A1",
      },
      {
        name: "Light-Dashboard",
        image: LightDashboard,
        link: "",
      },
      {
        name: "E-Learning Website",
        image: ELearningWebsite,
        link: "https://www.figma.com/file/I5VHC8wd2a9dDNwu8LsROy/e-learning?type=design&node-id=0-1&mode=design&t=OoXcnHIIvI8oG3ZA-0",
      },
      {
        name: "Compstrips Website",
        image: CompstripsWebsite,
        link: "https://www.figma.com/proto/NQijEA518RTGDIijCgzbI3/Website-Mockup?type=design&t=6vIa2XbnNfMbXhzI-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2",
      },
      {
        name: "E-Commerce",
        image: ECommerce,
        link: "https://www.figma.com/proto/OYb4tNqo8e9FAphGu1HEYo/eCommerce---Flower-Delivery-website-%7C-UI-%26-UX-%7C-Ui-kit-%7C-Template-(Community)?type=design&node-id=157-972&t=nA8f077fSXhH5dYu-1&scaling=scale-down&page-id=171%3A526&starting-point-node-id=157%3A972&show-proto-sidebar=1&mode=design",
      },
    ],
  },
  {
    id: 1,
    title: "Application",
    images: [
      {
        name: "Nuromorphic",
        image: nuromorphic,
        link: "https://www.figma.com/proto/kUQZTa5fI7UGhFGfA7p41D/Neuromorphic-Travel-App?node-id=0-241&scaling=scale-down",
      },
      {
        image: Taxiapp,
        link: "https://www.figma.com/proto/1MiBFOaiyPnTS1vRiFZ7up/Untitled?node-id=1-1562&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1532",
        name: "Taxiapp",
      },
      {
        name: "Grocery App",
        image: groceryapp,
        link: "https://www.figma.com/proto/Flw0jmLdT8hVdHugpdP8p4/fruits-shoping?scaling=scale-down&page-id=0%3A1&starting-point-node-id=90%3A0&node-id=90-0",
      },
    ],
  },
  {
    id: 2,
    title: "Dashboard",
    images: [
      {
        name: "Gaming Dashboard",
        image: gamingdashboard,
        link: "https://xd.adobe.com/view/548dbfc3-22b7-409b-957c-63407020b4a3-01de/",
      },
      {
        name: "Dashboard",
        image: Dashboard,
        link: "https://www.figma.com/file/l4wWC8WS2exFgiOb4ynJyD/Untitled?type=design&node-id=0-1&mode=design&t=UQf1bcqp9Sv92eC1-0",
      },
      {
        name: "Dark-Dashboard",
        image: DarkDashboard,
        link: "https://www.figma.com/proto/4aet6xAoOmADbBm2fIBNEB/Dashboard-(Community)?type=design&node-id=21-408&t=uVD8Dzz85fNk7u0Q-1&scaling=min-zoom&page-id=0%3A1",
      },
      {
        name: "Light-Dashboard",
        image: LightDashboard,
        link: "",
      },
    ],
  },
  {
    id: 3,
    title: "Webpage",
    images: [
      {
        name: "E-Learning Website",
        image: ELearningWebsite,
        link: "https://www.figma.com/file/I5VHC8wd2a9dDNwu8LsROy/e-learning?type=design&node-id=0-1&mode=design&t=OoXcnHIIvI8oG3ZA-0",
      },
      {
        name: "Compstrips Website",
        image: CompstripsWebsite,
        link: "https://www.figma.com/proto/NQijEA518RTGDIijCgzbI3/Website-Mockup?type=design&t=6vIa2XbnNfMbXhzI-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2",
      },
      {
        name: "E-Commerce",
        image: ECommerce,
        link: "https://www.figma.com/proto/OYb4tNqo8e9FAphGu1HEYo/eCommerce---Flower-Delivery-website-%7C-UI-%26-UX-%7C-Ui-kit-%7C-Template-(Community)?type=design&node-id=157-972&t=nA8f077fSXhH5dYu-1&scaling=scale-down&page-id=171%3A526&starting-point-node-id=157%3A972&show-proto-sidebar=1&mode=design",
      },
    ],
  },
];
