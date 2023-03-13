import Buttons from './Buttons';
import NotificationMsg from './NotificationMsg';
import SectionTitle from './SectionTitle';
import Statistic from './Statistic';
import StatisticFunctions from './StatisticFunctions';

export default function Feedback({
  state,
  onButtonClick,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <Buttons state={state} onButtonClick={onButtonClick} />
      </SectionTitle>
      {countTotalFeedback() === 0 ? (
        <NotificationMsg />
      ) : (
        <SectionTitle title="Statistic">
          <Statistic state={state} />
          <StatisticFunctions
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </SectionTitle>
      )}
    </div>
  );
}
