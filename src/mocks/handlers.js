import { http } from "msw";
import { aboutPage } from "./aboutPage";

// Define handlers that correspond to your API endpoints
export const handlers = [
  // Mock handler for /api/site/about
  http.get("/api/site/about", () => {
    console.log("MSW intercepted request to /api/site/about");
    return new Response(JSON.stringify(aboutPage), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
