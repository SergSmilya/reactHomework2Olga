export default function SectionTitle({ title, children }) {
  return (
    <section>
      {title}
      <br />
      {children}
    </section>
  );
}
