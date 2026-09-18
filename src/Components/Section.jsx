// Section.jsx

import "./Section.css"

export default function Section({ title, innerContent, sectionId }) {
  /**
   * The inner content for a section is being wrapped in a div 
   * and then simply being rendered as is.
   * 
   * Other components such as `ProjectInfo` are used to simplify
   * creation of innerContent for the sections.
   */
  return (
    <section id={sectionId} className="main_section">
      <h2 className="section_title">{title}</h2>
      <div className="content section_content">{innerContent}</div>
    </section>
  )
}