import Autoplay from "embla-carousel-autoplay";
import { mediaItem } from "./types";

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
            title: "Impact position",
            description:
              "Perspective view of the device as it is prior to the ground impact - no exploded",
            alt: "perspective view no exploded",
            height: 600,
            src: "/images/post/pen/persp_colour_initial_noexplode.jpeg",
            width: 600,
            className: "object-contain mx-0 mb-2",
            caption: "no exploded view",
          },
          {
            type: "image",
            title: "Von Misses Stress Distribution",
            description:
              "Perspective view of the device as it is prior to the ground impact - exploded",
            alt: "perspective view exploded",
            height: 500,
            src: "/images/post/pen/persp_colour_initial_explode.jpeg",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "exploded view",
          },
          {
            type: "video",
            title: "Plastic deformation view 1",
            description: "Plastic deformation view 1",
            height: 500,
            src: "/videos/pers_near_ps.mp4",
            width: 500,
            controls: true,
            muted: true,
            loop: true,
            autoPlay: true,
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle:
          "Explicit simulation of a pendrive impacting in the ground - part2",
        mediaItems: [
          {
            type: "image",
            title: "Von Misses Stress Distribution",
            description:
              "Perspective view of the device as it is prior to the ground impact - exploded",
            alt: "perspective view exploded",
            height: 500,
            src: "/images/post/pen/persp_colour_initial_explode.jpeg",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "exploded view",
          },
          {
            type: "image",
            title: "Von Misses Stress Distribution",
            description:
              "Perspective view of the device as it is prior to the ground impact - exploded",
            alt: "perspective view exploded",
            height: 500,
            src: "/images/post/pen/persp_colour_initial_explode.jpeg",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "exploded view",
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
            title: "Von Misses Stress Distribution",
            description:
              "Perspective view of the device as it is prior to the ground impact - exploded",
            alt: "perspective view exploded",
            height: 500,
            src: "/images/post/pen/persp_colour_initial_explode.jpeg",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "exploded view",
          },
          {
            type: "image",
            title: "Von Misses Stress Distribution",
            description:
              "Perspective view of the device as it is prior to the ground impact - exploded",
            alt: "perspective view exploded",
            height: 500,
            src: "/images/post/pen/persp_colour_initial_explode.jpeg",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "exploded view",
          },
        ] as mediaItem[],
      },
    ],
  },
];

export const openImages = [
  {
    src: "/images/open-logos/calculix.jpg",
    alt: "CalculiX",
    width: 150,
    description: "Open-source FEA solver for structural analysis.",
  },
  {
    src: "/images/open-logos/lsprepost-logo2.png",
    alt: "LS-PrePost",
    width: 150,
    description: "Tool for LS-DYNA solver result processing.",
  },
  {
    src: "/images/open-logos/openradioss.jpg",
    alt: "OpenRadioss",
    width: 150,
    description: "Dynamic analysis solver for crash simulations.",
  },
  {
    src: "/images/open-logos/paraview-logo.png",
    alt: "ParaView",
    width: 150,
    description: "3D visualization for simulation data.",
  },
  {
    src: "/images/open-logos/prepomax-logo.jpg",
    alt: "PrePoMax",
    width: 150,
    description: "Pre-processor for CalculiX solver.",
  },
  {
    src: "/images/open-logos/openfoam-logo.png",
    alt: "OpenFOAM",
    width: 150,
    height: "auto",
    description: "CFD solver for fluid simulations.",
  },
];

export const comImages = [
  {
    src: "/images/com-logos/ansa-logo.svg",
    alt: "ANSA",
    width: 150,
    description: "Pre-processor for advanced CAE modeling.",
  },
  {
    src: "/images/com-logos/meta-logo.svg",
    alt: "META",
    width: 150,
    description: "Post-processing tool for CAE data analysis.",
  },
  {
    src: "/images/com-logos/simulia-abaqus-logo.png",
    alt: "SIMULIA Abaqus Standard",
    width: 150,
    description: "Implicit FEA solver for structural analysis.",
  },
  {
    src: "/images/com-logos/lsdyna-logo.svg",
    alt: "LS-DYNA",
    width: 150,
    description: "Explicit FEA solver for dynamic simulations.",
  },
];
