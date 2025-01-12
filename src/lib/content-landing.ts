import { imageItem, mediaItem } from "./types";

export const customEngineering = {
  sectionClass: "bg-gray-100 dark:bg-gray-800",
  serviceName: "Custom Engineering",
  serviceIntro:
    "Comprehensive simulation services tailored to the specific needs of each client. We specialize in providing reliable, cost-effective solutions that address both small-scale problems and large, complex projects. Our custom engineering approach includes flexible engagement models, whether you’re looking for a long-term B2B partnership or a project-based solution. With Procaesim, clients can achieve precise, validated outcomes aligned with their unique engineering challenges and standards.",

  hrefDiscover: "/contact", // Adjust for routing

  items: [
    "Computational Fluid Dynamics (CFD): Expertise in fluid mechanics simulations for internal and external flows, accurately modeling heat transfer phenomena.",
    "Finite Element Analysis (FEM): Static, dynamic, and modal analyses for solid mechanics to enhance structural integrity and predict vibrational behaviors.",
    "Standards Compliance: Tailored solutions for meeting industry standards, ensuring project compliance with required specifications.",
    "Flexible Engineering Solutions: B2B long-term collaboration or project-based services, customizable to fit any project scope and timeline.",
    "Highly paralellalized simulations can be performed and results obtained in a timely manner",
    "This service is provided remotely, however inhouse work can be done prior agreement on the conditions",
  ],
};

export const onDemandEngineering = {
  serviceName: "On-Demand Engineering",
  serviceIntro:
    "Specialized on-demand engineering services, focusing on in-house simulations tailored to the automotive sector. While our initial emphasis is on BiW crash analysis and highly dynamic crash simulations, we aim to remain flexible for future expansions into other engineering areas. This service is designed to ensure that our clients can effectively meet their engineering needs while maintaining control over the simulation process",
  items: [
    "Dynamic crash simulations emphasizing BiW structures to enhance safety, however Occupant Injury Criteria and dummy dynamics can also assessed depending on the projects goal and scope.",
    "Focus on helping clients meet NCAP standards, covering MDB, frontal crash, and ODB tests comprehensively.",
    "Specialized geometry reparation for CFD simulations, ensuring all components are watertight for accurate results.",
    "Comprehensive results post-processing and professional presentations in both English and Spanish for clarity.",
    "Flexible engagement models cater to both small challenges and extensive projects, adapting to client needs.",
    "This service is provided inhouse, however remote work can be performed prior agreement on the conditions",
  ],
};

import simUsbGeo1 from "@/images/post/sim-usb/sim-usb-geo-1.jpg";
import simUsbGeo2 from "@/images/post/sim-usb/sim-usb-geo-2.jpg";
import simUsbEnergy from "@/images/post/sim-usb/sim-usb-energy.jpeg";
import simAlprofileGeo1 from "@/images/post/sim-alprofile/sim-alprofile-geo-1.jpg";
import simMetaltableGeo1 from "@/images/post/sim-metaltable/sim-metaltable-geo-1.jpg";
import simRoomGeo1 from "@/images/post/sim-room/sim-room-geo-1.jpg";
import simRoomGeo2 from "@/images/post/sim-room/sim-room-geo-2.jpg";

export const studyCasesSections = [
  {
    sectionId: "solid",
    title: "Computer Solid Mechanics (FEM)",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle: "Drop test of a Portable Storage Device",
        mediaItems: [
          {
            type: "image",
            title: "Image 1",
            description: "Image 1",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simUsbGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          {
            type: "image",
            title: "Image 2",
            description: "Image 2",
            alt: "Image 2",
            height: 600,
            width: 600,
            src: simUsbGeo2,
            placeholder: "blur",
            caption: "Image 2",
          },
          {
            type: "video",
            title: "Video 1",
            description: "Video 1",
            height: 500,
            width: 500,
            src: "/videos/post/sim-usb/ps-1.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 2",
            description: "Video 2",
            height: 500,
            width: 500,
            src: "/videos/post/sim-usb/ps-2.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "image",
            title: "Image 3",
            description: "Image 3",
            alt: "Image 3",
            height: 600,
            width: 600,
            src: simUsbEnergy,
            placeholder: "blur",
            caption: "Image 3",
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle:
          "Implicit simulation of a 3 point bending test in an aluminum profile",
        mediaItems: [
          {
            type: "image",
            title: "Image 1",
            description: "Image 1",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simAlprofileGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          ,
          {
            type: "video",
            title: "Video 1",
            description: "Video 1",
            height: 500,
            width: 500,
            src: "/videos/post/sim-alprofile/displ.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 2",
            description: "Video 2",
            height: 500,
            width: 500,
            src: "/videos/post/sim-alprofile/plastics.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 3",
            description: "Video 3",
            height: 500,
            width: 500,
            src: "/videos/post/sim-alprofile/reactf.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 4",
            description: "Video 4",
            height: 500,
            width: 500,
            src: "/videos/post/sim-alprofile/vmstr.mp4",
            controls: true,
            muted: true,
            loop: true,
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle:
          "Study of the natural vibrational modes of a metal structure",
        mediaItems: [
          {
            type: "image",
            title: "Image 1",
            description: "Image 1",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simMetaltableGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          {
            type: "video",
            title: "Video 1",
            description: "Video 1",
            height: 500,
            src: "/videos/post/sim-metaltable/basic_frame_f1_81Hz.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 2",
            description: "Video 2",
            height: 500,
            src: "/videos/post/sim-metaltable/basic_frame_f2_84Hz.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 3",
            description: "Video 3",
            height: 500,
            src: "/videos/post/sim-metaltable/basic_frame_f3_110Hz.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 4",
            description: "Video 4",
            height: 500,
            src: "/videos/post/sim-metaltable/basic_frame_f4_147Hz.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 5",
            description: "Video 5",
            height: 500,
            src: "/videos/post/sim-metaltable/basic_frame_f5_155Hz.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
        ] as mediaItem[],
      },
    ],
  },
  {
    sectionId: "fluid",
    title: "Computer Fluid Dynamics (CFD)",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle: "Study of thermal efficiency within a apartment room",
        mediaItems: [
          {
            type: "image",
            title: "Image 1",
            description: "Image 1",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simRoomGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          {
            type: "image",
            title: "Image 2",
            description: "Image 2",
            alt: "Image 2",
            height: 600,
            width: 600,
            src: simRoomGeo2,
            placeholder: "blur",
            caption: "Image 2",
          },
          {
            type: "video",
            title: "Video 1",
            description: "Video 1",
            height: 500,
            src: "/videos/post/sim-room/vel-temp-1.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 2",
            description: "Video 2",
            height: 500,
            src: "/videos/post/sim-room/vel-temp-2.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 3",
            description: "Video 3",
            height: 500,
            src: "/videos/post/sim-room/vector.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
          {
            type: "video",
            title: "Video 4",
            description: "Video 4",
            height: 500,
            src: "/videos/post/sim-room/isovol.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
          },
        ] as mediaItem[],
      },
    ],
  },
];

import openLogosCalculix from "@/images/open-logos/open-logos-calculix.jpg";
import openLogosLsprepost from "@/images/open-logos/open-logos-lsprepost.png";
import openLogosOpenradioss from "@/images/open-logos/open-logos-openradioss.jpg";
import openLogosParaview from "@/images/open-logos/open-logos-paraview.png";
import openLogosPrepomax from "@/images/open-logos/open-logos-prepomax.jpg";
import openLogosOpenfoam from "@/images/open-logos/open-logos-openfoam.png";

export const openImages = [
  {
    type: "image",
    description: "Open-source FEA solver for structural analysis",
    alt: "CalculiX",
    width: 100,
    height: 100,
    src: openLogosCalculix,
    placeholder: "blur",
    caption: "Open-source FEA solver for structural analysis",
  },
  {
    type: "image",
    description: "Tool for LS-DYNA solver result processing",
    alt: "LS-PrePost",
    width: 100,
    height: 100,
    src: openLogosLsprepost,
    placeholder: "blur",
    caption: "Tool for LS-DYNA solver result processing",
  },
  {
    type: "image",
    description: "Dynamic analysis solver for crash simulations",
    alt: "OpenRadioss",
    width: 100,
    height: 100,
    src: openLogosOpenradioss,
    placeholder: "blur",
    caption: "Dynamic analysis solver for crash simulations",
  },
  {
    type: "image",
    description: "3D visualization for simulation data",
    alt: "ParaView",
    width: 100,
    height: 100,
    src: openLogosParaview,
    placeholder: "blur",
    caption: "3D visualization for simulation data",
  },
  {
    type: "image",
    description: "Pre-processor for CalculiX solver",
    alt: "PrePoMax",
    width: 100,
    height: 100,
    src: openLogosPrepomax,
    placeholder: "blur",
    caption: "Pre-processor for CalculiX solver",
  },
  {
    type: "image",
    description: "CFD solver for fluid simulations",
    alt: "OpenFOAM",
    width: 100,
    height: 100,
    src: openLogosOpenfoam,
    placeholder: "blur",
    caption: "CFD solver for fluid simulations",
  },
] as imageItem[];

import comLogosSimuliaAbaqus from "@/images/com-logos/com-logos-simulia-abaqus.png";
import comLogosMeta from "@/images/com-logos/com-logos-meta-logo.png";
import comLogosAnsa from "@/images/com-logos/com-logos-ansa-logo.png";
import comLogosLsdyna from "@/images/com-logos/com-logos-lsdyna-logo.png";

export const comImages = [
  {
    type: "image",
    description: "Pre-processor for advanced CAE modeling",
    alt: "ANSA",
    width: 100,
    height: 100,
    src: comLogosAnsa,
    placeholder: "blur",
    caption: "Pre-processor for advanced CAE modeling",
  },
  {
    type: "image",
    description: "Post-processing tool for CAE data analysis",
    alt: "META",
    width: 100,
    height: 100,
    src: comLogosMeta,
    placeholder: "blur",
    caption: "Post-processing tool for CAE data analysis",
  },
  {
    type: "image",
    description: "Implicit FEA solver for structural analysis",
    alt: "SIMULIA Abaqus Standard",
    width: 100,
    height: 100,
    src: comLogosSimuliaAbaqus,
    placeholder: "blur",
    caption: "Implicit FEA solver for structural analysis",
  },
  {
    type: "image",
    description: "Explicit FEA solver for dynamic simulations",
    alt: "LS-DYNA",
    width: 100,
    height: 100,
    src: comLogosLsdyna,
    placeholder: "blur",
    caption: "Explicit FEA solver for dynamic simulations",
  },
] as imageItem[];
