import { h } from 'preact'

const CloseButton = ({
  onClick
}) => (
  <button class='close-button' onClick={onClick}>
    <span class='close-button__inner'>
      <span class='close-button__text'>Close</span>
      <span class='close-button__icon'>
        <span></span>
      </span>
    </span>
  </button>
)

export default CloseButton
