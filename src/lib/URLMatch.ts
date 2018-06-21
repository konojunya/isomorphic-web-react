export default function(router: string, url: string): boolean {
  const routeMatcher = new RegExp(router.replace(/:[^\s/]+/g, "([\\w-]+)"));
  return url.match(routeMatcher) !== null;
}
