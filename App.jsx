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

      <ZenithCard img="https://files.catbox.moe/5ehjkx.jpg">
        A Telegram Userbot is an automation system that operates using a personal Telegram account. It allows users to perform various actions quickly—such as managing groups, monitoring activity, executing specific commands, or running routine tasks—directly through their own account without requiring additional apps.

A userbot is intended for light automation, account utilities, and productivity features, and not for activities that violate platform policies such as spam, malicious links, phishing, or abusive automation. All usage must comply with Telegram’s rules and must not be used for harmful purposes.

Common features often included in a userbot:

Automated commands (auto-reply, auto-approve, auto-welcome).

Faster group or channel management.

Retrieving certain data based on the user’s needs.

Quick actions such as mentions, internal safe broadcasts (not spam), and account utilities.


A userbot helps simplify tasks, but the user remains fully responsible for any action executed by their account. Always use it responsibly, safely, and within the allowed guidelines.
      </ZenithCard>

      <ZenithButton url="https://t.me/ubottvios_probot" text="Buka Menu" />
    </div>
  );
}
