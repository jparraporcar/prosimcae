// data.js
import { imageItem, mediaItem } from "./types";

export const mainSectionIntroDescription = "mainSectionIntroDescription";

export const mainSectionTitles = {
  simulationServices: "mainSectionTitles.simulationServices",
  howWeWork: "mainSectionTitles.howWeWork",
  caseStudies: "mainSectionTitles.caseStudies",
  partnerWithUs: "mainSectionTitles.partnerWithUs",
  aboutProsimcae: "mainSectionTitles.aboutProsimcae",
};

export const customEngineering = {
  sectionClass: "bg-gray-100 dark:bg-gray-800", // Non-translatable
  serviceName: "customEngineering.serviceName",
  serviceIntro: "customEngineering.serviceIntro",
  hrefDiscover: "/contact", // Non-translatable
  items: [
    {
      title: "customEngineering.items.0.title",
      description: "customEngineering.items.0.description",
    },
    {
      title: "customEngineering.items.1.title",
      description: "customEngineering.items.1.description",
    },
    {
      title: "customEngineering.items.2.title",
      description: "customEngineering.items.2.description",
    },
    {
      title: "customEngineering.items.3.title",
      description: "customEngineering.items.3.description",
    },
    {
      title: "customEngineering.items.4.title",
      description: "customEngineering.items.4.description",
    },
  ],
};

export const onDemandEngineering = {
  sectionClass: "bg-white dark:bg-gray-900", // Non-translatable
  serviceName: "onDemandEngineering.serviceName",
  serviceIntro: "onDemandEngineering.serviceIntro",
  hrefDiscover: "/contact", // Non-translatable
  items: [
    {
      title: "onDemandEngineering.items.0.title",
      description: "onDemandEngineering.items.0.description",
    },
    {
      title: "onDemandEngineering.items.1.title",
      description: "onDemandEngineering.items.1.description",
    },
    {
      title: "onDemandEngineering.items.2.title",
      description: "onDemandEngineering.items.2.description",
    },
    {
      title: "onDemandEngineering.items.3.title",
      description: "onDemandEngineering.items.3.description",
    },
    {
      title: "onDemandEngineering.items.4.title",
      description: "onDemandEngineering.items.4.description",
    },
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
    title: "studyCasesSections.solid.title",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle: "studyCasesSections.solid.studyCases.0.studyCaseTitle",
        mediaItems: [
          {
            type: "image",
            title: "studyCasesSections.solid.studyCases.0.mediaItems.0.title",
            description:
              "studyCasesSections.solid.studyCases.0.mediaItems.0.description",
            alt: "studyCasesSections.solid.studyCases.0.mediaItems.0.alt",
            height: 600,
            width: 600,
            src: simUsbGeo1,
            placeholder: "blur",
            caption:
              "studyCasesSections.solid.studyCases.0.mediaItems.0.caption",
          },
          {
            type: "image",
            title: "studyCasesSections.solid.studyCases.0.mediaItems.1.title",
            description:
              "studyCasesSections.solid.studyCases.0.mediaItems.1.description",
            alt: "studyCasesSections.solid.studyCases.0.mediaItems.1.alt",
            height: 600,
            width: 600,
            src: simUsbGeo2,
            placeholder: "blur",
            caption:
              "studyCasesSections.solid.studyCases.0.mediaItems.1.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.0.mediaItems.2.title",
            description:
              "studyCasesSections.solid.studyCases.0.mediaItems.2.description",
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
            caption:
              "studyCasesSections.solid.studyCases.0.mediaItems.2.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.0.mediaItems.3.title",
            description:
              "studyCasesSections.solid.studyCases.0.mediaItems.3.description",
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
            caption:
              "studyCasesSections.solid.studyCases.0.mediaItems.3.caption",
          },
          {
            type: "image",
            title: "studyCasesSections.solid.studyCases.0.mediaItems.4.title",
            description:
              "studyCasesSections.solid.studyCases.0.mediaItems.4.description",
            alt: "studyCasesSections.solid.studyCases.0.mediaItems.4.alt",
            height: 600,
            width: 600,
            src: simUsbEnergy,
            placeholder: "blur",
            caption:
              "studyCasesSections.solid.studyCases.0.mediaItems.4.caption",
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle: "studyCasesSections.solid.studyCases.1.studyCaseTitle",
        mediaItems: [
          {
            type: "image",
            title: "studyCasesSections.solid.studyCases.1.mediaItems.0.title",
            description:
              "studyCasesSections.solid.studyCases.1.mediaItems.0.description",
            alt: "studyCasesSections.solid.studyCases.1.mediaItems.0.alt",
            height: 600,
            width: 600,
            src: simAlprofileGeo1,
            placeholder: "blur",
            caption:
              "studyCasesSections.solid.studyCases.1.mediaItems.0.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.1.mediaItems.1.title",
            description:
              "studyCasesSections.solid.studyCases.1.mediaItems.1.description",
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
            caption:
              "studyCasesSections.solid.studyCases.1.mediaItems.1.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.1.mediaItems.2.title",
            description:
              "studyCasesSections.solid.studyCases.1.mediaItems.2.description",
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
            caption:
              "studyCasesSections.solid.studyCases.1.mediaItems.2.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.1.mediaItems.3.title",
            description:
              "studyCasesSections.solid.studyCases.1.mediaItems.3.description",
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
            caption:
              "studyCasesSections.solid.studyCases.1.mediaItems.3.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.1.mediaItems.4.title",
            description:
              "studyCasesSections.solid.studyCases.1.mediaItems.4.description",
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
            caption:
              "studyCasesSections.solid.studyCases.1.mediaItems.4.caption",
          },
        ] as mediaItem[],
      },
      {
        studyCaseTitle: "studyCasesSections.solid.studyCases.2.studyCaseTitle",
        mediaItems: [
          {
            type: "image",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.0.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.0.description",
            alt: "studyCasesSections.solid.studyCases.2.mediaItems.0.alt",
            height: 600,
            width: 600,
            src: simMetaltableGeo1,
            placeholder: "blur",
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.0.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.1.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.1.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f1_81Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f1_81Hz-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.1.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.2.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.2.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f2_84Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f2_84Hz-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.2.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.3.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.3.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f3_110Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f3_110Hz-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.3.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.4.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.4.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f4_147Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f4_147Hz-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.4.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.solid.studyCases.2.mediaItems.5.title",
            description:
              "studyCasesSections.solid.studyCases.2.mediaItems.5.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-metaltable/basic_frame_f5_155Hz.mp4",
              "/videos/post-1024p/sim-metaltable/basic_frame_f5_155Hz-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.solid.studyCases.2.mediaItems.5.caption",
          },
        ] as mediaItem[],
      },
    ],
  },
  {
    sectionId: "fluid",
    title: "studyCasesSections.fluid.title",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle: "studyCasesSections.fluid.studyCases.0.studyCaseTitle",
        mediaItems: [
          {
            type: "image",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.0.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.0.description",
            alt: "studyCasesSections.fluid.studyCases.0.mediaItems.0.alt",
            height: 600,
            width: 600,
            src: simRoomGeo1,
            placeholder: "blur",
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.0.caption",
          },
          {
            type: "image",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.1.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.1.description",
            alt: "studyCasesSections.fluid.studyCases.0.mediaItems.1.alt",
            height: 600,
            width: 600,
            src: simRoomGeo2,
            placeholder: "blur",
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.1.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.2.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.2.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-room/vel-temp-1.mp4",
              "/videos/post-1024p/sim-room/vel-temp-1-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.2.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.3.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.3.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-room/vel-temp-2.mp4",
              "/videos/post-1024p/sim-room/vel-temp-2-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.3.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.4.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.4.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-room/vector.mp4",
              "/videos/post-1024p/sim-room/vector-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.4.caption",
          },
          {
            type: "video",
            title: "studyCasesSections.fluid.studyCases.0.mediaItems.5.title",
            description:
              "studyCasesSections.fluid.studyCases.0.mediaItems.5.description",
            height: 500,
            width: 500,
            srcs: [
              "/videos/post/sim-room/isovol.mp4",
              "/videos/post-1024p/sim-room/isovol-1024p.mp4",
            ],
            controls: false,
            muted: true,
            loop: true,
            autoPlay: false,
            caption:
              "studyCasesSections.fluid.studyCases.0.mediaItems.5.caption",
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
    description: "openImages.0.description",
    alt: "openImages.0.alt",
    width: 100,
    height: 100,
    src: openLogosCalculix,
    placeholder: "blur",
    caption: "openImages.0.caption",
  },
  {
    type: "image",
    description: "openImages.1.description",
    alt: "openImages.1.alt",
    width: 100,
    height: 100,
    src: openLogosLsprepost,
    placeholder: "blur",
    caption: "openImages.1.caption",
  },
  {
    type: "image",
    description: "openImages.2.description",
    alt: "openImages.2.alt",
    width: 100,
    height: 100,
    src: openLogosOpenradioss,
    placeholder: "blur",
    caption: "openImages.2.caption",
  },
  {
    type: "image",
    description: "openImages.3.description",
    alt: "openImages.3.alt",
    width: 100,
    height: 100,
    src: openLogosParaview,
    placeholder: "blur",
    caption: "openImages.3.caption",
  },
  {
    type: "image",
    description: "openImages.4.description",
    alt: "openImages.4.alt",
    width: 100,
    height: 100,
    src: openLogosPrepomax,
    placeholder: "blur",
    caption: "openImages.4.caption",
  },
  {
    type: "image",
    description: "openImages.5.description",
    alt: "openImages.5.alt",
    width: 100,
    height: 100,
    src: openLogosOpenfoam,
    placeholder: "blur",
    caption: "openImages.5.caption",
  },
] as imageItem[];

import comLogosSimuliaAbaqus from "@/images/com-logos/com-logos-simulia-abaqus.png";
import comLogosMeta from "@/images/com-logos/com-logos-meta-logo.png";
import comLogosAnsa from "@/images/com-logos/com-logos-ansa-logo.png";
import comLogosLsdyna from "@/images/com-logos/com-logos-lsdyna-logo.png";

export const comImages = [
  {
    type: "image",
    description: "comImages.0.description",
    alt: "comImages.0.alt",
    width: 100,
    height: 100,
    src: comLogosAnsa,
    placeholder: "blur",
    caption: "comImages.0.caption",
  },
  {
    type: "image",
    description: "comImages.1.description",
    alt: "comImages.1.alt",
    width: 100,
    height: 100,
    src: comLogosMeta,
    placeholder: "blur",
    caption: "comImages.1.caption",
  },
  {
    type: "image",
    description: "comImages.2.description",
    alt: "comImages.2.alt",
    width: 100,
    height: 100,
    src: comLogosSimuliaAbaqus,
    placeholder: "blur",
    caption: "comImages.2.caption",
  },
  {
    type: "image",
    description: "comImages.3.description",
    alt: "comImages.3.alt",
    width: 100,
    height: 100,
    src: comLogosLsdyna,
    placeholder: "blur",
    caption: "comImages.3.caption",
  },
] as imageItem[];
