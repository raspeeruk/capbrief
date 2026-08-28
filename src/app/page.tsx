const enquiryHref =
  'mailto:hq@rogergroup.xyz?subject=RoundBrief.com%20acquisition%20enquiry'

export default function HomePage() {
  return (
    <main>
      <div className="frame">
        <header className="masthead">
          <a className="mark" href="/" aria-label="RoundBrief.com home">
            <span>Round</span><i />Brief
          </a>
          <p className="availability"><span />Available for acquisition</p>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <div className="corner corner-top" aria-hidden="true" />
          <p className="kicker">A concise name for consequential work</p>
          <h1 id="page-title">
            The room is set.<br />
            <em>Own the brief.</em>
          </h1>
          <p className="domain">RoundBrief.com</p>
          <p className="intro">
            A polished .com for board papers, funding updates, executive
            summaries, meeting intelligence or due-diligence software.
          </p>
          <a className="cta" href={enquiryHref}>
            <span>Make an acquisition enquiry</span>
            <b aria-hidden="true">→</b>
          </a>
          <div className="corner corner-bottom" aria-hidden="true" />
        </section>

        <section className="facts" aria-label="Acquisition details">
          <article>
            <p className="fact-number">I</p>
            <h2>Domain</h2>
            <p>
              RoundBrief.com is registered until 28 March 2027. The former
              CapBrief product has been retired and no longer accepts accounts,
              cap tables or payments.
            </p>
          </article>
          <article>
            <p className="fact-number">II</p>
            <h2>Scope</h2>
            <p>
              Enquiries are invited for the domain name. Source code would be
              considered only under a separate agreement and technical review.
            </p>
          </article>
          <article>
            <p className="fact-number">III</p>
            <h2>Boundary</h2>
            <p>
              No customer, account, uploaded-file, cap-table or analytics data
              is included in a sale. Only expressly agreed assets transfer.
            </p>
          </article>
        </section>

        <footer>
          <p>Formerly CapBrief · Product retired 28 August 2026</p>
          <a href={enquiryHref}>hq@rogergroup.xyz</a>
        </footer>
      </div>
    </main>
  )
}
