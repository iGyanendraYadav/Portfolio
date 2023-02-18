import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineMobile, AiOutlineTablet } from "react-icons/ai";


export const projectExperience = [
  {
    name: "For Mobiles",
    projects: 26,
    icon: AiOutlineMobile,
    bg: "#286F6C",
  },
  {
    name: "For Tablets",
    projects: 26,
    icon: AiOutlineTablet,
    bg: "#EEC048",
  },
  {
    name: "For Desktops",
    projects: 37,
    icon: HiOutlineDesktopComputer,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I never get bored while designing a website. Designing is something that we can always improve or try to improve than the earliers.",
  
  "Since, Google is also focus on mobile first approach. That is why I always keep it in my mind to make website responsive for different resolutions and devices.",
];

export const workExp = [
  {
    place: "HCL Technologies, Noida",
    tenure: "March 2022 - Present",
    role: "Analyst",
    detail:
      "As Analyst, I have to work on some other additional works also, like CHANGE Management(Creating, Documenting & Reviewing the CHANGE). I have also worked in Windows AD Team.",
  },
  {
    place: "HCL Technologies, Noida",
    tenure: "Dec 2019 - Feb 2022",
    role: "Graduate Trainee Engineer",
    detail:
      "Here, my responsibility was to manage Incidents, RITMs and to provide the solution as soon as possible.",
  },

];

export const comments = [
  {
   img: "./html.png",
  },
  {
    img: "./css.png",
   },
   {
    img: "./js.png",
   },
   {
    img: "./bootstrap.png",
   },
   {
    img: "./tailwind.png",
   },
   {
    img: "./react.png",
   },
   {
     img: "./nextjs.png",
    },
    {
     img: "./mongoDB.png",
    },
    {
     img: "./redux.png",
    },
    {
     img: "./firebase.png",
    },
    {
      img: "./fm.png",
     },
     {
       img: "./ps.png",
      },
      {
       img: "./vscode.png",
      },
      {
       img: "./git.png",
      },
      {
       img: "./github.png",
      },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
