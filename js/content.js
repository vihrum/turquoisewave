/**
 * ==============================================================================
 * TURQUOISE WAVE WEBSITE CONTENT CONFIGURATION (English Version)
 * ==============================================================================
 * Official company data grounded in the Portuguese Commercial Registry Certificate:
 * NIF/NIPC: 516668951 | TURQUOISE WAVE, LDA | Funchal, Madeira, Portugal
 */

const SITE_CONTENT = {
  // Brand & Company Essentials
  brand: {
    name: "Turquoise Wave",
    legalName: "Turquoise Wave, LDA",
    tagline: "Dependable telecom for your business.",
    established: "2022",
    locations: "FUNCHAL (MADEIRA) · NUREMBERG · HELSINKI",
    copyright: "© 2026 Turquoise Wave, LDA. All Rights Reserved."
  },

  // Navigation Links
  nav: {
    services: "Services",
    whyUs: "Why Turquoise Wave",
    trackRecord: "Track Record",
    company: "Company",
    contactUs: "Contact us",
    backToTop: "Back to top ↑"
  },

  // Dropdown Menus Content
  menus: {
    servicesHead: "TELECOM & VOIP SERVICES",
    servicesPromoText: "Our own infrastructure and direct carrier routes — dependable quality.",
    servicesPromoLink: "See why clients choose us →",
    companyHead: "COMPANY",
    companyProfile: "Company Profile",
    companyBlurb: "Our mission is to support our customers’ growth with dependable VoIP and telecom infrastructure."
  },

  // Hero Section
  hero: {
    badge: "GLOBAL VOIP & TELECOM — SINCE 2022",
    title: "Dependable telecom<br>for your business.",
    subtitle: "Turquoise Wave, Lda. delivers global communications and VoIP infrastructure for enterprises — international voice, SMS, RCS and fax through to global SIM/eSIM — as a one-stop service. Redundant interconnections and carrier direct routes keep mission-critical communication running.",
    exploreBtn: "Explore services",
    contactBtn: "Contact us"
  },

  // Key Performance Indicators / Stats Bar
  stats: [
    { value: "23", suffix: "", label: "client deployments worldwide" },
    { value: "55", suffix: "", label: "countries and regions for SMS" },
    { value: "17", suffix: "", label: "interconnected operators" },
    { value: "24/365", suffix: "", label: "monitoring and support" }
  ],

  // Services Overview Section Header
  servicesHeader: {
    step: "01",
    label: "SERVICES",
    title: "Telecom Services",
    description: "VoIP, voice, messaging and fax through to global SIM/eSIM — enterprise communications as a one-stop service. Open any service page for features, specifications and use cases."
  },

  // Full Catalog of 8 Services
  services: {
    voice: {
      slug: "voice",
      cat: "VOICE / WHOLESALE",
      title: "International Voice",
      lead: "High-quality international voice circuits for carriers and enterprises, available wholesale. Direct interconnection with major carriers worldwide delivers clear audio and stable connection rates.",
      summary: "High-quality international voice via direct carrier interconnection, available wholesale to enterprises and carriers.",
      uses: [
        "International outbound for call centers",
        "Extension integration with overseas offices",
        "Wholesale voice procurement"
      ],
      features: [
        { t: "Direct routes", d: "Direct interconnection with major carriers keeps ASR high and voice quality (MOS) clear." },
        { t: "Redundant architecture", d: "Multi-route design fails over automatically, keeping mission-critical calls running." },
        { t: "Flexible delivery", d: "SIP trunking integrates smoothly with your existing PBX or contact-center platform." },
        { t: "24/365 quality monitoring", d: "A dedicated team monitors traffic and quality metrics around the clock." }
      ],
      specs: [
        { k: "Delivery", v: "SIP trunking (wholesale)" },
        { k: "For", v: "Carriers and enterprises" },
        { k: "Interface", v: "SIP / major codecs" },
        { k: "Quality", v: "Continuous ASR, ACD and MOS monitoring" },
        { k: "Support", v: "24/365 monitoring and incident response" }
      ]
    },
    sms: {
      slug: "sms",
      cat: "SMS / WHOLESALE SMS",
      title: "International SMS",
      lead: "Direct delivery to 55 countries and regions over 17 operator connections. A high-deliverability messaging platform provided by a company with 23 client deployments worldwide.",
      summary: "Direct delivery to 55 countries and regions over 17 operator routes. Reliable, low-latency messaging for enterprise OTP and notifications.",
      uses: [
        "Verification (OTP)",
        "Booking and delivery notifications",
        "Reaching overseas users"
      ],
      features: [
        { t: "High deliverability", d: "Direct routes to local carriers sustain consistently high delivery rates." },
        { t: "Low latency", d: "Delivery within seconds — exactly what one-time passcodes demand." },
        { t: "Sender ID support", d: "Show your brand as the sender (where supported) to prevent spoofing and lift open rates." },
        { t: "Real-time delivery reports", d: "Track delivery status in real time to detect failures and design retries." }
      ],
      specs: [
        { k: "Coverage", v: "55 countries and regions" },
        { k: "Operators", v: "17 interconnected operators" },
        { k: "Interface", v: "SMPP / REST API" },
        { k: "Tracking", v: "Delivery reports and status callbacks" },
        { k: "Track record", v: "23 client deployments worldwide (all services)" }
      ]
    },
    smsone: {
      slug: "smsone",
      cat: "SMS PLATFORM",
      title: "SMSOne",
      lead: "A ready-to-use SMS platform — no development required. Bulk, individual and scheduled sends plus analytics, all from one console.",
      summary: "Zero-development SMS web console. Bulk, individual and scheduled sends, short-URL click tracking and team permissions.",
      uses: [
        "Payment reminders and critical notices",
        "Promotional campaigns",
        "Member communications"
      ],
      features: [
        { t: "Bulk and individual sends", d: "From CSV-driven bulk sends of tens of thousands to one-off messages — all in the console." },
        { t: "Templates and scheduling", d: "Message templates and scheduled delivery cut the effort of routine operations." },
        { t: "Analytics dashboard", d: "Visualize delivery and click rates; measure campaigns with short-URL tracking." },
        { t: "Roles and list management", d: "Per-department permissions, recipient lists and opt-out management built in." }
      ],
      specs: [
        { k: "Delivery", v: "Cloud (SaaS)" },
        { k: "Send modes", v: "Bulk / individual / scheduled" },
        { k: "Management", v: "Templates, recipients, roles" },
        { k: "Analytics", v: "Delivery and click reports, short URLs" },
        { k: "Onboarding", v: "No development — same-day start" }
      ]
    },
    fax: {
      slug: "fax",
      cat: "FAX / WHOLESALE FAX API",
      title: "International Fax",
      lead: "Cloud fax that integrates with your core systems. Automate sending and receiving via API to digitize document workflows with partners worldwide.",
      summary: "Cloud-native fax API for mission-critical order processing and billing. Send and receive PDF documents with partners worldwide paperlessly.",
      uses: [
        "Automated order processing",
        "Sending invoices and forms",
        "Document exchange with overseas partners"
      ],
      features: [
        { t: "API send and receive", d: "Automate fax I/O over REST APIs and embed it into core business flows." },
        { t: "Core-system integration", d: "Connect ordering and billing workflows to cut errors and manual work." },
        { t: "Paperless", d: "Send and receive as PDF — no fax machines, lines or paper required." },
        { t: "Stable global delivery", d: "Reliable delivery quality domestically and to overseas destinations." }
      ],
      specs: [
        { k: "Delivery", v: "Cloud fax / API" },
        { k: "Data", v: "PDF and other electronic formats" },
        { k: "Integration", v: "REST API, core-system connection" },
        { k: "For", v: "Enterprises in Europe and worldwide" },
        { k: "Support", v: "24/365 monitoring" }
      ]
    },
    api: {
      slug: "api",
      cat: "CLOUD SMS & FAX API",
      title: "SMS & Fax API",
      lead: "REST APIs you can integrate in a few lines of code — a dependable delivery platform provided by a company with 23 client deployments worldwide, adopted above all for app SMS verification (OTP).",
      summary: "Developer-friendly REST APIs for SMS OTP and document delivery. Integrate in a few lines of code with real-time webhooks.",
      uses: [
        "App SMS verification (OTP)",
        "Automated system notifications",
        "Fax workflow automation"
      ],
      features: [
        { t: "Simple REST API", d: "Clean endpoint design and thorough documentation enable fast integration." },
        { t: "High availability", d: "A redundant delivery platform supports verification and notifications that cannot stop." },
        { t: "Webhook status callbacks", d: "Receive delivery results via webhook to automate retries and logging." },
        { t: "Sandbox and support", d: "A test environment and engineering support from integration through operations." }
      ],
      specs: [
        { k: "Interface", v: "REST API / SMPP" },
        { k: "Main uses", v: "SMS verification (OTP), notifications, fax automation" },
        { k: "Callbacks", v: "Webhook supported" },
        { k: "Track record", v: "23 client deployments worldwide (all services)" },
        { k: "Support", v: "Sandbox, documentation and engineering support" }
      ]
    },
    rcs: {
      slug: "rcs",
      cat: "RCS / RICH MESSAGING",
      title: "RCS API",
      lead: "Available in 40+ countries. Rich, two-way customer communication with images, video and other media — while preserving your brand identity.",
      summary: "Next-generation messaging across 40+ countries. Rich media, verified brand senders, two-way interactive buttons and automatic SMS fallback.",
      uses: [
        "Rich promotions and product guides",
        "Booking confirmations and two-way replies",
        "Verified critical notifications"
      ],
      features: [
        { t: "Coverage in 40+ countries", d: "RCS delivery in more than 40 countries — consistent rich messaging worldwide." },
        { t: "Verified sender", d: "Display your logo, brand colors and a verification badge — preventing spoofing while preserving your brand." },
        { t: "Rich media, two-way dialogue", d: "Images, video, carousels and suggested-reply buttons. Receive customer replies and choices for true two-way communication." },
        { t: "SMS fallback", d: "Devices without RCS automatically receive SMS instead — richer messages without sacrificing reach." }
      ],
      specs: [
        { k: "Coverage", v: "40+ countries" },
        { k: "Formats", v: "Text, images, video, carousels, buttons" },
        { k: "Sender", v: "Brand logo, verified sender badge" },
        { k: "Fallback", v: "Automatic SMS fallback supported" },
        { k: "Interface", v: "REST API" }
      ]
    },
    ivr: {
      slug: "ivr",
      cat: "AI VOICE / IVR",
      title: "AI Voice (IVR)",
      lead: "AI-powered automated voice response handles reservations and first-line inquiries 24/365 — consistent quality, no missed calls.",
      summary: "Generative AI voice response operating 24/365. Handles customer bookings and inquiry triage with natural dialogue over your existing phone numbers.",
      uses: [
        "Business and clinic reservations",
        "First-line inquiry handling",
        "After-hours and overflow calls"
      ],
      features: [
        { t: "Natural voice dialogue", d: "Generative AI handles routine exchanges flexibly and naturally." },
        { t: "Available 24/365", d: "Keep accepting calls after hours and during peaks without losing opportunities." },
        { t: "Keep your number", d: "Works with existing numbers and forwarding — no number change required." },
        { t: "Conversation logs", d: "Review recorded interactions to keep improving your scenarios." }
      ],
      specs: [
        { k: "Delivery", v: "Cloud IVR" },
        { k: "Response", v: "AI voice dialogue" },
        { k: "Connection", v: "Existing lines and call forwarding" },
        { k: "Operations", v: "Logs and scenario management" },
        { k: "Main uses", v: "Reservations, first response, overflow" }
      ]
    },
    sim: {
      slug: "sim",
      cat: "WHOLESALE GLOBAL SIM / eSIM",
      title: "Wholesale Global SIM / eSIM",
      lead: "Competitively priced wholesale IMSI and roaming data. IMSI profiles covering 200 countries and regions and 650 operators worldwide.",
      summary: "Wholesale roaming data and IMSI profiles across 200 countries. White-label SPN customization, custom USIM manufacturing and eUICC/SGP.32 ready.",
      uses: [
        "IMSI sourcing for MVNOs and carriers",
        "Global IoT connectivity",
        "Travel data SIM / eSIM"
      ],
      features: [
        { t: "Wholesale IMSI and roaming data", d: "IMSI profiles covering 200 countries and regions and 650 operators, at competitive wholesale pricing." },
        { t: "SPN customization", d: "Customize the operator name (SPN) shown on the device — deliver the service under your own brand." },
        { t: "Original USIM production", d: "From card design to profile, we produce original USIMs — including industrial-grade USIMs for IoT." },
        { t: "eUICC and SGP.32 ready", d: "eUICC support plus SGP.32, the latest IoT remote-provisioning standard — flexible line operation for years to come." }
      ],
      specs: [
        { k: "Coverage", v: "200 countries and regions" },
        { k: "Operators", v: "650 operators" },
        { k: "Offering", v: "Wholesale IMSI, roaming data, IMSI profiles" },
        { k: "Customization", v: "Original card printing, SPN rewrite" },
        { k: "Standards", v: "eUICC / SGP.32 support" }
      ]
    }
  },

  // Why Choose Us / Trust Section
  whyUs: {
    step: "02",
    label: "RELIABILITY",
    title: "Why clients choose Turquoise Wave",
    lead: "Communication must never stop. We manage everything from infrastructure to operations, supporting your business with solid, dependable quality.",
    pillars: [
      {
        code: "R-01",
        title: "Our own infrastructure",
        desc: "Operated on data centers in Funchal (Madeira), Nuremberg and Helsinki — minimal external dependency, quality assured in-house."
      },
      {
        code: "R-02",
        title: "Redundancy and monitoring",
        desc: "17 operator interconnections with redundant routing fail over automatically. Quality metrics monitored 24/365."
      },
      {
        code: "R-03",
        title: "Security",
        desc: "Encrypted communication, access control and audit logs — designed security-first as a platform that carries OTP and other sensitive traffic."
      },
      {
        code: "R-04",
        title: "Support at every step",
        desc: "From requirements and sandbox testing to API integration and post-launch monitoring — a dedicated team stays with you."
      }
    ]
  },

  // Track Record Section
  trackRecord: {
    step: "03",
    label: "TRACK RECORD",
    title: "Track Record",
    lead: "From prime-listed enterprises to growing businesses — trusted continuously for mission-critical verification, notifications and wholesale voice.",
    badges: [
      "Adopters include Prime-listed enterprises & global MVNOs",
      "Widely used for VoIP termination & SMS OTP verification",
      "SMSOne & Cloud Fax — no development, same-day start"
    ]
  },

  // Company Profile Section
  company: {
    step: "04",
    label: "COMPANY",
    title: "Company Profile",
    rows: [
      { label: "Company name", value: "Turquoise Wave, LDA" },
      { label: "Founded", value: "January 2022" },
      { label: "Business", value: "General Telecom, Consulting" },
      { label: "Head office", value: "Startup - EV 160, Campus da Penteada, 9020-105 Funchal, Madeira, Portugal" },
      { label: "Data centers", value: "Funchal (Madeira), Nuremberg (Germany), Helsinki (Finland)" },
      { label: "Track record", value: "23 client deployments worldwide" }
    ]
  },

  // Bottom Call To Action Banner
  ctaBanner: {
    title: "Dependable telecom,<br>for your business.",
    lead: "Adoption, wholesale, API integration, quotes — we are happy to help.",
    button: "Go to contact form →"
  },

  // Detail Page Labels & CTA
  detailPage: {
    homeBreadcrumb: "Home",
    servicesBreadcrumb: "Telecom Services",
    useCasesHeading: "Key Use Cases",
    featuresHeading: "Features",
    specsHeading: "Specifications",
    ctaHeading: "Talk to us about this service",
    ctaLead: "Adoption, quotes, technical specifications — we are happy to help.",
    ctaButton: "Go to contact form",
    backToTop: "Back to top ↑"
  },

  // Contact Form Section
  contact: {
    title: "Contact us",
    lead: "Adoption, wholesale, API integration, quotes — send us your inquiry below and our team will reply within two business days.",
    inquiryTypes: [
      "Service adoption",
      "Wholesale inquiry",
      "API integration",
      "Quotation request",
      "Technical verification",
      "Other"
    ],
    serviceOptions: [
      "International Voice",
      "International SMS",
      "SMSOne",
      "International Fax",
      "SMS & Fax API",
      "RCS API",
      "AI Voice (IVR)",
      "Wholesale Global SIM / eSIM",
      "General inquiry"
    ],
    labels: {
      type: "Inquiry type",
      service: "Target service",
      company: "Company",
      department: "Department",
      name: "Name",
      email: "Email address",
      phone: "Phone number",
      message: "Message",
      messagePlaceholder: "Timeline, expected volumes, preferred interface — anything you can share helps.",
      agree: "I agree to the handling of my personal information.",
      submit: "Submit",
      required: "Required",
      optional: "Optional"
    },
    aside: {
      head: "Before you write",
      items: [
        "We reply within two business days.",
        "Case studies and client references are shared during business meetings.",
        "Sandbox environments and API documentation are available."
      ]
    },
    thanks: {
      title: "Your inquiry has been received",
      message: "We will review your message and get back to you within two business days.",
      backHome: "Back to home"
    }
  }
};

// Export for Node/CommonJS environments (for tests or build scripts)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONTENT;
}
