import React from "react";
import Title from "../common/title";
import Footer from "../common/Footer";

function TermsCondition() {
  const terms = [
    {
      termsTitle: "1. Definitions",
      conditions: [
        {
          condition: "We/Us: CIPROXIN LLC.",
        },
        {
          condition:
            "Shops: Digital Service Providers such as Spotify, YouTube, and Shazam.",
        },
        {
          condition: `Account Use: "Use" refers to the point at which you log into your account.`,
        },
        {
          condition:
            "Partners: This includes technical service providers, aggregators, credit card companies, collection societies, etc.",
        },
      ],
    },

    {
      termsTitle: "2. Guarantees & Warranties",
      conditions: [
        {
          condition: "You guarantee that you are at least 18 years old.",
        },
        {
          condition:
            "You warrant that your email address is current and accurate.",
        },
        {
          condition: `You are responsible for the safekeeping of your login details.`,
        },
        {
          condition:
            "You guarantee that your account will not be used for fraudulent activities or purposes other than the intended use of CIPROXIN.",
        },
      ],
    },

    {
      termsTitle: "3. Payments and Fees",
      conditions: [
        {
          condition:
            "We reserve the right to charge fees for certain payment methods, which will be clearly indicated at the time of the transaction.",
        },
        {
          condition: "Late payment fees may be applied for unpaid invoices.",
        },
      ],
    },

    {
      termsTitle: "4. Accounting & Payouts",
      conditions: [
        {
          condition: "You may initiate payouts yourself.",
        },
        {
          condition:
            "Payments will be processed within 30 days after a payout request.",
        },
        {
          condition: `Only income received by us from your sales and royalties will be eligible for payout.`,
        },
        {
          condition:
            "We reserve the right to deduct costs such as returns from your account.",
        },
        {
          condition: "Payment transfer costs will be your responsibility.",
        },
        {
          condition:
            "Bank payments can only be made to accounts with an IBAN within the SEPA zone. Users outside SEPA are advised to use services like Wise.com.",
        },
      ],
    },

    {
      termsTitle: "5. Cash Credit and Promo-Credit",
      conditions: [
        {
          condition:
            "Cash credit in your account can be used to purchase services or withdrawn. It will not expire as long as you log in at least once a year; otherwise, it may be converted to Promo-credit.",
        },
        {
          condition:
            "Promo-credit can be used for discounts on certain services but cannot be withdrawn or converted to cash credit. It will not expire as long as you log in at least once a year.",
        },
      ],
    },

    {
      termsTitle: "6. Refunds",
      conditions: [
        {
          condition:
            "We have a no cash refund policy. Refunds will be issued as Promo-credit.",
        },
      ],
    },

    {
      termsTitle: "7. Fair Use Policy",
      conditions: [
        {
          condition:
            "Our services are designed for independent artists and labels and do not cater to aggregation businesses. For inquiries, please contact us for a custom deal. We reserve the right to terminate relationships with users in accordance with our termination policy.",
        },
      ],
    },

    {
      termsTitle: "8. Closing Your Account",
      conditions: [
        {
          condition:
            "You may close your account at any time, provided all outstanding invoices have been paid. Account closure will result in the automatic termination of all services, including removal of distributed releases. Certain services may have minimum terms, which you will have been informed of upon purchase.",
        },
        {
          condition:
            "All personal data will be deleted in compliance with the EU GDPR.",
        },
      ],
    },

    {
      termsTitle: "9. Audit Rights",
      conditions: [
        {
          condition:
            "You may audit our accounting with 90 days' notice, at your own expense, once per year, using an authorized Swiss auditor.",
        },
      ],
    },

    {
      termsTitle: "10. Fraudulent Activity Clause",
      conditions: [
        {
          condition:
            "We reserve the right to block your account if fraudulent activity is suspected or if a copyright claim is made against you. Any non-human activity (e.g., AI-generated content, bots) on our platform will result in immediate account blocking.",
        },
        {
          condition:
            "If you are found to infringe on others’ rights or engage in fraudulent activities, we reserve the right to disclose your identity to affected parties or authorities, which supersedes privacy rights stated in our Privacy Policy. You may also be required to repay any payouts and/or forfeit outstanding payouts.",
        },
      ],
    },

    {
      termsTitle: "11. Modification of Terms",
      conditions: [
        {
          condition:
            "We reserve the right to update these Terms at any time. Modifications may be communicated via email to the address provided at account creation. Continued use of your account following notification will constitute acceptance of the modified Terms.",
        },
        {
          condition:
            "If any part of these Terms is found to be illegal or unenforceable, it shall not affect the legality or enforceability of the remaining portions.",
        },
      ],
    },

    {
      termsTitle: "12. Litigation",
      conditions: [
        {
          condition:
            "These Terms shall be governed by Swiss law and enforced in Zürich, Switzerland.",
        },
      ],
    },

    {
      termsTitle: "13. Contact Us",
      conditions: [
        {
          condition:
            "For any questions or concerns regarding these Terms, please contact us at: contact@ciproxinllc.com",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="px-[20px] md:px-[70px] lg:px-[140px] py-10">
      <Title
        titleClass={" text-[25px] md:text-[35px] lg:text-[40px] text-start"}
        title={"Terms and Conditions"}
        subtitleClass={"mt-0 text-start"}
        subtitle={"Effective Date: July 2024"}
      />
      <p className="font-[400] text-[16px] text-[#7E8999]  text-start  mt-3">
        Welcome to CIPROXIN LLC. By creating an account with us, you agree to
        these Terms and Conditions (“Terms”) and our associated Privacy Policy
        in its entirety.
      </p>

      <div className="py-10">
        {terms.map(({ termsTitle, conditions },i) => {
          return (
            <ul key={i} className="mt-5 mb-10">
              <h1 className="my-2 font-[600] text-base md:text-[18px] lg:text-[20px]">
                {termsTitle}
              </h1>

              {conditions.map(({ condition },i) => {
                return (
                  <li key={i} className="text-[15px] font-[500] text-[#7E8999]">
                    {condition}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
    <Footer/>
    </section>
  );
}

export default TermsCondition;
