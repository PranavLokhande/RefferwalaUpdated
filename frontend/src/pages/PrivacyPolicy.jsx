import React from "react";
import Navbar from "../components/Navbar";

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="container bg-white text-black mt-8 px-4 max-w-7xl mx-auto py-8">
        <p className="mb-4">Effective Date: 2024-10-01</p>
        <div className="w-full flex">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">
            Privacy Policy{" "}
          </h1>
        </div>
        <br />
        <p className="mb-4 text-base">
          At ReferralWala, your privacy is our top priority. We are committed to
          safeguarding your personal data and ensuring that it is used
          responsibly. This Privacy Policy explains how we collect, use, store,
          and protect your information when you visit and interact with our
          platform. We only use your data to enhance your experience and never
          share or sell it without your explicit consent.
        </p>
        <br />
        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">
            1. Information We Collect
          </h2>
          <br />
          <p className="text-base">
            We collect several types of information from and about users of our
            platform, including:
          </p>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                Personal Information: When you sign up or use our services, we
                may collect your name, email address, phone number, and other
                contact details.
              </p>
            </li>

            <li className="list-disc">
              <p className="text-base">
                Referral Information: Details about the referrals you post,
                including the names and contact information of individuals or
                businesses you refer.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                Transaction Information: Data related to any transactions made
                through the platform, such as reward tracking and payouts.
              </p>
            </li>

            <li className="list-disc">
              <p className="text-base">
                Technical Data: This includes your IP address, browser type,
                operating system, and other data collected automatically when
                you access our website (via cookies and similar technologies).
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">
            2. How We Use Your Information
          </h2>
          <br />
          <p className="text-base">The data we collect is used to:</p>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                Provide Services: Facilitate the referral process, track
                progress, and deliver rewards.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                Improve User Experience: Understand how users interact with our
                platform and enhance its functionality.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                Communicate with You: Send notifications about your account,
                referrals, rewards, and other important updates.
              </p>
            </li>

            <li className="list-disc">
              <p className="text-base">
                Promotional Purposes: If you opt-in, we may send you promotional
                materials about new features or offers on the platform.
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">3. Data Sharing </h2>
          <br />
          <p className="text-base">
            We do not sell or rent your personal data to third parties. However,
            we may share your data in the following situations:
          </p>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                Referral Partners: When you post a referral, we may share
                relevant information with the referred business or individual to
                facilitate the process.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                Service Providers: We work with third-party providers (e.g.,
                payment processors, cloud services) who assist us in operating
                the platform. These providers only use your data as needed to
                provide services to ReferralWala.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                Legal Obligations: We may disclose your information if required
                by law or in response to legal processes such as subpoenas or
                government requests.
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600">4. Data Security</h2>
          <br />
          <p className="text-base">
            We take appropriate technical and organizational measures to protect
            your personal data from unauthorized access, alteration, disclosure,
            or destruction. While we strive to ensure the security of your
            information, no method of transmission over the internet is 100%
            secure. We encourage you to take precautions, such as using a strong
            password and not sharing account details.
          </p>
        </div>

        {/* Section 5 */}
        <div className="pb-5">
          <h2 className="font-bold text-blue-600">5. Data Retention</h2>
          <br />
          <p className="text-base">
            We retain your personal data for as long as necessary to provide our
            services and comply with legal obligations. You can request deletion
            of your data by contacting us at [Contact Information], and we will
            take reasonable steps to delete your information unless it is
            required to be retained for legal purposes.
          </p>
        </div>

        {/* Section 6 */}
        <div className="pb-5">
          <h2 className="font-bold text-blue-600">6. Your Rights</h2>
          <br />
          <p className="text-base">
            Depending on your location and applicable laws, you may have the
            following rights regarding your personal data:
          </p>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Correction:</strong> Request to correct any inaccurate
                or incomplete data.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Deletion:</strong> Request deletion of your personal
                information.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Restriction:</strong> Request to restrict the processing
                of your data.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Data Portability:</strong> Request a copy of your data
                in a structured, commonly used format.
              </p>
            </li>
          </ul>
          <p className="text-base mt-2">
            To exercise any of these rights, please contact us at [Contact
            Information].
          </p>
        </div>

        {/* Section 7 */}
        <div className="pb-5">
          <h2 className="font-bold text-blue-600">
            7. Cookies and Tracking Technologies
          </h2>
          <br />
          <p className="text-base">
            We use cookies and similar technologies to collect information about
            your interactions with our website. Cookies help us analyze website
            traffic, improve functionality, and provide personalized content.
            You can control cookie settings through your browser, but disabling
            cookies may affect the performance of our website.
          </p>
        </div>

        {/* Section 8 */}
        <div className="pb-5">
          <h2 className="font-bold text-blue-600">8. Changes to This Policy</h2>
          <br />
          <p className="text-base">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, regulatory, or operational
            reasons. If we make any material changes, we will notify you by
            email or through a notice on our website. Please review this policy
            periodically for any updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
