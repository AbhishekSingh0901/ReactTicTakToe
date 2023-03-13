import Button from "../UI/Button";

const Navigation = (props) => {
  return (
    <nav className="hidden md:block">
      <Button>START GAME</Button>
      <Button>RESTART</Button>
    </nav>
  );
};

export default Navigation;
