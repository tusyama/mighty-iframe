import { useState } from "react";
import "./styles.css";

type Props = {
  logoSrc: string;
  color?: string;
  theme: "dark" | "light";
  size?: number;
};

const PartnerLoader = ({ logoSrc, theme, color, size = 200 }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`container ${theme}`} onClick={() => setIsPlaying(true)}>
      <div
        className="animation center-positioned"
        style={{ width: size, height: size }}
      >
        <div className={`logo-container ${isPlaying ? "playing" : ""}`}>
          <img src={logoSrc} className="logo" />
        </div>
      </div>
      <div
        className={`bg-round center-positioned ${isPlaying ? "playing" : ""}`}
        style={{
          width: size * 1.2,
          height: size * 1.2,
          borderWidth: size * 0.17,
        }}
      >
        {/* FIRST */}
        <div className="border-box center-positioned">
          <div
            className={`border-thick center-positioned arc ${
              isPlaying ? "playing" : ""
            } ${theme}`}
            style={{
              borderWidth: size * 0.07,
            }}
          />
          <div
            className={`border-thin center-positioned arc-white arc ${
              isPlaying ? "playing" : ""
            } ${theme}`}
          />
        </div>

        {/* FIRST */}
        <div className="border-box center-positioned">
          <div
            className={`border-thick center-positioned arc second ${
              isPlaying ? "playing" : ""
            } ${theme}`}
            style={{
              borderWidth: size * 0.07,
            }}
          />
          <div
            className={`border-thin center-positioned arc-white arc second ${
              isPlaying ? "playing" : ""
            } ${theme}`}
          />
        </div>

        {/* FIRST */}
        <div className="border-box center-positioned">
          <div
            className={`border-thick center-positioned arc third ${
              isPlaying ? "playing" : ""
            } ${theme}`}
            style={{
              borderWidth: size * 0.07,
            }}
          />
          <div
            className={`border-thin center-positioned arc-white arc third ${
              isPlaying ? "playing" : ""
            } ${theme}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerLoader;
