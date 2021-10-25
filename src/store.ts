// import React, { useState } from "react";
// import { useLocalObservable } from "mobx-react";
// import axios from "axios";
import { CelebrityTypes } from "./types";
import { makeAutoObservable } from "mobx";

class Store {
  celebrities: CelebrityTypes[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCelebsList(list: CelebrityTypes[]) {
    this.celebrities = list;
  }

  addCeleb(celeb: CelebrityTypes) {
    console.table(celeb);
    this.celebrities.push(celeb);
  }

  removeCeleb(id: string) {
    this.celebrities = this.celebrities.filter((celeb) => celeb.id !== id);
  }
}

const store = new Store();
export default store;
