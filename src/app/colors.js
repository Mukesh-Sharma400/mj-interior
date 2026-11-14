// Design tokens, exposed to styled-components as `theme.colors` and
// `theme.shadows`, and to plain CSS (globals.css) as CSS variables.

export const colors = {
  primary: "#c9a84c", // brand gold: active links, buttons, icons
  dark: "#111111", // button hover fill, hover text
  brown: "#2b1d16", // dark section and footer background, link hover
  brownLine: "#3e2723", // vertical lines on brown sections
  white: "#ffffff",
  text: "#000000",
  muted: "grey", // body copy and dividers on light backgrounds
  mutedLight: "lightgrey", // body copy on dark backgrounds
  star: "#fbbc04", // testimonial rating stars
  creditHover: "royalblue", // footer "Mukesh Sharma" link hover
  placeholder: "rgba(0, 0, 0, 0.5)",
  overlay: "rgba(0, 0, 0, 0.5)", // behind popups and over the hero image
  whiteTranslucent: "rgba(255, 255, 255, 0.2)",
  glass: "rgba(225, 225, 225, 0.3)", // frosted header, side menu, toast
  glassBorder: "rgba(225, 225, 225, 1)",
  cardBorder: "rgba(0, 0, 0, 0.1)",
  tabBackground: "rgba(0, 0, 0, 0.1)",
  gridLine: "rgba(128, 128, 128, 0.1)", // vertical lines on light sections
  inputBorder: "rgba(0, 0, 0, 0.2)",
  inputBorderFocus: "rgba(0, 0, 0, 0.5)",
};

export const shadows = {
  glass: "0 4px 15px rgba(225, 225, 225, 0.3)",
  popup: "0 4px 15px rgba(225, 225, 225, 0.5)",
  card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  menuItem: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
};

// Background with thin vertical lines every 200px, used by several sections
export const linedBackground = (line, background) => `
  background-image: repeating-linear-gradient(
    to right,
    ${line},
    ${line} 0.5px,
    transparent 0.5px,
    transparent
  );
  background-size: 200px 200px;
  background-color: ${background};
`;

// camelCase token name -> --color-kebab-case CSS variable
export const cssVariables = Object.entries(colors)
  .map(
    ([name, value]) =>
      `--color-${name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}: ${value};`,
  )
  .join("\n");
