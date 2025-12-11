export function ZenithCard({ img, children }) {
  return (
    <div className="zenith-card">
      <img src={img} className="zenith-profile" />
      <div className="zenith-desc">{children}</div>
    </div>
  );
}
