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
          background: 'rgba(52, 211, 153, 0.08)',
          border: '1px solid rgba(52, 211, 153, 0.25)',
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)' }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#34D399' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#F8FAFC' }}>Audit Request Received</h3>
        <p style={{ color: '#64748B' }}>
          We will review your business and reach out within 1 business day with your free marketing
          audit findings.
        </p>
      </div>
    )
  }

  const inputStyle = {
    background: 'rgba(11, 17, 32, 0.8)',
    border: '1px solid rgba(51, 65, 85, 0.6)',
    color: '#E2E8F0',
    outline: 'none',
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:ring-0'

  const labelStyle = { color: '#64748B' }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <style>{`
        .dark-input::placeholder { color: #334155; }
        .dark-input:focus { border-color: rgba(96,165,250,0.4) !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .dark-input option { background: #0B1120; color: #E2E8F0; }
      `}</style>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Name <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`${inputClass} dark-input`}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Business Name <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Your business name"
            className={`${inputClass} dark-input`}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Email <span style={{ color: '#F87171' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.com"
            className={`${inputClass} dark-input`}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={labelStyle}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(416) 000-0000"
            className={`${inputClass} dark-input`}
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
          className={`${inputClass} dark-input`}
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
            className={`${inputClass} dark-input`}
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
            className={`${inputClass} dark-input`}
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
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="What are your main marketing goals? What challenges are you facing?"
          className={`${inputClass} dark-input`}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Sending...' : 'Get Free Marketing Audit'}
      </button>

      <p className="text-xs text-center" style={{ color: '#334155' }}>
        No spam. We will review your business and reply within 1 business day.
      </p>
    </form>
  )
}
