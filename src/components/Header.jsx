import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import img from '../trivia.png';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <img src={ img } alt="" width="100px" />
        <p data-testid="header-score">0</p>
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

const mapStateToProps = ({ user }) => ({
  user,
});

Header.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Header);
