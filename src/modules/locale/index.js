// Functions
import { createI18n } from 'vue-i18n';
import { getDeviceLocale } from '@/modules/locale/util';
// Defines
import locales from './locales';

export default createI18n({
  locale: localStorage.getItem('locale') ?? getDeviceLocale() ?? 'en',
  messages: locales,
});