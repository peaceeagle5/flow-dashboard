# Flow Dashboard

Ein Dashboard, das Daten aus mehreren offenen APIs zusammenführt und vorschlägt, wann heute die beste Zeit für Tai Chi, Yoga oder einen Spaziergang draußen ist.

**Live-Demo:** https://peaceeagle5.github.io/flow-dashboard/

## Datenquellen
| Quelle | Daten | Status |
|---|---|---|
| [Open-Meteo](https://open-meteo.com/) | Wetter (Temperatur, Wind, Niederschlag) | ✅ angebunden |
| [PEGELONLINE](https://www.pegelonline.wsv.de/) | Wasserstand der Spree | ⏳ geplant |
| [Umweltbundesamt Luftdaten](https://luftdaten.umweltbundesamt.de/) | Luftqualität | ⏳ geplant |
| [Bhagavad Gita API](https://github.com/vedicscriptures/bhagavad-gita-api) | Vers des Tages | ⏳ geplant |

## Starten
1. Ordner in VS Code öffnen
2. Empfohlene Erweiterung **Live Server** installieren (VS Code schlägt sie automatisch vor)
3. Rechtsklick auf `index.html` → **Open with Live Server**

## Technik
- HTML, CSS, JavaScript
- [Chart.js](https://www.chartjs.org/) (MIT-Lizenz)

Geplante Schritte stehen in [TODO.md](TODO.md).
