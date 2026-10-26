const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "RTK Query",
  "Tailwind CSS",
  "JavaScript",
  "HTML & CSS",
  "Jest",
  "React Testing Library",
];

const achievements = [
  {
    metric: "5×",
    title: "Performance improvement",
    description:
      "Improved legacy application performance through targeted frontend optimization.",
  },
  {
    metric: "30% → 75%",
    title: "Accessibility improvement",
    description:
      "Improved accessibility scores to create a more inclusive user experience.",
  },
  {
    metric: "+20%",
    title: "Checkout conversion",
    description:
      "Revamped the cart and checkout experience to improve conversion.",
  },
  {
    metric: "2×",
    title: "Organic traffic",
    description:
      "Improved SEO with Next.js to help double application traffic.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <a
            href="#home"
            aria-label="Go to homepage"
            className="shrink-0 text-xl font-bold tracking-tight"
          >
            Frontend<span className="text-cyan-400">.dev</span>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
            <a href="#home" className="text-sm transition hover:text-cyan-400">
              Home
            </a>
            <a
              href="#achievements"
              className="text-sm transition hover:text-cyan-400"
            >
              Impact
            </a>
            <a
              href="#skills"
              className="text-sm transition hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm transition hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32"
      >
        <div>
          <p className="mb-4 font-medium tracking-widest text-cyan-400">
            SENIOR FRONTEND ENGINEER
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Building better
            <span className="block text-cyan-400">web experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-slate-300">
            I build accessible, performant and scalable web applications using
            React, Next.js and TypeScript. I enjoy solving complex frontend
            problems and creating great user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <p className="text-sm tracking-widest text-slate-400">
            MY APPROACH
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Engineering with purpose.
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-medium">Performance</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Faster, responsive experiences with a focus on Core Web Vitals.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Architecture</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Reusable components and maintainable code.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Accessibility</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Inclusive experiences for every user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section
        id="achievements"
        className="scroll-mt-24 border-y border-slate-800 bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-medium tracking-widest text-cyan-400">
            RESULTS THAT MATTER
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Impact & achievements
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Focused on measurable improvements in performance, accessibility,
            user experience and organic traffic.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <p className="text-3xl font-bold text-cyan-400">
                  {achievement.metric}
                </p>
                <h3 className="mt-4 text-lg font-semibold">
                  {achievement.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {achievement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
      >
        <p className="font-medium tracking-widest text-cyan-400">
          WHAT I WORK WITH
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Technical skills
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies and tools I use to build modern, maintainable web
          applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm transition hover:border-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
      >
        <p className="font-medium tracking-widest text-cyan-400">
          SELECTED WORK
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Practical projects demonstrating frontend architecture, state
          management and AI integration.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
            <p className="text-sm tracking-widest text-cyan-400">
              PROJECT 01
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              AI-powered assistant
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              An interactive AI application exploring streaming responses,
              API integration and modern React patterns.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "AI"].map((technology) => (
                <span
                  key={technology}
                  className="rounded bg-slate-800 px-3 py-1 text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
            <p className="text-sm tracking-widest text-cyan-400">
              PROJECT 02
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              E-commerce experience
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              A responsive shopping experience focused on reusable components,
              cart management, API caching and performance.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Redux Toolkit", "RTK Query"].map((technology) => (
                <span
                  key={technology}
                  className="rounded bg-slate-800 px-3 py-1 text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="scroll-mt-24 border-t border-slate-800 px-6 py-16 text-center"
      >
        <p className="font-medium tracking-widest text-cyan-400">
          GET IN TOUCH
        </p>
        <h2 className="mt-3 text-3xl font-bold">
          Let&apos;s build something great.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
          I&apos;m interested in exciting frontend engineering opportunities
          and challenging technical projects.
        </p>
        <a
          href="https://github.com/eshant2010/frontend-portfolio"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          View GitHub repository
        </a>
        <p className="mt-12 text-sm text-slate-500">
          Built with Next.js, React, TypeScript and Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}