# Hokkaido Snowfall Tracker

A real-time snowfall tracking website for ski resorts within 200 miles of Asahikawa, Japan. Perfect for planning your powder days in Hokkaido!

## Features

- **Real-time snowfall data** for 10 major ski resorts in Hokkaido
- **Multiple views**: List view with detailed stats and interactive map view
- **Snowfall metrics**: 24-hour, 48-hour, and 7-day snowfall totals
- **Resort information**: Distance from Asahikawa, current temperature, conditions, and wind speed
- **Auto-refresh**: Manual refresh button to get the latest data
- **Responsive design**: Works on desktop and mobile devices

## Ski Resorts Tracked

1. **Furano Ski Resort** - 37 mi from Asahikawa
2. **Tomamu (Hoshino Resorts)** - 68 mi from Asahikawa
3. **Kamui Ski Links** - 19 mi from Asahikawa
4. **Niseko United** - 125 mi from Asahikawa
5. **Rusutsu Resort** - 112 mi from Asahikawa
6. **Kiroro Snow World** - 98 mi from Asahikawa
7. **Sahoro Resort** - 59 mi from Asahikawa
8. **Sapporo Teine** - 82 mi from Asahikawa
9. **Asahidake** - 31 mi from Asahikawa
10. **Kurodake** - 45 mi from Asahikawa

## Setup Instructions

### Option 1: Run without API key (Demo Mode)

The website will work immediately with mock data:

1. Open `index.html` in your web browser
2. The site will display sample snowfall data

### Option 2: Use Real Weather Data (Recommended)

To get real snowfall data from OpenWeatherMap:

1. **Get a free API key**:
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Configure the API key**:
   - Open `app.js` in a text editor
   - Find the line: `const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';`
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key

3. **Open the website**:
   - Open `index.html` in your web browser
   - The site will now fetch real weather data

### Option 3: Host Online

To access from anywhere (including your phone while in Japan):

1. **Using GitHub Pages** (free):
   - Create a GitHub repository
   - Upload all files (index.html, styles.css, app.js, README.md)
   - Enable GitHub Pages in repository settings
   - Access your site at: `https://yourusername.github.io/repo-name`

2. **Using Netlify** (free):
   - Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
   - Get an instant live URL

## Usage

- **List View**: See all resorts sorted by snowfall with detailed stats
- **Map View**: Interactive map showing all resort locations with snowfall markers
- **Refresh Data**: Click the "Refresh Data" button to get the latest conditions
- **Color Coding**:
  - **Green**: Heavy snowfall (>30cm)
  - **Orange**: Moderate snowfall (10-30cm)
  - **Blue**: Light snowfall (<10cm)

## Technical Details

- Pure HTML, CSS, and JavaScript (no build process required)
- Uses OpenWeatherMap API for weather data
- Leaflet.js for interactive maps
- Responsive design with mobile-first approach
- Snowfall calculated from temperature and precipitation data

## Notes

- Snowfall estimates are calculated from temperature and precipitation data when actual snow depth measurements aren't available
- Weather data refreshes based on API calls (manual refresh available)
- Free OpenWeatherMap API tier includes 1,000 calls/day (more than enough for personal use)
- All distances are approximate and calculated from Asahikawa city center

## Enjoy Your Powder Days!

Have an amazing ski trip in Hokkaido! The region is known for some of the best powder snow in the world. Safe travels and deep pow!
