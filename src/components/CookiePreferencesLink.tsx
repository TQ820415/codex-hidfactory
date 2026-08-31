"use client";

import { cookiePreferenceEvent } from "@/components/CookieConsent";

export function CookiePreferencesLink() {
  return (
    <button className="cookie-preferences-link" type="button" onClick={() => window.dispatchEvent(new Event(cookiePreferenceEvent))}>
      Cookie preferences
    </button>
  );
}
