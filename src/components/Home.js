import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

class Home extends Component {
  render() {
    return (
      <div className="font-monospace" >
        <Projects
          resumeProjects={this.props.resumeData.projects}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
          className='bg-tier-4'
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
          className='bg-secondary'
        />
      </div>
    );
  }
}

export default Home;
