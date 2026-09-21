// MainContent.jsx

import Section from "./Section"
import "./Main.css"

export default function Main({ sections }) {
  
  const introParaText = `Étudiant en génie logiciel à l'ÉTS et titulaire d'un DEC en Technique d'intégration multimédia, je me distingue par ma rigueur dans la conception de code propre, structuré et optimisé. Fort d'une expérience de programmation principale sur des projets d'équipe, j'apporte une attention constante à la performance applicative et à la résolution de problèmes complexes.`
  return (
    <main className="site_main">
      <div className="content">
        {/* The intro section is being render directly in this component as its simply a single paragraph*/}
        <section id="me" className="main_section section_intro">
          <h2 className="section_title">Yanis Oulmane <span>Étudiant en génie logiciel</span></h2>
          <div className="section_paragraph">{introParaText}</div>
        </section> 
        { sections }
      </div>
      <div id="site_background" className="background"></div>
    </main>
  )
}