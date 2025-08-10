import React from "react";
import { BannerItem } from "../components/ui/banner.component";
import { BannerIcon } from "../components/ui/banner-icon.component";

export const bannerItems: BannerItem[] = [
  {
    text: "KREATIVES NETZWERK",
    icon: (
      <BannerIcon
        src="/banner-network-icon.svg"
        alt="Netzwerk Icon"
        width={59}
        height={32}
      />
    ),
  },
  {
    text: "UNTERSTÜTZUNG UND MENTORING",
    icon: (
      <BannerIcon
        src="/banner-support-icon.svg"
        alt="Support Icon"
        width={106}
        height={29}
      />
    ),
  },
  {
    text: "WORKSHOPS",
    icon: (
      <BannerIcon
        src="/banner-workshop-icon.svg"
        alt="Workshop Icon"
        width={64}
        height={32}
      />
    ),
  },
  {
    text: "PRAKTISCHE ERFAHRUNG",
    icon: (
      <BannerIcon
        src="/banner-experience-icon.svg"
        alt="Erfahrung Icon"
        width={103}
        height={29}
      />
    ),
  },
  {
    text: "ARBEITSPLÄTZE FÜR EIGENE PROJEKTE",
    icon: (
      <BannerIcon
        src="/banner-workplace-icon.svg"
        alt="Arbeitsplatz Icon"
        width={64}
        height={32}
      />
    ),
  },
];
