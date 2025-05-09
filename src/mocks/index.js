import { worker } from "./browser";

// Start the worker
worker.start({
  onUnhandledRequest: "bypass", // Don't warn about unhandled requests
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: {
      scope: "/",
    },
  },
});
