import axios from "axios";
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import RadarScoreDto from "dto/RadarScoreDto";
import NutrimentDto from "dto/NutrimentDto";

// Use constants for values that do not change
const BASE_URL = "http://localhost:3000/user/";

/**
 * Class ApiProvider with functions to retrieve user data from an API.
 * @returns {ApiProvider}
 * @class
 */
class ApiProvider {
  constructor() {
    this.baseURL = BASE_URL;
    console.log(this.baseURL);
  }

  /**
   * Handles errors when retrieving user data.
   * @param {Error} error - The error generated when retrieving the data.
   * @throws {Error} - An error indicating that user data cannot be fetched.
   */
  handleError(error) {
    console.log("Error fetching user data: ", error);
    console.error("Error fetching user data: ", error);
    throw new Error("Unable to fetch user data");
  }

  /**
   * Retrieves the user's first name by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<string|null>} - A promise that resolves with the user's first name or null if not found.
   */
  async getUserNameByUserId(userId) {
    // Check if the request URL is correct
    console.log("Request URL: ", this.baseURL + userId);

    // Make a GET request using axios
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
   * Retrieves the user's last name by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<string|null>} - A promise that resolves with the user's last name or null if not found.
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
   * Retrieves user activities by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<BarChartDto>} - A promise that resolves with the activity data in the form of BarChartDto.
   */
  async getActivitiesByUserId(userId) {
    console.log("Request URL: ", this.baseURL  + userId + "/activity");

    return axios
      .get(this.baseURL + userId + "/activity")
      .then((response) => {
        console.log("response: ", response);

        // Handle successful request
        const data = response.data.data.sessions;
        console.log("Data: ", data);

        // Access specific data
        return new BarChartDto(data, "Day", "Kilograms", "Calories");
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  /**
   * Retrieves user sessions by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<LineChartDto>} - A promise that resolves with the session data in the form of LineChartDto.
   */
  async getSessionsByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/average-sessions")
      .then((response) => {
        console.log("response: ", response);

        // Handle successful request
        const data = response.data.data.sessions;
        console.log("Data: ", data);

        // Map data to include the day
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
   * Retrieves user performance by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<RadarPerformanceDto>} - A promise that resolves with the performance data in the form of RadarPerformanceDto.
   */
  async getPerformanceByUserId(userId) {
    console.log(userId);
    return axios
      .get(this.baseURL + userId + "/performance")
      .then((response) => {
        console.log("response: ", response);

        // Handle successful request
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
   * Retrieves the user's score by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<RadarScoreDto>} - A promise that resolves with the user's score in the form of RadarScoreDto.
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
   * Retrieves user nutritional data by user ID.
   * @param {string} userId - The user ID.
   * @returns {Promise<NutrimentDto>} - A promise that resolves with the nutritional data in the form of NutrimentDto.
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
