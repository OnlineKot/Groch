# Clide 🤖 — "powered by Clide"

Czat, który **wygląda jak AI**, ale w rzeczywistości odpowiada **człowiek** (Ty)
przez ukryty panel operatora. Działa w całości na **GitHub Pages** (strona
statyczna) + darmowa baza **Firebase Realtime Database** do przekazywania
wiadomości na żywo.

- **`index.html`** — strona dla gości. Widzą bota „Clide”, „powered by Clide”,
  wskaźnik „pisze...”. Nie wiedzą, że po drugiej stronie jesteś Ty.
- **`admin.html`** — Twój ukryty panel. Widzisz wszystkie rozmowy i odpisujesz
  jako Clide. Gdy zaczynasz pisać, gość widzi animację „Clide pisze...”.
- **`config.js`** — tu wklejasz dane Firebase i teksty bota.

---

## Krok 1: Firebase (darmowa baza na żywo) — ~3 min

1. Wejdź na **https://console.firebase.google.com** i kliknij **Add project**
   (nazwa dowolna, np. `clide`). Google Analytics możesz wyłączyć.
2. W menu po lewej: **Build → Realtime Database → Create Database**.
   - Lokalizacja: dowolna (np. `europe-west1`).
   - Reguły: wybierz **Start in test mode** (na start; niżej jest wersja
     bezpieczniejsza).
3. Wróć do **Project settings** (⚙️ obok „Project Overview”) → sekcja
   **Your apps** → kliknij ikonę **`</>`** (Web) → zarejestruj aplikację.
4. Skopiuj wyświetlony obiekt `firebaseConfig` i **wklej jego wartości do
   `config.js`** (klucze `apiKey`, `databaseURL`, `projectId` itd.).

> Te klucze mogą być publiczne — o bezpieczeństwie decydują reguły bazy.

### Reguły bazy (zalecane zamiast test mode)

W **Realtime Database → Rules** wklej i opublikuj:

```json
{
  "rules": {
    "chats": {
      "$chatId": {
        ".read": true,
        ".write": true,
        "messages": { ".read": true, ".write": true },
        "typing":   { ".read": true, ".write": true },
        "meta":     { ".read": true, ".write": true }
      }
    }
  }
}
```

To wystarczy do prostego czatu. (Test mode automatycznie wygasa po 30 dniach —
dlatego lepiej ustawić powyższe.)

---

## Krok 2: Ustaw teksty i hasło w `config.js`

```js
botName: "Clide",
poweredBy: "powered by Clide",
welcome: "Cześć! Jestem Clide 👋 Zadaj mi dowolne pytanie.",
adminPassword: "twoje-tajne-haslo"   // hasło do admin.html
```

---

## Krok 3: Publikacja na GitHub Pages

1. Wypchnij te pliki do repozytorium na GitHub (już na tym branchu 😉).
   Aby strona żyła, scal branch do gałęzi głównej **albo** ustaw Pages na ten branch.
2. Na GitHubie: **Settings → Pages**.
3. **Source:** `Deploy from a branch`. **Branch:** wybierz gałąź z tymi plikami
   (np. `main`) i katalog `/ (root)`. Zapisz.
4. Po chwili strona będzie pod adresem:
   - Czat dla gości: `https://TWOJANAZWA.github.io/NAZWA-REPO/`
   - Twój panel:      `https://TWOJANAZWA.github.io/NAZWA-REPO/admin.html`

Rozsyłaj gościom **tylko** pierwszy link. Drugi zachowaj dla siebie.

---

## Jak używać na co dzień

1. Otwórz `admin.html` na telefonie lub komputerze i zaloguj się hasłem.
2. Gdy ktoś napisze na stronie — pojawi się nowa rozmowa (z zieloną kropką).
3. Klikasz rozmowę i odpisujesz. Dla gościa wygląda to jak odpowiedź AI „Clide”.
4. Gdy piszesz, gość widzi „Clide pisze...” — efekt myślącego bota.

---

## Bez Firebase? (podgląd wyglądu)

Jeśli nie uzupełnisz `config.js`, `index.html` i tak się otworzy w trybie demo
(sam wygląd, bez prawdziwych odpowiedzi) — przyda się do sprawdzenia stylu.

---

## Uwaga

To „Wizard of Oz” — czat udający AI, w którym odpowiada człowiek. Używaj uczciwie.
Jeśli rozmawiasz z osobami, które mogłyby poczuć się wprowadzone w błąd, rozważ
dopisanie gdzieś, że po drugiej stronie bywa człowiek.
