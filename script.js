const api = "e17376fc223b46298af83148251205";
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (city !== "") {
    fetchWeatherData(city); // fixed name
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    console.log("Error fetching data:", error);
    alert("City not found or API error.");
  }
}

function updateWeatherInfo(data) {
  document.getElementById("city-name").textContent = data.location.name;
  document.getElementById("temperature").textContent = data.current.temp_c;
  document.getElementById("humidity").textContent = data.current.humidity;
  document.getElementById("weather-icon").src = data.current.condition.icon;
}
