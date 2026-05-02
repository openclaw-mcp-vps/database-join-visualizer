export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Visual Query Builder for{" "}
          <span className="text-[#58a6ff]">Complex Database Joins</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Drag-and-drop tables onto a live canvas, connect foreign keys visually, and generate production-ready SQL in seconds. No more hand-writing multi-table joins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e] overflow-x-auto">
          <p className="text-[#58a6ff] mb-2">-- Generated SQL preview</p>
          <p>SELECT <span className="text-[#79b8ff]">u.name, o.total, p.title</span></p>
          <p>FROM <span className="text-[#79b8ff]">users u</span></p>
          <p className="pl-4">INNER JOIN <span className="text-[#79b8ff]">orders o</span> ON u.id = o.user_id</p>
          <p className="pl-4">LEFT JOIN <span className="text-[#79b8ff]">products p</span> ON o.product_id = p.id</p>
          <p>WHERE <span className="text-[#79b8ff]">u.active = true</span>;</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ["Drag & Drop Canvas", "Connect tables visually with React Flow — no SQL knowledge required to start."],
            ["Live SQL Output", "Monaco Editor shows generated SQL updating in real time as you build."],
            ["Multi-DB Support", "Connect to PostgreSQL, MySQL, SQLite, and more via secure API endpoints."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="text-white font-bold mb-2">{title}</p>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-8">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited visual join diagrams",
              "Connect up to 10 databases",
              "Export SQL & ER diagrams",
              "Team sharing & collaboration",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "Do I need to know SQL to use this?",
              "No. The drag-and-drop canvas generates SQL automatically. Advanced users can also edit the SQL directly in the Monaco editor.",
            ],
            [
              "Which databases are supported?",
              "PostgreSQL, MySQL, MariaDB, and SQLite are supported out of the box. More adapters are added regularly.",
            ],
            [
              "Can I cancel my subscription?",
              "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Database Join Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
