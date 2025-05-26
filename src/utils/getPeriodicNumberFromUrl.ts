const getPeriodicNumberFromUrl = (url: string): string => {
  const sanitizedUrl = url.endsWith("/")
    ? url.replace(/\/+$/, "") : url;
  const lastSlashIndex = sanitizedUrl.lastIndexOf("/");
  return sanitizedUrl.substring(lastSlashIndex + 1);
}

export default getPeriodicNumberFromUrl