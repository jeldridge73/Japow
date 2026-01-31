// Base location: 2-chōme-3-10 Akitsuki 3 Jō, Asahikawa, Hokkaido 079-8403
const BASE_LOCATION = { lat: 43.7856, lon: 142.3947, name: 'Akitsuki 3 Jō, Asahikawa' };

// Ski resorts within 250 miles of Asahikawa
// Distance = straight line, driveTime = estimated driving time in minutes
// lifts = number of ski lifts, skiArea = skiable area in acres
const resorts = [
    {
        name: 'Furano Ski Resort',
        lat: 43.3414,
        lon: 142.3647,
        distance: 35,
        driveTime: 70,
        lifts: 11,
        skiArea: 415,
        mapCode: '919 552 685*46',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Furano%20Ski%20Resort%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jpfurano',
        description: 'Premier resort famous for champagne powder and diverse terrain. Features wide groomed runs, tree skiing, and stunning views of Mount Tokachi. Great for all skill levels with excellent snow quality throughout the season.'
    },
    {
        name: 'Tomamu (Hoshino Resorts)',
        lat: 43.0625,
        lon: 142.6292,
        distance: 65,
        driveTime: 115,
        lifts: 6,
        skiArea: 297,
        mapCode: '608 511 151*01',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Alpha%20Resort%20Tomamu%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Modern luxury resort with exceptional powder snow and well-maintained slopes. Known for the famous Ice Village in winter and varied terrain across two mountains. Family-friendly with high-end amenities and English-speaking staff.'
    },
    {
        name: 'Kamui Ski Links',
        lat: 43.8481,
        lon: 142.3856,
        distance: 15,
        driveTime: 30,
        lifts: 9,
        skiArea: 173,
        mapCode: '655 427 176*01',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kamui%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Closest resort to Asahikawa, perfect for day trips. Local favorite offering excellent tree runs and powder stashes. Less crowded than major resorts with authentic Japanese ski culture. Great for intermediate to advanced skiers.'
    },
    {
        name: 'Niseko United',
        lat: 42.8048,
        lon: 140.6875,
        distance: 122,
        driveTime: 210,
        lifts: 38,
        skiArea: 2191,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Niseko%20Mt.%20Resort%20Grand%20Hirafu%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jpnisekograndhirafu',
        description: 'World-renowned powder paradise with legendary snowfall averaging 15m per season. Four interconnected resorts offering endless terrain for all abilities. Extensive backcountry access, vibrant après-ski scene, and international atmosphere.'
    },
    {
        name: 'Rusutsu Resort',
        lat: 42.7394,
        lon: 140.8839,
        distance: 110,
        driveTime: 195,
        lifts: 18,
        skiArea: 1050,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rusutsu%20Resort%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jprusutsu',
        description: 'Expansive resort spanning three mountains with diverse terrain for all levels. Famous for pristine powder, extensive tree skiing, and minimal crowds. Modern facilities with excellent grooming and reliable snowfall.'
    },
    {
        name: 'Kiroro Snow World',
        lat: 43.0839,
        lon: 140.9906,
        distance: 95,
        driveTime: 165,
        lifts: 9,
        skiArea: 488,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kiroro%20Snow%20World%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jpkiroro',
        description: 'Premium resort receiving incredibly deep powder (average 21m annually). Quieter alternative to Niseko with excellent long runs and tree skiing. Modern village with luxury accommodations and family-friendly facilities.'
    },
    {
        name: 'Sahoro Resort',
        lat: 43.2647,
        lon: 142.8597,
        distance: 57,
        driveTime: 90,
        lifts: 8,
        skiArea: 263,
        mapCode: '608 892 719',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sahoro%20Resort%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Uncrowded family resort with gentle slopes and reliable powder. Perfect for beginners and intermediates seeking a relaxed atmosphere. Features beautiful birch tree runs and excellent visibility on overcast days.'
    },
    {
        name: 'Sapporo Teine',
        lat: 43.0983,
        lon: 141.1842,
        distance: 80,
        driveTime: 135,
        lifts: 15,
        skiArea: 296,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sapporo%20Teine%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jpsapporoteine',
        description: '1972 Olympic venue offering varied terrain from gentle cruisers to steep mogul runs. Easy access from Sapporo city with night skiing available. Highland and Olympia zones provide options for all skill levels with stunning city views.'
    },
    {
        name: 'Asahidake',
        lat: 43.6631,
        lon: 142.7914,
        distance: 28,
        driveTime: 60,
        lifts: 3,
        skiArea: 247,
        mapCode: '796 861 036',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Asahigatake%20Ski%20Course%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/location/jpasahidake',
        description: 'Hokkaido\'s highest peak offering extreme backcountry terrain for advanced skiers. Longest season (December to May) with incredible powder and volcanic mountain scenery. Requires good weather and backcountry skills. Famous ropeway provides access to vast terrain.'
    },
    {
        name: 'Kurodake',
        lat: 43.7544,
        lon: 142.9489,
        distance: 42,
        driveTime: 80,
        lifts: 2,
        skiArea: 198,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Daisetsuzan%20Kurodake%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Adventurous destination with challenging terrain on an active volcanic mountain. Limited lift infrastructure but excellent sidecountry and backcountry access. Best for experienced skiers comfortable with variable conditions and steep terrain.'
    },
    {
        name: 'Sapporo Moiwayama Ski Area',
        lat: 43.0356,
        lon: 141.3222,
        distance: 75,
        driveTime: 120,
        lifts: 5,
        skiArea: 156,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sapporo%20Moiwayama%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Unique skiing-only resort (no snowboarding) with 10 varied courses and dramatic city views. Features steep terrain with the Dynamic Course reaching 37° and excellent night skiing on 7 illuminated runs. Located just 20 minutes from Sapporo, it offers authentic local skiing culture with well-maintained intermediate and advanced runs.'
    },
    {
        name: 'Sapporo Bankei Ski Area',
        lat: 43.0661,
        lon: 141.2761,
        distance: 75,
        driveTime: 120,
        lifts: 6,
        skiArea: 73,
        mapCode: '9 493 809',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sapporo%20Bankei%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Urban resort with Japan\'s longest halfpipe (230m) and FIS-certified mogul course, popular with professionals. Features exceptional night skiing until 10pm with improved snow conditions and minimal crowds. Best for intermediate terrain but offers options for all levels just 20 minutes from downtown Sapporo.'
    },
    {
        name: 'Takino Snow World',
        lat: 42.9170,
        lon: 141.3887,
        distance: 79,
        driveTime: 130,
        lifts: 1,
        skiArea: 25,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Takino%20Snow%20World%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Family-oriented resort with extremely gentle 7° beginner slopes perfect for children and first-timers. Features one of Japan\'s longest sledding runs (200m) and extensive cross-country trails (1-16km). Located 45 minutes from Sapporo in a scenic hillside park setting with free admission areas.'
    },
    {
        name: 'Snow Cruise Onze',
        lat: 43.1378,
        lon: 141.0489,
        distance: 81,
        driveTime: 135,
        lifts: 2,
        skiArea: 49,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Snow%20Cruise%20Onze%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Small beginner-friendly resort with playful terrain park featuring halfpipe, walls, and fun boxes. Ideal for families with gentle slopes and dedicated kids\' area. Located just 30 minutes from Sapporo with free shuttle service and restaurant facilities.'
    },
    {
        name: 'Otaru Tenguyama Ski Area',
        lat: 43.1872,
        lon: 141.0039,
        distance: 81,
        driveTime: 135,
        lifts: 3,
        skiArea: 99,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Otaru%20Tenguyama%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Spectacular coastal resort with breathtaking ocean views of Ishikari Bay and Otaru Port from 532m summit. Features steep off-piste terrain with New Course reaching 40° pitch and excellent powder retention. Michelin one-star rated viewpoint offering one of Hokkaido\'s "Three Great Night Views."'
    },
    {
        name: 'Asarigawa Onsen Ski Area',
        lat: 43.1556,
        lon: 140.9972,
        distance: 83,
        driveTime: 140,
        lifts: 7,
        skiArea: 171,
        mapCode: '493 484 835*37',
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Asarigawa%20Onsen%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Stunning oceanside resort with unobstructed Sea of Japan views from 660m summit overlooking Ishikari Bay. Wide ungroomed powder runs with uncrowded off-piste zones perfect for powder seekers. Features hot spring facilities at base and old-school charm with slow lifts offering relaxing rides.'
    },
    {
        name: 'Sapporo Kokusai Ski Area',
        lat: 43.0733,
        lon: 141.0486,
        distance: 84,
        driveTime: 145,
        lifts: 5,
        skiArea: 247,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sapporo%20Kokusai%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Hidden powder gem receiving 18 meters annually—more than Niseko but less crowded. Phenomenal off-piste terrain with steep lines, challenging tree skiing, and excellent sidecountry zones. Features 3.6km maximum run and 630m vertical through forested terrain perfect for powder hunting.'
    },
    {
        name: 'Nakayamatōge Ski Area',
        lat: 42.8167,
        lon: 140.8833,
        distance: 101,
        driveTime: 180,
        lifts: 3,
        skiArea: 43,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Nakayamat%C5%8Dge%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Small family resort near Niseko area associated with Nakayamatoge Kogen Hotel. Offers 173m of vertical descent with consistent snowfall averaging 55cm weekly in peak January. Quiet alternative to larger resorts with basic facilities and local atmosphere.'
    },
    {
        name: 'Hakodate Nanae Snow Park',
        lat: 41.98,
        lon: 140.78,
        distance: 149,
        driveTime: 240,
        lifts: 3,
        skiArea: 292,
        mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Hakodate%20Nanae%20Ski%20Area%2C%20Hokkaido%2C%20Japan',
        openSnowUrl: 'https://opensnow.com/explore/countries/JP',
        description: 'Southern Hokkaido\'s premier resort with impressive 698m vertical accessed by 15-minute gondola ride. Excellent for beginners with 60% gentle terrain and long cruising runs through beautiful scenery. Located 50 minutes from Hakodate with quieter slopes and tree skiing opportunities.'
    }
];

// API Configuration - Open-Meteo (free, no API key required)
const API_BASE_URL = 'https://api.open-meteo.com/v1';

// State
let resortData = [];
let map = null;
let snowfallChart = null;
let comparisonChart = null;
let currentSort = 'snow24h'; // Default sort by 24h snowfall

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initMap();
    loadWeatherData();
});

function setupEventListeners() {
    document.getElementById('refreshBtn').addEventListener('click', loadWeatherData);
    document.getElementById('sortBy').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderResortList();
        updateCharts();
    });
}

function initMap() {
    map = L.map('map').setView([BASE_LOCATION.lat, BASE_LOCATION.lon], 8);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
    }).addTo(map);

    // Add home location marker
    const homeIcon = L.divIcon({
        className: 'home-marker',
        html: '<div style="background: #e74c3c; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; font-size: 14px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">🏠 Your Location</div>',
        iconSize: [120, 30],
        iconAnchor: [60, 15]
    });

    L.marker([BASE_LOCATION.lat, BASE_LOCATION.lon], { icon: homeIcon })
        .addTo(map)
        .bindPopup(`<b>Your Location</b><br>${BASE_LOCATION.name}`)
        .openPopup();
}

async function loadWeatherData() {
    const resortListEl = document.getElementById('resortList');
    resortListEl.innerHTML = '<div class="loading">Loading snowfall data...</div>';

    try {
        const promises = resorts.map(resort => fetchResortWeather(resort));
        resortData = await Promise.all(promises);

        renderResortList();
        updateMapMarkers();
        updateStatsSummary();
        updateCharts();
        updateLastUpdated();

        // Ensure map renders correctly
        if (map) {
            setTimeout(() => map.invalidateSize(), 100);
        }
    } catch (error) {
        console.error('Error loading weather data:', error);
        resortListEl.innerHTML = '<div class="loading">Error loading data. Please check your API key and try again.</div>';
    }
}

async function fetchResortWeather(resort) {
    try {
        const currentDate = new Date();
        const endDate = currentDate.toISOString().split('T')[0];
        const startDate = new Date(currentDate - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        // Current weather and historical snowfall data
        const weatherUrl = `${API_BASE_URL}/forecast?latitude=${resort.lat}&longitude=${resort.lon}&current=temperature_2m,weather_code,wind_speed_10m&daily=snowfall_sum&start_date=${startDate}&end_date=${endDate}&timezone=Asia/Tokyo`;
        
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Calculate snowfall totals from daily data (in cm, convert to inches)
        const dailySnowfall = data.daily?.snowfall_sum || [];
        const recentDays = dailySnowfall.slice(-7); // Last 7 days
        
        const snow24h = (recentDays[recentDays.length - 1] || 0) / 2.54;
        const snow48h = (recentDays.slice(-2).reduce((a, b) => a + b, 0)) / 2.54;
        const snow7day = (recentDays.reduce((a, b) => a + b, 0)) / 2.54;
        
        // Map weather codes to descriptions
        const weatherCode = data.current?.weather_code || 0;
        const conditions = getWeatherDescription(weatherCode);
        
        return {
            ...resort,
            temp: (data.current?.temperature_2m || 0) * 9/5 + 32, // Convert to Fahrenheit
            conditions: conditions,
            windSpeed: (data.current?.wind_speed_10m || 0) * 2.237, // Convert km/h to mph
            snow24h: Math.max(0, snow24h),
            snow48h: Math.max(0, snow48h),
            snow7day: Math.max(0, snow7day)
        };
    } catch (error) {
        console.error(`Error fetching data for ${resort.name}:`, error);
        return {
            ...resort,
            temp: 32, // 0°C in Fahrenheit
            snow24h: 0,
            snow48h: 0,
            snow7day: 0,
            conditions: 'Data unavailable',
            windSpeed: 0
        };
    }
}

function getWeatherDescription(weatherCode) {
    // Open-Meteo weather codes mapping
    const weatherCodes = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };
    
    return weatherCodes[weatherCode] || 'Unknown conditions';
}

function renderResortList() {
    const resortListEl = document.getElementById('resortList');

    // Sort based on current selection
    const sortedResorts = getSortedResorts();

    resortListEl.innerHTML = sortedResorts.map(resort => `
        <div class="resort-card">
            <div class="resort-header">
                <div class="resort-name">${resort.name}</div>
                <div class="distance-info">
                    <div class="distance">${resort.distance} mi</div>
                    <div class="drive-time">${formatDriveTime(resort.driveTime)} drive</div>
                </div>
            </div>
            <div class="resort-description">
                ${resort.description}
            </div>
            <div class="resort-stats">
                <div class="stat-item">
                    <span class="stat-icon">🎿</span>
                    <div class="stat-info">
                        <div class="stat-label">Ski Area</div>
                        <div class="stat-number">${resort.skiArea} acres</div>
                    </div>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🚡</span>
                    <div class="stat-info">
                        <div class="stat-label">Lifts</div>
                        <div class="stat-number">${resort.lifts}</div>
                    </div>
                </div>
            </div>
            <div class="snow-data">
                <div class="snow-metric">
                    <div class="label">24h Snowfall</div>
                    <div class="value ${getSnowClass(resort.snow24h)}">${resort.snow24h.toFixed(1)}"</div>
                </div>
                <div class="snow-metric">
                    <div class="label">48h Snowfall</div>
                    <div class="value ${getSnowClass(resort.snow48h)}">${resort.snow48h.toFixed(1)}"</div>
                </div>
                <div class="snow-metric">
                    <div class="label">7-Day Total</div>
                    <div class="value ${getSnowClass(resort.snow7day)}">${resort.snow7day.toFixed(1)}"</div>
                </div>
            </div>
            <div class="weather-info">
                <div class="weather-detail">
                    <strong>Temp:</strong> ${resort.temp.toFixed(0)}°F
                </div>
                <div class="weather-detail">
                    <strong>Conditions:</strong> ${resort.conditions}
                </div>
                <div class="weather-detail">
                    <strong>Wind:</strong> ${resort.windSpeed.toFixed(1)} mph
                </div>
            </div>
            <div class="resort-actions">
                <a href="${resort.mapsUrl}" target="_blank" class="maps-btn">
                    <span>🗺️</span> Get Directions${resort.mapCode ? ` (${resort.mapCode})` : ''}
                </a>
                <a href="${resort.openSnowUrl}" target="_blank" class="opensnow-btn">
                    <span>📊</span> View on OpenSnow
                </a>
            </div>
        </div>
    `).join('');
}

function getSortedResorts() {
    const sorted = [...resortData];

    switch(currentSort) {
        case 'snow24h':
            return sorted.sort((a, b) => b.snow24h - a.snow24h);
        case 'snow48h':
            return sorted.sort((a, b) => b.snow48h - a.snow48h);
        case 'snow7day':
            return sorted.sort((a, b) => b.snow7day - a.snow7day);
        case 'distance':
            return sorted.sort((a, b) => a.distance - b.distance);
        case 'driveTime':
            return sorted.sort((a, b) => a.driveTime - b.driveTime);
        case 'skiArea':
            return sorted.sort((a, b) => b.skiArea - a.skiArea);
        case 'lifts':
            return sorted.sort((a, b) => b.lifts - a.lifts);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted.sort((a, b) => b.snow24h - a.snow24h);
    }
}

function getSnowClass(amount) {
    // Amount is in inches
    if (amount > 12) return 'heavy'; // 12+ inches
    if (amount > 4) return 'moderate'; // 4-12 inches
    return 'light'; // < 4 inches
}

function formatDriveTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) {
        return `${mins}m`;
    } else if (mins === 0) {
        return `${hours}h`;
    } else {
        return `${hours}h ${mins}m`;
    }
}

function updateMapMarkers() {
    if (!map) return;

    // Clear existing resort markers (keep home location)
    map.eachLayer(layer => {
        if (layer instanceof L.Marker &&
            Math.abs(layer.getLatLng().lat - BASE_LOCATION.lat) > 0.001) {
            map.removeLayer(layer);
        }
    });

    // Add resort markers
    resortData.forEach(resort => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${getMarkerColor(resort.snow24h)}; color: white; padding: 5px 10px; border-radius: 20px; font-weight: bold; font-size: 12px; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
                ${resort.snow24h.toFixed(1)}"
            </div>`,
            iconSize: [60, 30],
            iconAnchor: [30, 15]
        });

        L.marker([resort.lat, resort.lon], { icon })
            .addTo(map)
            .bindPopup(`
                <b>${resort.name}</b><br>
                <strong>Distance:</strong> ${resort.distance} mi (${formatDriveTime(resort.driveTime)} drive)<br>
                <strong>24h:</strong> ${resort.snow24h.toFixed(1)}"<br>
                <strong>48h:</strong> ${resort.snow48h.toFixed(1)}"<br>
                <strong>7-day:</strong> ${resort.snow7day.toFixed(1)}"<br>
                <strong>Temp:</strong> ${resort.temp.toFixed(0)}°F<br>
                <strong>Conditions:</strong> ${resort.conditions}
            `);
    });
}

function getMarkerColor(snow24h) {
    // snow24h is in inches
    if (snow24h > 12) return '#27ae60'; // Heavy: 12+ inches
    if (snow24h > 4) return '#f39c12'; // Moderate: 4-12 inches
    return '#3498db'; // Light: < 4 inches
}

function updateStatsSummary() {
    const avg24h = resortData.reduce((sum, r) => sum + r.snow24h, 0) / resortData.length;
    const avg48h = resortData.reduce((sum, r) => sum + r.snow48h, 0) / resortData.length;
    const avg7day = resortData.reduce((sum, r) => sum + r.snow7day, 0) / resortData.length;

    document.getElementById('avg24h').textContent = `${avg24h.toFixed(1)}"`;
    document.getElementById('avg48h').textContent = `${avg48h.toFixed(1)}"`;
    document.getElementById('avg7day').textContent = `${avg7day.toFixed(1)}"`;
}

function updateLastUpdated() {
    const now = new Date();
    document.getElementById('lastUpdate').textContent = now.toLocaleString();
}

function updateCharts() {
    // Use current sort order for charts
    const sortedResorts = getSortedResorts();

    // Create bar chart comparing snowfall across resorts
    createSnowfallChart(sortedResorts);

    // Create stacked bar chart for time-based comparison
    createComparisonChart(sortedResorts);
}

function createSnowfallChart(sortedResorts) {
    const ctx = document.getElementById('snowfallChart');

    if (snowfallChart) {
        snowfallChart.destroy();
    }

    snowfallChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedResorts.map(r => r.name),
            datasets: [
                {
                    label: '24h Snowfall (inches)',
                    data: sortedResorts.map(r => r.snow24h.toFixed(1)),
                    backgroundColor: 'rgba(52, 152, 219, 0.8)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2
                },
                {
                    label: '48h Snowfall (inches)',
                    data: sortedResorts.map(r => r.snow48h.toFixed(1)),
                    backgroundColor: 'rgba(155, 89, 182, 0.8)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: '24h vs 48h Snowfall by Resort',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#2c3e50'
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        },
                        color: '#2c3e50'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + '"';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Snowfall (inches)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#2c3e50'
                    },
                    ticks: {
                        color: '#7f8c8d'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#7f8c8d',
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createComparisonChart(sortedResorts) {
    const ctx = document.getElementById('comparisonChart');

    if (comparisonChart) {
        comparisonChart.destroy();
    }

    comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedResorts.map(r => r.name),
            datasets: [
                {
                    label: '7-Day Total (inches)',
                    data: sortedResorts.map(r => r.snow7day.toFixed(1)),
                    backgroundColor: sortedResorts.map(r => {
                        if (r.snow7day > 40) return 'rgba(39, 174, 96, 0.8)'; // 40+ inches
                        if (r.snow7day > 20) return 'rgba(243, 156, 18, 0.8)'; // 20-40 inches
                        return 'rgba(52, 152, 219, 0.8)'; // < 20 inches
                    }),
                    borderColor: sortedResorts.map(r => {
                        if (r.snow7day > 40) return 'rgba(39, 174, 96, 1)';
                        if (r.snow7day > 20) return 'rgba(243, 156, 18, 1)';
                        return 'rgba(52, 152, 219, 1)';
                    }),
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: '7-Day Snowfall Totals',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#2c3e50'
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        },
                        color: '#2c3e50'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const resort = sortedResorts[context.dataIndex];
                            return [
                                '7-Day: ' + context.parsed.y + '"',
                                'Temp: ' + resort.temp.toFixed(0) + '°F',
                                'Distance: ' + resort.distance + ' mi'
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Snowfall (inches)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#2c3e50'
                    },
                    ticks: {
                        color: '#7f8c8d'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#7f8c8d',
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}
