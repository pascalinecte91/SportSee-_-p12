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

  /**
   * Gère les erreurs lors de la récupération des données de l'utilisateur.
   * @param {Error} error - L'erreur générée lors de la récupération des données.
   * @throws {Error} - Une erreur indiquant qu'il est impossible de récupérer les données de l'utilisateur.
   */
  handleError(error) {
    console.log("Error fetching user data: ", error);
    console.error("Error fetching user data: ", error);
    throw new Error("Unable to fetch user data");
  }

  /**
   * Récupère le prénom de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<string|null>} - Une promesse qui résout avec le prénom de l'utilisateur ou null s'il n'est pas trouvé.
   */
  async getUserNameByUserId(userId) {
    // Vérifie si l'URL de la requête est correcte
    console.log("Request URL: ", this.baseURL + userId);

    // Effectue une requête GET avec axios
    return axios
      .get(this.baseURL + userId)
      .then((response) => {
        console.log("response: ", response);

        return response.data &&
          response.data.data &&
          response.data.data.userInfos &&
          response.data.data.userInfos.firstName
          ? response.data.data.userInfos.firstName
          : null;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  /**
   * Récupère le nom de famille de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<string|null>} - Une promesse qui résout avec le nom de famille de l'utilisateur ou null s'il n'est pas trouvé.
   */
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

  /**
   * Récupère les activités de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<BarChartDto>} - Une promesse qui résout avec les données des activités sous forme de BarChartDto.
   */
  async getActivitiesByUserId(userId) {
    console.log("Request URL: ", this.baseURL + userId + "/activity");
    return axios
      .get(this.baseURL + userId + "/activity")
      .then((response) => {
        console.log("response: ", response);

        // Gère la réussite de la requête
        const data = response.data.data.sessions;
        console.log("Data: ", data);

        // Accède aux données spécifiques
        return new BarChartDto(data, "Jour", "Kilogrammes", "Calories");
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  /**
   * Récupère les sessions de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<LineChartDto>} - Une promesse qui résout avec les données des sessions sous forme de LineChartDto.
   */
  async getSessionsByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/average-sessions")
      .then((response) => {
        console.log("response: ", response);

        // Gère la réussite de la requête
        const data = response.data.data.sessions;
        console.log("Data: ", data);

        // Mappe les données pour inclure le jour
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

  /**
   * Récupère les performances de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<RadarPerformanceDto>} - Une promesse qui résout avec les données des performances sous forme de RadarPerformanceDto.
   */
  async getPerformanceByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/performance")
      .then((response) => {
        console.log("response: ", response);

        // Gère la réussite de la requête
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

  /**
   * Récupère le score de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<RadarScoreDto>} - Une promesse qui résout avec le score de l'utilisateur sous forme de RadarScoreDto.
   */
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

  /**
   * Récupère les données nutritionnelles de l'utilisateur à partir de son ID.
   * @param {string} userId - L'ID de l'utilisateur.
   * @returns {Promise<NutrimentDto>} - Une promesse qui résout avec les données nutritionnelles sous forme de NutrimentDto.
   */
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
