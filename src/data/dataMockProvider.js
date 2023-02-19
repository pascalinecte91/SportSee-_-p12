import axios from "axios";

//*!  use axios to CONNECT with the backend API.  
//*!  @function getProfil
//*!  @param {string} url
//*! @returns data

const API_URL = "http://localhost:3000/";
	export const getProfil: (userId) => {
		return axios get(API_URL + `user/${userId}`);
	},

//------------------------------------------
	//*? @function get user performance
	//*  @param {number} userId
	//*  @returns {object} (user performance)

	getUserPerformance: (userId) => {
		const url = `user/${userId}/performance`;
		return getData(url);
	},

//------------------------------------------
	//*? @function get user activity
	//*  @param {number} userId
	//*  @returns {object}( user activity)

	getUserActivity: (userId) => {
		const url = `user/${userId}/activity`;
		return getData(url);
	},

//------------------------------------------
	//*? @function get user average sessions
	//*  @param {number} userId
	//*  @returns {object}( user average sessions)
	
	getUserAverageSessions: (userId) => {
    const url = `user/${userId}/average-sessions`;
    return getData(url);
  },
};
