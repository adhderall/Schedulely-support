import { useState } from 'react'
import './App.css'

const faqs = [
  {
    question: "How do subscriptions work?",
    answer:
      "Schedulely offers an optional subscription for premium features. Available plans and prices are shown in the app. You can manage or cancel your subscription through your Apple account's subscription settings.",
  },
  {
    question: "Why am I not receiving notifications?",
    answer:
      "Check that notifications are enabled for Schedulely in your device settings and that a reminder is set for your task. Also check whether Focus or notification settings are silencing alerts.",
  },
  {
    question: "Does Schedulely sync across devices?",
    answer:
      "Currently, task data is stored locally on your device. Schedulely does not sync tasks across devices through iCloud or CloudKit. I wish it did, too.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account deletion directly from the app. Your account and associated data will be permanently deleted from our servers within 30 days of your request. Deleting your account does not automatically remove locally stored tasks or cancel an active App Store subscription.",
  },
];


function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
  <div className="support-page">
    <header className="header">
      <a className="brand" href="/">
        <img src="/app-icon.png" alt="" width={40} height={40} />
        <span>Schedulely Support</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <h1>
          Schedulely
          <br />
          <span>Support</span>
        </h1>

        <p>
          We're here to help you make the most of Schedulely.
        </p>
      </section>
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>

        <p className="faq-description">
          Find quick answers to common questions.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <div
                key={faq.question}
                className={`faq-item${isOpen ? ' is-open' : ''}`}
              >
                <h3 className="faq-question">
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => {
                      setOpenFaq((current) =>
                        current === index ? null : index
                      )
                    }}
                  >
                    <span>{faq.question}</span>

                    <svg
                      className="faq-arrow"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  </div>
  )
}

export default App