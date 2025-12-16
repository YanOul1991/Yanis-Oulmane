/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ Home.jsx
      ++ Home page structure.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import CardList from "../components/CardList";
import HomeIntro from "../components/HomeIntro"
import Data from "../data/data.json"

export default function Home() {
  const _projects_game = Data["projects"]["games"];
  const _projects_3d = Data["projects"]["3d"];
  const _projects_web = Data["projects"]["web"];

  document.querySelector("title").innerHTML = `Yanis Oulmane`

  return (
    <main className="main_content">
      <HomeIntro title={Data["home-intro"]} description={null} />
      <CardList title={"Projets jeu"} data={_projects_game} category={"games"} hash={"games"} />
      <CardList title={"Projets 3D"} data={_projects_3d} category={"3d"} hash={"model"} />
      <CardList title={"Projets web"} data={_projects_web} category={"web"} hash={"web"} />
    </main>
  );
}