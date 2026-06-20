import { scrollToSection } from "@/shared/utils/scrollToSection";
import { navItems } from "./navItems";
import "./navigation.css";

function Navigation() {
  const displayNavItems = navItems.map(({ id, label }) => (
    <li key={id}>
      <button className="button-reset nav-button" onClick={() => scrollToSection(id)}>
        {label}
      </button>
    </li>
  ));

  return (
    <nav className="main-navigation">
      <ul className="list-reset main-navigation-list">{displayNavItems}</ul>
    </nav>
  );
}

export default Navigation;
