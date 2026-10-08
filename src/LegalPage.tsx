import { useEffect, useRef } from 'react'
import type { LegalDocument } from './legalContent'

type LegalPageProps = {
  document: LegalDocument
}

export default function LegalPage({ document: legal }: LegalPageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const previousTitle = document.title

    document.title = `${legal.title} | Schedulely`
    window.scrollTo({ top: 0, behavior: 'instant' })
    headingRef.current?.focus({ preventScroll: true })

    return () => {
      document.title = previousTitle
    }
  }, [legal])

  return (
    <article className="legal-page">
      <a className="legal-back" href="#home">
        <span aria-hidden="true">←</span>
        Back to Support
      </a>

      <h1 ref={headingRef} tabIndex={-1}>
        {legal.title}
      </h1>

      {legal.sections.map((section) => (
        <section className="legal-section" key={section.title}>
          <h2>{section.title}</h2>

          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {section.email && (
            <a href={`mailto:${section.email}`}>
              {section.email}
            </a>
          )}
        </section>
      ))}
    </article>
  )
}