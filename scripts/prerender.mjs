import { readFile, writeFile } from "node:fs/promises"
import { createElement } from "react"
import { renderToString } from "react-dom/server"
import { createServer } from "vite"

// Publish the same portfolio as static HTML so it is readable before JavaScript runs.
// The client mounts the interactive app as usual, including its loading curtain.
const server = await createServer({
  appType: "custom",
  mode: "production",
  server: { middlewareMode: true, watch: null },
})

try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx")
  const markup = renderToString(createElement(App))
  const output = new URL("../dist/index.html", import.meta.url)
  const html = await readFile(output, "utf8")
  const root = '<div id="root"></div>'
  if (!html.includes(root)) throw new Error("Could not find the portfolio root")
  await writeFile(output, html.replace(root, () => `<div id="root">${markup}</div>`))
  console.log("Pre-rendered portfolio content into dist/index.html")
} finally {
  await server.close()
}
