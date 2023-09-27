import { Container } from '@/components/Container'

export function Privacy() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl ">
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            Privacy Policy
          </h2>
          <p>Effective Date: 2023-09-09</p>
          <h3 className="text-xl font-medium" id="1-introduction">
            1. Introduction
          </h3>
          <p>
            Welcome to ktsaas.io. At ktsaas.io,
            we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains
            how we collect, use, and protect your data when you visit our
            website.
          </p>
          <h3 className="text-xl font-medium" id="2-data-collected">
            2. Data Collected
          </h3>
          <p>We collect the following types of user data:</p>
          <p>
            Email Addresses: We collect user-provided email addresses for
            account creation.
          </p>
          <p>
            Analytics Data: We use Google Analytics to collect data about your
            visit to our website, such as page views, duration of visit, and the
            pages you viewed.
          </p>
          <h3 className="text-xl font-medium" id="3-data-collection-methods">
            3. Data Collection Methods
          </h3>
          <p>
            User Input: We collect email addresses when users provide them
            during the payment process.
          </p>
          <p>
            Cookies: We use standard cookies for Google Analytics, which collect
            information about your visit to our website.
          </p>
          <h3 className="text-xl font-medium" id="4-purpose-of-data-collection">
            4. Purpose of Data Collection
          </h3>
          <p>
            Account Creation: We collect email addresses to create user accounts
            on our platform.
          </p>
          <p>
            Analytics: We use Google Analytics to analyze website traffic and
            improve our marketing efforts.
          </p>
          <h3 className="text-xl font-medium" id="5-third-party-sharing">
            5. Third-Party Sharing
          </h3>
          <p>We do not share user data with third parties.</p>
          <h3 className="text-xl font-medium" id="6-data-security">
            6. Data Security
          </h3>
          <p>
            Access to user data is limited to employees who require access for
            their job. We employ industry-standard security measures to protect
            your data.
          </p>
          <h3 className="text-xl font-medium" id="7-data-retention">
            7. Data Retention
          </h3>
          <p>
            Analytics data is kept according to Google Analytics&#39; standard
            terms. Email addresses are retained for the duration of the
            purchased license.
          </p>
          <h3 className="text-xl font-medium" id="8-user-rights">
            8. User Rights
          </h3>
          <p>
            Access, Modification, and Deletion: As email addresses are required
            for usage, there is no option for users to access, modify, or delete
            this data. Users can disable analytics data collection in their
            browser settings using ad blockers.
          </p>
          <h3 className="text-xl font-medium" id="9-cookies">
            9. Cookies
          </h3>
          <p>
            We use cookies only for standard Google Analytics purposes. You can
            manage or disable cookies through your browser settings.
          </p>
          <h3 className="text-xl font-medium" id="10-compliance">
            10. Compliance
          </h3>
          <p>
            For specific requests related to data protection regulations, such
            as GDPR or CCPA, please email compliance@ktsaas.io.
          </p>
          <h3 className="text-xl font-medium" id="11-changes-to-privacy-policy">
            11. Changes to Privacy Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Any updates will be posted on this page.
          </p>
        </div>
      </Container>
    </section>
  )
}
