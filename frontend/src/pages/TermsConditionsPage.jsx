import React from "react";
import Navbar from "../components/Navbar";

function TermsConditionsPage() {
  return (
    <div>
      <Navbar />
      <div className="container bg-white text-black mt-8 px-4 max-w-7xl mx-auto py-8">
        <p className="mb-4">Effective Date: 2024-10-01</p>
        <div className="w-full flex">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">
            Terms & Conditions
          </h1>
        </div>
        <br />
        <p className="mb-4 text-base">
          By accessing and using ReferralWala, you agree to comply with and be
          bound by the following Terms & Conditions. These terms outline your
          rights, responsibilities, and obligations when using our platform. Our
          aim is to ensure a secure and rewarding experience for all users.
          Please read these terms carefully before using our services.
        </p>
        <br />
        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">1. Acceptance of Terms</h2>
          <br />
          <p className="text-base">
            By using ReferralWala, you accept and agree to abide by these Terms
            & Conditions. If you do not agree with any part of these terms, you
            must discontinue use of the platform immediately.
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">2. User Responsibilities</h2>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                <strong>Account Creation:</strong> To access certain features of
                ReferralWala, you must create an account. You are responsible
                for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Accuracy of Information:</strong> You agree to provide
                accurate, current, and complete information when posting
                referrals, updating your profile, or using any other services on
                our platform.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Acceptable Use:</strong> You agree to use ReferralWala
                only for lawful purposes and in accordance with our guidelines.
                You must not engage in any activities that could harm the
                platform or interfere with other users’ experience.
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">3. Referrals and Rewards</h2>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                <strong>Posting Referrals:</strong> When you post a referral,
                you must ensure that the information is truthful and complies
                with our guidelines. Misleading or fraudulent referrals are
                strictly prohibited.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Earning Rewards:</strong> Rewards are earned based on
                the successful completion of referral activities as outlined in
                our referral program. Specific details about reward eligibility,
                tracking, and payout will be provided on our Rewards page.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>Referral Tracking:</strong> We will make reasonable
                efforts to track and process referrals accurately, but we are
                not liable for any errors or issues beyond our control.
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">4. Intellectual Property</h2>
          <br />
          <ul>
            <li className="list-disc">
              <p className="text-base">
                <strong>Ownership:</strong> All content on ReferralWala,
                including text, graphics, logos, and software, is the property
                of ReferralWala or its licensors and is protected by
                intellectual property laws.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-base">
                <strong>License:</strong> We grant you a limited, non-exclusive,
                and non-transferable license to access and use the platform for
                personal and lawful purposes, subject to these Terms &
                Conditions.
              </p>
            </li>
          </ul>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">
            5. Privacy and Data Protection
          </h2>
          <br />
          <p className="text-base">
            Your privacy is important to us. Please refer to our Privacy Policy
            to understand how we collect, use, and protect your personal
            information.
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">
            6. Limitations of Liability
          </h2>
          <br />
          <p className="text-base">
            ReferralWala is not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of the platform or any
            content posted by users. We provide the platform “as is” and do not
            guarantee that it will be error-free or uninterrupted.
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">7. Termination</h2>
          <br />
          <p className="text-base">
            We reserve the right to suspend or terminate your access to
            ReferralWala if you violate these Terms & Conditions or for any
            reason at our discretion. Upon termination, you must cease all use
            of the platform and destroy any materials obtained from it.
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">8. Changes to Terms</h2>
          <br />
          <p className="text-base">
            We may update these Terms & Conditions from time to time to reflect
            changes in our practices or legal requirements. Any modifications
            will be posted on this page with an updated effective date.
            Continued use of the platform constitutes acceptance of the revised
            terms.
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">9. Governing Law</h2>
          <br />
          <p className="text-base">
            These Terms & Conditions are governed by and construed in accordance
            with the laws of [Jurisdiction]. Any disputes arising from these
            terms or your use of the platform will be subject to the exclusive
            jurisdiction of the courts in [Jurisdiction].
          </p>
        </div>

        <div className="pb-5">
          <h2 className="font-bold text-blue-600 ">10. Contact Us</h2>
          <br />
          <p className="text-base">
            If you have any questions or concerns about these Terms &
            Conditions, please contact us at:
          </p>
          <br />
          <ul>
            <li className="list-disc text-base">
              Email: support@referralwala.com
            </li>
            <li className="list-disc text-base">Phone: +[Contact Number]</li>
            <li className="list-disc text-base">Address: [Company Address]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TermsConditionsPage;
