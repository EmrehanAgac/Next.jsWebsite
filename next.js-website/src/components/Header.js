import React, { useState } from 'react';
import { Box, Typography, InputBase, Button, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid2 } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from '../styles/Header.module.css';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={styles.headerContainer}>

      <Grid2 container alignItems="center" justifyContent="space-between" className={styles.topSection}>

        <Grid2 item>
          <Box>
            <Typography variant="h1" component="h1" className={styles.shoppingText}>
              Shopping
            </Typography>
            <Box className={styles.shoppingLine} />
          </Box>
        </Grid2>


        <Grid2 item>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <Typography variant="h2" component="h2" className={styles.basketText}>
              Basket
            </Typography>
            <ShoppingBasketIcon className={styles.basketIcon} />
          </Box>
        </Grid2>
      </Grid2>


      <Grid2 container alignItems="center" justifyContent="space-between" className={styles.menuSearchContainer}>

        <Grid2 item xs={12} sm="auto">
          {isMobile ? (
            <Accordion expanded={expanded} onChange={handleAccordionChange} className={styles.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={styles.menuText}>Menu</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Button variant="text">Menu1</Button>
                  <Button variant="text">Menu2</Button>
                  <Button variant="text">Menu3</Button>
                  <Button variant="text">Menu4</Button>
                  <Button variant="text">Menu5</Button>
                  <Button variant="text">Menu6</Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Box display="flex" flexDirection="row" gap={2}>
              <Button variant="text">Menu1</Button>
              <Button variant="text">Menu2</Button>
              <Button variant="text">Menu3</Button>
              <Button variant="text">Menu4</Button>
              <Button variant="text">Menu5</Button>
              <Button variant="text">Menu6</Button>
            </Box>
          )}
        </Grid2>

        <Grid2 item xs={12} sm="auto">
          <Box display="flex" flexDirection="row" alignItems="center" className={styles.searchBox}>
            <SearchIcon className={styles.searchIcon} />
            <InputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} className={styles.searchInput} />
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 container justifyContent="flex-start" className={styles.bottomLineContainer}>
        <Grid2 item>
          <Box className={styles.bottomLine} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Header;
