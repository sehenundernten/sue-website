import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sehen und Ernten - Werkstatt für Konzeption und Gestaltung",
    short_name: "Sehen und Ernten",
    description:
      "Das Kreativnetzwerk für Studierende, Alumni und Selbständige.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0eb",
    theme_color: "#f5f0eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
