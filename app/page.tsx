export default function Home() {
  const services = [
    {
      title: "Project Management",
      desc: "Full oversight from planning to completion, with scheduling, coordination, and progress tracking to keep projects moving.",
    },
    {
      title: "Subcontractor Coordination",
      desc: "We manage multiple trades, sequencing, and communication so your project stays organized and on schedule.",
    },
    {
      title: "Contractor Sourcing",
      desc: "We help locate qualified contractors for the job, making it easier to build the right team and move forward with confidence.",
    },
    {
      title: "Pre-Project Planning",
      desc: "Site logistics, timeline planning, and utility coordination to set the job up for a smoother build.",
    },
    {
      title: "Commercial Oversight",
      desc: "Coordination and accountability across demanding commercial projects with multiple stakeholders and tighter timelines.",
    },
    {
      title: "Project Rescue",
      desc: "When projects fall behind or become disorganized, we step in, restore structure, and get them back on track.",
    },
  ];

  const clients = [
    "General Contractors",
    "Developers",
    "Property Owners",
    "Commercial Clients",
  ];

  const commercialPoints = [
    "Multi-trade coordination",
    "Schedule and deadline management",
    "Contractor sourcing and oversight",
    "Project recovery and issue resolution",
  ];

  return (
    <main className="min-h-screen bg-[#05080d] text-white">
      <section className="relative overflow-hidden border-b border-[#1b3e63]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a5ea8]/30 via-[#06111d] to-[#29a9ea]/10" />
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
          alt="project leadership meeting"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#2f85c7]/40 bg-white/5 px-4 py-2 text-sm tracking-wide text-[#8fd3ff]">
                Apex Consult
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                We manage the chaos so your project stays on track.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Apex Consult provides project management and consulting for
                residential, commercial, large-scale commercial, and
                infrastructure projects, handling subcontractors, timelines,
                contractor sourcing, and coordination from start to finish.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02]"
                >
                  View Services
                </a>
                <a
                  href="/contact"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Request a Quote
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                    Project Types
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Residential to Large-Scale Commercial
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                    Core Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Coordination, Oversight, Delivery
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                    Client Benefit
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Less Stress. Better Execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 flex items-center justify-center rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-8 shadow-2xl backdrop-blur">
                <img
                  src="/logo.png"
                  alt="Apex Consult logo"
                  className="h-auto w-full max-w-sm"
                />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8fd3ff]">
                  What We Do
                </p>
                <p className="mt-4 text-2xl font-semibold">
                  Project Management
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  We take the stress of managing subcontractors, schedules, and
                  deadlines off our clients so projects stay organized and
                  efficient.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8fd3ff]">
                  Who We Help
                </p>
                <p className="mt-4 text-2xl font-semibold">Builders & Owners</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  We support contractors, developers, and property owners who
                  need experienced coordination without the burden of managing
                  every detail themselves.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8fd3ff]">
                  Why Apex Consult
                </p>
                <p className="mt-4 text-2xl font-semibold">
                  Execution Without Chaos
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Our role is to bring structure, communication, accountability,
                  and the right contractor connections to every phase of the job
                  so clients gain time back and projects keep moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="services">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8fd3ff]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Project support built around residential, commercial, and
            large-scale jobsite demands.
          </h2>
          <p className="mt-4 text-white/70">
            We help remove bottlenecks, improve coordination, connect clients
            with the right contractors, and keep work progressing with less
            stress for the client.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="project planning session"
            className="h-64 w-full rounded-3xl border border-white/10 object-cover md:col-span-2"
          />
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1b3e63]/40 bg-[#08111b]">
        <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="project management team coordination"
            className="h-64 w-full rounded-3xl border border-white/10 object-cover"
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-10">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
            <h3 className="text-xl font-semibold">Who We Work With</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {clients.map((client) => (
                <li key={client}>• {client}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-7 md:col-span-2">
            <h3 className="text-xl font-semibold">What Clients Gain</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Clear communication",
                "Schedule accountability",
                "Trade coordination",
                "Reduced client stress",
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80"
                >
                  {value}
                </div>
              ))}
            </div>
            <p className="mt-6 leading-7 text-white/70">
              Apex Consult exists to reduce the day-to-day pressure on clients
              by taking ownership of coordination, deadlines, contractor
              sourcing, and execution details that commonly create delays and
              stress.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-[#8fd3ff]">
                Commercial Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Large-scale commercial project support with structure, oversight,
                and accountability.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Apex Consult supports commercial projects that require stronger
                coordination across multiple trades, tighter scheduling, and
                clear communication from pre-construction through completion.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {commercialPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
                alt="commercial project planning meeting"
                className="h-[360px] w-full rounded-3xl border border-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
          alt="planning and management meeting"
          className="mb-10 h-64 w-full rounded-3xl border border-white/10 object-cover"
        />

        <div className="rounded-[2rem] border border-[#2f85c7]/25 bg-gradient-to-br from-[#0a5ea8]/15 to-white/[0.03] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8fd3ff]">
            About Apex Consult
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Professional project oversight with a practical, hands-on mindset.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/75">
            We consult and manage projects with a focus on keeping
            subcontractors aligned, schedules realistic, the right contractors
            identified, and deliverables moving across residential, commercial,
            and large-scale commercial projects. Our goal is simple: remove
            unnecessary pressure from the client and create a better-managed
            project from start to finish.
          </p>
        </div>
      </section>
    </main>
  );
}