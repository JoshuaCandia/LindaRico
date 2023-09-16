import withMT from "@material-tailwind/react/utils/withMT";

const tailwindConfig = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BlueLight: "#FED7AA",
        BlueSemiLight: "#FDBA74",
        BlueNormal: "#FB923C",
        BlueSemiDark: "#F97316",
        BlueDark: "#EA580C",
      },
      fontFamily: {
        customFontInter: ["Inter", "sans"],
        customFontRoboto: ["Roboto", "sans"],
      },
    },
  },
  plugins: [],

  styles: {
    "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');":
      "",
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');":
      "",
  },
};

export default withMT(tailwindConfig);
