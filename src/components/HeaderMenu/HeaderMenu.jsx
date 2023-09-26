import "./index.scss";
import logo from "../../assets/logo-dnc.png"
import cartLogo from "../../assets/cartshop.png";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <img src={logo} alt="logo" className="header-menu__Logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculinho</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu carrinho</h1>
        <img src={cartLogo} alt="cart-logo" />
      </div>
    </header>
  );
}

export default HeaderMenu