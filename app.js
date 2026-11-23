// Flow Dashboard – Step 2: fetch today's weather and show it as a chart.

// Location: Mühlenbeck (change to anywhere you like)
const LOCATION = {
  name: "Mühlenbeck",
  latitude: 52.66,
  longitude: 13.38,
};

// Open-Meteo: free, no API key needed
function buildWeatherUrl({ latitude, longitude }) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    hourly: "temperature_2m,precipitation,wind_speed_10m",
    timezone: "Europe/Berlin",
    forecast_days: 1,
  });
  return `https://api.open-meteo.com/v1/forecast?${params}`;
}

async function fetchWeather() {
  const response = await fetch(buildWeatherUrl(LOCATION));
  if (!response.ok) {
    throw new Error(`Open-Meteo antwortet mit Status ${response.status}`);
  }
  return response.json();
}

async function fetchWaterLevel() {
  const antwort = await fetch("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/47d3e815-c556-4e1b-93de-9fe07329fb00/W/currentmeasurement.json");
  const pegel = await antwort.json();
  return pegel;
}

function renderWeatherChart(data) {
  const hours = data.hourly.time.map((t) => t.slice(11, 16)); // "2026-11-23T14:00" -> "14:00"

  new Chart(document.getElementById("weather-chart"), {
    data: {
      labels: hours,
      datasets: [
        {
          type: "line",
          label: "Temperatur (°C)",
          data: data.hourly.temperature_2m,
          borderColor: "#2a7f75",
          backgroundColor: "#2a7f75",
          tension: 0.35,
          yAxisID: "yTemp",
        },
        {
          type: "line",
          label: "Wind (km/h)",
          data: data.hourly.wind_speed_10m,
          borderColor: "#9aa8a5",
          backgroundColor: "#9aa8a5",
          borderDash: [5, 5],
          tension: 0.35,
          yAxisID: "yTemp",
        },
        {
          type: "bar",
          label: "Niederschlag (mm)",
          data: data.hourly.precipitation,
          backgroundColor: "rgba(59, 130, 196, 0.5)",
          yAxisID: "yRain",
        },
      ],
    },
    options: {
      responsive: true,
      interaction: { mode: "index", intersect: false },
      scales: {
        yTemp: {
          position: "left",
          title: { display: true, text: "°C / km/h" },
        },
        yRain: {
          position: "right",
          beginAtZero: true,
          title: { display: true, text: "mm" },
          grid: { drawOnChartArea: false },
        },
      },
    },
  });
}

async function init() {
  document.getElementById("location").textContent = `Ort: ${LOCATION.name}`;
  const status = document.getElementById("weather-status");

  try {
    const data = await fetchWeather();
    renderWeatherChart(data);
    status.textContent = "";
  } catch (error) {
    console.error(error);
    status.textContent = `Wetterdaten konnten nicht geladen werden: ${error.message}`;
    status.classList.add("error");
  }

  const waterStatus = document.getElementById("water-status");

  try {
    const pegel = await fetchWaterLevel();
    document.getElementById("water-value").textContent = `${pegel.value} cm`;
    waterStatus.textContent = "";
  } catch (error) {
    console.error(error);
    waterStatus.textContent = `Wasserstand konnte nicht geladen werden: ${error.message}`;
    waterStatus.classList.add("error");
  }
  // TODO (Step 3): fetchWaterLevel(), fetchAirQuality(), fetchVerse()
  // TODO (Step 4): findBestTimeWindow(weather, air)
}

init();
