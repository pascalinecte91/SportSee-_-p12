import axios from "axios";
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import RadarScoreDto from "dto/RadarScoreDto";
import NutrimentDto from "dto/NutrimentDto";

// Utilisez des constantes pour les valeurs qui ne changent pas
const BASE_URL = "http://localhost:3000/user/";

class ApiProvider {
  constructor() {
    this.baseURL = BASE_URL;
  }

  // Ajoutez la méthode handleError pour gérer les erreurs
  handleError(error) {
    console.log("Error fetching user data: ", error);
    console.error("Error fetching user data: ", error);
    throw new Error("Unable to fetch user data");
  }

  async getUserNameByUserId(userId) {
    // check si l'URL de la requête est correcte
    console.log("Request URL: ", this.baseURL + userId);
    // axios pour requete GET
    return axios
      .get(this.baseURL + userId)
      .then((response) => {
        console.log("response: ", response);

        return response.data &&
          // si response.data existe
          response.data.data &&
          // si response.data.data existe
          response.data.data.userInfos &&
          // si response.data.data.userInfos existe
          response.data.data.userInfos.firstName
          ? // si response.data.data.userInfos.firstName existe
            response.data.data.userInfos.firstName
          : // si tout existe, on retourne response.data.data.userInfos.firstName
            null;
        // sinon on retourne null
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getUserLastNameByUserId(userId) {
    return axios
      .get(this.baseURL + userId)
      .then((response) => {
        console.log("response: ", response);

        return response.data &&
          response.data.userId &&
          response.data.userId.lastName
          ? response.data.userId.lastName
          : null;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getActivitiesByUserId(userId) {
    console.log("Request URL: ", this.baseURL + userId + "/activity");
    return axios
      .get(this.baseURL + userId + "/activity")
      .then((response) => {
        console.log("response: ", response);
        // handle success
        const data = response.data.data.sessions;
        console.log("Data: ", data);

        // access specific data
        return new BarChartDto(data, "Jour", "Kilogrammes", "Calories");
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getSessionsByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/average-sessions")
      .then((response) => {
        console.log("response: ", response);
        // handle success
        const data = response.data.data.sessions;
        console.log("Data: ", data);
        // map data to include day
        const sessionsWithDay = data.map((session) => ({
          day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
          sessionLength: session.sessionLength,
        }));
        return new LineChartDto(sessionsWithDay, "day", "sessionLength");
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getPerformanceByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/performance")
      .then((response) => {
        console.log("response: ", response);
        // handle success
        const data = response.data.data;
        const kind = data.kind;
        const values = data.data;
        console.log("Kind: ", kind);
        console.log("Values: ", values);

        console.log("Data: ", data);

        return new RadarPerformanceDto(data);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getScoreByUserId(userId) {
    return axios
      .get(this.baseURL + userId)
      .then((response) => {
        console.log("response: ", response);

        const data = response.data.data.score;

        return new RadarScoreDto(data);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getNutrimentByUserId(userId) {
    return axios
      .get(this.baseURL + userId)
      .then((response) => {
        console.log("response: ", response);

        const keyData = response.data.data.keyData;
        console.log("KeyData: ", keyData);

        return new NutrimentDto(keyData);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }
}

export default ApiProvider;
