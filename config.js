// ─────────────────────────────────────────────────────────────
//  KONFIGURACJA FIREBASE — wklej tutaj dane ze swojego projektu
// ─────────────────────────────────────────────────────────────
//
//  Jak zdobyć te dane? Zobacz README.md (sekcja "Krok 1: Firebase").
//  Skopiuj obiekt firebaseConfig z konsoli Firebase i wklej poniżej.
//
//  UWAGA: te klucze NIE są tajne — mogą być publiczne w kodzie strony.
//  Bezpieczeństwo zapewniają reguły bazy (Realtime Database Rules),
//  które opisano w README.
//
window.CLIDE_CONFIG = {
  // ── Firebase ──────────────────────────────────────────────
  firebase: {
    apiKey: "WKLEJ_API_KEY",
    authDomain: "WKLEJ_PROJEKT.firebaseapp.com",
    databaseURL: "https://WKLEJ_PROJEKT-default-rtdb.firebaseio.com",
    projectId: "WKLEJ_PROJEKT",
    storageBucket: "WKLEJ_PROJEKT.appspot.com",
    messagingSenderId: "WKLEJ_SENDER_ID",
    appId: "WKLEJ_APP_ID"
  },

  // ── Wygląd / teksty bota ──────────────────────────────────
  botName: "Clide",
  poweredBy: "powered by Clide",
  welcome: "Cześć! Jestem Clide 👋 Zadaj mi dowolne pytanie.",
  placeholder: "Napisz wiadomość...",

  // Hasło do panelu operatora (admin.html).
  // To tylko prosta bariera — NIE jest to prawdziwe zabezpieczenie.
  adminPassword: "zmien-to-haslo"
};
