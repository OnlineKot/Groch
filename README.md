# Groch

Czat **Groch** — lekki widget czatu na stronę, hostowany w całości na
**GitHub Pages** (statycznie) + darmowa baza **Firebase Realtime Database**
do obsługi wiadomości na żywo.

Pliki:
- **`index.html`** — strona czatu dla odwiedzających.
- **`admin.html`** — prywatny panel do obsługi rozmów (chroniony hasłem).
- **`config.js`** — konfiguracja Firebase + teksty i hasło.

> Link `admin.html` zachowaj dla siebie. Odwiedzającym udostępniaj tylko `index.html`.

---

## Krok 1: Firebase (darmowa baza na żywo) — ~3 min

1. Wejdź na **https://console.firebase.google.com** → **Add project**.
2. **Build → Realtime Database → Create Database** → wybierz region → uruchom.
3. **Project settings** (⚙️) → **Your apps** → **`</>`** (Web) → zarejestruj aplikację.
4. Skopiuj wartości `firebaseConfig` do **`config.js`**.

**Ważne:** po utworzeniu Realtime Database skopiuj jej dokładny adres i wklej do
`config.js` w polu `databaseURL` (np. `https://…-default-rtdb.firebaseio.com`
albo `https://…-default-rtdb.europe-west1.firebasedatabase.app` dla Europy).

### Reguły bazy (Realtime Database → Rules → Publish)

```json
{
  "rules": {
    "chats": {
      ".read": true,
      ".write": true,
      "$chatId": {
        ".read": true,
        ".write": true
      }
    },
    "config": {
      ".read": true,
      ".write": true
    }
  }
}
```

> Uwaga: `.read` na poziomie `chats` jest konieczny, aby panel operatora mógł
> wczytać listę wszystkich rozmów. Bez niego gość może pisać, ale panel nic nie
> zobaczy (uprawnienia w Firebase nie dziedziczą się „w górę”).

---

## Podpowiedzi AI (Groq) — przycisk „✨ AI” w panelu

W panelu obok pola odpowiedzi jest przycisk **✨ AI**. Po kliknięciu Groq
generuje propozycję odpowiedzi Grocha na podstawie rozmowy, wstawia ją do pola —
**możesz ją edytować** — a potem klikasz **Wyślij**.

**Klucz API dodajesz w Firebase (nie w kodzie):**
1. Załóż darmowy klucz na **https://console.groq.com** → API Keys → Create.
2. W Firebase → **Realtime Database** → **Data** → dodaj węzeł:
   - klucz: `config`  →  w środku: `groqKey`  →  wartość: `gsk_...` (Twój klucz)
   - efekt w bazie: `config/groqKey = "gsk_..."`
3. Model i „osobowość” Grocha ustawiasz w `config.js` (sekcja `groq`).

> ⚠️ **Bezpieczeństwo:** przy statycznej stronie klucz i tak trafia do przeglądarki,
> a przy otwartych regułach ktoś mógłby odczytać `config/groqKey` z bazy. Używaj
> **osobnego** klucza Groq tylko do tego, ustaw limity wydatków, i w razie czego
> możesz go w każdej chwili skasować w panelu Groq.

---

## Krok 2: Ustawienia w `config.js`

```js
botName: "Groch",
poweredBy: "powered by Clide",
welcome: "Cześć! Jestem Groch 👋 Zadaj mi dowolne pytanie.",
adminPassword: "twoje-tajne-haslo"   // hasło do admin.html
```

---

## Krok 3: Publikacja na GitHub Pages

1. Wypchnij pliki do repozytorium na GitHub.
2. **Settings → Pages → Source:** `Deploy from a branch` → wybierz gałąź
   z plikami, katalog `/ (root)` → zapisz.
3. Adresy po chwili:
   - Czat:  `https://TWOJANAZWA.github.io/NAZWA-REPO/`
   - Panel: `https://TWOJANAZWA.github.io/NAZWA-REPO/admin.html`

---

## Podgląd bez Firebase

Jeśli nie uzupełnisz `config.js`, `index.html` otworzy się w trybie podglądu
wyglądu (bez zapisu wiadomości) — przydatne do sprawdzenia stylu.
