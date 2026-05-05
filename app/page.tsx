export default function Page() {
  const features = [
    'Custom playbook builder with drag-and-drop steps',
    'Automated Slack messages & role assignments',
    'Real-time incident status dashboard',
    'Escalation rules & on-call paging',
    'Post-mortem report generation',
    'Unlimited team members',
  ]

  const faqs = [
    {
      q: 'How does it integrate with Slack?',
      a: 'Install our Slack app in one click. It creates slash commands and interactive buttons so your team runs playbooks entirely inside Slack — no context switching.',
    },
    {
      q: 'Can I customize the playbook steps?',
      a: 'Yes. The visual builder lets you add steps, assign roles, set timers, and branch on conditions. Templates for common incidents (outage, security breach, data loss) are included.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Every new account gets a 14-day free trial with full access. No credit card required to start.',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Run incident response<br />
          <span className="text-[#58a6ff]">playbooks in Slack</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Interactive workflows that guide your team through every incident step — automated status updates, role assignments, and real-time tracking without leaving Slack.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">14-day free trial · No credit card required</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to manage incidents at scale.</p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center w-full px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} IncidentFlow. All rights reserved.
      </footer>
    </main>
  )
}
