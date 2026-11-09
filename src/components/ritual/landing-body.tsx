"use client";

import { MarkedLandingBody } from "@/components/sites/marked/marked-landing-body";
import { useRitualChat } from "./chat-interface";

export function RitualLandingBody() {
  const { openChat } = useRitualChat();
  return <MarkedLandingBody variant="ritual" onStart={openChat} />;
}
