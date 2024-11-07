import React from "react";
import Title from "../common/title";
import Footer from "../common/Footer";

function PrivecyPolicy() {
  const policy = [
    {
      policyTitle: "1. Introduction",
      conditions: [
        {
          condition: 'CIPROXIN LLC ("we", "us", or "our") is dedicated to safeguarding your privacy. This Privacy Policy describes how we collect, use, disclose, and protect your information when you use our music distribution services (the "Services")..',
        }
      ],
    },

    {
      policyTitle: "2. Information We Collect",
      conditions: [
        {
          condition: "We may collect the following types of information:",
        },
        {
          condition:
            "Personal Information: This includes your name, email address, phone number, mailing address, and payment information when you create an account or purchase our Services.",
        },
        {
          condition: `Music Content: Any music, artwork, or other media you upload or distribute through our platform.
         device information, access times, and pages visited.`,
        }
      ],
    },

    {
      policyTitle: "3. How We Use Your Information",
      conditions: [
        {
          condition:
            "We use your information for various purposes, including:",
        },
        {
          condition: "To provide, maintain, and improve our Services.",
        },
        {
          condition: "To process transactions and manage your account.",
        },
        {
          condition: "To communicate with you, including sending updates, promotional materials, and service-related notices.",
        },
        {
          condition: "To analyze usage and trends to enhance your experience.",
        },
        {
          condition: "To comply with legal obligations and protect our rights.",
        }
      ],
    },

    {
      policyTitle: "4. Sharing Your Information",
      conditions: [
        {
          condition: "We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:",
        },
        {
          condition:
            "Service Providers: We may share your information with third-party vendors who assist us in providing our Services, such as payment processors and cloud storage providers.",
        },
        {
          condition: `Legal Compliance: We may disclose your information if required by law or to respond to valid legal requests.`,
        },
        {
          condition:
            "Business Transfers: If we undergo a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        }
      ],
    },

    {
      policyTitle: "5. Data Security",
      conditions: [
        {
          condition:
            "We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Thus, we cannot guarantee its absolute security.",
        }
      ],
    },

    {
      policyTitle: "6. Your Rights",
      conditions: [
        {
          condition:
            "Depending on your location, you may have the following rights regarding your personal information:",
        },
        {
          condition:
            "The right to access, correct, or delete your personal information.",
        },
        {
          condition:
            "The right to restrict or object to the processing of your personal information.",
        },
        {
          condition:
            "The right to withdraw consent where we rely on your consent for processing.",
        },
        {
          condition:
            "To exercise these rights, please contact us using the information provided below.",
        }
      ],
    },

    {
      policyTitle: "7. Changes to This Privacy Policy",
      conditions: [
        {
          condition:
            "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of the Services after any modifications will constitute your acknowledgment of the changes and your consent to abide by and be bound by the modified policy.",
        },
      ],
    },

    {
      policyTitle: "8. Contact Us",
      conditions: [
        {
          condition:
            "If you have any questions or concerns about this Privacy Policy, please contact us at: support@ciproxinllc.com",
        }
      ],
    }
  ];

  return (
    <section>
      <div className="px-[20px] md:px-[70px] lg:px-[140px] py-10">
      <Title
        titleClass={" text-[25px] md:text-[35px] lg:text-[40px]"}
        title={"Privacy Policy"}
        subtitleClass={"mt-0"}
        subtitle={"Effective Date: July 2024"}
      />
      {/* <p className="font-[400] text-[16px] text-[#7E8999]  text-center md:text-start mt-3">
        Welcome to CIPROXIN LLC. By creating an account with us, you agree to
        these Terms and Conditions (“Terms”) and our associated Privacy Policy
        in its entirety.
      </p> */}

      <div className="py-10">
        {policy.map(({ policyTitle, conditions },i) => {
          return (
            <ul key={i} className="mt-5 mb-10">
              <h1 className="my-2 font-[600] text-base md:text-[18px] lg:text-[20px]">
                {policyTitle}
              </h1>

              {conditions.map(({ condition }) => {
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
      <div className='space-y-2 text-[#111C2EA3]'>
          <p>CIPROXIN LLC</p>
          <p>7713 BRIGHT AVE #3, WHITTIER, California, 90602, United States</p>
          <p>support@ciproxinllc.com</p>
    </div>
    </div>

    
    <Footer/>
    </section>
  );
}

export default PrivecyPolicy;
