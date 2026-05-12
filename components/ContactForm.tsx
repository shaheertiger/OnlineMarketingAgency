'use client'

import { useState } from 'react'

const services = [
  'Google Ads Management',
  'SEO Services',
  'Local SEO Services',
  'Google Business Profile Optimization',
  'Website Design',
  'Facebook / Instagram Ads',
  'Lead Generation',
  'Full Marketing Package',
  'Not sure yet',
]

const budgets = [
  'Under $500/month',
  '$500 – $1,000/month',
  '$1,000 – $2,500/month',
  '$2,500 – $5,000/month',
  '$5,000+/month',
  'One-time project',
]

interface FormState {
  name: string
  businessName: string
  website: string
  phone: string
  email: string
  service: string
  budget: string
  message: string
}

const initial: FormState = {
  name: '',
  businessName: '',
  website: '',
  phone: '',
  email: '',
  service: '',
  budget: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formsubmit.co/ajax/shaheertiger1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Marketing Audit Request – ${form.businessName}`,
          Name: form.name,
          'Business Name': form.businessName,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          Website: form.website || 'Not provided',
          'Service Needed': form.service || 'Not specified',
          'Monthly Budget': form.budget || 'Not specified',
          Message: form.message || 'No message',
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please email us directly at info@onlinemarketingagency.ca')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background: 'rgba(200,255,0,0.06)',
          border: '1px solid rgba(200,255,0,0.2)',
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(200,255,0,0.12)', border: '1px solid rgba(200,255,0,0.25)' }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#0F0F12' }}>Audit Request Received</h3>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          We will review your business and reach out within 1 business day with your free marketing audit findings.
        </p>
      </div>
    )
  }

  const inputStyle = {
    background: 'white',
    border: '1.5px solid rgba(0,0,0,0.12)',
    color: '#0F0F12',
    outline: 'none',
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:ring-0 light-input'

  const labelStyle = { color: '#374151' }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <style>{`
        .light-input::placeholder { color: #9CA3AF; }
        .light-input:focus { border-color: rgba(29,78,216,0.4) !important; box-shadow: 0 0 0 3px rgba(29,78,216,0.08); }
        .light-input option { background: white; color: #0F0F12; }
      `}</style>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Your Name <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="First and last name"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Business Name <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Your business name"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Email Address <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(416) 000-0000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Website URL
        </label>
        <input
          id="website"
          name="website"
          type="url"
          value={form.website}
          onChange={handleChange}
          placeholder="https://yourbusiness.com"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Monthly Marketing Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select a budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Tell Us About Your Business
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="What are your main marketing goals? What's not working right now?"
          className={inputClass}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
        style={{ background: 'rgba(29,78,216,0.05)', border: '1px solid rgba(29,78,216,0.12)' }}
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="#1D4ED8">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-xs" style={{ color: '#374151' }}>
          We typically respond within <strong>1 business day</strong> with your full audit findings.
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Sending...' : 'Get My Free Marketing Audit →'}
      </button>

      <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
        No spam. No contract. Trusted by 50+ Canadian local businesses.
      </p>
    </form>
  )
}
