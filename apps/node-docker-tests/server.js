const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const govukRoot = path.join(
  path.dirname(require.resolve('govuk-frontend/package.json')),
  'dist',
  'govuk'
);
app.use('/govuk', express.static(govukRoot));

const mojRoot = path.join(
  path.dirname(require.resolve('@ministryofjustice/frontend/package.json')),
  'moj'
);
app.use('/moj', express.static(mojRoot));

// Health endpoint
app.get('/health', (_req, res) => res.status(200).json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Demo app running on http://localhost:${PORT}`);
});