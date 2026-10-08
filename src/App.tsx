import './App.css'

function App() {
  return (
  <div className="support-page">
    <header className="header">
      <a className="brand" href="/">
        Schedulely Support
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
    </main>
  </div>
  )
}

export default App