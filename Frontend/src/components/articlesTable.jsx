import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Box } from '@mui/material';

function ArticlesTable({ articles, setArticles }) {
    const updateField = (i, field, value) => {
        const copy = articles.map((a, idx) => (idx === i ? { ...a, [field]: value } : a));
        setArticles(copy);
    };

    if (!articles || articles.length === 0) return null;

    return (
        <Box mt={4} display="flex" justifyContent="center" px={2}>
            <TableContainer 
                component={Paper} 
                sx={{ 
                    maxWidth: '1400px', 
                    width: '100%',
                    boxShadow: 2
                }}
                
            >
                <Table sx={{ minWidth: 650 }} aria-label="articles table" size="small">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#c2c2c2' }}>
                            <TableCell 
                                align="center" 
                                sx={{ 
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 1.5
                                }}
                            >
                                Title
                            </TableCell>
                            <TableCell 
                                align="center" 
                                sx={{ 
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 1.5
                                }}
                            >
                                Details
                            </TableCell>
                            <TableCell 
                                align="center" 
                                sx={{ 
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 1.5
                                }}
                            >
                                Link
                            </TableCell>
                            <TableCell 
                                align="center" 
                                sx={{ 
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 1.5
                                }}
                            >
                                Image
                            </TableCell>
                            <TableCell 
                                align="center" 
                                sx={{ 
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 1.5
                                }}
                            >
                                Publish Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles.map((a, i) => (
                            <TableRow 
                                key={i}
                                hover
                            >
                                <TableCell sx={{ py: 1, px: 1.5 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={a.title || ''}
                                        placeholder='No title available'
                                        onChange={(e) => updateField(i, 'title', e.target.value)}
                                        variant="outlined"
                                       
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 1, px: 1.5 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={a.details || ''}
                                        placeholder='No details available'
                                        onChange={(e) => updateField(i, 'details', e.target.value)}
                                        variant="outlined"
                                        multiline
                                        maxRows={3}
                                        
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 1, px: 1.5 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        placeholder='No link available'
                                        value={a.link || ''}
                                        onChange={(e) => updateField(i, 'link', e.target.value)}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 1, px: 1.5 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={a.media || ''}
                                        placeholder='No image available'
                                        onChange={(e) => updateField(i, 'image', e.target.value)}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 1, px: 1.5 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        placeholder='No publish date available'
                                        value={a.publishDate || 'No publish date'}
                                        onChange={(e) => updateField(i, 'publishDate', e.target.value)}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ArticlesTable