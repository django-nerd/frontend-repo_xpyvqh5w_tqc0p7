import React, { useState } from 'react'

const Input = ({ label, ...props }) => (
  <label className="block text-sm">
    <span className="text-slate-300">{label}</span>
    <input {...props} className="mt-1 w-full rounded-md bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
  </label>
)

const Textarea = ({ label, ...props }) => (
  <label className="block text-sm">
    <span className="text-slate-300">{label}</span>
    <textarea {...props} className="mt-1 w-full rounded-md bg-slate-900 border border-slate-700 text-white px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-sky-500" />
  </label>
)

const LeadForms = ({ backendUrl }) => {
  const [tradeStatus, setTradeStatus] = useState(null)
  const [quoteStatus, setQuoteStatus] = useState(null)

  const submit = async (path, data, setter) => {
    setter('Submitting...')
    try {
      const res = await fetch(`${backendUrl}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      setter(json.status === 'ok' ? 'Received. We will contact you shortly.' : 'Error, please try again.')
    } catch (e) {
      setter('Error, please try again.')
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/447000000000?text=Order%20Verdure%20Mulch%20Glue', '_blank')
  }

  return (
    <section className="py-16 bg-slate-950/40">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Open a Trade Account / Get a Custom Quote</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="text-white font-medium">Open a Trade Account</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Company Name" id="t-company" />
              <Input label="Contact Name" id="t-contact" />
              <Input label="Email" id="t-email" type="email" />
              <Input label="Phone" id="t-phone" />
              <Input label="Company Size" id="t-size" placeholder="e.g., 6-20" />
              <Input label="Monthly Volume (L)" id="t-volume" type="number" />
              <Textarea label="Notes" id="t-notes" className="sm:col-span-2" />
            </div>
            <button onClick={() => submit('/api/trade-account', {
              company_name: document.getElementById('t-company').value,
              contact_name: document.getElementById('t-contact').value,
              email: document.getElementById('t-email').value,
              phone: document.getElementById('t-phone').value,
              company_size: document.getElementById('t-size').value || undefined,
              monthly_volume_estimate_l: parseInt(document.getElementById('t-volume').value) || undefined,
              notes: document.getElementById('t-notes').value || undefined
            }, setTradeStatus)} className="mt-4 inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition">Submit</button>
            {tradeStatus && <div className="mt-3 text-slate-300 text-sm">{tradeStatus}</div>}
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="text-white font-medium">Get a Custom Quote</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Company Name" id="q-company" />
              <Input label="Contact Name" id="q-contact" />
              <Input label="Email" id="q-email" type="email" />
              <Input label="Phone" id="q-phone" />
              <Input label="Quantity (bottles)" id="q-qty" type="number" />
              <Input label="Delivery Postcode" id="q-postcode" />
              <Input label="Need by (days)" id="q-days" type="number" />
              <Textarea label="Notes" id="q-notes" className="sm:col-span-2" />
            </div>
            <button onClick={() => submit('/api/quote', {
              company_name: document.getElementById('q-company').value,
              contact_name: document.getElementById('q-contact').value,
              email: document.getElementById('q-email').value,
              phone: document.getElementById('q-phone').value || undefined,
              quantity_bottles: parseInt(document.getElementById('q-qty').value || '1'),
              delivery_postcode: document.getElementById('q-postcode').value || undefined,
              need_by_days: parseInt(document.getElementById('q-days').value) || undefined,
              notes: document.getElementById('q-notes').value || undefined
            }, setQuoteStatus)} className="mt-4 inline-flex justify-center items-center rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition">Request Quote</button>
            {quoteStatus && <div className="mt-3 text-slate-300 text-sm">{quoteStatus}</div>}

            <button onClick={handleWhatsApp} className="mt-4 inline-flex justify-center items-center rounded-lg border border-slate-600 hover:border-slate-500 text-white px-5 py-3 transition">WhatsApp Direct Order</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForms
