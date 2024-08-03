import axios from "axios"; // Import the axios library

// Create an instance of axios with custom configuration
const AxiosService = axios.create({
  baseURL: "https://66371218288fedf6937f5611.mockapi.io", // Set the base URL for all requests made by this instance
  headers: {
    "Content-Type": "application/json", // Set the default content type for requests to application/json
  },
});

export default AxiosService;
