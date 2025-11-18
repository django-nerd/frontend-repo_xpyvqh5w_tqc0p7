import React from 'react'

const ValueProp = () => {
  return (
    <section className="py-14 md:py-20 bg-slate-950/40">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-700 p-6 bg-slate-900/60">
            <div className="text-slate-400 text-sm">Amazon price</div>
            <div className="text-3xl font-semibold text-white">£34</div>
          </div>
          <div className="rounded-xl border border-slate-700 p-6 bg-slate-900/60">
            <div className="text-slate-400 text-sm">Our price</div>
            <div className="text-3xl font-semibold text-sky-400">£28</div>
          </div>
          <div className="rounded-xl border border-slate-700 p-6 bg-slate-900/60">
            <div className="text-slate-400 text-sm">Local delivery</div>
            <div className="text-3xl font-semibold text-white">1–2 days</div>
          </div>
        </div>
        <p className="mt-6 text-slate-300 text-center">
          Stop overpaying for imported or slow-delivery mulch glue.
        </p>
      </div>
    </section>
  )
}

export default ValueProp
