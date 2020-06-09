import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

//props: myList, trends, originals
const Home = ({ videoSearched, myList, trends, originals }) => {

  const isVideoSearched = Object.keys(videoSearched).length > 0
  return (
    <>
      <Search isHome />
      {isVideoSearched &&
        <Categories title="Video encontrado">
          <Carousel>
            <CarouselItem
              key={videoSearched.id}
              {...videoSearched}
              isVideoSearched />
          </Carousel>
        </Categories>
      }
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

//crear el conector.Conectar mi aplicación con el store que estoy pasando
//en el Provider.  
const mapStateToProps = state => {
  //solo traiga los elementos que voy a utilizar del estado 
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    videoSearched: state.videoSearched,
  }
}
// export default Home;
export default connect(mapStateToProps, null)(Home);