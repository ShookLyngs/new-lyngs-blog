import locales from './locales';

export function getDeviceLocale() {
  if (navigator) {
    const { languages } = navigator;
    const names = Object.keys(locales);
    return languages.find(name => names.includes(name));
  }
}