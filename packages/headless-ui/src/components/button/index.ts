import type { App, Plugin } from 'vue';
import HeadlessButton from './HeadlessButton.vue';

const plugin: Plugin = (app: App): void => {
  app.component(HeadlessButton.name, HeadlessButton);
};

export default plugin;

export { HeadlessButton };
