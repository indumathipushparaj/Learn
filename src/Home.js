function Home(props) {
  const { username } = props.location;

  const logout = () => {
    props.history.push("/");
  };
  return (
    <div>
      Hello {username}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default Home;
