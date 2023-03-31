// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  red: "#C03403",
  white: "#FFFFFF",
  grey: "#AAAAAA",
  greyLight: "#FAFAFA",
  green: "#156115",
  darkGreen: "#0f520f",
  blue: "#065EAD",
  darkBlue: "#034480",
  black: "#000000",
  offWhite: "#ACACAC",
  orange: "#FBA928",
  orangeDarker: "#EB9918",
  lightGrey: "#939AA4",
  greyBA: "#BABABA",
  lighterGrey: "#CDD4DA",
  dividerGrey: "#E5E5E5",
  deviderGrey2: "#F3F3F5",
  dividerGreyF5: "#F5F5F5",
  dividerGreyF9: "#F9F9F9",
  dividerGreyD9: "#D9D9D9",
  dividerGreyEA: "#EAEDF3",
  subtext: "#797DAC",
  angry: "#dd3333",
  dark_red: "#BE202E",
  light_red: "#F56666",
  light_green: "#1CDD73",
  dark_green: "#39A204",
  light_red1: "#D53A2C",
  green3DA: "#3DA9FF",
  green188: "#188FFC",
  green1890: "#1890FF",
  light_blue: "#8bc7fd",
  lighter_red: "#f7cacc",
  yellow: "#ffff00",
  yellow1: "#c5c01e",
  greenTitle: "#0D45E9",
  greenFinished: "#32CD32",
  bluePrimary: "#0066B3",
  blueAction: "#0091FF",
  yellow_light: "#FFBC3B",
  blueButton: "#0066B3",
  // NEW NEW NEW NEW NEW
  border: "#D9D9D9",
  placeholder: "#ACACAC",
  failed: "#E71D36",
  primary: "#0066B3",

  // STATUSES
  all_content: "#0066B3",
  new_content: "#00D956",
  delivering_content: "#006a85",
  interacting_with_receiver_content: "#750185",
  delivered_content: "#00397d",
  finished_content: "#00762F",
  delay_content: "#AD3E00",
  failed_delivery_content: "#E71D36",
  returning_content: "#008D7C",
  returned_content: "#015e53",
  all_bg: "#FFFFFF;",
  new_bg: "#EFFFE8",
  delivering_bg: "#def6fc",
  interacting_with_receiver_bg: "#fbdbff",
  delivered_bg: "#d2e5fc",
  finished_bg: "#E0FFD3",
  delay_bg: "#FFE1D0",
  failed_delivery_bg: "#fce6e9",
  returning_bg: "#d2fcf7",
  returned_bg: "#82fff0",

  secondary: "#231F20",
  hyperlink: "#0091FF",
  background: "#F9F9F9",
  transparent: "#00000000",
  black50: "#00000088",
}

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
