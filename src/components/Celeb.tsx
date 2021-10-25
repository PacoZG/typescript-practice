import React from "react";
import { CelebrityTypes } from "../types";

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const getDate = (objectDate: string) => {
  const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
  const weekDays = "Mon,Tue,Wed,Thu,Fri,Sat,Sun".split(",");
  const date = new Date(objectDate);
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;
  const creationDate =
    weekDays[date.getDay()] + ", " + day + "." + months[date.getMonth()] + "." + date.getFullYear() + " @" + time;
  return creationDate;
};

const Celeb: React.FC<{ celeb: CelebrityTypes }> = ({ celeb }) => {
  switch (celeb.type) {
    case "athlete":
      return (
        <div className={"celeb"}>
          <h1>{celeb.full_name}</h1>
          <p>{celeb.type}</p>
          <p>{celeb.gender}</p>
          <p>{celeb.country}</p>
          <p>{getDate(celeb.birthday)}</p>
          <p>{celeb.sport}</p>
          <p>{celeb.team}</p>
          <p>{celeb.active}</p>
          <p>{celeb.alive}</p>
        </div>
      );
    case "musician":
      return (
        <div className={"celeb"}>
          <h1>{celeb.full_name}</h1>
          <p>{celeb.type}</p>
          <p>{celeb.gender}</p>
          <p>{celeb.band}</p>
          <p>{getDate(celeb.birthday)}</p>
          <p>{celeb.country}</p>
          <p>{celeb.famous_song}</p>
          <p>{celeb.instrument}</p>
          <p>{celeb.albums_recorded}</p>
        </div>
      );
    case "polititian":
      return (
        <div className={"celeb"}>
          <h1>{celeb.full_name}</h1>
          <p>{celeb.type}</p>
          <p>{celeb.gender}</p>
          <p>{getDate(celeb.birthday)}</p>
          <p>{celeb.country}</p>
          <p>{celeb.position}</p>
          <p>{celeb.years_in_power}</p>
        </div>
      );
    case "singer":
      return (
        <div className={"celeb"}>
          <h1>{celeb.full_name}</h1>
          <p>{celeb.type}</p>
          <p>{celeb.gender}</p>
          <p>{celeb.alive}</p>
          <p>{celeb.band}</p>
          <p>{getDate(celeb.birthday)}</p>
          <p>{celeb.country}</p>
          <p>{celeb.albums_recorded}</p>
          <p>{celeb.famous_song}</p>
        </div>
      );
    default:
      return assertNever(celeb);
  }
};

export default Celeb;
