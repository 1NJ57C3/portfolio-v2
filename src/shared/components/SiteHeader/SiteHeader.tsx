import Navigation from "@/shared/components/Navigation/Navigation";
import "./site-header.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/">
        Inji
      </a>
      <Navigation />
    </header>
  );
}

export default SiteHeader;
