// data.js
import { imageItem, mediaItem } from "./types";

export const mainSectionIntroDescription = "mainSectionIntroDescription";

export const mainSectionTitles = {
  simulationServices: "mainSectionTitles.simulationServices",
  howWeWork: "mainSectionTitles.howWeWork",
  caseStudies: "mainSectionTitles.caseStudies",
  partnerWithUs: "mainSectionTitles.partnerWithUs",
  aboutProsimcae: "mainSectionTitles.aboutProsimcae",
  blog: "mainSectionTitles.blog",
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
    referenceUrl: "https://www.calculix.de/",
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
    referenceUrl: "https://lsdyna.ansys.com/knowledge-base/ls-prepost/",
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
    referenceUrl: "https://openradioss.org/",
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
    referenceUrl: "https://www.paraview.org/",
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
    referenceUrl: "https://prepomax.fs.um.si/",
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
    referenceUrl: "https://openfoam.org/",
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
    referenceUrl: "https://www.beta-cae.com/ansa.htm",
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
    referenceUrl: "https://www.beta-cae.com/meta.htm",
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
    referenceUrl: "https://www.3ds.com/products/simulia/abaqus/standard",
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
    referenceUrl: "https://www.ansys.com/products/structures/ansys-ls-dyna",
  },
] as imageItem[];

export const about = {
  createdBy: {
    part1: "aboutProsimcae.createdByPart1",
    name: "aboutProsimcae.name",
    part2: "aboutProsimcae.createdByPart2",
  },
  list: {
    item1: {
      part1: "aboutProsimcae.list.item1Part1",
      automotive: "aboutProsimcae.list.automotive",
      and: "aboutProsimcae.list.and",
      industrialSectors: "aboutProsimcae.list.industrialSectors",
    },
    item2: {
      part1: "aboutProsimcae.list.item2Part1",
      fea: "aboutProsimcae.list.fea",
      andCFD: "aboutProsimcae.list.andCFD",
    },
    item3: {
      part1: "aboutProsimcae.list.item3Part1",
      publication: "aboutProsimcae.list.publication",
      andSuccessfully: "aboutProsimcae.list.andSuccessfully",
      costReduction: "aboutProsimcae.list.costReduction",
      andAccelerated: "aboutProsimcae.list.andAccelerated",
    },
    item4: {
      part1: "aboutProsimcae.list.item4Part1",
      consultancy: "aboutProsimcae.list.consultancy",
      workingWithClients: "aboutProsimcae.list.workingWithClients",
      services: "aboutProsimcae.list.services",
      simulationServices: "aboutProsimcae.list.simulationServices",
    },
  },
};

export const joinNetworkSection = {
  title: "joinNetworkSection.title",
  paragraph: "joinNetworkSection.paragraph",
  list: {
    item1: "joinNetworkSection.list.item1",
    item2: "joinNetworkSection.list.item2",
    item3: "joinNetworkSection.list.item3",
  },
};

export const navButtonLabels = {
  simulationServices: "navButtonLabels.simulationServices",
  howWeWork: "navButtonLabels.howWeWork",
  caseStudies: "navButtonLabels.caseStudies",
  blog: "navButtonLabels.blog",
  partnerWithUs: "navButtonLabels.partnerWithUs",
  aboutProsimcae: "navButtonLabels.aboutProsimcae",
};

export const dialogGetInTouchButton = "dialogGetInTouchButton";

export const customContactForm = {
  labels: {
    companyName: "customContactForm.labels.companyName",
    companyCountry: "customContactForm.labels.companyCountry",
    contactName: "customContactForm.labels.contactName",
    contactEmail: "customContactForm.labels.contactEmail",
    projectComplexity: "customContactForm.labels.projectComplexity",
    projectComplexityLevels: {
      low: "customContactForm.labels.projectComplexityLevels.0",
      middle: "customContactForm.labels.projectComplexityLevels.1",
      high: "customContactForm.labels.projectComplexityLevels.2",
    },
    estimatedDeadline: "customContactForm.labels.estimatedDeadline",
    projectExplanation: "customContactForm.labels.projectExplanation",
  },
  placeholders: {
    companyCountry: "customContactForm.placeholders.companyCountry",
    projectExplanation: "customContactForm.placeholders.projectExplanation",
  },
  validation: {
    required: "customContactForm.validation.required",
    minCharacters: "customContactForm.validation.minCharacters",
    invalidEmail: "customContactForm.validation.invalidEmail",
    complexityLevels: "customContactForm.validation.complexityLevels",
    invalidDateFormat: "customContactForm.validation.invalidDateFormat",
    maxWords: "customContactForm.validation.maxWords",
  },
  buttons: {
    submit: "customContactForm.buttons.submit",
  },
};

// content.ts

export const ondemandContactForm = {
  labels: {
    companyName: "ondemandContactForm.labels.companyName",
    companyCountry: "ondemandContactForm.labels.companyCountry",
    contactName: "ondemandContactForm.labels.contactName",
    contactEmail: "ondemandContactForm.labels.contactEmail",
    defProjDuration: "ondemandContactForm.labels.defProjDuration",
    expectProjDurationHours:
      "ondemandContactForm.labels.expectProjDurationHours",
    explanation: "ondemandContactForm.labels.explanation",
  },
  placeholders: {
    companyCountry: "ondemandContactForm.placeholders.companyCountry",
    projectExplanation: "ondemandContactForm.placeholders.projectExplanation",
  },
  validation: {
    required: "ondemandContactForm.validation.required",
    minCharacters: "ondemandContactForm.validation.minCharacters",
    invalidEmail: "ondemandContactForm.validation.invalidEmail",
    defProjDuration: "ondemandContactForm.validation.defProjDuration",
    invalidDateFormat: "ondemandContactForm.validation.invalidDateFormat",
    maxWords: "ondemandContactForm.validation.maxWords",
  },
  buttons: {
    submit: "ondemandContactForm.buttons.submit",
  },
};

export const footer = {
  links: {
    privacyPolicy: "footer.links.privacyPolicy",
    cookiePolicy: "footer.links.cookiePolicy",
    termsOfService: "footer.links.termsOfService",
    legalNotice: "footer.links.legalNotice",
    contactUs: "footer.links.contactUs",
  },
  copyRight: "footer.copyRight",
  social: {
    x: "footer.social.x",
    linkedin: "footer.social.linkedin",
  },
};

export const resumeUploadDialog = {
  submitButton: "resumeUploadDialog.submitButton",
  dialogTitle: "resumeUploadDialog.dialogTitle",
};

export const blog = {
  latestBlogEntries: "blog.latestBlogEntries",
  subfolderName: "blog.subfolderName",

  blogEntries: [
    {
      slug: "blog.blogEntries.0.slug",
      title: "blog.blogEntries.0.title",
      date: "blog.blogEntries.0.date",
      difficulty: "blog.blogEntries.0.difficulty",
      titleMeta: "blog.blogEntries.0.metaTitle",
      descriptionMeta: "blog.blogEntries.0.metaDescription",
      canonical: "blog.blogEntries.0.canonical",
      content: {
        mainTitle: "blog.blogEntries.0.content.mainTitle",
        heading1: "blog.blogEntries.0.content.heading1",
        paragraph1: "blog.blogEntries.0.content.paragraph1",
        heading2: "blog.blogEntries.0.content.heading2",
        paragraph2: "blog.blogEntries.0.content.paragraph2",
        heading3: "blog.blogEntries.0.content.heading3",
        paragraph3: "blog.blogEntries.0.content.paragraph3",
        heading4: "blog.blogEntries.0.content.heading4",
        paragraph4: "blog.blogEntries.0.content.paragraph4",
      },
    },
    {
      slug: "blog.blogEntries.1.slug",
      title: "blog.blogEntries.1.title",
      date: "blog.blogEntries.1.date",
      difficulty: "blog.blogEntries.1.difficulty",
      titleMeta: "blog.blogEntries.1.metaTitle",
      descriptionMeta: "blog.blogEntries.1.metaDescription",
      canonical: "blog.blogEntries.1.canonical",
      content: {
        mainTitle: "blog.blogEntries.1.content.mainTitle",
        heading1: "blog.blogEntries.1.content.heading1",
        paragraph1: "blog.blogEntries.1.content.paragraph1",
        heading2: "blog.blogEntries.1.content.heading2",
        paragraph2: "blog.blogEntries.1.content.paragraph2",
        heading3: "blog.blogEntries.1.content.heading3",
        paragraph3: "blog.blogEntries.1.content.paragraph3",
        heading4: "blog.blogEntries.1.content.heading4",
        paragraph4: "blog.blogEntries.1.content.paragraph4",
      },
    },
  ],
};
