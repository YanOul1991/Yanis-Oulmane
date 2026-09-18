// SkillsList

import "./SkillsList.css"

export default function SkillsList({ title, list }) {
  return (
    <div className="skills_subsec">
      <div className="skills_subsec_title">{title.toUpperCase()}: </div>
      <div className="skills_list">
        {
          list != null ? list.map((element, index) => {
            return (
              <div className="skill_item" style={{borderColor: `${element.bgStyle}`}}>
                {/* <p className="skill_item_bg"></p> */}
                <div className="skill_item_label" id={index}>{element.label}</div>
                <img className="skill_item_image" src={`images/logo/${element.fileLogo}.svg`} alt={`${element.label} icon`} />
              </div>
            )
          }) : null
        }
      </div>
    </div>
  );
}