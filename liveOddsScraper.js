// liveOddsScraper.js
export function run() {
    console.log("✅ Live Odds Scraper module loaded and running!");

    // Example mock functionality:
    const oddsData = { match: "Team A vs Team B", odds: 1.75 };
    console.log("Fetched live odds:", oddsData);

    // If integrating into UI:
    const el = document.createElement("div");
    el.textContent = `📈 Live Odds: ${oddsData.match} @ ${oddsData.odds}`;
    el.style.padding = "10px";
    el.style.background = "#222";
    el.style.color = "#0f0";
    el.style.fontFamily = "monospace";
    document.body.appendChild(el);
}
