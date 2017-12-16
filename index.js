/*
* @Author: Oboo Chin
* @Date:   2017-12-16 14:20:59
* @Last Modified by:   Oboo Chin
* @Last Modified time: 2017-12-16 14:21:32
*/
import { StyleSheet, Dimensions } from "react-native";

const currentDeviceWidth = Dimensions.get("window").width;
const iPhoneSEWidth = 320;

// properties will be zoom
const scaleProps = [
  "width",
  "height",
  "maxHeight",
  "minHeight",
  "margin",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "padding",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "top",
  "left",
  "right",
  "bottom",
  "fontSize",
  "borderRadius",
];

const scale = currentDeviceWidth / iPhoneSEWidth;

const StyleTransformer = {};

const styleTransformer = styleObj => {
  Object.keys(styleObj).forEach(key => {
    if (scaleProps.includes(key)) {
      styleObj[key] *= scale;
    }
  });

  return styleObj;
};

StyleTransformer.create = (styles = {}) => {
  Object.keys(styles).forEach(key => {
    styles[key] = styleTransformer(styles[key]);
  });

  return StyleSheet.create(styles);
};

// export default StyleSheet;
export default StyleTransformer;

export const ts = v => v * scale;
