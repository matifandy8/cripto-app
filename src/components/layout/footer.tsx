import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <div className="logo">
          <h2>Cripto Logo</h2>
        </div>
        <div className="rights">
          <h5>© 2021 Cripto Name. All rights reserved</h5>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__column">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="/">Blockchain Explorer</a>
            </li>
            <li>
              <a href="/">Crypto API</a>
            </li>
            <li>
              <a href="/">Crypto Indices</a>
            </li>
            <li>
              <a href="/">Interest</a>
            </li>
            <li>
              <a href="/">Jobs Board</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Disclaimer</a>
            </li>
            <li>
              <a href="/">Methodology</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="/">Request Form</a>
            </li>
            <li>
              <a href="/">Contact Support</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Glossary</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Interactive Chat</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
