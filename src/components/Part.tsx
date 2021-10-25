import React from "react";
import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch (part.type) {
    case "normal":
      return (
        <div key={part.name}>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <i>{part.description}</i>
        </div>
      );
    case "groupProject":
      return (
        <div key={part.name}>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>Project exercises: {part.groupProjectCount}</p>
        </div>
      );
    case "submission":
      return (
        <div key={part.name}>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <i>{part.description}</i>
          <p>Submit to: {part.exerciseSubmissionLink}</p>
        </div>
      );
    case "special":
      return (
        <div key={part.name}>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <i>{part.description}</i>
          <p>
            Require skills:{" "}
            {part.requirements.map((r) => (
              <span key={r}>{r}, </span>
            ))}
          </p>
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
