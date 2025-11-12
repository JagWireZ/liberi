import { type RouteConfig, route, index } from "@react-router/dev/routes";

// Match all page.tsx files under ./pages, including nested ones
const pages = import.meta.glob('./pages/**/page.tsx');

// Helper to convert file path to route path
function pathFromFile(file: string): string {
  const relative = file
    .replace('./pages/', '')          // remove base
    .replace(/\/page\.tsx$/, '')      // remove filename
    .replace(/\[([^\]]+)\]/g, ':$1'); // convert dynamic segments
  return relative === 'home' ? '' : relative;
}

// Generate route config
const routes: RouteConfig = Object.keys(pages).map((file) => {
  const path = pathFromFile(file);
  return path === '' ? index(file) : route(path, file);
});

export default routes;
