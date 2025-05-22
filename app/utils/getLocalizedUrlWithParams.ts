export function getLocalizedUrlWithParams(
  currentPath: string,
  searchParams: URLSearchParams,
  newLocale: string
): string {
  const pathWithoutLocale = currentPath.replace(/^\/(pt|en|es)/, "");

  const query = searchParams.toString();
  const fullPath = `/${newLocale}${pathWithoutLocale}${query ? `?${query}` : ""}`;
  return fullPath;
}