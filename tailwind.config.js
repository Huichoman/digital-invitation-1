/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "400px" },
    },
    extend: {
      colors: {
        bone: "#DAD1C0ff",
        kobicha: "#5D4529ff",
        resedaGreen: "#597159ff",
        isabelline: "#EFEEECff",
      },
      boxShadow: {
        custom: "0 0px 20px 3px rgba(0, 0, 0, 0.1)",
        shadow9: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        shadow10: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        shadow14:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        shadow28:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        shadow32:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        shadow33:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        shadow33l:
          "rgba(107, 112, 115, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        shadow53: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        shadow92:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        badScript: ["Bad Script", "cursive"],
      },
    },
  },
  plugins: [],
}
