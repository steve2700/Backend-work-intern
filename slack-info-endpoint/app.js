const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const current_day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utc_time = new Date().toISOString();

  const github_file_url = 'https://github.com/username/repo/blob/main/file_name.ext';
  const github_repo_url = 'https://github.com/username/repo';

  const response = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

