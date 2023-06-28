import PropTypes from 'prop-types'

function Header({ text }) {
  const headerStyles = {
    backgroundColor: '#333',
    color: '#fff',
  }

  return (
    <header style = {headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}



Header.defaultProps = {
     text: 'CRUD Feedback App',
     bgColor: '#333',
     color: 'pink',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header 