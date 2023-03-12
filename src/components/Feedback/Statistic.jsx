export default function Statistic({ state }) {
  const array = Object.entries(state);

  return array.map((arr, index) => (
    <p key={index}>
      {arr[0]}: {arr[1]}
    </p>
  ));
}
