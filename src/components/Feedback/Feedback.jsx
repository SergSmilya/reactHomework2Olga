import Buttons from './Buttons';
import Statistic from './Statistic';

export default function Feedback({ state, onButtonClick }) {
  return (
    <div>
      <Buttons state={state} onButtonClick={onButtonClick} />
      <Statistic state={state} />
    </div>
  );
}
