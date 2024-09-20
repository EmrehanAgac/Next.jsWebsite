import React, { useState } from 'react';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid';
import Button from '@mui/material/Button'; 
import styles from '../styles/SideMenu.module.css'; 
import containerStyles from '../styles/Container.module.css'; 
import Footer from '../components/Footer.js';
const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={containerStyles.pageContainer}>
      <Header />
      <div className={styles.contentContainer}>
       
        <Button 
          variant="text" 
          className={styles.menuToggleButton} 
          onClick={toggleDropdown}
        >
          Menü
        </Button>
       
        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.active : ''}`}>
          <Button variant="text" className={styles.dropdownButton}>Menu1</Button>
          <Button variant="text" className={styles.dropdownButton}>Menu2</Button>
          <Button variant="text" className={styles.dropdownButton}>Menu3</Button>
          <Button variant="text" className={styles.dropdownButton}>Menu4</Button>
        </div>

        
       
        <div className={styles.sidebar}>
          <Button variant="text" className={styles.sidebarButton}>Menu1</Button>
          <Button variant="text" className={styles.sidebarButton}>Menu2</Button>
          <Button variant="text" className={styles.sidebarButton}>Menu3</Button>
          <Button variant="text" className={styles.sidebarButton}>Menu4</Button>
        </div>
        <div className={containerStyles.cardGridContainer}>
          <CardGrid />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
