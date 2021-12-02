import React from 'react';
import EditableText from './components/EditableText';
import EducationalInstitution from './components/EducationalInstitution';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalInstitutions: [<EducationalInstitution />],
      workExperiences: [<WorkExperience />],
    };
    this.addEducationalInstitution = this.addEducationalInstitution.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
  }

  addEducationalInstitution() {
    this.setState({
      educationalInstitutions: [
        ...this.state.educationalInstitutions,
        <EducationalInstitution />,
      ],
    });
  }

  addWorkExperience() {
    this.setState({
      workExperiences: [...this.state.workExperiences, <WorkExperience />],
    });
  }

  render() {
    const education = this.state.educationalInstitutions.map(
      (educationalInstitution, index) => {
        return <li key={index}>{educationalInstitution}</li>;
      }
    );

    const work = this.state.workExperiences.map((workExperience, index) => {
      return <li key={index}>{workExperience}</li>;
    });

    return (
      <div className="App">
        <div className="personal-info">
          <EditableText text="Name" />
          <EditableText text="Email" />
          <EditableText text="Phone" />
          <EditableText text="Description" inputType="textarea" />
        </div>
        <div className="educational-experience">
          <ul className="education-list">{education}</ul>
          <button onClick={this.addEducationalInstitution}>Add</button>
        </div>
        <div className="work-experience">
          <ul className="work-list">{work}</ul>
          <button onClick={this.addWorkExperience}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
