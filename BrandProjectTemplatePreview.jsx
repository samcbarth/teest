function StatusCard({ label, value }) {
  return (
    <div className="status-card">
      <div className="status-label">{label}</div>
      <div className="status-value">{value}</div>
    </div>
  );
}

function ConfigCard({ label, children }) {
  return (
    <div className="config-card">
      <div className="config-label">{label}</div>
      <div className="config-value">{children}</div>
    </div>
  );
}

export default function BrandProjectTemplatePreview({ config }) {
  const poweredBy = config.branding.whiteLabel.enabled
    ? config.branding.whiteLabel.agencyName
    : config.client.displayName;

  const controls = [
    "Logo and title",
    "Color palette",
    "Button labels",
    "Footer and legal text",
    "Client identity",
    "HubSpot portal values",
    "White-label toggles",
    "Public branding behavior",
  ];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <img
            src="https://www.lairedigital.com/hubfs/lp-header.svg"
            alt="LAIRE Logo"
            className="laire-logo"
          />
        </div>
      </header>

      <main className="page">
        <section className="hero-grid">
          <div className="panel">
            <h1 className="hero-title">
              <span className="laire-wordmark">LAIRE</span> {config.content.heroTitle}
            </h1>

            <p className="hero-subtitle">{config.content.heroSubtitle}</p>

            <div className="button-row">
              <button
                className="primary-button"
                style={{ backgroundColor: config.branding.primaryColor }}
              >
                {config.content.ctaPrimary}
              </button>
              <button className="secondary-button">{config.content.ctaSecondary}</button>
            </div>

            <div className="status-grid">
              <StatusCard
                label="HubSpot"
                value={config.integrations.hubspot ? "Connected" : "Off"}
              />
              <StatusCard
                label="Forms"
                value={config.integrations.forms ? "Enabled" : "Off"}
              />
              <StatusCard
                label="Analytics"
                value={config.integrations.analytics ? "Enabled" : "Off"}
              />
            </div>
          </div>

          <aside className="panel">
            <div className="eyebrow">Live project config</div>
            <h2 className="section-title">{config.client.displayName}</h2>
            <div className="muted-text">{config.client.website}</div>

            <div className="config-stack">
              <ConfigCard label="Brand mode">{config.branding.mode}</ConfigCard>

              <ConfigCard label="Primary color">
                <div className="color-row">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: config.branding.primaryColor }}
                  />
                  <span>{config.branding.primaryColor}</span>
                </div>
              </ConfigCard>

              <ConfigCard label="Powered by">{poweredBy}</ConfigCard>
            </div>
          </aside>
        </section>

        <section className="panel controls-panel">
          <h2 className="section-title">What the starter template controls</h2>
          <p className="muted-text">
            These values would swap automatically based on the config file you import into
            each project.
          </p>

          <div className="controls-grid">
            {controls.map((item) => (
              <div key={item} className="control-item">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
