import component from './loading.vue';
import directive from './directive';
import { createInstallableComponent } from '@/modules/util/component';

export default createInstallableComponent(component, (app) => {
  app.use(directive);
});
