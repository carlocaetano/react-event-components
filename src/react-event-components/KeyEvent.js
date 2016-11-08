const { Component, PropTypes } = require('react')

class KeyEvent extends Component {
  constructor(props) {
    super(props)
    this.handleTrigger = this.handleTrigger.bind(this)
  }

  handleTrigger(event) {
    if (this.props.when === event.key) {
      this.props.do()
    }
    if (this.props.when === "*") {
      this.props.do(event.key)
    }
  }

  componentDidMount() {
    document.addEventListener(this.props.trigger, this.handleTrigger)}

  componentWillUnmount() {
    document.removeEventListener(this.props.trigger, this.handleTrigger)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

KeyEvent.propTypes = {
  /**
   * A trigger to add listeners to
   */
  trigger: PropTypes.string.isRequired,
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

module.exports = KeyEvent
