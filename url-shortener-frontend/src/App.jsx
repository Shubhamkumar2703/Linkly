import { useState } from 'react'
import './App.css'

const features = [
  {
    title: 'Branded links',
    description: 'Customize short links with your domain and build trust in every click.',
  },
  {
    title: 'Smart analytics',
    description: 'Track clicks, devices, and locations with clean, actionable insights.',
  },
  {
    title: 'Instant sharing',
    description: 'Copy, share, or export links in seconds with a frictionless workflow.',
  },
]

const stats = [
  { label: 'Links created', value: '2.4M+' },
  { label: 'Avg. click boost', value: '38%' },
  { label: 'Teams onboarded', value: '1,200+' },
]

const App = () => {
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="app">
      <header className="top-nav">
        <div className="logo">
          <span className="logo-mark" />
          Linkly
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <button className="ghost-button" type="button">
          Sign in
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Modern link management</p>
            <h1>
              Shorten, brand, and track links with a sleek experience built for today&apos;s teams.
            </h1>
            <p className="hero-subtitle">
              Deliver clean links, deeper insights, and share-ready content in a UI designed for clarity.
            </p>
            <form className="hero-form" onSubmit={handleSubmit}>
              <label htmlFor="long-url">Paste your long link</label>
              <div className="input-group">
                <input
                  id="long-url"
                  type="url"
                  placeholder="https://your-long-link.com/marketing/campaign"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  required
                />
                <button className="primary-button" type="submit">
                  Shorten link
                </button>
              </div>
              <p className="form-hint">
                By creating a short link, you agree to our terms and privacy policy.
              </p>
            </form>
            <div className="stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-header">
                <span>Link dashboard</span>
                <span className="badge">Live</span>
              </div>
              <div className="visual-row">
                <div>
                  <p className="visual-title">Summer campaign</p>
                  <p className="visual-link">link.ly/summer</p>
                </div>
                <div className="visual-metric">
                  <strong>12.8k</strong>
                  <span>Clicks</span>
                </div>
              </div>
              <div className="visual-row">
                <div>
                  <p className="visual-title">Product launch</p>
                  <p className="visual-link">link.ly/launch</p>
                </div>
                <div className="visual-metric">
                  <strong>6.1k</strong>
                  <span>Clicks</span>
                </div>
              </div>
              <div className="visual-footer">
                <p>Top source</p>
                <strong>Instagram</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-header">
            <h2>Everything you need to manage links beautifully.</h2>
            <p>Clean navigation, bold color accents, and intuitive UX for every workflow.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="solutions">
          <div>
            <h2>Ship your next campaign faster.</h2>
            <p>Centralize every link, campaign, and insight in a workspace that feels effortless.</p>
          </div>
          <button className="primary-button" type="button">
            Start for free
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
