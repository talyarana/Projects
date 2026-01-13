"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import FloatingBackground from "../components/FloatingBackground";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Target,
  Lightbulb,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
} from "lucide-react";

// --- DATA (easy to edit later) ---
const ABOUT = {
  title: "Turning Data Into Practical Insights",
  bio: "I’m currently pursuing an MSc in Business Analytics at University College Cork (UCC), with 1 year of experience in risk analysis and reporting at KPMG. I enjoy turning messy data into clear dashboards, reliable reporting, and decision-ready insights.",
  pills: ["SQL", "Python", "Power BI", "Excel", "Tableau", "Git"],
  cards: [
    {
      icon: Brain,
      title: "Data Analyst",
      text: "SQL • Python • Power BI • Tableau • Excel",
    },
    {
      icon: Target,
      title: "Impact-Focused",
      text: "Reporting & dashboards that reduce manual effort and improve clarity.",
    },
    {
      icon: Lightbulb,
      title: "Analytical Thinker",
      text: "Validation-first approach with clean logic and explainable outcomes.",
    },
    {
      icon: GraduationCap,
      title: "MSc Business Analytics",
      text: "University College Cork, Ireland",
    },
  ],
  focus:
    "Building strong BI + ML portfolio projects, sharpening storytelling, and landing analytics roles in Ireland.",
};

const SKILLS = {
  subtitle:
    "Practical analytics skills focused on reporting automation, data quality, and enterprise decision support",
  core: [
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "DAX",
    "Excel (Advanced)",
    "ETL Pipelines",
    "Data Modelling",
    "REST API Integration",
    "MySQL / BigQuery",
    "Git",
    "Machine Learning (Basic)",
  ],
  specializations: [
    "Reporting Automation & Dashboards",
    "Data Quality Improvement & Validation",
    "Requirement Gathering & Stakeholder Engagement",
    "Compliance & Risk Data Processes",
    "Data Cleaning & Visualisation",
  ],
};

const EXPERIENCE = [
  {
    role: "Peer Tutor",
    company: "University College Cork",
    location: "Cork, Ireland",
    dates: "Sep 2025 – Jul 2026",
    status: "Current",
    summary:
      "Directed modules for postgraduate students and led hands-on labs in Excel and Tableau.",
    bullets: [
      "Directed modules for 40+ postgraduate students; led 90+ lab sessions in MS Excel and Tableau.",
      "Designed weekly teaching materials and 12+ assessment activities with the module coordinator.",
    ],
    tags: ["Teaching", "Excel", "Tableau", "Leadership"],
  },
  {
    role: "Risk Analyst",
    company: "KPMG",
    location: "Delhi, India",
    dates: "Jul 2023 – Jul 2024",
    status: "",
    summary:
      "Built risk reports and compliance checks; delivered due diligence outputs for global clients.",
    bullets: [
      "Developed 180+ risk reports and compliance checks for global clients via negative news screening and remediation.",
      "Conducted background checks and risk assessments across 30+ jurisdictions using government/industry databases.",
      "Provided 150+ synthesized datasets and due diligence reports to the U.S. onshore team using Microsoft Office 365 tools.",
      "Executed 10+ business site visits to assess compliance adherence and operational risks.",
    ],
    tags: ["Risk", "Compliance", "Due Diligence", "Reporting"],
  },
  {
    role: "Trainee",
    company: "Ministry of Commerce & Industry (Govt. of India)",
    location: "Delhi, India",
    dates: "Sep 2022 – Sep 2023",
    status: "",
    summary:
      "Ran market research and KPI dashboards; supported investor partnerships and roadshows.",
    bullets: [
      "Led market research on 80+ hyperlocal startups; built KPI dashboards across 7 clusters (Agri-food & Telecom).",
      "Supported 5 investor meetings and 2 national roadshows; helped secure 3 investor partnerships and €12M+ investment.",
    ],
    tags: ["Market Research", "Dashboards", "Stakeholders", "Strategy"],
  },
];

type Category = "All" | "Business Intelligence" | "Machine Learning";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  bullets: string[];
  tags: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Hotel Review Sentiment Analytics (NLP)",
    category: "Machine Learning",
    bullets: [
      "Built an end-to-end sentiment + topic modeling pipeline for hotel reviews.",
      "Summarised drivers of praise/complaints into actionable themes.",
      "Produced business-ready insights with clear storytelling and visuals.",
    ],
    tags: ["NLP", "Sentiment Analysis", "LDA", "Text Mining", "R"],
    href: "#",
  },
  {
    title: "Heart Disease Prediction using SVM",
    category: "Machine Learning",
    bullets: [
      "Trained and evaluated SVM models for binary classification.",
      "Performed tuning + feature selection for improved generalisation.",
      "Presented accuracy/precision/recall trade-offs clearly.",
    ],
    tags: ["SVM", "Machine Learning", "Classification", "Excel Solver"],
    href: "#",
  },
  {
    title: "Manufacturing Time-Series Forecasting",
    category: "Business Intelligence",
    bullets: [
      "Modelled seasonality and trend components for forecasting.",
      "Compared candidate models and selected best-performing approach.",
      "Delivered a forecast view for planning and decision support.",
    ],
    tags: ["Time Series", "Forecasting", "ARIMA", "ETS", "R"],
    href: "#",
  },
  {
    title: "Social Media User Behaviour Analytics",
    category: "Machine Learning",
    bullets: [
      "Segmented users and analysed engagement patterns.",
      "Built predictive models to classify behaviour groups.",
      "Identified influencer/engagement signals for product actions.",
    ],
    tags: ["Python", "Clustering", "Random Forest", "Machine Learning"],
    href: "#",
  },
  {
    title: "Railway Network Optimisation System",
    category: "Business Intelligence",
    bullets: [
      "Built a decision support approach for route/capacity planning.",
      "Detected bottlenecks and proposed optimisation strategies.",
      "Packaged results in an easy-to-use format for stakeholders.",
    ],
    tags: ["Excel VBA", "Network Flow", "Operations Research"],
    href: "#",
  },
  {
    title: "Amsterdam Affordable Housing Analytics",
    category: "Business Intelligence",
    bullets: [
      "Analysed pricing and affordability across neighbourhoods.",
      "Identified gaps and compared affordability indicators.",
      "Generated insights for investment/policy discussion.",
    ],
    tags: ["R", "Data Analysis", "Housing Analytics", "ggplot2"],
    href: "#",
  },
];

// --- UI bits ---
function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-white/80" />
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {text}
    </span>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-white/80" />
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-2 text-sm text-white/60">{text}</div>
    </div>
  );
}

function FilterPill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm transition",
        active
          ? "bg-white text-[#0B0D12]"
          : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

export default function Page() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <FloatingBackground />

      <main className="relative z-10 mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Talya Rana
            </h1>

            <p className="mt-3 text-white/75">Business Analytics</p>

            <p className="mx-auto mt-5 max-w-2xl text-white/65 leading-relaxed">
              Turning data into practical decisions through machine learning,
              statistical modeling, and advanced analytics. I specialize in
              predictive modeling, data visualization, python-based data science,
              and clean reporting people can trust.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0B0D12] hover:opacity-90"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-white/80 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-16">
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle title="About Me" />

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
              {/* Left profile card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/15 bg-white/10">
                    <Image
                      src="/talya.jpg"
                      alt="Talya"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-5 text-xl font-semibold">Talya Rana</div>
                  <div className="mt-1 text-white/60">
                    Business Analytics (MSc)
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {ABOUT.pills.map((t) => (
                      <Pill key={t} text={t} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {ABOUT.title}
                  </h3>
                  <p className="mt-3 text-white/65 leading-relaxed">
                    {ABOUT.bio}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {ABOUT.cards.map((c) => (
                    <InfoCard
                      key={c.title}
                      icon={c.icon}
                      title={c.title}
                      text={c.text}
                    />
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white/85">
                    Current Focus:
                    <span className="font-normal text-white/65">
                      {" "}
                      {ABOUT.focus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative py-16">
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle title="Technical Skills" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/65">
              {SKILLS.subtitle}
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-lg font-semibold">Core Technologies</div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {SKILLS.core.map((s) => (
                  <div
                    key={s}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-white/80"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-lg font-semibold">Specializations</div>

              <ul className="mt-5 space-y-4 text-white/75">
                {SKILLS.specializations.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-white/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative py-16">
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle title="Professional Experience" />
            <p className="mx-auto mt-4 max-w-3xl text-center text-white/65">
              Experience in risk analysis, reporting, dashboards, teaching, and
              stakeholder-facing work across India and Ireland.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-[80px_1fr]">
              {/* Timeline line */}
              <div className="relative hidden lg:block">
                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10" />
              </div>

              {/* Cards */}
              <div className="space-y-8">
                {EXPERIENCE.map((job) => (
                  <div key={job.role} className="relative">
                    {/* Timeline dot (desktop) */}
                    <div className="absolute -left-[60px] top-6 hidden lg:flex h-4 w-4 items-center justify-center">
                      <div className="h-3.5 w-3.5 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="text-xl font-semibold">
                              {job.role}
                            </div>
                            {job.status ? (
                              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/10">
                                {job.status}
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-2 text-white/80 font-medium">
                            {job.company}
                          </div>
                          <div className="mt-2 text-sm text-white/60">
                            {job.summary}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-white/60 md:text-right">
                          <div className="flex items-center gap-2 md:justify-end">
                            <Calendar className="h-4 w-4" />
                            <span>{job.dates}</span>
                          </div>
                          <div className="flex items-center gap-2 md:justify-end">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="text-sm font-semibold text-white/85">
                          Key Responsibilities & Achievements:
                        </div>
                        <ul className="mt-4 space-y-3 text-white/70">
                          {job.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span className="mt-[9px] h-2 w-2 rounded-full bg-white/60" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                          >
                            <Briefcase className="h-3.5 w-3.5" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">My Projects</h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-white/80" />
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              A mix of machine learning and business intelligence work — built to
              be explainable and useful.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <FilterPill active={filter === "All"} onClick={() => setFilter("All")}>
                All
              </FilterPill>
              <FilterPill
                active={filter === "Business Intelligence"}
                onClick={() => setFilter("Business Intelligence")}
              >
                Business Intelligence
              </FilterPill>
              <FilterPill
                active={filter === "Machine Learning"}
                onClick={() => setFilter("Machine Learning")}
              >
                Machine Learning
              </FilterPill>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition"
              >
                <div className="h-44 bg-gradient-to-b from-white/10 to-transparent" />

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="mt-2">
                    <Tag>{p.category}</Tag>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <div className="text-xs text-white/50">Technologies</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <a
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#0B0D12] hover:opacity-90"
                    href="https://github.com/talyarana/Hotel-Experience-Sentiment-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 pb-24">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Contact Me</h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-white/80" />
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Interested in analytics roles, collaborations, or projects? Let’s connect.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Get In Touch</div>
              <p className="mt-2 text-white/70 text-sm">
                Replace these with your real details.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Email: your.email@example.com
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  LinkedIn: /in/yourhandle
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  GitHub: github.com/yourhandle
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Location: Cork, Ireland
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Send a Message</div>
              <p className="mt-2 text-white/70 text-sm">
                (UI only — we can connect it to a form service later.)
              </p>

              <div className="mt-6 grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your Name"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="your@email.com"
                  />
                </div>

                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Subject"
                />

                <textarea
                  className="min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your message..."
                />

                <button className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#0B0D12] hover:opacity-90">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-center text-xs text-white/50">
          © 2026 Talya Rana
        </footer>
      </main>
    </div>
  );
}
