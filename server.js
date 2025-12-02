const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());           // <-- WICHTIG für Browseranfragen
app.use(express.json());    // <-- Damit JSON im Body gelesen werden kann

// Beispiel: Providers
const providers = [
  { name: "Falke", plzs: ["11111","22222","33333"], positions: ["S","R","T"] },
  { name: "Falkeliegend", plzs: ["11111","22222","33333"], positions: ["L"] },
  { name: "Prototyp", plzs: ["11111","22222"], positions: ["S","T"] },
  { name: "Prototypliegend", plzs: ["11111","22222"], positions: ["L"] }
];

// POST-Route für Filter
app.post('/filter', (req, res) => {
  const { plz, position } = req.body;
  if (!plz || !position) return res.status(400).json({ error: 'PLZ oder Position fehlt' });

  const results = providers.filter(p => p.plzs.includes(plz) && p.positions.includes(position));
  res.json(results);
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Middleware läuft auf Port ${PORT}`));
