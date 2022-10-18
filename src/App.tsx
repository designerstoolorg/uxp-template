import React from "react";
import webImage from "./assets/chrome.svg";
import PSImage from "./assets/adobe-photoshop.svg";
import XDImage from "./assets/adobe-xd.svg";

const getImageUrl = () => {
  if (process.env.HOST_XD) return XDImage;
  else if (process.env.HOST_PS) return PSImage;
  else if (process.env.HOST_WEB) return webImage;
  else return webImage;
};

const getLabel = () => {
  if (process.env.HOST_XD) return "Adobe XD";
  else if (process.env.HOST_PS) return "Adobe Photoshop";
  else if (process.env.HOST_WEB) return "Web";
  else return "Web";
};
const IMAGE_URL = getImageUrl();
const LABEL = getLabel();

export const App = ({ name, uiLocale, version }: AppProps) => {
  return (
    <div
      style={{
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <img src={IMAGE_URL} height="48" width="48" />
      <p>Hello From {LABEL}</p>
    </div>
  );
};

interface AppProps {
  name: string;
  uiLocale: string;
  version: string;
}
