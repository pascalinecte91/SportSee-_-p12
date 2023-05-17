
import Login from "Components/login/Login";


const Home = ({ firstName, lastName, age }) => {
 
  return (
  
      <section className="home">
        <Login firstName={firstName} lastName={lastName} age={age} />
 
      </section>
  
  );
};

export default Home;