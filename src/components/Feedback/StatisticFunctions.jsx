export default function StatisticFunctions({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </>
  );
}
