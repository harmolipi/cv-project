import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import EditableText from './components/EditableText';
import EducationalInstitution from './components/EducationalInstitution';
import WorkExperience from './components/WorkExperience';
import PreviewModeButton from './components/PreviewModeButton';

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
          <li key={educationalInstitution.id} className="mt-3">
            {educationalInstitution.school}
          </li>
        );
      }
    );

    const work = this.state.workExperiences.map((workExperience) => {
      return (
        <li key={workExperience.id} className="mt-3">
          {workExperience.work}
        </li>
      );
    });

    return (
      <section className="min-h-screen py-5 text-gray-600 body-font bg-gray-200">
        <div className="absolute top-1 right-1">
          <PreviewModeButton />
        </div>
        <div className="container px-5 mx-auto flex flex-col bg-white">
          <div className="lg:w-11/12 mx-auto">
            <div className="flex flex-col sm:flex-row my-10">
              <div className="sm:w-2/5 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center border-b pb-12">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">
                    <EditableText text="Name" />
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="font-light text-gray-600">
                    <EditableText text="Email" />
                  </p>
                  <p className="font-light text-gray-600">
                    <EditableText text="Phone number" />
                  </p>
                  <p className="font-light text-gray-600">
                    <FontAwesomeIcon icon={faGithub} />{' '}
                    <EditableText text="Github profile" />
                  </p>
                </div>

                <div className="mt-6 flex flex-col">
                  <p className="text-gray-600 text-left font-light mb-5">
                    <EditableText
                      text="Enter a short description about yourself here."
                      inputType="textarea"
                    />
                  </p>
                  <hr />
                  <h3 className="leading-relaxed text-left text-2xl text-indigo-500 mt-3 mb-2">
                    Skills
                  </h3>
                  <p className="text-gray-600 text-left font-light">
                    <EditableText
                      text="List your skills."
                      inputType="textarea"
                    />
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="leading-relaxed text-2xl text-indigo-500 my-4">
                  Experience
                </h3>
                <div className="work-experience">
                  <ul className="work-list list-disc list-outside">{work}</ul>
                  <button
                    className="hide-on-preview mx-auto my-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.addWorkExperience}
                  >
                    <span>+ Add</span>
                  </button>
                </div>
                <hr className="my-4" />
                <h3 className="leading-relaxed text-2xl text-indigo-500 my-4">
                  Education
                </h3>
                <div className="educational-experience">
                  <ul className="education-list list-disc list-outside">
                    {education}
                  </ul>
                  <button
                    className="hide-on-preview mx-auto my-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.addEducationalInstitution}
                  >
                    <span>+ Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
