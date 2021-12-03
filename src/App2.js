import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
      <section className="min-h-screen py-5 text-gray-600 body-font bg-gray-200">
        <div className="container px-5 mx-auto flex flex-col bg-white">
          <div className="lg:w-11/12 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
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

                <div className="mt-12 flex flex-col">
                  <p className="text-gray-600 text-left font-light">
                    <EditableText
                      text="Enter a short description about yourself here."
                      inputType="textarea"
                    />
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="leading-relaxed text-2xl text-indigo-500 mb-4">
                  Experience
                </h3>
                <div className="work-experience">
                  <ul className="work-list list-disc list-outside">{work}</ul>
                  <button
                    className="mx-auto my-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.addWorkExperience}
                  >
                    <span>+ Add</span>
                  </button>
                </div>
                <hr />
                <h3 className="leading-relaxed text-2xl text-indigo-500 my-4">
                  Education
                </h3>
                <div className="educational-experience">
                  <ul className="education-list list-disc list-outside">
                    {education}
                  </ul>
                  <button
                    className="mx-auto my-3 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.addEducationalInstitution}
                  >
                    <span>+ Add</span>
                  </button>
                </div>
                <p className="leading-relaxed mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
