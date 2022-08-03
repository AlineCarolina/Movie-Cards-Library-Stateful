import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class Form extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  };

  handleChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [name]: value });
  };

  onBookmarkedChange = (event) => {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange(event);
  }

  onSelectedGenreChange = (event) => {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
    this.handleChange(event);
  }

  onSearchTextChange = (event) => {
    const { movies } = this.props;
    console.log(event.target.value);
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const content = `${title}, ${subtitle}, ${storyline}`;
          console.log(content.includes(event.target.value));
          return content.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie
          onClick={ this.addMovie }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

Form.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default Form;
