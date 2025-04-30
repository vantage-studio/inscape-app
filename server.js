const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

// Use Vercel's PORT or default to 3000
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "font/otf",
};

// Map of remote font paths to local font paths
const FONT_MAP = {
  "/static/fonts/Graphik-Regular.woff2": "/fonts/Graphik-Regular.woff2",
  "/static/fonts/Graphik-Regular.woff": "/fonts/Graphik-Regular.woff",
  "/static/fonts/Graphik-Regular.ttf": "/fonts/Graphik-Regular.ttf",
  "/static/fonts/Graphik-Medium.woff2": "/fonts/Graphik-Medium.woff2",
  "/static/fonts/Graphik-Medium.woff": "/fonts/Graphik-Medium.woff",
  "/static/fonts/Graphik-Medium.ttf": "/fonts/Graphik-Medium.ttf",
  "/static/fonts/Graphik-Light.woff2": "/fonts/Graphik-Light.woff2",
  "/static/fonts/Graphik-Light.woff": "/fonts/Graphik-Light.woff",
  "/static/fonts/Graphik-Light.ttf": "/fonts/Graphik-Light.ttf",
};

const server = http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);

  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request for CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Check if this is a font request that needs to be mapped
  const url = req.url;
  if (FONT_MAP[url]) {
    const localPath = path.join(__dirname, "public", FONT_MAP[url]);
    console.log(`Font request mapped to: ${localPath}`);
    const extname = path.extname(localPath);
    const contentType = MIME_TYPES[extname] || "application/octet-stream";

    fs.readFile(localPath, (error, content) => {
      if (error) {
        console.error(`Error reading font file: ${error.message}`);
        res.writeHead(404);
        res.end("Font not found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
    return;
  }

  // Handle the root path and all other paths
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(`Attempting to serve: ${filePath}`);

  // Remove query parameters from filePath
  filePath = filePath.split("?")[0];

  // Get the file extension
  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || "application/octet-stream";

  // Read the file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        console.error(`File not found: ${filePath}`);
        // If file not found, serve 404
        const notFoundPath = path.join(__dirname, "public", "404.html");
        console.log(`Serving 404 page: ${notFoundPath}`);
        fs.readFile(notFoundPath, (error, content) => {
          if (error) {
            res.writeHead(404);
            res.end("404 Not Found");
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        });
      } else {
        console.error(`Server error: ${error.code}`);
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      console.log(`Successfully serving: ${filePath}`);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("received: %s", message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Only start the server if we're not in a Vercel environment
if (process.env.NODE_ENV !== "production") {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Serving files from: ${path.join(__dirname, "public")}`);
  });
}

// Export the server for Vercel
module.exports = server;
