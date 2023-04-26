declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/reactivity' {
  // eslint-disable-next-line vue/prefer-import-from-vue
  import type { RefUnwrapBailTypes } from '@vue/reactivity';
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window;
  }
}
