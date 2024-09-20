import React from 'react';
import { Box, Button, Typography, Rating, Divider } from '@mui/material';
import Image from 'next/image'; 
import Header from '../components/Header'; 
import styles from '../styles/TShirtCard.module.css'; 

const TShirtCard = () => {
  return (
    <Box className={styles.mainContainer}>

      <Header />
      <Box className={styles.cardContainer}>
        <Box className={styles.imageSection}>
          <Image src="/img/Beyaz-tişört.jpg" alt="T-shirt" width={400} height={400} layout="responsive" />
        </Box>

        
        <Box className={styles.productInfo}>
          <Typography variant="h5" component="h2" className={styles.productTitle}>
            T-shirt 1
          </Typography>
          <Typography variant="h6" component="p" className={styles.productPrice}>
            $190
          </Typography>

          
          <Box className={styles.ratingSection}>
            <Typography component="legend" className={styles.ratingText}>
              No rating given
            </Typography>
            <Rating name="no-value" value={null} />
          </Box>

        

          <Divider className={styles.divider} />

         
          <Typography variant="subtitle1" className={styles.colorTitle}>
            Color:
          </Typography>
          <Box className={styles.colorOptions}>
            <Button variant="outlined" className={styles.colorButton} sx={{ borderColor: '#FFC0CB', color: '#FFC0CB' }}>
              Pink
            </Button>
            <Button variant="outlined" className={styles.colorButton} sx={{ borderColor: '#FFA500', color: '#FFA500' }}>
              Orange
            </Button>
            <Button variant="outlined" className={styles.colorButton} sx={{ borderColor: '#FF0000', color: '#FF0000' }}>
              Red
            </Button>
            <Button variant="outlined" className={styles.colorButton} sx={{ borderColor: '#D3D3D3', color: '#D3D3D3' }}>
              Gray
            </Button>
          </Box>

        
          <Typography variant="subtitle1" className={styles.sizeTitle}>
            Size:
          </Typography>
          <Box className={styles.sizeOptions}>
            <Button variant="outlined" size="small" className={styles.sizeButton}>
              Small <br />
              120 by 18 inches
            </Button>
            <Button variant="outlined" size="small" className={styles.sizeButton}>
              Medium <br />
              150 by 18 inches
            </Button>
          </Box>

     
          <Box className={styles.buyButtonWrapper}>
            <Button variant="contained" fullWidth className={styles.buyButton}>
              Buy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TShirtCard;
