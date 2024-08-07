export function removeSubdomain(url: string | undefined) {
  if (!url) return 'Unknown URL';
  return new URL(url).hostname
    .split('.')
    .reverse()
    .slice(0, 2)
    .reverse()
    .join('.');
}
