import React from 'react';
import '../styles/Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">
          Movie Cards Library Stateful
        </h1>
      </header>
    );
  }
}

export default Header;
