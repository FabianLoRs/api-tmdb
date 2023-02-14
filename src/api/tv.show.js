import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
// import { FAKE_POPULARS } from "./fake-data";

export class TVShowAPI {
  // AXIOS
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  // FETCH
  /*static async fetchPopulars() {
        try {
            const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`, {
                method: "GET",
            });
            const results = await response.json();
            console.log(results.results);
            return results.results;
        } catch (error) {
            console.log(error);
        }
    }*/

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
