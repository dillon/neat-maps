const markerStyles = {
  containerDefault: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    textDecoration: 'none',
    color: 'black',
  },
  containerHover: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 900,
    textDecoration: 'none',
    color: 'black',
  },
  dotDefault: ({ backgroundColor }) => ({
    width: 15,
    height: 15,
    backgroundColor,
    border: '1px solid black',
    borderRadius: '50%'
  }),
  dotHover: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '50%',
  },
  label: {
    padding: 10,
    border: '1px solid black',
    position: 'absolute',
    transform: 'translate(-50%, calc(-50%-50px)',
    minWidth: 150,
    backgroundColor: 'white',
  },
  categoryText: {
    marginTop: 5,
    fontStyle: 'italic'
  }
}

export default markerStyles;