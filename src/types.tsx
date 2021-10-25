interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseNormalPart extends CoursePartBase {
  type: "normal";
  description: string;
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  description: string;
  exerciseSubmissionLink: string;
}

interface CourseBackend extends CoursePartBase {
  type: "special";
  description: string;
  requirements: Array<string>;
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseBackend;

export enum Gender {
  Male = "male",
  Female = "female",
}

export enum Alive {
  Yes = "yes",
  No = "no",
}

export interface Celebrity {
  id: string;
  full_name: string;
  birthday: string;
  country: string;
  alive: Alive;
  gender: Gender;
}

interface Athlete extends Celebrity {
  type: "athlete";
  sport: string;
  team: string;
  active: string;
}

interface Singer extends Celebrity {
  type: "singer";
  band: string;
  famous_song: string;
  albums_recorded: number;
  instrument?: string;
}

interface Musician extends Celebrity {
  type: "musician";
  band: string;
  famous_song: string;
  albums_recorded: string;
  instrument: string;
}

interface Polititian extends Celebrity {
  type: "polititian";
  position: string;
  years_in_power: string;
}

export type CelebrityTypes = Athlete | Singer | Musician | Polititian;

export interface TypeOption {
  value: string;
  label: string;
}

export interface ConfirmOption {
  value: string;
  label: string;
}
