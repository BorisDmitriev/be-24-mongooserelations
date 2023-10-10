# BE-mongoose-relations

## Vorbereitung

In diesem Repository liegt eine `package.json`, die bereits mongoose und dotenv als dependency enthält.
In `beispiel.js` findest du den Startercode für den Verbindungsaufbau zur Datenbank.

Nach dem Clonen führe `npm install` aus.

Erstelle eine neue Textdatei mit dem Namen `.env` und füge ihr eine Zeile mit deiner Datenbankverbindung hinzu

```
MONGO=...
```

## 1 Street Fighter II Moves

Definieren wir zwei Schemen. Eins für Move und eins für Charakter.

Erstelle eine Datei `charakterModel.js`.

Moves enthalten:

-   `name` und `keys` als String (schreibe sie im Schema lieber klein)

Charaktere enthalten:

-   `name` als String und `specialMoves` als Array, dessen Elemente aus dem Subschema eingebunden werden.

Erstelle eine Datei `schreibCharakter.js` (mit Startercode), um einen Charakter in die Datenbank zu schreiben. Du sollst das Modell des Charakters importieren (mit `require`).

Ein Beispielcharakter:

-   name: Ryu.
-   specialMoves:
    -   name: `Hadoken`, keys: `↓ ↘ → P`
    -   name: `Tatsumaki Senpukyaku`, keys: `↓ ↙ ← K`
    -   name: `Shoryuken`, keys: `→ ↓ ↘ → P`

Führe dein Script aus und schau dir an, wie das gespeicherte Dokument in deiner Datenbank aussieht (z.B. mit MongoDB Compass).

Erstelle noch eine Datei `leseCharakter.js` (mit Startercode), um einen oder alle von dir bisher gespeicherten Charaktere aus der Datenbank zu lesen.

## 2 Artikel und Hersteller

Definieren wir zwei Schemen. Eins für `producer` (Hersteller) und eins für `article` (Artikel), das eine Referenz auf seine Hersteller enthält.

Erstelle eine Datei `herstellerModel.js`.

Hersteller enthalten:

-   `name` (Name) und `industry` (Branche), jeweils als String

**Bonus**: Lege eine _virtual property_ an mit einer Referenz auf Artikel.

Erstelle noch eine Datei `artikelModel.js`.

Artikel enthalten:

-  `description` (Bezeichnung) als String, `price` (Preis) als Number und einen Hersteller als Referenz.

Erstelle eine Datei `schreibHersteller.js` (mit Startercode), um mehrere Hersteller zu erzeugen.

Erstelle weiterhin eine Datei `schreibArtikel.js` (mit Startercode), um mehrere Artikel zu erzeugen. Benutze die Hersteller, die du eben erstellt hast.

Erstelle eine Datei `leseArtikel.js`, um einen oder mehrere Artikel aus der Datenbank zu lesen. Und lass Mongoose mit Hilfe der `populate()`-Methode die Daten des Herstellers laden.

**Bonus**: Erstelle eine Datei `leseHersteller.js`, um einen oder mehrere Hersteller aus der Datenbank zu lesen. Und lass Mongoose mit Hilfe der `populate()`-Methode die Daten der Artikel laden.
