const { VITE_API_URL } = import.meta.env;

export async function fetchFeed(url) {
    try {
       const response = await fetch(`${VITE_API_URL}/fetch-feed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url})
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: `Server error: ${response.status}` }));
            return {data: null, error: errorData.error || `Server error: ${response.status}`};
        }
        return {data: await response.json(), error: null};
    } catch (error) {
        return {data: null, error: error.message || 'Failed to fetch feed'};
    }
    
}

export async function generateXML(articles) {
    try {
        const response = await fetch(`${VITE_API_URL}/generate-xml`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({articles})
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: `Server error: ${response.status}` }));
            return {data: null, error: errorData.error || `Server error: ${response.status}`};
        }
        return {data: await response.text(), error: null};
    } catch (error) {
        return {data: null, error: error.message || 'Failed to generate XML'};
    }
}