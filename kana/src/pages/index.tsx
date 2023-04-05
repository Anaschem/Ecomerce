import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import NextLink from 'next/link';
import Layout from '../components/layout';

import data from '../utile/data';

export default function Home() {
  return (
    <Layout>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Products</h1>
      <br></br>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <NextLink href={/product/${product.slug}} passHref>
              <CardActionArea>
                <CardMedia
                component="img" image={product.image}
                title={product.name}
                ></CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </Layout>
  );
}