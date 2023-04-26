import{d as g,a as I,o as A,b as E,w as P,e as U,u as n,f as R,g as s,n as F}from"./vue.esm-bundler.febe200e.js";const M="a[href], audio[controls], button, details, embed, iframe, img[usemap], input:not([type='hidden']), label, object[usemap], select, textarea, video[controls]";function G(e){return e.matches(M)}const J="button, input, optgroup, option, select, textarea, fieldset, link";function Q(e){return e.matches(J)}const W="button, input[type='button'], input[type='image'], input[type='reset'], input[type='submit'], summary";function X(e){return e.matches(W)}var Y;const Z=typeof window<"u";Z&&((Y=window==null?void 0:window.navigator)==null?void 0:Y.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function k(e){return typeof e=="function"?e():n(e)}function ee(e,a={}){const{disabled:r=!1}=a,t=s(()=>n(e)),i=s(()=>{if(!(!t.value||!Q(t.value)))return k(r)?"":void 0}),l=s(()=>{if(!(!t.value||i.value!==void 0))return k(r)?!0:void 0});return{disabled:i,ariaDisabled:l}}function ae(e){const a=s(()=>n(e));return{tabindex:s(()=>{if(a.value)return G(a.value)?void 0:"0"})}}function te(e){const a=s(()=>n(e));function r(l){var o;l.code==="Enter"&&(l.preventDefault(),(o=a.value)==null||o.click())}function t(l){var o;l.code==="Space"&&(l.preventDefault(),(o=a.value)==null||o.click())}const{tabindex:i}=ae(a);return{handleKeydown:r,handleKeyup:t,tabindex:i}}function ne(e,a={}){const{disabled:r=!1}=a,t=s(()=>n(e)),i=s(()=>{if(t.value)return X(t.value)?void 0:"button"}),l=s(()=>{if(t.value)return t.value.tagName==="BUTTON"||t.value.tagName==="INPUT"?"button":void 0}),{disabled:o,ariaDisabled:v}=ee(e,{disabled:r}),{handleKeydown:y,handleKeyup:B,tabindex:z}=te(e);return{role:i,type:l,disabled:o,ariaDisabled:v,handleKeydown:y,handleKeyup:B,tabindex:z}}const re=g({name:"HeadlessButton"}),le=g({...re,props:{as:{default:"button"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:a}){const r=e,t=I(null);function i(){r.disabled||a("click")}const{role:l,type:o,disabled:v,ariaDisabled:y,handleKeydown:B,handleKeyup:z,tabindex:j}=ne(t,{disabled:()=>r.disabled});return(H,ie)=>(A(),E(R(e.as),{ref_key:"element",ref:t,role:n(l),type:n(o),disabled:n(v),"aria-disabled":n(y),tabindex:n(j),onClick:i,onKeydown:n(B),onKeyup:n(z)},{default:P(()=>[U(H.$slots,"default")]),_:3},8,["role","type","disabled","aria-disabled","tabindex","onKeydown","onKeyup"]))}}),se=g({name:"YuButton"}),u=g({...se,props:{as:{default:"button"},disabled:{type:Boolean,default:!1},size:{default:"medium"},compact:{type:Boolean,default:!1},color:{default:"blue"},variant:{default:"default"},radius:{default:"medium"}},setup(e){const a=e,r=s(()=>({"yu-btn":!0,[`yu-btn--${a.size}`]:a.size,"yu-btn--compact":a.compact,[`yu-color-${a.color}`]:a.color,[`yu-btn--${a.variant}`]:a.variant,[`yu-radius-${a.radius}`]:a.radius}));return(t,i)=>(A(),E(n(le),{class:F(n(r)),as:e.as,disabled:e.disabled},{default:P(()=>[U(t.$slots,"default")]),_:3},8,["class","as","disabled"]))}});u.__docgenInfo={exportName:"default",displayName:"YuButton",description:"",tags:{},props:[{name:"as",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"compact",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"gray"'},{name:'"red"'},{name:'"pink"'},{name:'"grape"'},{name:'"violet"'},{name:'"indigo"'},{name:'"blue"'},{name:'"cyan"'},{name:'"teal"'},{name:'"green"'},{name:'"lime"'},{name:'"yellow"'},{name:'"orange"'}]},defaultValue:{func:!1,value:"'blue'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"light"'},{name:'"default"'},{name:'"outline"'},{name:'"subtle"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"radius",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"small"'},{name:'"medium"'},{name:'"large"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/yuuko-design/yuuko-design/packages/yuuko-ui/src/components/button/YuButton.vue"]};function b(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}const ue={title:"COMPONENTS/Button",component:u,argTypes:{disabled:{control:"boolean"},size:{control:"inline-radio",options:["small","medium","large"]},compact:{control:"boolean"},color:{control:"select",options:["dark","gray","red","pink","grape","violet","indigo","blue","cyan","teal","green","lime","yellow","orange"]},variant:{control:"inline-radio",options:["filled","light","default","outline","subtle"]},radius:{control:"inline-radio",options:["none","small","medium","large","full"]},default:{control:"text",table:{type:{summary:"default slot"}}}},args:{as:"button",variant:"filled",color:"blue",size:"medium",compact:!1,radius:"medium",disabled:!1,default:"Button"},parameters:{controls:{expanded:!0,exclude:["as"]},actions:{handles:["click","keydown","keyup"]}}},d={render:e=>({components:{YuButton:u},setup(){return{args:e}},template:'<YuButton v-bind="args">{{ args.default }}</YuButton>'})},c={render:e=>({components:{YuButton:u},setup(){return{args:e,variantList:["filled","light","default","outline","subtle"],capitalize:b}},template:`<div class="space-x-4">
        <template v-for="variant in variantList">
          <YuButton v-bind="args" :variant="variant" >{{ args.default }} {{ capitalize(variant) }}</YuButton>
        </template>
      </div>`}),argTypes:{variant:{table:{disable:!0}}}},m={render:e=>({components:{YuButton:u},setup(){return{args:e,colorList:["dark","gray","red","pink","grape","violet","indigo","blue","cyan","teal","green","lime","yellow","orange"],capitalize:b}},template:`<div class="grid gap-4 grid-cols-5">
        <template v-for="color in colorList">
          <YuButton v-bind="args" :color="color" >{{ args.default }} {{ capitalize(color) }}</YuButton>
        </template>
      </div>`}),argTypes:{color:{table:{disable:!0}}}},p={render:e=>({components:{YuButton:u},setup(){return{args:e,sizeList:["small","medium","large"],capitalize:b}},template:`<div class="space-x-4">
        <template v-for="size in sizeList">
          <YuButton v-bind="args" :size="size" >{{ args.default }} {{ capitalize(size) }}</YuButton>
        </template>
      </div>`}),argTypes:{size:{table:{disable:!0}}}},f={render:e=>({components:{YuButton:u},setup(){return{args:e,radiusList:["none","small","medium","large","full"],capitalize:b}},template:`<div class="space-x-4">
        <template v-for="radius in radiusList">
          <YuButton v-bind="args" :radius="radius" >{{ args.default }} {{ capitalize(radius) }}</YuButton>
        </template>
      </div>`}),argTypes:{radius:{table:{disable:!0}}}};var h,x,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      YuButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<YuButton v-bind="args">{{ args.default }}</YuButton>'
  })
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var L,T,K;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      YuButton
    },
    setup() {
      return {
        args,
        variantList: ['filled', 'light', 'default', 'outline', 'subtle'],
        capitalize
      };
    },
    template: \`<div class="space-x-4">
        <template v-for="variant in variantList">
          <YuButton v-bind="args" :variant="variant" >{{ args.default }} {{ capitalize(variant) }}</YuButton>
        </template>
      </div>\`
  }),
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
}`,...(K=(T=c.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var S,_,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      YuButton
    },
    setup() {
      return {
        args,
        colorList: ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'],
        capitalize
      };
    },
    template: \`<div class="grid gap-4 grid-cols-5">
        <template v-for="color in colorList">
          <YuButton v-bind="args" :color="color" >{{ args.default }} {{ capitalize(color) }}</YuButton>
        </template>
      </div>\`
  }),
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var N,V,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    components: {
      YuButton
    },
    setup() {
      return {
        args,
        sizeList: ['small', 'medium', 'large'],
        capitalize
      };
    },
    template: \`<div class="space-x-4">
        <template v-for="size in sizeList">
          <YuButton v-bind="args" :size="size" >{{ args.default }} {{ capitalize(size) }}</YuButton>
        </template>
      </div>\`
  }),
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,$,O;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      YuButton
    },
    setup() {
      return {
        args,
        radiusList: ['none', 'small', 'medium', 'large', 'full'],
        capitalize
      };
    },
    template: \`<div class="space-x-4">
        <template v-for="radius in radiusList">
          <YuButton v-bind="args" :radius="radius" >{{ args.default }} {{ capitalize(radius) }}</YuButton>
        </template>
      </div>\`
  }),
  argTypes: {
    radius: {
      table: {
        disable: true
      }
    }
  }
}`,...(O=($=f.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const de=["Basic","Variant","Color","Size","Radius"];export{d as Basic,m as Color,f as Radius,p as Size,c as Variant,de as __namedExportsOrder,ue as default};
//# sourceMappingURL=YuButton.stories.8841f3d2.js.map
