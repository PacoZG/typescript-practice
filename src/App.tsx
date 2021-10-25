import React, { useState } from "react";
import "./App.css";
// import { CoursePart } from "./types";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Total from "./components/Total";
// import { CelebrityTypes } from "./types";
import CelebsList from "./components/CelebsList";
import { observer } from "mobx-react";
import store from "./store";
import { CelebrityTypes } from "./types";
import AddCelebModal from "./components/AddCelebModal/index";
import { Button } from "semantic-ui-react";

const App: React.FC = () => {
  const [, setList] = useState([]);
  // const courseName = "Half Stack application development";
  // const courseParts: Array<CoursePart> = [
  //   {
  //     name: "Fundamentals",
  //     exerciseCount: 10,
  //     description: "This is the leisured course part",
  //     type: "normal",
  //   },
  //   {
  //     name: "Advanced",
  //     exerciseCount: 7,
  //     description: "This is the harded course part",
  //     type: "normal",
  //   },
  //   {
  //     name: "Using props to pass data",
  //     exerciseCount: 7,
  //     groupProjectCount: 3,
  //     type: "groupProject",
  //   },
  //   {
  //     name: "Deeper type usage",
  //     exerciseCount: 14,
  //     description: "Confusing description",
  //     exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
  //     type: "submission",
  //   },
  //   {
  //     name: "Backend development",
  //     exerciseCount: 21,
  //     description: "Typing the backend",
  //     requirements: ["nodejs", "jest"],
  //     type: "special",
  //   },
  // ];'

  React.useEffect(() => {
    fetch("http://localhost:3001/celebrities")
      .then((response) => response.json())
      .then((data: CelebrityTypes[]) => store.setCelebsList(data));
  }, [setList]);

  // const list: CelebrityTypes[] = store.celebrities;

  // console.log(list);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();
  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: CelebrityTypes) => {
    console.log({ values });
    const id = Math.floor(Math.random() * 1000);
    values.id = id.toString();
    try {
      store.addCeleb(values);
    } catch (e) {
      console.error(e);
    }
    closeModal();
  };

  return (
    <div className="App">
      <CelebsList celebrities={store.celebrities} />
      <AddCelebModal modalOpen={modalOpen} onSubmit={submitNewEntry} error={error} onClose={closeModal} />
      {/* <Header course={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} /> */}
      <Button onClick={() => openModal()}>Add One Celebrity</Button>
    </div>
  );
};

export default observer(App);
