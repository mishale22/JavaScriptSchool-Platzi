import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { setFavourite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { isList, id, cover, title, year, contentRating, duration } = props

  //función que va a manejar el guardado a nuestros favoritos
  const handleSetFavorite = () => {
    props.setFavourite({
      //elementos que necesita un favorito para volverse a mostrar
      id, cover, title, year, contentRating, duration
    })
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon" />
          </Link>
          {
            isList ?
              <img className="carousel-item__details--img"
                src='https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png'
                alt="Minus Icon"
                onClick={() => handleDeleteFavorite(id)} />
              :
              <img className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite} />
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
}


CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavourite,
  deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem);