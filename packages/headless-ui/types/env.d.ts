declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// eslint-disable-next-line vue/prefer-import-from-vue, @typescript-eslint/no-unused-vars
import { RefUnwrapBailTypes } from '@vue/reactivity';

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window;
  }
}
