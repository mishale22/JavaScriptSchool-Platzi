import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { videoSearch } from '../actions'

const Search = ({ isHome, videoSearch }) => {
  const inputStyle = classNames('input', {
    isHome
  })
  
  const handleOnChange = event => {
    videoSearch(event.target.value)
  }
  
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleOnChange}/>
    </section>
  );
}

const mapDispatchToProps = {
  videoSearch,
}
export default connect(null, mapDispatchToProps)(Search);