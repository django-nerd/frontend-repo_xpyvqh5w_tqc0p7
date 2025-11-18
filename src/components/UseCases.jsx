import React from 'react'

const UseCases = () => {
  const cases = [
    { title: 'Landscaping firms', bullets: ['Stabilise new installs', 'Reduce callbacks', 'Predictable finish across sites'] },
    { title: 'Garden maintenance teams', bullets: ['Hold mulch after service', 'Less blow-away', 'Cleaner client presentation'] },
    { title: 'Municipal parks and councils', bullets: ['Lower upkeep costs', 'Safer paths and beds', 'Fast local supply'] },
    { title: 'Commercial property maintenance', bullets: ['Tidy beds longer', 'Protects against run-off', 'Fewer unsightly gaps'] },
    { title: 'New-build developers', bullets: ['Sell-ready landscaping', 'Less snagging risk', 'Consistent kerb appeal'] },
  ]
  return (
    <section className="py-16 bg-slate-950/40">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Use Cases</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
              <div className="text-white font-medium">{c.title}</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-300 list-disc pl-5">
                {c.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
