import './App.css'
import { Typography, Alert, Box, Button } from '@mui/material';
import FeedForm from './components/feedForm';
import { useState } from 'react';
import { fetchFeed, generateXML } from './api/api';
import ArticlesTable from './components/articlesTable';
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetch = async (url) => {
    setLoading(true);
    setError('');
    const result = await fetchFeed(url);
    if (result.error) {
      setError(result.error);
      setArticles([]);
    } else {
      setArticles(result.data || []);
      setError('');
    }
    setLoading(false);
  }

  const handleDownload = async () => {
    try {
      const result = await generateXML(articles);
      if (result.error) {
        setError(result.error);
      }
      else {
        const blob = new Blob([result.data], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'updated_feed.xml';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      alert('Failed to download: ' + err.message);
    }
  }
  return (
    <>
      <Typography variant="h4" mb={5} fontSize={{ xs: 30, md: 40, lg: 50 }}>Welcome to RSS feed reader</Typography>
      <FeedForm onFetch={handleFetch} loading={loading} />
      <ArticlesTable articles={articles} setArticles={setArticles} />
      {articles.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <Button variant="contained" onClick={handleDownload}>Download Updated RSS</Button>
        </div>
      )}
      {error && (
        <Box mt={3} display="flex" justifyContent="center">
          <Alert severity="error" sx={{ maxWidth: '600px', width: '100%' }}>
            {error}
          </Alert>
        </Box>
      )}
    </>
  )
}

export default App
