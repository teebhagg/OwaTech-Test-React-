import "../Styles/BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bar">
      <div className="slider"></div>
      <Tile img={
          "https://image.shutterstock.com/image-vector/surprised-emoji-vector-icon-simple-260nw-1132736528.jpg"
        } title={"Meme World"} subtitle={"Enjoy an endless of interesting"}/>
      <Tile img={"https://image.shutterstock.com/image-vector/gift-card-line-icon-outline-260nw-708553006.jpg"} title={"Counselling"} subtitle={"Don't Go through it alone, reach out and lets help"}/>
      <Tile
        img={
          "https://image.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg"
        }
        title={"Resource Center"}
        subtitle={"Get ready for your exam"}
      />
    </div>
  );
};

const Tile = ({ title, subtitle, img }) => {
  return (
    <div className="b-bar">
      <div style={{ backgroundImage: `url("${img}")` }} className="emoji"></div>
      <div className="info">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default BottomBar;
