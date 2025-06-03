import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
  function goAbout() {
    navigate("/about");
  }
  function goContact() {
    navigate("/contact");
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <p
              className="hover:underline hover:cursor-pointer"
              onClick={goHome}
            >
              Home
            </p>
          </li>
          <li>
            <p
              className="hover:underline hover:cursor-pointer"
              onClick={goAbout}
            >
              About
            </p>
          </li>
          <li>
            <p
              className="hover:underline hover:cursor-pointer"
              onClick={goContact}
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
