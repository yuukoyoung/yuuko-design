import type { App, Plugin } from 'vue';
import * as components from './components';

const plugin: Plugin = function (app: App): void {
  Object.values(components).forEach((component) => {
    app.component(component.name, component);
  });
};

export default plugin;

export * from './components';
