import { createI18n } from 'vue-i18n';
import locales from './locales';

export default createI18n({
  locale: localStorage.getItem('locale') ?? 'zh',
  messages: locales,
});