module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        cyan_800_b2: "#198c92b2",
        bluegray_900_66: "#2e173966",
        pink_902: "#841531",
        red_600: "#e52a48",
        pink_900: "#991737",
        pink_901: "#831530",
        black_900_3f: "#0000003f",
        pink_900_68: "#99163668",
        black_900: "#000000",
        bluegray_900_b2: "#2e1739b2",
        orange_50_99: "#fbecdc99",
        yellow_900: "#fc8d12",
        orange_300_6b: "#ffae546b",
        black_900_4c: "#0000004c",
        bluegray_100: "#d9d9d9",
        indigo_500_b2: "#3963ceb2",
        orange_300: "#ffae54",
        pink_900_cc: "#991636cc",
        orange_100: "#ffd19f",
        bluegray_900: "#2e1739",
        orange_50: "#fbecdc",
        orange_51: "#fceddc",
        black_900_51: "#00000051",
        cyan_800: "#1a8c92",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius5: "5px",
        radius10: "10px",
        radius15: "15px",
        radius17: "17px",
        radius20: "20px",
        radius175: "17.5px",
        radius235: "23.5px",
      },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls3: "3px",
        ls4: "4px",
        ls5: "5px",
        ls6: "6px",
        ls7: "7px",
      },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: {
        bs: "0px 1px  10px 3px #0000003f",
        bs1: "0px 4px  10px 0px #0000004c",
        bs4: "0px 4px  10px 1px #0000004c",
        bs3: "0px 4px  12px 1px #0000007f",
        bs2: "0px 4px  20px 0px #0000007f",
      },
      borderWidth: { bw3: "3px", bw5: "5px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
