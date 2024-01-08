"use client";

import Image from "next/image";
import darkImage from "../../../public/dark.jpg";

const Test = () => {
  console.log("darkImage: ", darkImage);
  return (
    <div>
      <p>This is image test</p>
      <br />
      <Image src={darkImage} alt="A Dark Image" />
      <br />
      <img src={darkImage?.src} alt="A Dark Image" />
      <br />

      <h2>External Image</h2>
      {/* need to comfigure for Image component */}
      <Image
        src="https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg"
        width={200}
        height={200}
        style={{ border: "1px solid red" }}
      />
      <br />

      {/* no need to configure for img tag */}
      <img
        src="https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg"
        alt="A external Dark Image"
        width="400"
        height="400"
      />
    </div>
  );
};

export default Test;
