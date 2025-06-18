// Import the aboutPage data
// import { aboutPage } from "./aboutPage.js";
import { beaconOffice } from "./beaconOffice.js";

(function () {
  // Save the original fetch function
  const originalFetch = window.fetch;
  const createJsonResponse = (jsonData) => ({
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
    },
    body: JSON.stringify(jsonData),
  });

  // Override the fetch function
  window.fetch = async (...args) => {
    const [resource, config] = args;
    if (typeof resource === "string" && resource.includes("/api/site/about")) {
      const wordpressUrl = "https://inscap-api.local/wp-json/api/site/about";
      console.log("Transforming request to:", wordpressUrl);
      return originalFetch(wordpressUrl, config);
    } else if (!resource.includes("/api/site/homepage")) {
      const baseURL = "https://inscap-api.local/wp-json";
      const wordpressUrl = baseURL + resource;

      // Update config for cross-origin request
      const updatedConfig = {
        ...config,
        credentials: "omit", // Remove same-origin restriction
        mode: "cors", // Explicitly set CORS mode
      };
      return originalFetch(wordpressUrl, updatedConfig);
    }

    return originalFetch(resource, config);
  };

  console.log("Mock API script loaded successfully");
})();
