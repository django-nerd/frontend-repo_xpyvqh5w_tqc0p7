import React, { useState } from 'react'

const Proof = () => {
  const [value, setValue] = useState(50)
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Proof</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-700 bg-slate-900 relative">
            <img src="https://images.unsplash.com/photo-1605791767308-46f38113f418?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWZvcmV8ZW58MHwwfHx8MTc2MzQ1ODI4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Before" className="w-full h-80 object-cover absolute inset-0"/>
            <div className="absolute inset-0 overflow-hidden" style={{clipPath: `inset(0 ${100 - value}% 0 0)`}}>
              <img src="https://images.unsplash.com/photo-1755442900348-923bd340acdd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZnRlcnxlbnwwfDB8fHwxNzYzNDU4Mjg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="After" className="w-full h-80 object-cover"/>
            </div>
            <input type="range" min="0" max="100" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} className="absolute inset-x-0 bottom-3 mx-6"/>
            <div className="absolute top-3 left-3 bg-slate-900/70 px-2 py-1 rounded text-xs text-slate-200">Before</div>
            <div className="absolute top-3 right-3 bg-slate-900/70 px-2 py-1 rounded text-xs text-slate-200">After</div>
          </div>
          <div className="space-y-4">
            <blockquote className="p-4 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200">
              “We cut maintenance visits by 30% across our retail parks with Verdure.” — Site Contracts Manager
            </blockquote>
            <blockquote className="p-4 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200">
              “Best adhesion we’ve used. Survived two storms with no reworks.” — Landscaping Director
            </blockquote>
            <div className="text-slate-300 text-sm">Trusted by leading landscaping teams across the region.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof
