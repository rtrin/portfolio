'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray="4 2"
            className={cn(
              "fill-white/2 stroke-white/10",
              "mask-[radial-gradient(ellipse_800px_250px_at_center,white,transparent)]"
            )}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-8 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-medium mb-4 bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Richard Trinh
          </h1>
          <p className="text-xl md:text-2xl text-white/70">
            Software Engineer
          </p>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-white/50">Based in Olathe, Kansas</p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:richardtrinh452@gmail.com"
                className="text-blue-400/80 hover:text-blue-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/rtrin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400/80 hover:text-blue-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rtrin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400/80 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8"
        >
          Computer Science student at Colby College with experience in distributed systems and backend/cloud development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <a
            href="https://drive.google.com/file/d/1d2RfjsatcKRRyyIfMJtt9EPOOC8_tEV7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline decoration-blue-400/50 hover:decoration-blue-300 text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-2.5"
          >
            Resume <ExternalLink size={18} className="text-blue-400" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium mb-8 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-white/80 leading-relaxed mb-4">
            I&apos;m a CS student at Colby College, graduating in May 2026. I&apos;ve interned at companies like{" "}
            <a href="https://www.hashicorp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline decoration-blue-400/50 hover:decoration-blue-300 transition-all">HashiCorp</a>, {" "}
            <a href="https://www.garmin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline decoration-blue-400/50 hover:decoration-blue-300 transition-all">Garmin</a>, and {" "}
            <a href="https://www.ntst.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline decoration-blue-400/50 hover:decoration-blue-300 transition-all">Netsmart</a> working on cloud infrastructure, payment systems, and healthcare software respectively.
          </p>
          <p className="text-white/80 leading-relaxed">
            I enjoy building things that bring real value to users.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium mb-12 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* HashiCorp */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium mb-1">Software Engineer Intern</h3>
                <p className="text-white/70">HashiCorp (IBM)</p>
              </div>
              <p className="text-white/50 text-sm mt-1 md:mt-0">June 2025 – Aug 2025</p>
            </div>
            <p className="text-white/50 text-sm mb-2">San Francisco, CA</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href="https://www.hashicorp.com/en/products/boundary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm font-medium inline-flex items-center gap-1.5 transition-all"
              >
                Boundary <ExternalLink size={16} className="text-blue-400/90" />
              </a>
              <a
                href="https://github.com/hashicorp/boundary/pull/5939"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm font-medium inline-flex items-center gap-1.5 transition-all"
              >
                PR #5939 <ExternalLink size={16} className="text-blue-400/90" />
              </a>
            </div>
            <p className="text-white/90 leading-relaxed">
              Worked on Boundary, HashiCorp&apos;s identity-based access management platform, focusing on performance optimization and reliability. Identified and resolved performance bottlenecks affecting customers, built load testing infrastructure, and fixed CLI issues that improved stability for thousands of users. Created monitoring dashboards and refactored core services to handle high-scale workloads.
            </p>
          </motion.div>

          {/* Garmin */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium mb-1">Software Engineer Intern</h3>
                <p className="text-white/70">Garmin</p>
              </div>
              <p className="text-white/50 text-sm mt-1 md:mt-0">Sept 2024 – Dec 2024</p>
            </div>
            <p className="text-white/50 text-sm mb-2">Yarmouth, ME</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href="https://www.garmin.com/en-US/c/subscription-plans/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm font-medium inline-flex items-center gap-1.5 transition-all"
              >
                Subscription Plans <ExternalLink size={16} className="text-blue-400/90" />
              </a>
              <a
                href="https://nalmadi.github.io/student-interview-Richard-Trinh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm font-medium inline-flex items-center gap-1.5 transition-all"
              >
                Interview <ExternalLink size={16} className="text-blue-400/90" />
              </a>
            </div>
            <p className="text-white/90 leading-relaxed">
              Built backend infrastructure for Garmin&apos;s subscription billing system. Developed C#/.NET/gRPC microservice features that save the company 100k+ annually and implemented caching systems that improved account API performance. Worked across the stack from database optimization to infrastructure as code, shipping software that directly impacted customer payments and billing workflows.
            </p>
          </motion.div>

          {/* Netsmart */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium mb-1">Software Engineer Intern</h3>
                <p className="text-white/70">Netsmart</p>
              </div>
              <p className="text-white/50 text-sm mt-1 md:mt-0">June 2024 – Aug 2024</p>
            </div>
            <p className="text-white/50 text-sm mb-4">Overland Park, KS</p>
            <p className="text-white/90 leading-relaxed">
              Developed internal tools and optimized backend services for healthcare software. Built a document tracking system that streamlined support workflows for multiple engineering teams, and improved database query performance that significantly reduced application load times. Worked with modern web technologies and Java-based microservices to deliver tools that improved developer and consultant productivity.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium mb-12 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Langstore</h3>
            <p className="text-white/60 text-sm mb-4">TypeScript, Next.js, Supabase, Stack Auth, Gemini AI</p>
            <p className="text-white/80 mb-4">
              A webapp for organizing language learning materials. Integrates video and PDF viewing and includes AI vocab and grammar extraction.
            </p>
            <a
              href="https://langstore.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              Visit Website <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Koetalk</h3>
            <p className="text-white/60 text-sm mb-4">TypeScript, React, Bun, Hono, PostgreSQL, tRPC</p>
            <p className="text-white/80 mb-4">
              AI-powered language learning app for practicing conversations with real-time speech recognition and TTS.
            </p>
            <a
              href="https://koetalk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              Visit Website <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Arcaea Charts</h3>
            <p className="text-white/60 text-sm mb-4">TypeScript, React, PostgreSQL</p>
            <p className="text-white/80 mb-4">
              Web app for browsing and filtering Arcaea rhythm game charts with integrated YouTube chart previews.
            </p>
            <a
              href="https://github.com/rtrin/arcaeacharts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Simple Go Shell</h3>
            <p className="text-white/60 text-sm mb-4">Go</p>
            <p className="text-white/80 mb-4">
              A simple shell implementation written in Go for command execution and process management.
            </p>
            <a
              href="https://github.com/rtrin/simple-go-shell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Vidsnap</h3>
            <p className="text-white/60 text-sm mb-4">TypeScript, React, PostgreSQL, OpenAI API</p>
            <p className="text-white/80 mb-4">
              Tool for automatically summarizing video content using AI.
            </p>
            <a
              href="https://github.com/rtrin/vidsnap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Reef Annotator</h3>
            <p className="text-white/60 text-sm mb-4">Python, OpenCV, TensorFlow, Keras</p>
            <p className="text-white/80 mb-4">
              U-NET computer vision model used to segment 1,500+ reef island images for climate change research.
            </p>
            <a
              href="https://github.com/rtrin/atoll-segmentation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Graph Algorithm Visualizer</h3>
            <p className="text-white/60 text-sm mb-4">TypeScript, React, Tailwind</p>
            <p className="text-white/80 mb-4">
              Interactive visualization tool for exploring graph traversal algorithms.
            </p>
            <a
              href="https://github.com/rtrin/pathfinding-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-medium mb-2">Gesture Controller</h3>
            <p className="text-white/60 text-sm mb-4">Arduino, C++, Unity, C#</p>
            <p className="text-white/80 mb-4">
              Device for controlling movement and rotation of objects in 3D virtual space (similar to Zelda BoTW puzzles).
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium mb-12 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-white/90 mb-4">Languages</h3>
            <ul className="space-y-2 text-white/80">
              <li>C#</li>
              <li>Go</li>
              <li>Java</li>
              <li>Python</li>
              <li>C, C++</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML, CSS</li>
              <li>SQL</li>
              <li>Bash</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-white/90 mb-4">Frameworks & Databases</h3>
            <ul className="space-y-2 text-white/80">
              <li>.NET</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-white/90 mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-white/80">
              <li>Azure</li>
              <li>AWS</li>
              <li>Terraform</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Linux/Unix</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitHub Actions</li>
              <li>gRPC</li>
              <li>RabbitMQ</li>
              <li>Datadog</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-white/90 mb-4">Concepts</h3>
            <ul className="space-y-2 text-white/80">
              <li>Microservices</li>
              <li>Distributed Systems</li>
              <li>API Design</li>
              <li>Object-Oriented Programming</li>
              <li>Load Testing</li>
              <li>Caching</li>
              <li>Database Optimization</li>
              <li>Testing & TDD</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium mb-8 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-2">Colby College</h3>
          <p className="text-white/70 mb-1">B.A. in Computer Science</p>
          <p className="text-white/50 text-sm">GPA: 3.66 | Expected: May 2026</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 text-sm text-center"
        >
          © {new Date().getFullYear()} Richard Trinh
        </motion.p>
      </footer>
    </main>
  );
}