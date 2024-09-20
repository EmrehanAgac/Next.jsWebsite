import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link'; 
import styles from '../styles/CardGrid.module.css'; 

const products = [
  { id: 1, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 1', description: 'Ürün 1 açıklaması' },
  { id: 2, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 2', description: 'Ürün 2 açıklaması' },
  { id: 3, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 3', description: 'Ürün 3 açıklaması' },
  { id: 4, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 4', description: 'Ürün 4 açıklaması' },
  { id: 5, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 5', description: 'Ürün 5 açıklaması' },
  { id: 6, img_url: 'Beyaz-tişört.jpg', product_name: 'Ürün 6', description: 'Ürün 6 açıklaması' }
];

export default function CardGrid2() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        {products.map(product => (
          <Card className={styles.card} key={product.id}>
            <Link href={`/tshirt/${product.id}`} passHref>
              <CardActionArea className={styles.noUnderline}> 
                <CardMedia
                  component="img"
                  height="140"
                  image={`/img/${product.img_url}`} 
                  alt={product.product_name}
                  className={styles.cardImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
                    {product.product_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className={styles.cardDescription}>
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
