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
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Request Received</h3>
        <p className="text-slate-600">
          We will review your business and reach out within 1 business day with your free marketing
          audit findings.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Business Name <span className="text-red-500">*</span>
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
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
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
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(416) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1.5">
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
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
            Monthly Marketing Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Tell Us About Your Business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="What are your main marketing goals? What challenges are you facing?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Get Free Marketing Audit'}
      </button>

      <p className="text-xs text-slate-400 text-center">
        No spam. We will review your business and reply within 1 business day.
      </p>
    </form>
  )
}
