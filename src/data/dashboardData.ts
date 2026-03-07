export const dashboardData = {
  meta: {
    title: "Tesla Q4 & FY 2025 Update",
    documentType: "Financial Report",
    industry: "Automotive & Energy",
    audience: "Investors & Analysts",
    date: "January 2026",
    source: "Tesla, Inc.",
    overallScore: { value: 8.5, rationale: "Strong pivot to AI and Energy offsets Auto revenue decline. Margins compressed but cash flow remains robust." },
    sentiment: "optimistic",
    tldr: "2025 marked a critical transition for Tesla from a hardware-centric business to a physical AI company. While automotive revenues declined 10% YoY, energy generation grew 27% and services grew 19%, maintaining strong profitability and cash flow.",
    keyQuote: { text: "2025 marked a critical year for Tesla as we further expanded our mission and continued our transition from a hardware-centric business to a physical AI company.", location: "Highlights Summary" }
  },
  kpis: [
    { id: "rev", label: "Total Revenue", value: 94827, unit: "$M", delta: -3, deltaDirection: "down" as const, trend: [53823, 81462, 96773, 97690, 94827], tooltip: "Total revenues in 2025. Automotive declined 10%, while Energy grew 27%." },
    { id: "net", label: "GAAP Net Income", value: 3794, unit: "$M", delta: -46, deltaDirection: "down" as const, trend: [5519, 12556, 14997, 7091, 3794], tooltip: "GAAP net income attributable to common stockholders. Impacted by restructuring and AI investments." },
    { id: "fcf", label: "Free Cash Flow", value: 6220, unit: "$M", delta: 74, deltaDirection: "up" as const, trend: [4983, 7561, 4357, 3581, 6220], tooltip: "Operating cash flow less capex. Strong sequential and YoY growth." },
    { id: "deliv", label: "Vehicle Deliveries", value: 1.636, unit: "M", delta: -9, deltaDirection: "down" as const, trend: [0.936, 1.313, 1.808, 1.789, 1.636], tooltip: "Total vehicle deliveries in 2025. Model 3/Y deliveries were 1.58M." },
    { id: "storage", label: "Storage Deployed", value: 46.7, unit: "GWh", delta: 49, deltaDirection: "up" as const, trend: [4.0, 6.5, 14.7, 31.4, 46.7], tooltip: "Record energy storage deployments, driven by Megapack." }
  ],
  insights: [
    { id: "i1", title: "The AI Pivot is Real", body: "Tesla is aggressively transitioning to a physical AI company. FSD v14 is rolling out, Robotaxi testing is expanding without safety monitors in Austin, and a $2B investment in xAI secures future AI capabilities.", importance: "critical", confidence: "high", source: "Highlights & AI Software" },
    { id: "i2", title: "Energy is the New Growth Engine", body: "While automotive revenue fell 10% YoY, Energy Generation and Storage revenue surged 27% to $12.8B, deploying a record 46.7 GWh. Gross profit for energy reached a record $1.1B in Q4.", importance: "high", confidence: "high", source: "Financial Summary & Operations" },
    { id: "i3", title: "Margin Compression Continues", cast: "negative", body: "Operating margin dropped from 7.2% in 2024 to 4.6% in 2025. This is driven by lower auto volumes, higher AI R&D spend, and restructuring costs.", importance: "high", confidence: "high", source: "Financial Summary" },
    { id: "i4", title: "Hardware Prepares for Next Gen", body: "Cybercab, Tesla Semi, and Megapack 3 are on schedule for volume production in 2026. Optimus Gen 3 will be unveiled in Q1 2026 with mass production lines being installed.", importance: "medium", confidence: "medium", source: "Manufacturing & Hardware" }
  ],
  charts: [
    {
      id: "revenue_mix",
      type: "bar",
      title: "Revenue Mix Shift (2021-2025)",
      data: [
        { year: "2021", Auto: 47232, Energy: 2789, Services: 3802 },
        { year: "2022", Auto: 71462, Energy: 3909, Services: 6091 },
        { year: "2023", Auto: 82419, Energy: 6035, Services: 8319 },
        { year: "2024", Auto: 77070, Energy: 10086, Services: 10534 },
        { year: "2025", Auto: 69526, Energy: 12771, Services: 12530 }
      ],
      xKey: "year",
      yKeys: ["Auto", "Energy", "Services"],
      colors: ["#E31937", "#47BFFF", "#FACC15"],
      sourceNote: "Financial Summary (in millions USD)"
    },
    {
      id: "deliveries_vs_storage",
      type: "composed",
      title: "Auto Deliveries vs Energy Storage",
      data: [
        { year: "2021", Deliveries: 0.936, Storage: 4.0 },
        { year: "2022", Deliveries: 1.313, Storage: 6.5 },
        { year: "2023", Deliveries: 1.808, Storage: 14.7 },
        { year: "2024", Deliveries: 1.789, Storage: 31.4 },
        { year: "2025", Deliveries: 1.636, Storage: 46.7 }
      ],
      xKey: "year",
      yKeys: ["Deliveries", "Storage"],
      colors: ["#E31937", "#47BFFF"],
      sourceNote: "Operational Summary (Deliveries in Millions, Storage in GWh)"
    },
    {
      id: "margins",
      type: "line",
      title: "Margin Evolution",
      data: [
        { year: "2021", GrossMargin: 25.3, OperatingMargin: 12.1 },
        { year: "2022", GrossMargin: 25.6, OperatingMargin: 16.8 },
        { year: "2023", GrossMargin: 18.2, OperatingMargin: 9.2 },
        { year: "2024", GrossMargin: 17.9, OperatingMargin: 7.2 },
        { year: "2025", GrossMargin: 18.0, OperatingMargin: 4.6 }
      ],
      xKey: "year",
      yKeys: ["GrossMargin", "OperatingMargin"],
      colors: ["#A0AABF", "#E31937"],
      sourceNote: "Financial Summary (%)"
    }
  ],
  risks: [
    { id: "r1", label: "Auto Demand Softness", probability: "high", impact: "high", description: "Vehicle deliveries fell 9% YoY. Continued softness could pressure cash flows needed for AI investments." },
    { id: "r2", label: "AI & Robotaxi Regulatory Hurdles", probability: "med", impact: "high", description: "Unsupervised Robotaxi expansion depends heavily on state and federal regulatory approvals." },
    { id: "r3", label: "Margin Compression", probability: "high", impact: "med", description: "Operating margins have fallen to 4.6% due to high R&D and lower auto fixed cost absorption." }
  ],
  hiddenSignals: [
    { id: "h1", type: "contradiction", title: "Record Cash Flow vs Lower Profits", body: "Despite net income falling 46% YoY, Free Cash Flow surged 74% to $6.2B, indicating strong working capital management and disciplined capex despite heavy AI investments.", severity: "low" },
    { id: "h2", type: "language", title: "Hardware as a Means to an End", body: "The language heavily emphasizes 'physical AI company' over 'automaker'. Vehicles are increasingly framed as nodes in an AI network rather than the primary end product.", severity: "medium" }
  ],
  verdict: {
    recommendation: "positive",
    summary: "Tesla is successfully navigating a difficult transition period. While the core automotive business is contracting, the explosive growth in Energy Storage and the tangible progress in AI (FSD, Robotaxi, Optimus) validate the strategic pivot. The balance sheet remains incredibly strong with $44.1B in cash to fund this transition.",
    topReasons: ["Energy storage growth (+49% GWh)", "Record Free Cash Flow ($6.2B)", "FSD v14 and driverless Robotaxi progress"],
    topConcerns: ["Automotive revenue decline (-10%)", "Operating margin compression (4.6%)", "Regulatory risks for autonomy"],
    conditions: ["Requires successful launch of Cybercab in 2026", "Requires continued scaling of AI compute (Cortex 2)"]
  },
  glossary: [
    { term: "FSD (Supervised)", definition: "Full Self-Driving. Tesla's advanced driver assistance system that currently requires active driver supervision.", context: "Transitioning to a monthly subscription model." },
    { term: "Megapack", definition: "Large-scale rechargeable lithium-ion battery stationary energy storage product.", context: "Driving the 49% YoY growth in energy storage deployments." },
    { term: "Robotaxi", definition: "Purpose-built autonomous vehicle for ride-hailing.", context: "Testing without safety monitors began in Austin in Jan 2026." },
    { term: "Optimus", definition: "Tesla's general-purpose humanoid robot.", context: "Gen 3 to be unveiled in Q1 2026." },
    { term: "Free Cash Flow", definition: "Operating cash flow less capital expenditures.", context: "Surged 74% YoY to $6.2B." }
  ]
};
