import React, { Fragment } from "react";
import ReactMeals from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={ReactMeals} alt="A table full of delicious   foods" />
      </div>
    </Fragment>
  );
};

export default Header;
