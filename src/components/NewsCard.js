import { Button, CardHeader, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
const NewsCard = (article) => {
  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "2px",
        width: 370,
        margin: '11px',
        border: '0.5px solid lightgrey',
        backgroundColor: 'white',
        padding: '10px',
        boxShadow: '1px 1px grey',
      }}>
      <CardHeader sx={{ color: 'inherit' }}
        title={article.data.title}
        subheader={article.data.author}/>
      <CardMedia component='img' src={article.data.urlToImage} height='150' alt=''></CardMedia>
      <CardContent>
        <Typography component='div' variant='h5' gutterBottom>Description</Typography>
        <Typography variant='body2' color='inherit' sx={{ textAlign: 'left' }}>{article.data.description} </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant='contained' size='small'>Share</Button>
        <Button variant='contained' size='small' href={article.data.url}>Read More</Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard