import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    // Anciennes URL du site WordPress → nouvelles pages (préserve le référencement)
    return [
      { source: "/traitement-hyperquartz", destination: "/services/traitement-ceramique-hyperquartz", permanent: true },
      { source: "/velmax-protection-pare-brise", destination: "/services/film-pare-brise-velmax", permanent: true },
      {
        source: "/film-de-protection-ppf-sur-vehicule-dunkan-sublimateur-automobile",
        destination: "/services/film-protection-ppf",
        permanent: true,
      },
      { source: "/nos-sublimations", destination: "/realisations", permanent: true },
    ];
  },
};

export default nextConfig;
