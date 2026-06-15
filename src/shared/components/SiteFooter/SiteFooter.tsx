import "./site-footer.css";

function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const startYear = 2026;

  return (
    <footer className="site-footer" id="site-footer">
      <p>
        Copyright &copy;{" "}
        {startYear < currentYear ? startYear + "-" + currentYear : currentYear}{" "}
        Inji. All rights reserved.
      </p>
    </footer>
  );
}

export default SiteFooter;
