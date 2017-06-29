/* Automatic generated by './build/bin/build-entry.js' */

import Grid from './components/emfe-grid/index';
import EmfeIcon from './components/emfe-icon/index';
import EmfeTooltip from './components/emfe-tooltip/index';

const emui = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeIcon,
  EmfeTooltip,
};

//, opts = {}
const install = (Vue) => {
  if (install.installed) return;

  Object.keys(emui).forEach((key) => {
    Vue.component(key, emui[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
};
