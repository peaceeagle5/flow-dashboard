# Flow Dashboard – TODO

Ziel: Ein Dashboard, das Spree-Wasserstand, Wetter und Luftqualität kombiniert und die beste Zeit für Tai Chi, Yoga oder einen Spaziergang vorschlägt – mit einem Vers des Tages.

## Schritt 1 – Daten anschauen
- [ ] Spree-Stationen im Browser öffnen: https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters=SOW
  (In PEGELONLINE heißt die Spree in Berlin „SOW" = Spree-Oder-Wasserstraße; `waters=SPREE` liefert eine leere Liste.)
- [ ] Eine Berliner Station auswählen und ihre UUID notieren
- [ ] Wetter-JSON von Open-Meteo im Browser anschauen (URL steht in `app.js`)
- [ ] Doku der Luftdaten-API lesen: https://luftdaten.umweltbundesamt.de/api/air-data/v4/doc
- [ ] Nächste Luftmessstation finden
- [ ] Bhagavad Gita API anschauen (github.com/vedicscriptures/bhagavad-gita-api)

## Schritt 2 – Erste sichtbare Version
- [x] HTML-Grundgerüst mit Karten
- [x] Wetterdaten von Open-Meteo laden
- [x] Temperatur, Wind und Regen als Chart.js-Diagramm anzeigen
- [ ] Projekt mit Live Server öffnen und testen
- [ ] Git-Repo anlegen und auf GitHub pushen

## Schritt 3 – Weitere Datenquellen
- [ ] `fetchWaterLevel()` – aktueller Spree-Wasserstand + Trend
- [ ] Wasserstand der letzten Tage als Liniendiagramm
- [ ] `fetchAirQuality()` – Luftqualitätsindex der nächsten Station
- [ ] `fetchVerse()` – zufälliger Vers des Tages
- [ ] Ladezustände und Fehlermeldungen für jede Karte

## Schritt 4 – „Beste Zeit"-Logik
- [ ] Regeln festlegen (z. B. kein Regen, Wind < 20 km/h, Luft „gut", Temperatur > 5 °C)
- [ ] `findBestTimeWindow()` schreiben
- [ ] Bestes Zeitfenster im Diagramm farbig hervorheben
- [ ] Empfehlung in der Karte „Beste Zeit heute" anzeigen

## Schritt 5 – Echtes System
- [ ] Backend (Node.js oder Python), das die Daten regelmäßig abruft
- [ ] PostgreSQL-Datenbank für den Verlauf
- [ ] Frontend, Backend und Datenbank in 3 Docker-Containern (`docker-compose.yml`)
- [ ] Verlaufsansicht („Wie war der Spree-Pegel diesen Monat?")

## Später / optional
- [ ] Grafana auf die Datenbank setzen
- [ ] Eigene Tai-Chi-API bauen
- [ ] Mobile-Design verbessern
- [ ] Standort wählbar machen
