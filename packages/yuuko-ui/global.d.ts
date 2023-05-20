// Vue 3
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    YuButton: typeof import('@yuukoyoung/yuuko-ui')['YuButton'];
    YuLink: typeof import('@yuukoyoung/yuuko-ui')['YuLink'];
  }
}

export {};
