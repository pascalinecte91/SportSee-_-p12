import Login from "Components/login/Login";

/**
 * Home component representing the home page.
 *
 * @param {Object} props - The component props.
 * @param {string} props.firstName - The user's first name.
 * @param {string} props.lastName - The user's last name.
 * @param {number} props.age - The user's age.
 * @returns {JSX.Element} The Home component.
 */
const Home = ({ firstName, lastName, age }) => {
  return (
    <section className="home">
      <Login firstName={firstName} lastName={lastName} age={age} />
    </section>
  );
};

export default Home;
