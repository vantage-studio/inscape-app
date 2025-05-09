// Import the aboutPage data
import { aboutPage } from "./aboutPage.js";

(function () {
  // Save the original fetch function
  const originalFetch = window.fetch;

  // Override the fetch function
  window.fetch = async (...args) => {
    const [resource, config] = args;

    // Check if the request is for '/api/site/about'
    if (typeof resource === "string" && resource.includes("/api/site/about")) {
      console.log("Intercepted request to /api/site/about");

      // Return the mock data from aboutPage
      return new Response(JSON.stringify(aboutPage), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, Content-Type, Accept",
        },
      });
    }

    // For other requests, use the original fetch
    return originalFetch(resource, config);
  };

  console.log("Mock API script loaded successfully");
})();
