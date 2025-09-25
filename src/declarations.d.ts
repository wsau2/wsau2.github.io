// for Vue component (if using vue-svg-loader or similar)
// declare module "*.svg" {
//     import { DefineComponent } from "vue";
//     const component: DefineComponent<{}, {}, any>;
//     export default component;
//   }
  
// Tell TypeScript that imports ending in ?component are Vue components
declare module "*.svg?component" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}