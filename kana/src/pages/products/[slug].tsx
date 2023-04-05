import NextLink from 'next/link';
import {
  Link, Grid, List, ListItem, Typography, Card, Button,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useStyles from '../../utile/styles';
import data from '../../utile/data';
import Layout from '../../components/layout';

export default function ProductScrfeen() {
  let classes = useStyles;
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div> Product not found</div>;
  }
  return (
     <>
      <Layout>
     <div>
        <br></br>
       <br></br>
        <br></br>

          <Link href="/" color="#004d40" underline="none"><h4>back to products</h4></Link>

      <br></br>
      <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                  <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"></Image>
              </Grid>
              <Grid item md={3} xs={12}>
                <List>
                    <ListItem><h3>{product.name}</h3></ListItem><br></br>
                    <ListItem><Typography>Brand: {product.brand}</Typography></ListItem>
                    <ListItem><Typography>Rating: {product.rating} stares
                    ({product.numReviews} reviews)</Typography>
                    </ListItem>
                    <ListItem><Typography>Description: {product.description}</Typography></ListItem>
</List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item md={3} xs={12}>
                                        <Typography>Price</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <Typography>${product.price}</Typography>
                                     </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item md={3} xs={12}>
                                        <Typography>status</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <Typography>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</Typography>
                                     </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant='contained' color='primary'>
                                    Add to cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
              </Grid>

          </div>
          </Layout>
          </>
  );
}