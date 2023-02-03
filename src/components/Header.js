import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*
 * Component : Header.js
 *
 * Return : header page
 *
 * Contains the logo and the title of the app
 */
const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className="logo" icon={"fa-rectangle-list"} />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
