import { Box, Button, Input } from '@mui/material'
import { useState } from 'react'

function FeedForm({ onFetch, loading }) {
    const [url, setUrl] = useState('');
    const submit = (e) => {
        e.preventDefault();
        onFetch(url);
    };
    return (
        <form onSubmit={submit} className="feed-form">
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={3}>
                <Input placeholder="Enter the URL" value={url} onChange={(e) => setUrl(e.target.value)} sx={{ width: '40%' }} />
                <Button variant="contained" type="submit" disabled={loading}>{loading ? 'Fetching...' : 'Fetch'}</Button>
            </Box>
        </form>
    )
}

export default FeedForm