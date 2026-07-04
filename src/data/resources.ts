export type Resource = {
  id: string;
  title: string;
  family: string;
  version: string;
  updated: string;
  size: string;
  kind: "datasheet" | "installation" | "cad" | "certification" | "care" | "warranty";
  href: string;
};

export const RESOURCE_TABS = [
  { key: "datasheet", label: "Datasheets" },
  { key: "installation", label: "Installation" },
  { key: "cad", label: "CAD / BIM" },
  { key: "certification", label: "Certifications" },
  { key: "care", label: "Care" },
  { key: "warranty", label: "Warranty" },
] as const;

const R = (
  id: string,
  title: string,
  family: string,
  version: string,
  updated: string,
  size: string,
  kind: Resource["kind"],
): Resource => ({ id, title, family, version, updated, size, kind, href: "#" });

export const RESOURCES: Resource[] = [
  R("d1", "WPC Decking — Technical Datasheet", "WPC", "v3.2", "Jun 2026", "2.1 MB", "datasheet"),
  R("d2", "WPC Cladding — Technical Datasheet", "WPC", "v2.8", "Apr 2026", "1.8 MB", "datasheet"),
  R("d3", "SPC Flooring — Technical Datasheet", "SPC", "v4.0", "May 2026", "1.6 MB", "datasheet"),
  R("d4", "Aluminium Louvers — Technical Datasheet", "Aluminium", "v2.1", "Feb 2026", "2.4 MB", "datasheet"),
  R("d5", "Acoustic Panels — Technical Datasheet", "Panels", "v1.9", "Mar 2026", "1.4 MB", "datasheet"),
  R("i1", "WPC Decking Installation Guide", "WPC", "v3.0", "Jun 2026", "5.2 MB", "installation"),
  R("i2", "SPC Flooring Installation Guide", "SPC", "v2.5", "May 2026", "4.1 MB", "installation"),
  R("i3", "Louver System Installation Manual", "Aluminium", "v2.0", "Mar 2026", "6.8 MB", "installation"),
  R("i4", "Wall Panel Installation Guide", "Panels", "v1.7", "Feb 2026", "3.9 MB", "installation"),
  R("c1", "WPC — CAD Details Pack", "WPC", "2026", "Jun 2026", "12 MB", "cad"),
  R("c2", "SPC — Revit Family", "SPC", "2026", "May 2026", "8 MB", "cad"),
  R("c3", "Aluminium Louvers — CAD + BIM", "Aluminium", "2026", "Apr 2026", "24 MB", "cad"),
  R("c4", "Panels — Revit Family", "Panels", "2026", "Mar 2026", "6 MB", "cad"),
  R("ce1", "FSC Chain of Custody", "All", "2026", "Jan 2026", "0.4 MB", "certification"),
  R("ce2", "ISO 9001 Certificate", "All", "2026", "Jan 2026", "0.3 MB", "certification"),
  R("ce3", "ISO 14001 Certificate", "All", "2026", "Jan 2026", "0.3 MB", "certification"),
  R("ce4", "CE Mark — Aluminium Systems", "Aluminium", "2026", "Feb 2026", "0.6 MB", "certification"),
  R("ce5", "Fire Test Report — WPC", "WPC", "2026", "Mar 2026", "1.2 MB", "certification"),
  R("cr1", "WPC — Care & Maintenance", "WPC", "v2.0", "Apr 2026", "0.9 MB", "care"),
  R("cr2", "SPC — Care & Maintenance", "SPC", "v2.0", "Apr 2026", "0.9 MB", "care"),
  R("cr3", "Aluminium — Cleaning Protocol", "Aluminium", "v1.5", "Apr 2026", "0.7 MB", "care"),
  R("w1", "Ecosmart 10-Year Product Warranty", "All", "v4.0", "Jan 2026", "0.5 MB", "warranty"),
  R("w2", "Installation Warranty Terms", "All", "v3.0", "Jan 2026", "0.5 MB", "warranty"),
  R("w3", "Commercial Project Warranty", "All", "v2.0", "Jan 2026", "0.6 MB", "warranty"),
];
