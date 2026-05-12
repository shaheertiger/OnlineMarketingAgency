import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | OnlineMarketingAgency.ca',
  description: 'Privacy policy for OnlineMarketingAgency.ca.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-8">Last updated: May 2026</p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
              <p>
                When you contact us through our website forms, we collect the information you
                voluntarily provide: your name, business name, email address, phone number, website
                URL, and details about your marketing needs. We use this information solely to
                respond to your inquiry and provide the services you requested.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to your inquiry, prepare your free
                marketing audit, and communicate with you about our services. We do not sell, rent,
                or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Analytics And Tracking</h2>
              <p>
                Our website uses Google Analytics to understand how visitors interact with our
                content. This data is aggregated and anonymous. We may also use conversion tracking
                to measure the effectiveness of our own advertising campaigns.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Cookies</h2>
              <p>
                Our website uses cookies for analytics and to improve your browsing experience.
                You can disable cookies in your browser settings, though this may affect some
                website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or how we handle your information,
                please contact us at{' '}
                <a
                  href="mailto:info@onlinemarketingagency.ca"
                  className="text-blue-600 hover:underline"
                >
                  info@onlinemarketingagency.ca
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
