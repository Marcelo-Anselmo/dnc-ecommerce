import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <section className='home'>
      <HeaderMenu />
      <Search />
    </section>
  );
}

export default Home;