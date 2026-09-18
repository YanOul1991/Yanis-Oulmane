// Project

import "./ProjectInfo.css"
import React from "react";

export default function ProjectInfo({ projectName, descriptionPara, techUsed, ytbIframe, imageGallery }) {
  /**
   * Get the `techUsed` prop being a list of string that 
   * contains the name of each technology used.
   * 
   * The name is used to find the correct icon image from 
   * the public directory.
   * 
   * Therfore the name bust be correctly written
   */
  const RenderUsedTechs = () => {
    return (
      techUsed.map((element, index) => {
        return (
          <div key={index} className={`project_used_tech`}>
            {`${element}${index < techUsed.length - 1 ? '' : ''}`}
          </div>
        )
      })
    )
  };

  return (
    // Wrapper for the project
    <div className="project_info_wrp">
      {/* Name of the project */}
      <h2 className="project_name">{projectName}</h2>
      {/* List of used technologies for the realisation of the project */}
      <div className="project_used_techs">
        <div className="project_used_techs_label">Principales technologies Utiliés:</div>
        <div className="project_used_techs_list">
          {RenderUsedTechs()}
        </div>
      </div>
      {/* Simple paragraph description */}
      <div className="project_desc">{descriptionPara}</div>
      { /* Images and videos for the project will go here... once I have them */}
      {ytbIframe}
      {imageGallery}
    </div>
  )
}    