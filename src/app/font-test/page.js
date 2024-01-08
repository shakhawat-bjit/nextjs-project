"use client";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../SilvercrushDEMO.otf" });

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

const Test = () => {
  return (
    <div>
      <p>This is font test</p>
      <br />
      {/* <h2 style={{ fontFamily: "Roboto" }}> System-1 to import google font</h2> */}
      <h2 className={roboto.className}>
        {" "}
        System-2 to import google font (no need to link inside head)
      </h2>

      <h2 className={myFont.className}>System-3 Custom Font </h2>

      <span>
        Here we are getting error, because two types of system is used to
        connect google font{" "}
      </span>
    </div>
  );
};

export default Test;
