import React from 'react'

const Environment = () => {
  const points = [
    'Non-toxic formula',
    'Minimal runoff impact',
    'Compliant with UK environmental standards',
    'Safer for pets, plants, and soil integrity'
  ]
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Environmental Advantage</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
          <ul className="space-y-2 text-slate-300">
            {points.map(p => (
              <li key={p} className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400" />
                {p}
              </li>
            ))}
          </ul>
          <div className="rounded-xl ring-1 ring-slate-700 bg-slate-900/60 p-6 text-slate-300 text-sm">
            We avoid vague claims. Verdure uses a contractor-grade adhesive system formulated for landscaping with low-toxicity components. Contact us for SDS and technical specification.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Environment
