import React from "react";
import ZenithGrid from "./component/ZenithGrid";
import { ZenithScanline } from "./component/ZenithScanline";
import { ZenithTitle } from "./component/ZenithTitle";
import { ZenithCard } from "./component/ZenithCard";
import { ZenithButton } from "./component/ZenithButton";

export default function App() {
  return (
    <div className="zenith-container">
      <ZenithGrid />
      <ZenithScanline />
      <ZenithTitle />

      <ZenithCard img="https://i.pravatar.cc/200">
        USERBO-WEB versi ZENITH++ dengan hologram grid, scanline, 
        floating card, dan neon glow.
      </ZenithCard>

      <ZenithButton url="https://t.me/ubottvios_probot" text="Buka Menu" />
    </div>
  );
}
