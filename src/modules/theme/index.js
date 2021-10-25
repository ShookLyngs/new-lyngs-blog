import { createThemer } from '@lyngs/themer-vue';
import light from './themes/light';

export const { manager, install } = createThemer([ light ]);
export default { install };