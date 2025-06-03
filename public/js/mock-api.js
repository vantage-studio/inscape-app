// Import the aboutPage data
import { aboutPage } from "./aboutPage.js";
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

    // Check if the request is for '/api/site/about'
    if (typeof resource === "string" && resource.includes("/api/site/about")) {
      const responseConfig = createJsonResponse(aboutPage);
      return new Response(responseConfig.body, responseConfig);
    }

    // Check for any project endpoint (e.g., /api/site/chalet-b, /api/site/bunker-tower, etc.)
    // if (
    //   typeof resource === "string" &&
    //   resource.includes("/api/site/rotterdam-central-library")
    // ) {
    //   debugger;

    //   const redirectedUrl =
    //     "https://www.powerhouse-company.com/api/site/rotterdam-central-library";

    //   console.log("Redirecting to:", redirectedUrl);
    //   return originalFetch(redirectedUrl, config);
    // }

    // Mock rotterdam-central-library with local beaconOffice data
    if (resource.includes("/api/site/beacon-office")) {
      const responseConfig = createJsonResponse(beaconOffice);
      return new Response(responseConfig.body, responseConfig);
    }

    // For other requests, use the original fetch
    return originalFetch(resource, config);
  };

  console.log("Mock API script loaded successfully");
})();
