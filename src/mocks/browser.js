import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers
export const worker = setupWorker(...handlers);

// Check if mocking is enabled (you can set this via environment variable)
const isMockingEnabled = true; // Set this based on your environment variable

if (isMockingEnabled) {
  worker
    .start({
      onUnhandledRequest: "bypass", // Don't warn about unhandled requests
      serviceWorker: {
        url: "/mockServiceWorker.js",
        options: {
          scope: "/",
        },
      },
    })
    .then(() => {
      console.log("MSW worker started successfully");
    })
    .catch((error) => {
      console.error("MSW worker failed to start:", error);
    });
}
