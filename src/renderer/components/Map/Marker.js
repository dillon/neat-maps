import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/markerStyles'

const Marker = ({ backgroundColor, $hover = false, text: { fullAddress, category } }) => {
  const { dotDefault, dotHover, label, containerHover, containerDefault, categoryText } = styles;
  const url = `https://www.google.com/maps/place/${fullAddress.replace(' ', '+')}`
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={$hover ? containerHover : containerDefault}>
      <div
        style={$hover ? dotHover : dotDefault({ backgroundColor })}
      />
      {$hover &&
        <div style={label}>
          <div>
            {fullAddress}
          </div>
          <div style={categoryText}>
            {category}
          </div>
        </div>
      }
    </a>
  )
}

Marker.defaultProps = {
  $hover: false
}

Marker.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  $hover: PropTypes.bool,
  text: PropTypes.shape({
    fullAddress: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}

export default Marker;