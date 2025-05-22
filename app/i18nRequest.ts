export function getLocalizedPath(pathname: string, locale: string) {
  const segments = pathname.split('/');
  if (['pt', 'en', 'es'].includes(segments[1])) {
    segments[1] = locale;
  } else {
    segments.unshift('', locale);
  }
  return segments.join('/');
}