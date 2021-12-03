import React from 'react';
import EditableText from './components/EditableText';
import EducationalInstitution from './components/EducationalInstitution';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalInstitutions: [],
      workExperiences: [],
    };
    this.addEducationalInstitution = this.addEducationalInstitution.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeEducationalInstitution =
      this.removeEducationalInstitution.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
  }

  addEducationalInstitution() {
    this.setState((prevState) => ({
      educationalInstitutions: [
        ...prevState.educationalInstitutions,
        {
          school: (
            <EducationalInstitution
              deleteSchool={this.removeEducationalInstitution}
              schoolNum={
                prevState.educationalInstitutions.at(-1)
                  ? prevState.educationalInstitutions.at(-1).id + 1
                  : 0
              }
            />
          ),
          id: prevState.educationalInstitutions.at(-1)
            ? prevState.educationalInstitutions.at(-1).id + 1
            : 0,
        },
      ],
    }));
  }

  addWorkExperience() {
    this.setState((prevState) => ({
      workExperiences: [
        ...prevState.workExperiences,
        {
          work: (
            <WorkExperience
              deleteWork={this.removeWorkExperience}
              workNum={
                prevState.workExperiences.at(-1)
                  ? prevState.workExperiences.at(-1).id + 1
                  : 0
              }
            />
          ),
          id: prevState.workExperiences.at(-1)
            ? prevState.workExperiences.at(-1).id + 1
            : 0,
        },
      ],
    }));
  }

  removeEducationalInstitution(toDelete) {
    this.setState((prevState) => ({
      educationalInstitutions: prevState.educationalInstitutions.filter(
        (educationalInstitution, i) => educationalInstitution.id !== toDelete
      ),
    }));
  }

  removeWorkExperience(toDelete) {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.filter(
        (workExperience) => workExperience.id !== toDelete
      ),
    }));
  }

  render() {
    const education = this.state.educationalInstitutions.map(
      (educationalInstitution) => {
        return (
          <li key={educationalInstitution.id}>
            {educationalInstitution.school}
          </li>
        );
      }
    );

    const work = this.state.workExperiences.map((workExperience) => {
      return <li key={workExperience.id}>{workExperience.work}</li>;
    });

    return (
      <div className="App">
        <div className="content container mx-auto">
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
      </div>
    );
  }
}

export default App;
