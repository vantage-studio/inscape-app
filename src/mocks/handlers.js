import { http } from "msw";
import { aboutPage } from "./aboutPage";

// Define handlers that correspond to your API endpoints
export const handlers = [
  // Mock handler for /api/site/about
  http.get("*/api/site/about", () => {
    console.log("MSW intercepted request to /api/site/about");
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
  }),
];
