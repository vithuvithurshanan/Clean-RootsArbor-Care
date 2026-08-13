import { useEffect } from 'react'

export default function LegalModal({ isOpen, initialTab = 'terms', onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          ✕
        </button>

        <div className="modal-header">
          <h2>{initialTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h2>
          <p className="modal-meta">
            Effective Date: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026
          </p>
        </div>

        <div className="modal-body">
          {initialTab === 'terms' ? (
            <div className="legal-content">
              <p className="lead">
                Welcome to Clean Roots Arbor Care. By accessing this website or using our services,
                you agree to be bound by these Terms and Conditions. If you do not agree with any part
                of these terms, please do not use our website or services.
              </p>

              <h3>1. Business Identity</h3>
              <p>
                These Terms and Conditions govern your use of the services provided by Clean Roots
                Arbor Care, located at 1260 Clinton St, Buffalo, NY 14206. Contact: 315-856-3323.
              </p>

              <h3>2. Age Requirement (18+)</h3>
              <p>
                By using this website or enrolling in our services, including SMS messaging, you
                confirm that you are at least 18 years of age. Our SMS program is not directed to
                individuals under 18.
              </p>

              <h3>3. Terminology</h3>
              <p>
                "Client," "You," and "Your" refers to the user of this website. "The Company," "We,"
                "Our," and "Us" refers to Clean Roots Arbor Care.
              </p>

              <h3>4. SMS Messaging Terms of Service</h3>
              <h4>4a. Program Description &amp; Message Types</h4>
              <p>
                By providing your phone number and checking the SMS consent checkbox on our contact
                forms, you agree to receive recurring automated text messages from Clean Roots Arbor
                Care. Messages may include:
              </p>
              <ul>
                <li>Free estimate confirmations and scheduling notifications</li>
                <li>Appointment reminders and project status updates</li>
                <li>Customer support and service follow-up communications</li>
                <li>Promotional offers and seasonal announcements related to our tree services</li>
              </ul>

              <h4>4b. Message Frequency</h4>
              <p>
                Message frequency varies based on your service activity and interactions with us. You
                may receive up to 4–8 messages per month. Frequency may increase during active
                service periods.
              </p>

              <h4>4c. Message &amp; Data Rates</h4>
              <p>
                Message and data rates may apply for any messages sent to you from us and to us from
                you. Charges are determined by your mobile carrier and your individual service plan.
                Clean Roots Arbor Care is not responsible for any carrier charges.
              </p>

              <h4>4d. How to Opt Out (STOP)</h4>
              <p>
                You can opt out of receiving SMS messages at any time by replying STOP to any message
                we send. After opting out, you will receive a one-time confirmation message and will no
                longer receive SMS messages from us unless you re-enroll.
              </p>

              <h4>4e. How to Get Help (HELP)</h4>
              <p>
                For help with our SMS program, reply HELP to any message or contact us directly at
                Phone: 315-856-3323.
              </p>

              <h4>4f. Carrier Liability Disclaimer</h4>
              <p>
                Mobile carriers are not liable for delayed or undelivered messages. Clean Roots Arbor
                Care cannot guarantee delivery of SMS messages. Delivery of information through SMS
                may be subject to your mobile carrier's capability and coverage area.
              </p>

              <h4>4g. Supported Carriers</h4>
              <p>
                Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
                Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
              </p>

              <h3>5. Cookies</h3>
              <p>
                We use cookies in accordance with our Privacy Policy to improve user experience and
                website functionality.
              </p>

              <h3>6. Intellectual Property &amp; License</h3>
              <p>
                Unless otherwise stated, Clean Roots Arbor Care owns the intellectual property rights
                for all content on this website. You may not copy, reproduce, republish, sell, or
                redistribute any material without prior written permission.
              </p>

              <h3>7. Comments &amp; User Content</h3>
              <p>
                Clean Roots Arbor Care reserves the right to monitor and remove any comments or
                user-generated content on our platforms that are inappropriate, offensive, or violate
                these terms.
              </p>

              <h3>8. Content Liability</h3>
              <p>
                We are not responsible for content that appears on external websites linking to us. You
                agree to defend and protect Clean Roots Arbor Care against any claims arising from your
                website or digital properties.
              </p>

              <h3>9. Disclaimer</h3>
              <p>
                To the maximum extent permitted by applicable law, Clean Roots Arbor Care excludes all
                warranties, representations, and conditions relating to our website and services. We
                are not liable for any loss or damage (including, without limitation, damage for loss of
                business, profits, or revenue) arising from the use of our website or services.
              </p>

              <h3>10. Changes to These Terms</h3>
              <p>
                We reserve the right to update these Terms and Conditions at any time. Changes will be
                posted on this page with a revised "Last Updated" date. Continued use of our website or
                services constitutes acceptance of the updated terms.
              </p>

              <h3>11. Contact Information</h3>
              <p>
                For questions about these Terms and Conditions, please contact us at 315-856-3323 or at
                1260 Clinton St, Buffalo, NY 14206.
              </p>
            </div>
          ) : (
            <div className="legal-content">
              <p className="lead">
                Clean Roots Arbor Care ("we," "our," or "us") is committed to protecting your privacy and
                personal information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your data in compliance with applicable U.S. data protection laws, including
                the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation
                (GDPR) where applicable.
              </p>

              <h3>1. Information We Collect</h3>
              <p>
                We may collect the following categories of personal information when you contact us,
                request a quote, submit a web form, or use our services:
              </p>
              <ul>
                <li>Full name</li>
                <li>Mailing or service address</li>
                <li>Email address</li>
                <li>Mobile phone number</li>
                <li>Service request details and project descriptions</li>
                <li>Communication history and preferences</li>
              </ul>

              <h3>2. SMS / Text Message Communications</h3>
              <h4>2a. How We Collect Your Mobile Number</h4>
              <p>
                We collect your mobile phone number when you voluntarily provide it through our website
                contact forms, phone calls, or other direct communication channels. By providing your
                mobile number and checking the SMS consent checkbox on our forms, you expressly
                consent to receive SMS (text message) communications from Clean Roots Arbor Care.
              </p>

              <h4>2b. Types of Messages We Send</h4>
              <p>
                By opting in, you may receive recurring automated text messages from Clean Roots Arbor
                Care, including:
              </p>
              <ul>
                <li>Free estimate confirmations and appointment reminders</li>
                <li>Project status updates and scheduling notifications</li>
                <li>Customer support and follow-up communications</li>
                <li>Promotional offers and seasonal announcements related to our tree services</li>
              </ul>

              <h4>2c. Message Frequency</h4>
              <p>
                Message frequency varies based on your interactions with us, ongoing service needs, and
                active promotions. You may receive up to 4–8 messages per month depending on your
                service activity.
              </p>

              <h4>2d. Message &amp; Data Rates</h4>
              <p>
                Message and data rates may apply. Charges are determined by your mobile carrier and
                your individual service plan. Clean Roots Arbor Care is not responsible for any
                charges incurred from your mobile carrier.
              </p>

              <h4>2e. How to Opt Out (STOP)</h4>
              <p>
                You may cancel SMS messages at any time by replying STOP to any text message you
                receive from us. After opting out, you will receive one final confirmation message and
                will no longer receive SMS communications from Clean Roots Arbor Care unless you
                re-enroll.
              </p>

              <h4>2f. How to Get Help (HELP)</h4>
              <p>
                For help with our SMS program, reply HELP to any message, or contact us directly at
                Phone: 315-856-3323.
              </p>

              <h3>3. Mobile Information &amp; SMS Consent — No Third-Party Sharing</h3>
              <p>
                <strong>
                  No mobile information (including your mobile phone number and SMS opt-in consent
                  data) will be shared with third parties or affiliates for marketing or promotional
                  purposes.
                </strong>
              </p>
              <p>
                All other categories of personal data exclude text messaging originator opt-in data and
                consent; this information will not be shared with any third parties under any
                circumstances.
              </p>

              <h3>4. How We Use Your Information</h3>
              <p>We use the personal information we collect to:</p>
              <ul>
                <li>Provide and manage tree care and arbor services</li>
                <li>Respond to inquiries and service requests</li>
                <li>Schedule appointments and send reminders</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and service quality</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>

              <h3>5. Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar technologies to improve website functionality, analyze
                traffic, and enhance user experience. Cookies do not store sensitive personal
                information. By continuing to use this website, you consent to our use of cookies in
                accordance with this policy.
              </p>

              <h3>6. Data Security</h3>
              <p>
                We implement reasonable administrative, technical, and physical security measures to
                protect your personal data against unauthorized access, disclosure, alteration, or
                destruction. However, no method of electronic transmission or storage is 100% secure.
              </p>

              <h3>7. Data Retention</h3>
              <p>
                We retain your personal information only for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy, or as required by applicable law. When your
                data is no longer needed, we securely delete or anonymize it.
              </p>

              <h3>8. Your Privacy Rights</h3>
              <p>
                Depending on your location, you may have the following rights regarding your personal
                data:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate personal data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data (including your
                  mobile number and SMS consent record)
                </li>
                <li>
                  <strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time
                </li>
                <li>
                  <strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from
                  marketing lists
                </li>
              </ul>
              <p>To exercise any of these rights, call 315-856-3323.</p>

              <h3>9. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy
                on this page with a revised "Last Updated" date. Continued use of our website or
                services after any changes constitutes your acceptance of the updated policy.
              </p>

              <h3>10. Contact Information</h3>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p>
                <strong>Phone:</strong> 315-856-3323
                <br />
                <strong>Address:</strong> 1260 Clinton St, Buffalo, NY 14206
              </p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn--primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
