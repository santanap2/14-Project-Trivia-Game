import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import img from '../trivia.png';

class Header extends Component {
  render() {
    const { user, player } = this.props;
    return (
      <header>
        <img src={ img } alt="" width="100px" />
        <p data-testid="header-score">{ player.score }</p>
        <div>
          <img
            data-testid="header-profile-picture"
            src={ user.gravatar }
            alt="gravatar"
          />
          <p data-testid="header-player-name">{user.name}</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user, player }) => ({
  user,
  player,
});

Header.propTypes = {
  user: PropTypes.shape().isRequired,
  player: PropTypes.shape({
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
