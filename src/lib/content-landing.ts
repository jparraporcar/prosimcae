import { imageItem, mediaItem } from "./types";

export const customEngineering = {
  sectionClass: "bg-gray-100 dark:bg-gray-800",
  serviceName: "Custom Engineering",
  serviceIntro:
    "Comprehensive simulation services tailored to the specific needs of each client. We specialize in providing reliable, cost-effective solutions that address both small-scale problems and large, complex projects. Our custom engineering approach includes flexible engagement models, whether you’re looking for a long-term B2B partnership or a project-based solution. With prosimcae, clients can achieve precise, validated outcomes aligned with their unique engineering challenges and standards.",

  hrefDiscover: "/contact", // Adjust for routing

  items: [
    "Computational Fluid Dynamics (CFD): Expertise in fluid mechanics simulations for internal and external flows, accurately modeling heat transfer phenomena.",
    "Finite Element Analysis (FEM): Static, dynamic, and modal analyses for solid mechanics to enhance structural integrity and predict vibrational behaviors.",
    "Standards Compliance: Tailored solutions for meeting industry standards, ensuring project compliance with required specifications.",
    "Flexible Engineering Solutions: B2B long-term collaboration or project-based services, customizable to fit any project scope and timeline.",
    "Highly paralellalized simulations can be performed and results obtained in a timely manner",
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
  ],
};

import simUsbGeo1 from "@/images/post/sim-usb/sim-usb-geo-1.jpg";
import simUsbGeo2 from "@/images/post/sim-usb/sim-usb-geo-2.jpg";
import simUsbEnergy from "@/images/post/sim-usb/sim-usb-energy.jpg";
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
        studyCaseTitle: "Drop test of a Portable Storage Device (PSD)",
        mediaItems: [
          {
            type: "image",
            title: "Impact position: exploded",
            description:
              "Minimizing acceleration at sensitive components is crucial, therefore the aluminum enclosure absorbs impact energy, protecting the internal structure. Key dimensions, material properties as well as other data is included to provide context for the simulation.",
            alt: "Impact position: exploded",
            height: 600,
            width: 600,
            src: simUsbGeo1,
            placeholder: "blur",
            caption: "Impact position: exploded",
          },
          {
            type: "image",
            title: "Impact position: non-exploded",
            description:
              "The assembly is positioned close to a rigid wall to reduce simulation time, with an initial velocity of -5.5 m/s in the vertical direction. The non-deformability of the wall ensures that the structural integrity of the device can be evaluated under controlled conditions.",
            alt: "Impact position: non-exploded",
            height: 600,
            width: 600,
            src: simUsbGeo2,
            placeholder: "blur",
            caption: "Impact position: non-exploded",
          },
          {
            type: "video",
            title: "Plastic strain: view 1",
            description:
              "The video illustrates the evolution of plastic strain at the impact corner, the most disadvantageous position due to resulting stress concetration. Despite this, the aluminum enclosure effectively absorbs energy, limiting plastic strain to a low max value of ~0.02.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-usb/ps-1.mp4",
              "/videos/post-1024p/sim-usb/ps-1-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Plastic strain: view 2",
            description:
              "The video shows plastic strain from the opposite side. The aluminum undergoes visible plastic deformation concentrated at the impact as well as noticeable elastic deformation recovered post impact.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-usb/ps-2.mp4",
              "/videos/post-1024p/sim-usb/ps-2-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "image",
            title: "Energy balance",
            description:
              "The graph illustrates energy transfer during impact, showing kinetic energy converting into internal energy. Kinetic energy decreases rapidly, while internal energy rises, reflecting material energy absorption and stabilization after releasing a certain amount of elastic energy.",
            alt: "Energy balance",
            height: 600,
            width: 600,
            src: simUsbEnergy,
            placeholder: "blur",
            caption: "Energy balance",
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle: "Implicit simulation of a 3 point bending test",
        mediaItems: [
          {
            type: "image",
            title: "Aluminum profile test: initial position",
            description:
              "The setup shows an aluminum profile with 3mm of imposed displacement at the top by a rigid moving part and supported by rigid fixations. Its material properties, boundary conditions, and key dimensions provide context for structural analysis.",
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
            title: "Displacement vs iteration",
            description:
              "The video shows the aluminum profile undergoing iterative displacement until reaching the imposed 3mm Z displacement boundary condition. The deformation evolves symmetrically in both sides of the profile across iterations, as anticipated.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-alprofile/displ.mp4",
              "/videos/post-1024p/sim-alprofile/displ-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Plastic strain vs iteration",
            description:
              "The video illustrates the evolution of plastic strain as the aluminum profile reaches the imposed 3mm Z displacement. Maximum plastic strain occurs symmetrically at the center of symetry of the profile, as expected.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-alprofile/plastics.mp4",
              "/videos/post-1024p/sim-alprofile/plastics-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Reaction forces vs iteration",
            description:
              "The video shows the reaction forces during the simulation, peaking at maximum displacement. Forces are uniformly distributed across the surface where displacement is applied and also concentrated at the fixations, showcasing the interaction through contact surfaces.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-alprofile/reactf.mp4",
              "/videos/post-1024p/sim-alprofile/reactf-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Von misses vs iteration",
            description:
              "The video illustrates the von Mises stress distribution, primarily concentrated around the interaction area of the moving part. Additional stress concentrations appear in regions with sharp geometric changes in the profile.",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-alprofile/vmstr.mp4",
              "/videos/post-1024p/sim-alprofile/vmstr-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle: "Study of the natural vibrational modes",
        mediaItems: [
          {
            type: "image",
            title: "Lightweight Aluminum Frame Structure",
            description:
              "The structure is designed to be lightweight and corrosion-resistant. It features beam profiles with specified dimensions and thicknesses, anchored to the ground. A natural frequency study is performed to ensure its suitability under dynamic conditions",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simMetaltableGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          {
            type: "video",
            title: "First bending mode - 81Hz",
            description:
              "First bending mode along the table’s longer axis, with the legs acting like pivot points at the floor. As the structure oscillates in a cantilever-like fashion, the maximum displacement occurs near the middle of the tabletop. This mode illustrates how the table deforms when subjected to bending loads in its primary longitudinal direction.",
            height: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f1_81Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f1_81Hz-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Second bending mode - 84Hz",
            description:
              "Second bending mode along the table’s shorter axis, with the legs again acting as pivot points at the floor. As the structure flexes in a similar cantilever-like fashion, the midpoint experiences the largest displacement. This mode highlights how the table displays a slightly higher frequency in this direction due to the reduced span length.",
            height: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f2_84Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f2_84Hz-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "First torsinal mode - 110Hz",
            description:
              "The top ring twists about the vertical axis. There’s minimal out-of-plane bending and the ring stays nearly flat in the plane parallel to the floor. The four legs serve as pivot points, and the 'open' rectangular geometry of the frame allows each corner to shift slightly, creating that in-plane twisting motion.",
            height: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f3_110Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f3_110Hz-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "local in-plane bending - 147Hz",
            description:
              "This mode primarily involves the table’s smaller middle ring profiles along its longer axis moving inward and outward, while the upper, stiffer ring sees less motion. Because these profiles are thinner, they flex more easily, explaining why the top ring remains relatively still during this vibration.",
            height: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f4_147Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f4_147Hz-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "In-plane shear mode - 155Hz",
            description:
              "The top frame oscillates between two rhombic shapes. Because the ring’s in-plane stiffness is relatively low, each welded corner can slightly pivot, allowing the rectangular frame to deform like a rhombus. This motion remains mostly in the plane of the table, rather than bending out of plane.",
            height: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f5_155Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f5_155Hz-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
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
        studyCaseTitle: "Study of a room thermal efficiency",
        mediaItems: [
          {
            type: "image",
            title: "Building room main dimensions",
            description:
              "The image outlines the building room's key dimensions, highlighting heat sources and furniture in reddish tones. The air conditioning unit (inlet) position will be detailed in the next picture. The simulation assumes closed doors and models transient convective heat transfer within the room.",
            alt: "Image 1",
            height: 600,
            width: 600,
            src: simRoomGeo1,
            placeholder: "blur",
            caption: "Image 1",
          },
          {
            type: "image",
            title: "Heat sources and BCs",
            description:
              "The image shows the room’s boundary conditions with a simplified window heat source, ignoring radiation or conduction. Two people and a TV act as fixed-temperature sources. Cooler air enters from the AC at a 45° angle, while the door bottoms serve as pressure outlets.",
            alt: "Image 2",
            height: 600,
            width: 600,
            src: simRoomGeo2,
            placeholder: "blur",
            caption: "Image 2",
          },
          {
            type: "video",
            title: "Velocity and temperature - view 1",
            description:
              "This video tracks velocity magnitudes and temperatures over a 50s simulation. Tracer lines from the AC show cooling air mostly affecting a less critical zone, leaving occupants’ area relatively warm. Although only some paths are displayed, friction implies a similar pattern near the pathlines. These findings confirm the AC’s suboptimal placement.",
            height: 500,
            srcs: [
              "/videos/post/sim-room/vel-temp-1.mp4",
              "/videos/post-1024p/sim-room/vel-temp-1-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Velocity and temperature - view 2",
            description:
              "This video highlights how the cooling air remains mostly within a confined zone, suggesting potential recirculation and inefficient heat dissipation. Although the recirculation is not directly visible here, the surrounding walls create a space prone to airflow loops, situation that will be examined in the next video.",
            height: 500,
            srcs: [
              "/videos/post/sim-room/vel-temp-2.mp4",
              "/videos/post-1024p/sim-room/vel-temp-2-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Recirculation pattern",
            description:
              "This video presents a plane section through the AC unit, displaying in-plane velocity vectors. Notably, the flow descending from the top of the unit forms a recirculation loop constrained by surrounding walls, limiting direct airflow to occupant areas and suggesting inefficiencies in the system's placement.",
            height: 500,
            srcs: [
              "/videos/post/sim-room/vector.mp4",
              "/videos/post-1024p/sim-room/vector-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
          },
          {
            type: "video",
            title: "Temperature isovolume",
            description:
              "This video displays an isovolume zone marking temperatures within a specified range, highlighting the 3D distribution of cooler air. The room, initially at 300K, experiences about a max. of 1.5K drop in these regions, while other areas remain above the threshold. This limited cooling area indicates suboptimal air distribution, and potentially the need for higher AC power resulting in an increase in energy costs with the current AC position.",
            height: 500,
            srcs: [
              "/videos/post/sim-room/isovol.mp4",
              "/videos/post-1024p/sim-room/isovol-1024p.mp4",
            ],
            width: 500,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
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
