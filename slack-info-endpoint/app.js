const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Check if both slack_name and track are provided
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Include both slack_name and track' }); // Fix the syntax here
  }

  const date = new Date();
  const current_day = date.toLocaleDateString(undefined, { weekday: 'long' });
  const utc_time = date.toISOString().slice(0, 19) + 'Z';

  const github_file_url =
    'https://github.com/steve2700/Backend-work-intern/blob/main/slack-info-endpoint/app.js';
  const github_repo_url = 'https://github.com/steve2700/Backend-work-intern';

  const response_data = {
    slack_name: slack_name,
    current_day: current_day,
    utc_time: utc_time,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url, // Corrected variable name
    status_code: 200,
  };

  res.json(response_data);
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

