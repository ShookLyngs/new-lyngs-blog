import component from './loading.vue';
import directive from './directive';
import { createInstallableComponent } from '@/assets/util/component';

export default createInstallableComponent(component, (app) => {
  app.use(directive);
});
