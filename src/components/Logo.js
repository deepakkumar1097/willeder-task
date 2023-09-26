import { ReactComponent as Icon } from "../svg/icon.svg";

export default function Logo({
  width,
  color,
  fontSize,
  letterSpacing,
  lineHeight,
}) {
  const logoStyle = {
    width,
    color,
    fontSize,
    letterSpacing,
    lineHeight,
  };
  return (
    <div className="logo-container" style={logoStyle}>
      <Icon />
      <div className="logo-title">LOGO</div>
    </div>
  );
}
