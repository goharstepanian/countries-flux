import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const API = {
  getAll() {
    return instance.get("/all");
  },
  getCountry(name) {
    return instance.get(`/name/${name}`);
  },
};
