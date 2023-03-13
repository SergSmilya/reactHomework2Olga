// import PropTypes from 'prop-types';

export default function Buttons({ state, onButtonClick }) {
  return Object.keys(state).map((name, index) => (
    <button key={index} onClick={onButtonClick}>
      {name}
    </button>
  ));
}
