import AppBar from "./Components/AppBar";
import BottomBar from "./Components/BottomBar";
import Post from "./Components/Post";

function App() {
  const img1 = require("./Img/1st.jpg");
  const img2 = require("./Img/2nd.jpg");
  const img3 = require("./Img/3rd.jpg");

  const images = [
    { imgUrl: `${img1}` },
    { imgUrl: `${img2}` },
    { imgUrl: `${img3}` },
  ];

  return (
    <>
      <AppBar />
      {images.map((images) => (
        <Post images={images.imgUrl} />
      ))}
      <BottomBar/>
    </>
  );
}

export default App;
