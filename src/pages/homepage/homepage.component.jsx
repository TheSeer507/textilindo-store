import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.css';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;