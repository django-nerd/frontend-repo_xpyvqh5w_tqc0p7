import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <div className="text-white font-semibold">Verdure Mulch Glue</div>
          <div className="text-sm mt-2">Local delivery coverage: Greater Region • Typical lead time 1–2 working days</div>
        </div>
        <div>
          <div className="text-white font-semibold">Contact</div>
          <div className="text-sm mt-2">Email: sales@verdure.trade</div>
          <div className="text-sm">WhatsApp: +44 7000 000000</div>
        </div>
        <div>
          <div className="text-white font-semibold">Compliance</div>
          <ul className="text-sm mt-2 space-y-1">
            <li><a className="underline decoration-slate-600 hover:decoration-sky-500" href="#">SDS</a></li>
            <li><a className="underline decoration-slate-600 hover:decoration-sky-500" href="#">Technical Specification PDF</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Verdure. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
