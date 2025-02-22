import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import lg from './logo.jpg';

const imageStyle = {
  width: "3%",
  height: "auto",
  maxHeight: "100px",
};

const logo = {
  marginBottom: "1px",
  color: "#e94560",
  fontWeight: "700",
  fontStyle: "italic",
  textDecoration: "none",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategoryValue = event.target.value;
    setSelectedCategory(selectedCategoryValue);
    navigate(`/AllCategories`, { state: { selectedCategory: selectedCategoryValue } });
  };

  const clicklg = () => {
    navigate("/");
  };

  const lgu = () => {
    navigate("/Login");
  };

  const sign = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light topn" style={{ backgroundColor: "white", padding: "1px" }}>
        <img onClick={clicklg} src={lg} alt="logo" style={imageStyle} />
        <Link className="navbar-brand font-weight-bold nohover" to="/" style={logo}>
          Ecommerce-Shop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse itemss" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active"><strong>Home</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" activeClassName="active"><strong>About</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Support" activeClassName="active"><strong>Contact</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Admin" activeClassName="active"><strong>Admin</strong></NavLink>
            </li>
          </ul>
          <div className="btn-group">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={lgu}>Login</button>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={sign}>SignUp</button>
          </div>
        </div>
      </nav>
      <div className="Aa">
        <center>
          <div className="d-flex justify-content-center align-items-center text-center self">
            <Link className="nav-link self2" exact={true} to="/">
              <strong>All Products</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Men's_Clothing">
              <strong>Mens</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Women's_Clothing">
              <strong>Womens</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Electronics">
              <strong>Electronics</strong>
            </Link>

            <Link className="nav-link " exact={true} to="/">
              <select className="selected" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories </option>
                <option value="smartphones"> smartphones </option>
                <option value="laptops"> laptops </option>
                <option value="fragrances"> fragrances </option>
                <option value="skincare"> skincare </option>
                <option value="groceries"> groceries </option>
                <option value="home-decoration"> home-decoration </option>
                <option value="tops"> tops </option>
                <option value="furniture"> furniture </option>
                <option value="womens-shoes"> womens-shoes </option>
                <option value="womens-watches"> womens-watches </option>
                <option value="womens-bags"> womens-bags </option>
                <option value="mens-watches"> mens-watches </option>
                <option value="mens-shirts"> mens-shirts </option>
                <option value="mens-shoes"> mens-shoes </option>
                <option value="sunglasses"> sunglasses </option>
                <option value="automotive"> automotive </option>
                <option value="motorcycle"> motorcycle </option>
                <option value="lighting"> lighting </option>
              </select>
            </Link>

            <Link className="nav-link self2 " exact={true} to="/Cart">
              <strong>CART</strong>
            </Link>
          </div>
        </center>
      </div>
    </>
  );
};

export default Navbar;
