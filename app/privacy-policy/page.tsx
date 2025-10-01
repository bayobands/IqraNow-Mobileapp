// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Effective Date: August 11, 2025</p>

      <p className="mb-6">
        IQRA-NOW (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains
        how we collect, use, and protect your information when you use our mobile
        application (“App”).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-3">We may collect the following information:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Information you provide directly:</strong> Your name, email address, or
          account information (if you create an account or contact us).
        </li>
        <li>
          <strong>Automatically collected information:</strong> Device information (model,
          operating system, unique device identifiers), app usage data, and approximate
          location (if location features are used).
        </li>
      </ul>
      <p className="mb-6">
        We do not collect sensitive personal information unless you voluntarily provide it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Provide and improve the App’s functionality</li>
        <li>Respond to inquiries or support requests</li>
        <li>Personalize your experience</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Share Your Information</h2>
      <p className="mb-3">We do not sell your personal information. We may share it only with:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Service providers that help operate our App</li>
        <li>Law enforcement or authorities when required by law</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
      <p className="mb-6">
        Our App may use third-party services (e.g., Stripe, Clerk) that collect information
        as described in their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Retention</h2>
      <p className="mb-6">
        We retain your information only as long as necessary for the purposes described in
        this policy or as required by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Security</h2>
      <p className="mb-6">
        We take reasonable measures to protect your information. However, no method of
        transmission or storage is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-3">Depending on your location, you may have rights to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Access, correct, or delete your information</li>
        <li>Withdraw consent to data processing</li>
        <li>File a complaint with a privacy authority</li>
      </ul>
      <p className="mb-6">
        To exercise your rights, contact us at the email provided below.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Children’s Privacy</h2>
      <p className="mb-6">
        Our App is designed for children and complies with applicable privacy laws,
        including the U.S. Children’s Online Privacy Protection Act (“COPPA”).
        We do not collect personal information from children without verifiable
        parental consent.
      </p>
      <p className="mb-6">
        Parents or guardians can review, request deletion of, or refuse further
        collection of their child’s personal information by contacting us at:
        contact@iqranow.org.
      </p>
      <p className="mb-6">
        Any data collected is limited to what is reasonably necessary to use the App’s
        features and is used solely for educational purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be posted within
        the App and updated with a new “Effective Date.”
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p>
        IQRA-NOW  
        <br />
        Email: iqranow11@gmail.com
      </p>
      <p className="mt-8">
  <a
    href="/"
    className="inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
  >
    ← Return to Home
  </a>
</p>

    </main>
  );
}
