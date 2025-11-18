import React from 'react'

const Technical = () => {
  const items = [
    { title: 'Prevents mulch displacement', desc: 'Creates a durable matrix that locks bark, chips, and straw in place.' },
    { title: 'Reduces maintenance costs', desc: 'Fewer site revisits after wind or heavy rain—less rework, lower labour.' },
    { title: 'Weather-resistant bonding', desc: 'Holds through rain, irrigation, and moderate foot traffic.' },
    { title: 'Safe for plants and soil', desc: 'Non-toxic composition with minimal runoff impact.' },
    { title: 'Longer-lasting adhesion', desc: 'Optimised polymer blend outperforms typical trade glues.' },
  ]
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">What Verdure Does</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
              <div className="text-white font-medium">{i.title}</div>
              <p className="text-slate-300 text-sm mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technical
