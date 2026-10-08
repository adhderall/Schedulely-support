import './App.css'

function App() {
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
          <details className="faq-item">
            <summary>How do subscriptions work?</summary>
            <p>
              Schedulely offers an optional subscriptionfor premium features.
              Available plans and prices are shown in the app.
              You can manage or cancel your subscription through your
              Apple account’s subscription settings.
            </p>
          </details>

          <details className="faq-item">
            <summary>Why am I not receiving notifications?</summary>
            <p>
              Check that notifications are enabled for Schedulely in
              your device settings and that a reminder is set for your
              task. Also check whether Focus or notification settings
              are silencing alerts.
            </p>
          </details>

          <details className="faq-item">
            <summary>Does Schedulely sync across devices?</summary>
            <p>
              Currently, task data is stored locally on your device.
              Schedulely does not sync tasks across devices through
              iCloud or CloudKit. I wish it did, too.
            </p>
          </details>

          <details className="faq-item">
            <summary>How do I delete my account?</summary>
            <p>
              You can request account deletion directly from the app.
              Your account and associated data will be permanently deleted
              from our servers within 30 days of your request.
              Deleting your account does not automatically remove locally
              stored tasks or cancel an active App Store subscription.
            </p>
          </details>
        </div>
      </section>



    </main>
  </div>
  )
}

export default App