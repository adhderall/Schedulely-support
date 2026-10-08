export type LegalSection = {
    title: string
    paragraphs: string[]
    email?: string
}
  
export type LegalDocument = {
    title: string
    sections: LegalSection[]
}
  
export const privacyPolicy: LegalDocument = {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Overview',
        paragraphs: [
          "Schedulely respects your privacy.",
          "This Privacy Policy explains what information is collected or processed when you use Schedulely, how that information is used, how third-party service providers may process information, and the choices available to you.",
          "Schedulely is designed to process information only as necessary to provide and operate the service.",
        ],
      },
      {
        title: '2. Information We Process',
        paragraphs: [
          "Schedulely may process limited account, subscription, and usage information to provide its services.",
          "This may include an account identifier verified through Sign in with Apple, App Store subscription transaction identifiers, subscription product information, subscription expiration date, subscription status, current AI feature usage count, and the start of the current AI usage period.",
          "This information is used to identify your account, verify subscription status, provide access to paid features, and manage applicable AI usage limits.",
          "Schedulely does not store your name or email address on its servers for account identification.",
        ],
      },
      {
        title: '3. Sign in with Apple',
        paragraphs: [
          "Some features of Schedulely may require you to sign in with Apple.",
          "When you sign in, Schedulely verifies authentication information provided by Apple and uses the verified Apple account identifier to identify your Schedulely account.",
          "Schedulely does not authenticate users solely based on a user identifier submitted by the app. Apple authentication information is verified before account access is granted.",
          "Information processed independently by Apple may be subject to Apple's own privacy policy and applicable terms.",
        ],
      },
      {
        title: '4. Subscription Information',
        paragraphs: [
          "Schedulely may process limited information related to your App Store subscription in order to provide paid features.",
          "This may include your subscription product, transaction identifier, expiration date, and current subscription status.",
          "This information is used to verify your subscription status and determine access to features included with your subscription.",
          "Subscription purchases and payments are processed through Apple's App Store. Schedulely does not directly collect or store your credit card number or other App Store payment method information.",
        ],
      },
      {
        title: '5. AI Usage Information',
        paragraphs: [
          "Schedulely stores limited AI usage information to manage applicable AI usage limits.",
          "This information may include the number of input and output tokens used during the current daily usage period and the time when that usage period resets.",
          "When a new daily usage period begins, the previous usage totals are reset. Schedulely does not maintain a separate historical record of past AI usage totals.",
          "This information is used only to manage and enforce applicable AI feature usage limits.",
        ],
      },
      {
        title: '6. AI Assistant',
        paragraphs: [
          "When you use the AI Assistant with your consent, the text you submit, your task category names, and the current date and time are shared with OpenAI through Schedulely's server for processing.",
          "Schedulely shares this information with OpenAI only after you explicitly consent to AI processing. If you do not consent, this information is not shared with OpenAI.",
          "This information is used to interpret your input and generate task-related information such as titles, notes, dates, times, reminders, and categories.",
          "Schedulely does not store the content of your AI Assistant prompts or generated responses in its own database.",
          "Schedulely configures its AI request processing to minimize unnecessary storage of AI responses.",
          "Third-party AI service providers may process or temporarily retain certain information for purposes such as providing the service, security, abuse prevention, or compliance with legal obligations, subject to their own policies.",
        ],
      },
      {
        title: '7. Data Stored on Your Device',
        paragraphs: [
          "Task data you create in Schedulely, including tasks, notes, categories, dates, times, reminders, and other task-related information, is stored locally on your device.",
          "Schedulely does not back up or synchronize this local task data to its own servers.",
          "Schedulely does not provide iCloud or CloudKit synchronization for this task data and does not upload it to a separate Schedulely backup server.",
          "If you choose to enter any locally stored information into the AI Assistant, that input will be processed as described in this Privacy Policy.",
        ],
      },
      {
        title: '8. Notifications',
        paragraphs: [
          "Schedulely may use local iOS notifications to provide reminders based on tasks and reminder settings you configure.",
          "Task notifications are scheduled on your device and are not delivered through a remote push notification service operated by Schedulely.",
          "You can change Schedulely's notification permissions at any time through your device settings.",
        ],
      },
      {
        title: '9. Technical and Error Information',
        paragraphs: [
          "Schedulely may process limited technical information for service reliability, security, and error diagnosis.",
          "Schedulely does not intentionally record AI Assistant input, generated response content, or authentication tokens in its server error logs.",
          "Limited technical information such as error codes, HTTP status information, and request tracing identifiers may be recorded for error diagnosis.",
          "Schedulely does not separately store IP addresses or User-Agent information in user profiles or its own database for the purpose of tracking users.",
          "Third-party infrastructure service providers used by Schedulely may process or temporarily retain limited technical information as part of providing infrastructure, security, network operation, or error diagnosis, subject to their own policies.",
        ],
      },
      {
        title: '10. Analytics, Advertising, and Tracking',
        paragraphs: [
          "Schedulely does not currently use third-party advertising SDKs or track users for personalized advertising.",
          "Schedulely does not currently use separate third-party user analytics SDKs or third-party crash reporting SDKs.",
          "Schedulely does not sell your personal information for advertising purposes.",
        ],
      },
      {
        title: '11. How We Use Information',
        paragraphs: [
          "Schedulely uses information it processes to authenticate and identify users, verify subscription status, manage access to paid features, process AI Assistant requests, manage AI usage limits, maintain service security, diagnose errors, maintain service reliability, and comply with applicable legal obligations.",
          "Schedulely does not use information it processes for purposes unrelated to those described in this Privacy Policy.",
        ],
      },
      {
        title: '12. Third-Party Service Providers',
        paragraphs: [
          "Schedulely uses third-party service providers to operate certain features.",
          "With your consent, OpenAI processes the text you submit to the AI Assistant, your task category names, and the current date and time to generate task-related information.",
          "Schedulely uses infrastructure service providers to host its servers and support request processing, data storage, and network security.",
          "Apple provides Sign in with Apple and processes App Store purchases and subscriptions.",
          "We require service providers that process personal data on our behalf to provide the same or an equivalent level of protection as described in this Privacy Policy.",
          "These providers may process or retain information necessary to provide their services, subject to their applicable terms and privacy policies.",
          "Information that Schedulely does not store in its own database may still be processed or temporarily retained by these providers.",
        ],
      },
      {
        title: '13. Data Retention',
        paragraphs: [
          "Schedulely retains account and subscription-related information for as long as necessary to provide the service.",
          "For AI usage information, Schedulely maintains only the counter needed for the current usage period. When a new usage period begins, the previous counter is reset, and past AI usage counts are not maintained as a separate usage history.",
          "AI Assistant prompts and generated response content are not stored in Schedulely's own database.",
          "Information processed by third-party service providers may be retained for different periods according to their own policies and applicable legal obligations.",
        ],
      },
      {
        title: '14. Account Deletion',
        paragraphs: [
          "You may delete your Schedulely account through the account controls provided in the app.",
          "When you request deletion of your Schedulely account, your account identification information, subscription-linked information, and current AI usage information stored on Schedulely’s servers are deleted within 30 days of your request.",
          "Schedulely does not store AI Assistant prompts or generated response content in its own database, so there is no Schedulely server-side AI conversation history to delete.",
          "Deleting your Schedulely account does not automatically delete tasks, notes, categories, or other task data stored locally on your device.",
          "Deleting your Schedulely account does not automatically cancel an active App Store subscription. If necessary, you must manage or cancel your subscription separately through Apple.",
          "Transaction, payment, or other information retained independently by Apple is not deleted through Schedulely's account deletion process and remains subject to Apple's own policies.",
        ],
      },
      {
        title: '15. Data Security',
        paragraphs: [
          "Schedulely uses reasonable technical and administrative measures to protect the information it processes.",
          "Server features that require authentication verify authentication information before identifying a user, and authenticated sessions are used for subsequent server requests.",
          "Schedulely is designed not to record AI input, generated response content, or authentication tokens in server error logs.",
          "Schedulely maintains and improves appropriate security measures based on the nature of the service and the information it processes.",
        ],
      },
      {
        title: '16. Your Choices and Rights',
        paragraphs: [
          "You can manage certain privacy-related choices through Schedulely and your device settings.",
          "You can withdraw your consent at any time by turning off Allow AI Processing in Settings > AI & Privacy. After you withdraw your consent, further AI requests are blocked unless you consent again. Withdrawal does not undo processing of information already shared.",
          "You may delete your Schedulely account, stop using the AI Assistant, or change notification permissions through your device settings.",
          "Depending on your country or region, you may have legal rights relating to access, correction, deletion, or other handling of your personal information.",
          "You may contact Schedulely using the contact information below regarding privacy-related requests.",
        ],
      },
      {
        title: "17. Children's Privacy",
        paragraphs: [
          "Schedulely is not specifically designed or directed toward children.",
          "Schedulely does not impose a general minimum age requirement. However, depending on the user's country or region, additional legal requirements such as parental or guardian consent may apply to the processing of a child's personal information.",
          "If Schedulely becomes aware that personal information of a child has been processed without consent required by applicable law, appropriate steps may be taken to address or delete that information.",
        ],
      },
      {
        title: '18. Changes to This Privacy Policy',
        paragraphs: [
          "This Privacy Policy may be updated from time to time to reflect changes to Schedulely, its data practices, services used by Schedulely, or applicable legal requirements.",
          "When this Privacy Policy is updated, the “Last Updated” date will be revised. Where required by applicable law, additional notice or consent will be provided.",
        ],
      },
      {
        title: '19. Contact',
        paragraphs: [
          "If you have questions about this Privacy Policy or Schedulely's privacy practices, please contact:",
        ],
        email: 'jayparkitrighthere99@gmail.com',
      },
      {
        title: '20. Last Updated',
        paragraphs: [
          "This Privacy Policy was last updated on October 6, 2026.",
        ],
      },
    ],
}
  
export const termsOfUse: LegalDocument = {
    title: 'Terms of Use',
    sections: [
      {
        title: '1. Acceptance of Terms',
        paragraphs: [
          "By downloading, accessing, or using Schedulely, you agree to these Terms of Use (“Terms”).",
          "If you do not agree to these Terms, you should not use Schedulely.",
        ],
      },
      {
        title: '2. About Schedulely',
        paragraphs: [
          "Schedulely is a productivity application designed to help you create, organize, schedule, and manage tasks.",
          "Certain features may require you to sign in or maintain an active paid subscription. Available features may vary depending on your account and subscription status and may change as Schedulely is updated.",
        ],
      },
      {
        title: '3. Your Account',
        paragraphs: [
          "Some features of Schedulely may require you to sign in with Apple.",
          "Your Schedulely account is associated with the Sign in with Apple account you use to access the app. You are responsible for maintaining access to that Apple account.",
          "You may sign out or request deletion of your Schedulely account through the app.",
        ],
      },
      {
        title: '4. Subscriptions and Billing',
        paragraphs: [
          "Schedulely may offer certain features through an optional paid subscription.",
          "Subscription features may include access to AI-powered Assistant features and other premium functionality identified within the app. The features included with a subscription may change over time as Schedulely is developed and updated.",
          "Subscriptions may be offered on an automatically renewing basis.",
          "Payment is charged to your Apple ID through the App Store when your purchase is confirmed. Unless canceled, your subscription automatically renews according to the subscription period and terms displayed at the time of purchase.",
          "Subscription prices, billing periods, and available plans are displayed before purchase and may vary by country or region.",
          "You can manage or cancel your subscription through your Apple ID or App Store subscription settings.",
          "Schedulely does not directly collect or store your credit card number or other App Store payment method information.",
        ],
      },
      {
        title: '5. Refunds',
        paragraphs: [
          "Purchases and subscriptions made through the App Store are processed by Apple.",
          "Requests for refunds are handled according to Apple's applicable refund policies and procedures. Schedulely does not independently process refunds for purchases made through the App Store except where required by applicable law.",
        ],
      },
      {
        title: '6. AI Assistant',
        paragraphs: [
          "Schedulely may provide artificial intelligence features that interpret your input and generate suggested tasks, titles, notes, dates, times, reminders, categories, or other information.",
          "AI-powered features may be subject to usage limits, which may vary based on your subscription status and other factors. Applicable limits may be displayed within the app.",
          "AI-generated output may be inaccurate, incomplete, or unsuitable for your intended purpose. You are responsible for reviewing generated content before saving, relying on, or acting on it.",
          "Schedulely does not guarantee that AI-generated tasks, dates, times, reminders, categories, or other information will be correct.",
          "The AI Assistant is provided as a productivity feature and is not intended to provide medical, legal, financial, emergency, safety-critical, or other professional advice. You should not rely on it for decisions requiring professional judgment.",
          "AI features require your separate consent to share data with OpenAI, as described in our Privacy Policy.",
        ],
      },
      {
        title: '7. Reminders and Notifications',
        paragraphs: [
          "Schedulely may provide reminders and notifications based on tasks, dates, times, and reminder settings you configure in the app.",
          "The delivery and timing of notifications may depend on your device, operating system, notification permissions, system settings, and services provided by Apple.",
          "Schedulely does not guarantee that a reminder or notification will be delivered at a particular time or delivered at all.",
          "You are responsible for reviewing important tasks, dates, times, and reminders and should not rely solely on Schedulely notifications for time-sensitive, emergency, safety-critical, or otherwise important matters.",
        ],
      },
      {
        title: '8. Your Content',
        paragraphs: [
          "You retain ownership of the tasks, notes, and other content you create or enter into Schedulely.",
          "You are responsible for the content you provide and for ensuring that you have the right to use or submit that content.",
          "You may not use Schedulely to submit or process content that is unlawful, fraudulent, abusive, or that infringes the rights of others.",
        ],
      },
      {
        title: '9. Data and Privacy',
        paragraphs: [
          "Your use of Schedulely is also subject to the Schedulely Privacy Policy, which explains how information is collected, used, processed, and protected.",
          "Certain information may be processed by third-party service providers when necessary to provide features such as authentication, App Store purchases, or AI-powered functionality.",
          "Please review the Privacy Policy for more information about these practices.",
        ],
      },
      {
        title: '10. Acceptable Use',
        paragraphs: [
          "You may not misuse Schedulely or interfere with the normal operation, security, or availability of the app or its services.",
          "You may not attempt to gain unauthorized access to Schedulely systems, circumvent account, usage, or subscription restrictions, abuse AI functionality, generate excessive automated requests, reverse engineer protected portions of the service except where permitted by law, or use Schedulely for unlawful purposes.",
          "Access to account-based or online services may be restricted or terminated when reasonably necessary to address fraud, abuse, security threats, or serious or repeated violations of these Terms.",
        ],
      },
      {
        title: '11. Intellectual Property',
        paragraphs: [
          "Schedulely, including its software, design, branding, graphics, and other materials provided as part of the app, is protected by applicable intellectual property laws.",
          "These Terms do not transfer ownership of Schedulely or its intellectual property to you.",
          "Your license to use Schedulely is governed by Apple's Standard Licensed Application End User License Agreement (EULA), as applicable to apps distributed through the App Store.",
        ],
      },
      {
        title: '12. Third-Party Services',
        paragraphs: [
          "Schedulely may rely on third-party services to provide certain functionality, including services provided by Apple and artificial intelligence service providers.",
          "Your use of third-party services may also be subject to their respective terms and privacy policies.",
          "Schedulely is not responsible for interruptions, changes, or failures of third-party services that are beyond its reasonable control.",
        ],
      },
      {
        title: '13. Service Availability and Changes',
        paragraphs: [
          "Schedulely may be updated, modified, or improved over time.",
          "Features may be added, changed, limited, or discontinued. While reasonable efforts may be made to keep Schedulely available and functioning properly, uninterrupted or error-free operation cannot be guaranteed.",
          "Temporary interruptions may occur because of maintenance, technical problems, third-party service availability, or circumstances beyond reasonable control.",
        ],
      },
      {
        title: '14. Account Deletion and Termination',
        paragraphs: [
          "You may request deletion of your Schedulely account through the account controls provided in the app.",
          "Deleting your Schedulely account does not automatically cancel an active App Store subscription. App Store subscriptions must be managed or canceled separately through Apple.",
          "Deleting an account may not automatically remove tasks or other information stored locally on your device. Local app data may need to be removed separately, including by using any available data-deletion features or by deleting the app and its locally stored data.",
          "Access to account-based or online services may be suspended or terminated when reasonably necessary because of fraud, abuse, security concerns, or serious or repeated violations of these Terms.",
        ],
      },
      {
        title: '15. Disclaimer of Warranties',
        paragraphs: [
          "To the maximum extent permitted by applicable law, Schedulely is provided on an “as is” and “as available” basis.",
          "Schedulely does not guarantee that the app or its services will always be available, uninterrupted, secure, or error-free. Schedulely also does not guarantee the accuracy or reliability of AI-generated content, reminders, schedules, or other information provided through the app.",
          "You are responsible for reviewing important tasks, dates, times, reminders, and other information before relying on them.",
          "Nothing in these Terms excludes warranties, guarantees, or other rights that cannot legally be excluded under applicable consumer protection laws.",
        ],
      },
      {
        title: '16. Limitation of Liability',
        paragraphs: [
          "To the maximum extent permitted by applicable law, Schedulely and its developer will not be liable for indirect, incidental, special, consequential, or similar damages arising out of or relating to your use of, or inability to use, Schedulely.",
          "This may include, where permitted by law, losses resulting from missed tasks or events, incorrect or failed reminders, inaccurate AI-generated information, service interruptions, unauthorized access beyond reasonable control, or loss of locally stored data.",
          "Nothing in these Terms limits or excludes liability where such limitation or exclusion is prohibited by applicable law.",
        ],
      },
      {
        title: '17. Changes to These Terms',
        paragraphs: [
          "These Terms may be updated from time to time to reflect changes to Schedulely, legal requirements, or business practices.",
          "When these Terms are updated, the “Last Updated” date will be revised. Where required by applicable law, additional notice or consent will be provided.",
          "Your continued use of Schedulely after updated Terms become effective constitutes acceptance of the updated Terms, except where applicable law requires another form of consent.",
        ],
      },
      {
        title: '18. Apple Standard EULA and App Store',
        paragraphs: [
          "Your license to use Schedulely is governed by Apple's Standard Licensed Application End User License Agreement (EULA). These Terms govern the services and features provided through Schedulely in addition to the applicable Apple EULA.",
          "Schedulely is distributed through Apple's App Store, and your use of the App Store may also be subject to Apple's applicable terms and policies.",
          "Apple is responsible for its own services, including App Store payment processing and subscription management, subject to Apple's applicable terms and policies.",
          "Nothing in these Terms is intended to limit any rights available to you under mandatory consumer protection laws in your country or region.",
        ],
      },
      {
        title: '19. Governing Law',
        paragraphs: [
          "These Terms are governed by the laws applicable in the jurisdiction in which Schedulely's developer operates, without limiting any mandatory rights or protections available to you under the laws of your country or region.",
          "If applicable law gives you the right to bring a claim or dispute in your local jurisdiction, these Terms do not take that right away.",
        ],
      },
      {
        title: '20. Contact',
        paragraphs: [
          "If you have questions about these Terms of Use or Schedulely, please contact:",
        ],
        email: 'jayparkitrighthere99@gmail.com',
      },
      {
        title: '21. Last Updated',
        paragraphs: [
          "These Terms of Use were last updated on October 5, 2026.",
        ],
      },
    ],
}