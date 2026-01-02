function loadLiveScores() {
  // TEMP demo data (replace with real API later)
  const demoData = [
    { match: "India vs Australia", score: "245/3 (38 overs)" },
    { match: "Barcelona vs Real Madrid", score: "2 - 1" }
  ];

  const scoresDiv = document.getElementById("scores");
  scoresDiv.innerHTML = demoData
    .map(m => `<p><strong>${m.match}</strong> : ${m.score}</p>`)
    .join("");
}

// Load immediately
loadLiveScores();

// Refresh every 15 seconds
setInterval(loadLiveScores, 15000);
