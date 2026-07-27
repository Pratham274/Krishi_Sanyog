import React, { useState, useEffect } from 'react';
import { CloudSun, Droplets, Wind, Thermometer, MapPin, Search, Sun, CloudRain, Cloud, Check, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

export const WeatherWidget = () => {
  const [cityName, setCityName] = useState('Indore, Madhya Pradesh');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [weatherData, setWeatherData] = useState({
    temp: '28°C',
    humidity: '62%',
    wind: '12 km/h',
    condition: 'Sunny',
    window: 'Optimal Farm Window',
    advisory: 'Favorable conditions for field irrigation & fertilizer application.',
    forecast: [
      { day: 'Mon', temp: '28°C', icon: Sun },
      { day: 'Tue', temp: '26°C', icon: CloudRain },
      { day: 'Wed', temp: '27°C', icon: CloudSun },
      { day: 'Thu', temp: '29°C', icon: Sun },
      { day: 'Fri', temp: '30°C', icon: Sun },
    ],
  });

  // Fetch Live Weather from Open-Meteo API for given lat/lon or city
  const fetchLiveWeather = async (lat = 22.7196, lon = 75.8577, name = 'Indore, Madhya Pradesh') => {
    setLoading(true);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();

      if (data && data.current) {
        const currentTemp = Math.round(data.current.temperature_2m);
        const humidity = data.current.relative_humidity_2m;
        const wind = Math.round(data.current.wind_speed_10m);
        const weatherCode = data.current.weather_code;

        // Interpret Weather Code
        let cond = 'Sunny';
        let iconType = Sun;
        if (weatherCode >= 51 && weatherCode <= 99) {
          cond = 'Rain / Shower';
          iconType = CloudRain;
        } else if (weatherCode >= 1 && weatherCode <= 3) {
          cond = 'Partly Cloudy';
          iconType = CloudSun;
        } else if (weatherCode >= 45) {
          cond = 'Overcast / Fog';
          iconType = Cloud;
        }

        // Daily Forecast
        const dailyDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const forecastList = data.daily?.time?.slice(0, 5).map((t, idx) => {
          const d = new Date(t);
          const maxT = Math.round(data.daily.temperature_2m_max[idx]);
          return {
            day: dailyDays[d.getDay()],
            temp: `${maxT}°C`,
            icon: iconType,
          };
        }) || [];

        setCityName(name);
        setWeatherData({
          temp: `${currentTemp}°C`,
          humidity: `${humidity}%`,
          wind: `${wind} km/h`,
          condition: cond,
          window: cond.includes('Rain') ? 'Rain Alert Active' : 'Optimal Farm Window',
          advisory: cond.includes('Rain')
            ? `Rain showers reported in ${name.split(',')[0]}. Delay chemical sprays.`
            : `Clear weather in ${name.split(',')[0]}. Good window for land preparation & sowing.`,
          forecast: forecastList.length > 0 ? forecastList : weatherData.forecast,
        });
      }
    } catch (err) {
      console.log('Live weather fetch error, using dynamic state weather:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveWeather(22.7196, 75.8577, 'Indore, Madhya Pradesh');
  }, []);

  // Search All India Districts & Cities via Geocoding API
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length >= 2) {
      try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=en&format=json`;
        const res = await fetch(geoUrl);
        const data = await res.json();
        if (data && data.results) {
          // Filter to Indian districts & towns
          const indiaResults = data.results.filter(r => r.country_code === 'IN' || r.country === 'India');
          setSearchResults(indiaResults.length > 0 ? indiaResults : data.results);
        }
      } catch (err) {
        console.log('Geocoding search error:', err);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectSearchResult = (locationItem) => {
    const fullLoc = `${locationItem.name}${locationItem.admin1 ? ', ' + locationItem.admin1 : ''}`;
    fetchLiveWeather(locationItem.latitude, locationItem.longitude, fullLoc);
    setIsOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    toast.success(`Live internet weather updated for ${fullLoc}!`);
  };

  return (
    <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0">
            {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <CloudSun className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Live Weather Radar</h3>
              
              {/* Location Select Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-100 cursor-pointer shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{cityName}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Real-Time Internet Weather • {weatherData.condition}</p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs self-start sm:self-center">
          {weatherData.window}
        </span>
      </div>

      {/* All India District & City Search Drawer */}
      {isOpen && (
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in duration-200 z-10 shadow-2xl">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Search Any District or City in India</h4>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 text-xs font-bold">Close ✕</button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Type any Indian district/city (e.g. Ludhiana, Nashik, Patna, Guntur, Jaipur)..."
              className="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              autoFocus
            />
          </div>

          {/* Live Search Results List */}
          <div className="max-h-56 overflow-y-auto space-y-1 p-1">
            {searchResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSearchResult(item)}
                className="w-full p-2 rounded-xl text-left text-xs bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">{item.name}</span>
                  <span className="text-slate-400 text-[10px] block">{item.admin1 || ''}, India ({item.latitude?.toFixed(2)}°, {item.longitude?.toFixed(2)}°)</span>
                </div>
                <Check className="w-3.5 h-3.5 text-emerald-600 opacity-0 hover:opacity-100" />
              </button>
            ))}

            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="text-center py-4 text-xs text-slate-400">
                Searching Open-Meteo satellite weather database for "{searchQuery}"...
              </div>
            )}

            {searchQuery.length < 2 && (
              <div className="text-xs text-slate-400 p-2 text-center">
                Popular Agricultural Hubs:
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  {[
                    { name: 'Indore', admin1: 'MP', latitude: 22.71, longitude: 75.85 },
                    { name: 'Ludhiana', admin1: 'Punjab', latitude: 30.90, longitude: 75.85 },
                    { name: 'Nashik', admin1: 'Maharashtra', latitude: 19.99, longitude: 73.78 },
                    { name: 'Varanasi', admin1: 'UP', latitude: 25.31, longitude: 82.97 },
                    { name: 'Mandya', admin1: 'Karnataka', latitude: 12.52, longitude: 76.89 },
                    { name: 'Patna', admin1: 'Bihar', latitude: 25.59, longitude: 85.13 },
                    { name: 'Jaipur', admin1: 'Rajasthan', latitude: 26.91, longitude: 75.78 },
                  ].map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectSearchResult(preset)}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-bold hover:border-emerald-500"
                    >
                      {preset.name}, {preset.admin1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Live Metrics Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center">
          <Thermometer className="w-4 h-4 text-rose-500 mx-auto mb-1" />
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Live Temperature</div>
          <div className="text-base font-black text-slate-900 dark:text-white">{weatherData.temp}</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center">
          <Droplets className="w-4 h-4 text-blue-500 mx-auto mb-1" />
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Humidity</div>
          <div className="text-base font-black text-slate-900 dark:text-white">{weatherData.humidity}</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center">
          <Wind className="w-4 h-4 text-teal-500 mx-auto mb-1" />
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Wind Speed</div>
          <div className="text-base font-black text-slate-900 dark:text-white">{weatherData.wind}</div>
        </div>
      </div>

      {/* Live Advisory Note */}
      <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 font-medium">
        💡 <span className="font-bold">Satellite Advisory:</span> {weatherData.advisory}
      </div>

      {/* 5-Day Live Forecast Grid */}
      <div className="grid grid-cols-5 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        {weatherData.forecast.map((f, i) => {
          const Icon = f.icon || Sun;
          return (
            <div key={i} className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center space-y-1">
              <div className="text-[10px] font-bold text-slate-400">{f.day}</div>
              <Icon className="w-4 h-4 text-amber-500 mx-auto" />
              <div className="text-xs font-black text-slate-800 dark:text-slate-100">{f.temp}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default WeatherWidget;
