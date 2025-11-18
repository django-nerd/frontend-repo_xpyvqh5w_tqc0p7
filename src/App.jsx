import React, { useRef } from 'react'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Technical from './components/Technical'
import UseCases from './components/UseCases'
import Proof from './components/Proof'
import Pricing from './components/Pricing'
import Environment from './components/Environment'
import LeadForms from './components/LeadForms'
import Footer from './components/Footer'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ''
  const formsRef = useRef(null)

  const scrollToForms = () => {
    formsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Hero onPrimaryCta={scrollToForms} onSecondaryCta={scrollToForms} />
      <ValueProp />
      <Technical />
      <UseCases />
      <Proof />
      <Pricing onOrder={scrollToForms} onQuote={scrollToForms} />
      <Environment />
      <div ref={formsRef}>
        <LeadForms backendUrl={backendUrl} />
      </div>
      <Footer />
      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Verdure Mulch Glue',
        'category': 'Mulch glue / soil binder / landscape adhesive',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'GBP',
          'price': '28.00',
          'availability': 'https://schema.org/InStock'
        },
        'brand': 'Verdure'
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Verdure',
        'areaServed': 'Local Region',
        'telephone': '+44 7000 000000',
        'url': window.location.origin
      }) }} />
    </div>
  )
}

export default App
