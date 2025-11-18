import React from 'react'

const tiers = [
  { label: '1–5 bottles', price: '£28', note: 'Retail price' },
  { label: '6–24 bottles', price: '£26', note: 'Save 7%' },
  { label: '25–99 bottles', price: '£24', note: 'Save 14%' },
  { label: '100+ bottles', price: 'Custom', note: 'Enterprise pricing' },
]

const Pricing = ({ onOrder, onQuote }) => {
  return (
    <section className="py-16 bg-slate-950/40">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Pricing & Trade Options</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {tiers.map(t => (
            <div key={t.label} className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
              <div className="text-white font-medium">{t.label}</div>
              <div className="text-3xl font-semibold text-sky-400 mt-2">{t.price}</div>
              <div className="text-slate-400 text-sm">{t.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button onClick={onOrder} className="inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition">Order Now</button>
          <button onClick={onQuote} className="inline-flex justify-center items-center rounded-lg border border-slate-600 hover:border-slate-500 text-white px-5 py-3 transition">Get a Custom Quote</button>
          <div className="text-slate-400 text-sm sm:ml-auto">Free local delivery over £250</div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
