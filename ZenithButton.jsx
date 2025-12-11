export function ZenithButton({ url, text }) {
  return (
    <a className="zenith-btn" href={url} target="_blank">
      {text}
    </a>
  );
}
