import React from "react";
import ZenithGrid from "./components/ZenithGrid";
import { ZenithScanline } from "./components/ZenithScanline";
import { ZenithTitle } from "./components/ZenithTitle";
import { ZenithCard } from "./components/ZenithCard";
import { ZenithButton } from "./components/ZenithButton";

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

      <ZenithButton url="https://example.com" text="Buka Menu" />
    </div>
  );
}
