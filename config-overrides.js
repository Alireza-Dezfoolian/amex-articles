const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

//FIXME: investigate why public-url only works in dev, and test not prod
const lightVars = {
  "@public-url": process.env.PUBLIC_URL,
  "@font-family": "Helvetica-Light",
  "@btn-height-base": "24px",
  "@btn-height-lg": "50px",
  "@btn-height-sm": "32px",
  "@btn-primary-bg": "#FFCC00",
  "@btn-disable-bg": "#D9D9D9",
  "@btn-primary-color": "#4F4C4D",
  "@btn-disable-color": "grey",
  "@border-color-base": "lightgrey",
  "@body-background": "white",
  "@component-background": "#FFF",
  "@layout-body-background": "#E9E9E9",
  "@heading-color": "#4F4C4D",
  "@text-color": "#4F4C4D",
  "@item-active-bg": "whitesmoke",
  "@item-hover-bg": "whitesmoke",
  "@input-bg": "#FFF",
  "@input-disabled-bg": "#FFF",
  "@input-height-base": "60px",
  "@input-height-lg": "50px",
  "@input-height-sm": "30px",
  "@input-addon-bg": "grey",
  "@input-hover-border-color": "#7A7A7A",
  "@input-placeholder-color": "#4F4C4D",
  "@btn-border-radius-base": "28px",
  "@btn-border-radius-sm": "12px",
  "@border-radius-base": "0px",
  "@border-radius-sm": "0px"
};

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  ); // change importing css to less
  config = rewireLess(config, env, {
    modifyVars: lightVars
  });
  return config;
};
