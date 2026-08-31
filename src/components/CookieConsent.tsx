"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_PREFERENCE_KEY = "hidriving-cookie-preference";
const OPEN_PREFERENCES_EVENT = "hidriving:open-cookie-preferences";

type Preference = "accepted" | "essential";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(window.localStorage.getItem(COOKIE_PREFERENCE_KEY) === null);

    const openPreferences = () => setIsOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  function savePreference(preference: Preference) {
    window.localStorage.setItem(COOKIE_PREFERENCE_KEY, preference);
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <aside className="cookie-banner" aria-labelledby="cookie-title" role="dialog" aria-modal="false">
      <h2 id="cookie-title">Cookie preferences</h2>
      <p>We use essential browser storage to remember this choice. No analytics or advertising cookies are active in the current website version.</p>
      <p><Link className="cookie-banner-link" href="/privacy-policy">Read the Privacy Policy</Link></p>
      <div className="button-row">
        <button className="button" type="button" onClick={() => savePreference("accepted")}>Accept</button>
        <button className="button button-secondary" type="button" onClick={() => savePreference("essential")}>Use essential only</button>
      </div>
    </aside>
  );
}

export const cookiePreferenceEvent = OPEN_PREFERENCES_EVENT;
