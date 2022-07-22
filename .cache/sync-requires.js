
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/addison/Development/personal/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/addison/Development/personal/portfolio/src/pages/404.tsx")),
  "component---src-pages-art-art-page-tsx": preferDefault(require("/Users/addison/Development/personal/portfolio/src/pages/art/{art.page}.tsx")),
  "component---src-pages-art-tsx": preferDefault(require("/Users/addison/Development/personal/portfolio/src/pages/art.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/addison/Development/personal/portfolio/src/pages/index.tsx")),
  "component---src-pages-tech-tsx": preferDefault(require("/Users/addison/Development/personal/portfolio/src/pages/tech.tsx"))
}

