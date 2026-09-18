// import { data } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Section from "./Components/Section";
import ProjectInfo from "./Components/ProjectSection/ProjectInfo";
import SkillsList from "./Components/SectionSkills/SkillsList";
import YoutubeVideo from "./Components/Items/YoutubeVideo";
import ProjectImageGallery from "./Components/ProjectImageGallery/ProjectImageGallery";

export default function App() {
  // ========================= PROJECTS SECTION =========================
  const GetProjectsSection = () => {

    // ~~~~~~~~~~~~~~~ FIRST PROJECT ~~~~~~~~~~~~~~~

    const engineDescription = () => {
      return (
        <>
          {/* <div className="project_desc_subtitle">Développeur - Moteur de rendu 3D| Projet de fin d'étude | 2026</div> */}
          <p>
            Mon projet de fin de session à mon programme en Techinques d'intégration multimédia au collège de Maisonneuve,
            consistait en la conçeption d'un prototype de moteur de rendu 3D en C++ via l'API <span>DirectX 11.</span>
          </p>
          <p>
            J'ai implémenté le pipeline graphique, les shaders et la gestion de la mémoire, j'ai crée des systèmes de scène, 
            de sauvegarde, de <span>réflexion (RTTI)</span>, ainsi que la lecture de fichiers images
            et 3D avec le <span>FBX SDK</span>.
          </p>
        </>
      )
    };

    // project name
    const engineProjectName = "Projet de fin d'étude, prototype d'un moteur de rendu 3D | 2026";
    const engineUsedTechs = ["C++", "DirectX 11", "HLSL", "Visual Studio"];
    const engineVideo =
      <YoutubeVideo
        label={""}
        iframeElement={<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_35LNNOp4js?si=aTt2KbBmzDn7-laT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="allowFullScreen"></iframe>}
      ></YoutubeVideo>

    // Create a `ProjectInfo` Component for first project
    const engineProjectInfo =
      <ProjectInfo
        projectName={engineProjectName}
        descriptionPara={engineDescription()}
        techUsed={engineUsedTechs}
        ytbIframe={engineVideo}
        imageGallery={null}
      ></ProjectInfo>;

    // ~~~~~~~~~~~~~~~ SECOND PROJECT ~~~~~~~~~~~~~~~


    const hachimanDescription = () => {
      return (
        <>
          {/* <div className="project_desc_subtitle">Directeur technique et programmeur principal</div> */}
          <p>
            <span>Gagnant de l'exposition d'arcade de l'ExpoTIM, décerné par le jury pour l'exécution globale du projet.</span>
          </p>
          <p>
            Ce projet qui a duré toute une session à était réalisé dans le carde d'un travail d'équipe, où chaque membre avait un 
            rôle designé selon ces forces et capacité et où nous avons mis celles-ci à l'épreuve en réalisant un jeu avec Unity.
          </p>
          <p>
            Mon rôle était celui de directueur technique et principal programmeur où j'ai été responsable de définir l'architecture 
            et en assurant tout au long que celle-ci soit respecté. Je me suis aussi occupé principalement de la programmation la logique du 
            joueur, le comportement des ennemies et du boss, du système de quêtes et du system de sauvegarde.
          </p>
          <p>
            De plus, j'ai aussi servis du support technique à l'équipe lorsque des bugs sont recontrés et j'ai supervisé l'utilisation du 
            contrôle de version et la résolution de conflits de code avec GitHub.
          </p>
        </>
      )
    };

    const hachimanProjectName = "Directeur technique et programmeur principal - Hachiman | 2025";
    const hachimanUsedTechs = ["C#", "Unity"];
    const hachimanVideo =
      <YoutubeVideo
        label={""}
        iframeElement={<iframe width="560" height="315" src="https://www.youtube.com/embed/JEIfm0MZYeM?si=Clxr3JMFZimPv_ea" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="allowFullScreen"></iframe>}
      ></YoutubeVideo>

    const hachimanImageGallery = <ProjectImageGallery projectTag={"hachiman"} imgCount={8} />;

    const hachimanProjectInfo =
      <ProjectInfo
        projectName={hachimanProjectName}
        descriptionPara={hachimanDescription()}
        techUsed={hachimanUsedTechs}
        ytbIframe={hachimanVideo}
        imageGallery={hachimanImageGallery}
      ></ProjectInfo>;


    // Group all sections and Create the `Section` Component
    return (
      <>
        <Section
          sectionId={"projects"}
          title={"Mes Projets"}
          innerContent={<>
            {engineProjectInfo}
            {hachimanProjectInfo}
          </>}
        ></Section>
      </>
    );
  }; // GetProjectsSection

  // ========================= GET SECTION =========================
  const GetSkillsSections = () => {

    const languagesList = [
      { label: "C", fileLogo: "c", bgStyle: "#00599c" },
      { label: "C++", fileLogo: "cpp", bgStyle: "#00599c" },
      { label: "C#", fileLogo: "cs", bgStyle: "#390091" },
      { label: "HTML", fileLogo: "html", bgStyle: "#f16529" },
      { label: "CSS", fileLogo: "css", bgStyle: "#2965f1" },
      { label: "JavaScript", fileLogo: "js", bgStyle: "#f7df1e" },
      { label: "PHP", fileLogo: "php", bgStyle: "#777bb3" },
    ];
    const toolsList = [
      { label: "Unity Engine", fileLogo: "unity", bgStyle: " #808080" },
      { label: "Github", fileLogo: "github", bgStyle: "#ffffff" },
      { label: "Git", fileLogo: "git", bgStyle: "#f05133" },
      { label: "CMake", fileLogo: "cmake", bgStyle: "#3eae2b" },
      { label: "React", fileLogo: "react", bgStyle: "#61dafb" },
    ];

    const skillsContent = (<>
      <SkillsList
        title={"Langages"}
        list={languagesList}
      ></SkillsList>

      <SkillsList
        title={"Outils et Frameworks"}
        list={toolsList}
      ></SkillsList>
    </>);

    return (
      <Section
        sectionId={"skill"}
        title={"Mes connaissances"}
        innerContent={skillsContent}
      ></Section>
    )
  }; // GetSkillsSections()

  // List of all sections to be rendered.
  // const sections = [GetProjectsSection()];
  const sections = <>
    {GetProjectsSection()}
    {GetSkillsSections()}
  </>;

  return (
    <>
      <Header>
      </Header>
      <Main sections={sections}></Main>
    </>
  );
}