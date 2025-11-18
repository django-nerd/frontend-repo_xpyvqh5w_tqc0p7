import React from 'react'

const Hero = ({ onPrimaryCta, onSecondaryCta }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,#1f2937_0%,transparent_60%),radial-gradient(800px_400px_at_10%_20%,#0ea5e9_0%,transparent_40%)]" />
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Verdure Mulch Glue
              <span className="block text-sky-400">Reduce rework. Lock mulch. Cut costs.</span>
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              B2B-grade landscape adhesive engineered for contractors. More effective than standard blends, locally supplied for 1–2 day delivery, and priced to beat Amazon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimaryCta} className="inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition">
                Order Verdure – £28 per bottle (Bulk Pricing Available)
              </button>
              <button onClick={onSecondaryCta} className="inline-flex justify-center items-center rounded-lg border border-slate-600 hover:border-slate-500 text-white px-5 py-3 transition">
                Request Trade Account
              </button>
            </div>
            <div className="mt-6 text-slate-400 text-sm">
              Local supplier • Faster delivery • Environmentally responsible formula
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-700 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1626266067318-8ef6e7c128fb?q=80&w=1600&auto=format&fit=crop"
                alt="Mulch application"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3 text-slate-200 text-sm">
              Real-world application: stabilised bark chips after heavy rain
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
