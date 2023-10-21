"use client";

import { useRef } from "react";

import HeroBannerSplit from "@/components/HeroBanners/HeroBannerSplit";
import { HeroBannerData } from "@/components/HeroBanners/constants";
import FeatureGrid from "@/components/FeatureSections/FeatureGrid";
import { FeatureSectionData } from "@/components/FeatureSections/constants";
import ContentVerticalSplit from "@/components/ContentContainers/ContentVerticalSplit/ContentVerticalSplit";
import { ContentVerticalSplitData } from "@/components/ContentContainers/ContentVerticalSplit/constants";
import ContentWithImageTiles from "@/components/ContentContainers/ContentWithImageTiles/ContentWithImageTiles";
import { ContentWithImageTilesData } from "@/components/ContentContainers/ContentWithImageTiles/constants";
import Testimonials from "@/components/Testimonials/Testimonials";
import { TestimonialsData } from "@/components/Testimonials/constants";
import ContactUs from "@/components/ContactUs/ContactUs";
import { ContactUsData } from "@/components/ContactUs/contants";
import Navbar from "@/components/Navbars/Navbar";

export default function Home() {
  const topPageRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <>
      <main className="scroll-snap-y-mandatory">
        <div
          ref={topPageRef}
          className="lg:scroll-snap-start min-h-screen pb-6 bg-gradient-to-b from-indigo-50 to-white"
        >
          <Navbar
            topPageRef={topPageRef}
            journeyRef={journeyRef}
            projectsRef={projectsRef}
            aboutMeRef={aboutMeRef}
            testimonialsRef={testimonialsRef}
            contactMeRef={contactMeRef}
          />
          <HeroBannerSplit
            {...HeroBannerData}
            cta1TargetRef={contactMeRef}
            bannerCtaTargetRef={projectsRef}
            nextRef={journeyRef}
          />
        </div>
        <div
          ref={journeyRef}
          className="lg:scroll-snap-start min-h-screen pb-6 lg:mb-22 bg-gradient-to-t from-indigo-50 to-white"
        >
          <ContentVerticalSplit {...ContentVerticalSplitData} />
        </div>
        <div
          ref={projectsRef}
          className="lg:scroll-snap-start min-h-screen pb-6 bg-gradient-to-b from-indigo-50 to-white"
        >
          <FeatureGrid {...FeatureSectionData} />
        </div>
        <div
          ref={aboutMeRef}
          className="lg:scroll-snap-start min-h-screen pb-6 lg:pb-60 bg-gradient-to-t from-indigo-50 to-white"
        >
          <ContentWithImageTiles {...ContentWithImageTilesData} />
        </div>
        <div
          ref={testimonialsRef}
          className="lg:scroll-snap-start min-h-screen pb-6 lg:pb-44 bg-gradient-to-b from-indigo-50 to-white"
        >
          <Testimonials {...TestimonialsData} />
        </div>
        <div
          ref={contactMeRef}
          className="lg:scroll-snap-start min-h-screen pb-6 bg-gradient-to-t from-indigo-50 to-white"
        >
          <ContactUs {...ContactUsData} />
        </div>
      </main>
    </>
  );
}
