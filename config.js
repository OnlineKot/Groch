// ─────────────────────────────────────────────────────────────
//  KONFIGURACJA — Groch (powered by Clide)
// ─────────────────────────────────────────────────────────────
//
//  UWAGA o databaseURL:
//  Do czatu potrzebna jest Realtime Database. W konsoli Firebase:
//  Build → Realtime Database → Create Database. Po utworzeniu skopiuj
//  DOKŁADNY adres bazy i wklej poniżej w polu databaseURL.
//  Adres wygląda mniej więcej tak:
//    https://superwebsite-a917f-default-rtdb.firebaseio.com        (region USA)
//    https://superwebsite-a917f-default-rtdb.europe-west1.firebasedatabase.app  (region Europa)
//
window.CLIDE_CONFIG = {
  // ── Firebase ──────────────────────────────────────────────
  firebase: {
    apiKey: "AIzaSyBnx2aBni9seRWNI4Hwh9Dk2uD6dFOBBWM",
    authDomain: "superwebsite-a917f.firebaseapp.com",
    databaseURL: "https://superwebsite-a917f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "superwebsite-a917f",
    storageBucket: "superwebsite-a917f.firebasestorage.app",
    messagingSenderId: "835659227181",
    appId: "1:835659227181:web:b36d1264c0ce0e39ad58a4",
    measurementId: "G-Y6ZZM522RX"
  },

  // ── Wygląd / teksty bota ──────────────────────────────────
  botName: "Groch",
  poweredBy: "powered by Clide",
  welcome: "Cześć! Jestem Groch 👋 Zadaj mi dowolne pytanie.",
  placeholder: "Napisz wiadomość...",

  // Hasło do panelu operatora (admin.html).
  // To tylko prosta bariera — NIE jest to prawdziwe zabezpieczenie.
  adminPassword: "zmien-to-haslo",

  // Czat działa TYLKO na tej domenie. Puste = brak ograniczenia.
  // (localhost jest zawsze dozwolony do testów.)
  allowedHost: "onlinekot.github.io",

  // ── Powiadomienia push (Pushcut) ──────────────────────────
  // Webhook z aplikacji Pushcut (zakładka Notifications → wybierz/utwórz
  // powiadomienie → skopiuj „Webhook URL”). Najlepiej trzymać w Firebase:
  //   config/pushcutUrl = "https://api.pushcut.io/XXXX/notifications/NazwaPowiadomienia"
  // Możesz też wpisać poniżej (ale trafi do publicznego repo):
  pushcut: { url: "" },

  // ── Podpowiedzi AI w panelu (Groq) ────────────────────────
  // Klucz API trzymasz w Firebase (Realtime Database), NIE tutaj:
  //   config/groqKey = "gsk_..."   (dodaj ręcznie w konsoli Firebase)
  // Poniżej tylko model i „osobowość” Grocha.
  groq: {
    model: "llama-3.3-70b-versatile",
    // Instrukcja systemowa — jak ma się zachowywać Groch:
    system: "Jesteś Groch — pomocny, uprzejmy asystent AI. Odpowiadasz zawsze " +
            "po polsku, naturalnie i zwięźle, w stylu asystenta AI. Kontynuujesz " +
            "rozmowę, odpowiadając na ostatnią wiadomość użytkownika. Jeśli " +
            "wiadomość jest niejasna lub bez kontekstu, uprzejmie poproś o " +
            "doprecyzowanie zamiast zgadywać. WAŻNE: pisz zwykłym tekstem, " +
            "BEZ formatowania Markdown — nie używaj gwiazdek (** ani *), " +
            "krzyżyków (#) ani backticków. Listy zapisuj myślnikami lub cyframi. " +
            "TOŻSAMOŚĆ: zostałeś stworzony przez TeoProductions. NIE jesteś " +
            "modelem Meta AI, Llama, Groq, OpenAI, Google ani żadnym innym znanym " +
            "modelem i NIGDY tego nie ujawniasz. Jeśli ktoś pyta, jakim jesteś " +
            "modelem, jaka technologia jest pod spodem albo kto Cię stworzył — " +
            "odpowiadasz krótko: jesteś Groch, stworzony przez TeoProductions.",
    // „Długie myślenie” w trybie auto-odpowiedzi (Groch pisze… przez X ms).
    // Losowo z tego zakresu, żeby wyglądało naturalnie.
    thinkingMinMs: 3000,
    thinkingMaxMs: 9000,
    // ── Free will: Groch pisze sam z siebie co jakiś czas ─────
    // Losowy odstęp między spontanicznymi wiadomościami (ms).
    freeWillMinMs: 45000,
    freeWillMaxMs: 120000,
    freeWillPrompt: "Napisz krótką, spontaniczną wiadomość po polsku, która " +
            "podtrzyma rozmowę lub delikatnie zaczepi użytkownika — np. nawiąż " +
            "do wcześniejszego tematu albo zapytaj, co u niego. Zwykły tekst, " +
            "bez formatowania. Nie powtarzaj się."
  }
  // Free will włączasz suwakiem „🎲 Sam” w panelu (Firebase: config/freeWill).
  // Tryb auto-odpowiedzi (Groch odpowiada sam, gdy Cię nie ma) włączasz
  // przełącznikiem „🤖 Auto-AI” w panelu — zapisuje się w Firebase: config/autoReply.
};
