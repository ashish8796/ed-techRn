declare module "*.json" {
  const value: [];
  export default value;
}

declare module "*.svg" {
  import Svg from "react-native-svg";
  const content: Svg;
  export default content;
}
