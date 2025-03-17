export const privacyPolicyContent = (
  <div className="space-y-6 text-gray-600">
    <h3 className="text-xl font-semibold text-gray-900">Privacy Policy</h3>
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    
    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">1. Information We Collect</h4>
      <p>We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Name and contact information</li>
        <li>Account credentials</li>
        <li>Payment information</li>
        <li>Communication preferences</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h4>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide and maintain our services</li>
        <li>Process your transactions</li>
        <li>Send you technical notices and support messages</li>
        <li>Communicate with you about products, services, and events</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">3. Information Sharing</h4>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Service providers who assist in our operations</li>
        <li>Professional advisors</li>
        <li>Law enforcement when required by law</li>
      </ul>
    </section>
  </div>
);

export const termsOfServiceContent = (
  <div className="space-y-6 text-gray-600">
    <h3 className="text-xl font-semibold text-gray-900">Terms of Service</h3>
    <p>Last updated: {new Date().toLocaleDateString()}</p>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">1. Acceptance of Terms</h4>
      <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">2. Use License</h4>
      <p>We grant you a limited, non-exclusive, non-transferable license to use our services subject to these terms.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>You may not modify or copy our software</li>
        <li>You may not use the service for illegal purposes</li>
        <li>You may not transmit harmful code or content</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">3. Disclaimer</h4>
      <p>Our services are provided "as is" without warranties of any kind, either express or implied.</p>
    </section>
  </div>
);

export const cookiePolicyContent = (
  <div className="space-y-6 text-gray-600">
    <h3 className="text-xl font-semibold text-gray-900">Cookie Policy</h3>
    <p>Last updated: {new Date().toLocaleDateString()}</p>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">1. What Are Cookies</h4>
      <p>Cookies are small text files stored on your device that help us provide and improve our services.</p>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">2. How We Use Cookies</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Essential cookies for site functionality</li>
        <li>Analytics cookies to understand usage</li>
        <li>Preference cookies to remember your settings</li>
        <li>Marketing cookies for relevant advertisements</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800">3. Managing Cookies</h4>
      <p>You can control cookies through your browser settings. Note that disabling certain cookies may limit site functionality.</p>
    </section>
  </div>
);