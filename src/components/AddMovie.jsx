import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AddMovie.css'

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  };

  createInput = (value, name, type) => {
    return (
      <input
        type={ type }
        value={ value }
        onChange={ this.handleChange }
        name={ name }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className='form-add-movie'>
        <label htmlFor="titulo">
          Título
          {this.createInput(title, 'title', 'text')}
        </label>
        <label htmlFor="subtitulo">
          Subtítulo
          {this.createInput(subtitle, 'subtitle', 'text')}
        </label>
        <label htmlFor="imagem">
          Imagem
          {this.createInput(imagePath, 'imagePath', 'text')}
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <textarea
            value={ storyline }
            onChange={ this.handleChange }
            name='storyline'
          />
        </label>
        <label htmlFor="rating">
          Avaliação
          {this.createInput(rating, 'rating', 'number')}
        </label>
        <label htmlFor="genero">
          Gênero
          <select
            value={ genre }
            onChange={ this.handleChange }
            name="genre"
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleClick } className='button-add'>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
