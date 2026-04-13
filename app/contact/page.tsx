export default function ContactPage() {
  const leadEmail = "Sean@apexconsult.pro";

  return (
    <main className="min-h-screen bg-[#05080d] text-white">
      <section className="relative overflow-hidden border-b border-[#1b3e63]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a5ea8]/30 via-[#06111d] to-[#29a9ea]/10" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:scale-[1.03]"
          >
            ← Back to Home
          </a>

          <div className="mt-10 flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Apex Consult logo"
                className="h-56 w-auto drop-shadow-[0_0_30px_rgba(41,169,234,0.45)]"
              />
            </div>

            <p className="text-sm uppercase tracking-[0.26em] text-[#8fd3ff]">
              Request a Quote
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-5xl">
              Let’s take the weight of this project off your shoulders.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
              You do not need to manage contractors, timelines, and constant
              pressure alone. Apex Consult brings structure, coordination, and
              accountability so your project moves forward with less stress and
              better execution.
            </p>

            <div className="mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                  Response Time
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Typically within 24 hours
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                  Project Types
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Residential to large-scale commercial
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8fd3ff]">
                  What You Get
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Clear next steps and expert direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-6 shadow-2xl">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <div className="mt-4 space-y-3 text-white/70">
                <p>• Tell us your scope, timeline, and biggest pain points.</p>
                <p>
                  • We review the job and identify where management,
                  coordination, or contractor sourcing can help most.
                </p>
                <p>
                  • You get a direct response with practical next steps, not
                  vague promises.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-6 shadow-2xl">
              <h2 className="text-xl font-semibold">Project Types</h2>
              <div className="mt-4 grid gap-3 text-sm text-white/80">
                {[
                  "Residential",
                  "Light Commercial",
                  "Large-Scale Commercial",
                  "Infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 p-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-6 shadow-2xl">
              <h2 className="text-xl font-semibold">Why clients reach out</h2>
              <div className="mt-4 space-y-3 text-white/75">
                <p>• Too many moving parts and no clear point of control</p>
                <p>• Subcontractors are not aligned and timelines keep slipping</p>
                <p>• Need experienced oversight before things get more expensive</p>
              </div>

              <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-white/75">
                <p>Sean@apexconsult.pro</p>
                <p>805 751 3743</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#1d476f]/50 bg-[#07111c]/80 p-8 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0a5ea8] via-[#8fd3ff] to-[#0a5ea8]" />

            <form
              action={`https://formsubmit.co/${leadEmail}`}
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Apex Consult Website Lead"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Project Type
                  </label>
                  <select
                    name="project_type"
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option>Residential</option>
                    <option>Light Commercial</option>
                    <option>Large-Scale Commercial</option>
                    <option>Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Estimated Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                    placeholder="Start date or urgency"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Project Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                    placeholder="City / job location"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#2f85c7]"
                  placeholder="Tell us about your project, timeline, current challenges, and what kind of support you need."
                />
              </div>

              <div className="rounded-2xl border border-[#2f85c7]/20 bg-[#0a5ea8]/10 p-4 text-sm text-white/75">
                Share as much detail as you can. Better information helps us
                give you better direction faster.
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-black shadow-lg transition hover:scale-[1.01]"
              >
                Request Project Review
              </button>

              <p className="text-xs leading-6 text-white/45">
                This form sends your inquiry directly to Sean@apexconsult.pro.
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}