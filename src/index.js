/* Automatically generated by './build/bin/build-entry.js' */

import Input from '../packages/input/index.js';
import Button from '../packages/button/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
import locale from 'element-ui/src/locale';

const components = [
  Input,
  Button,
  Tooltip,
  Scrollbar
];

const install = (Vue, opts = {}) => {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.15.7',
  locale: locale.use,
  i18n: locale.i18n,
  install,

};
