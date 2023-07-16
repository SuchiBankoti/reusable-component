import "./App.css";
import ResuableComponent from "./ReusableComponent";

function App() {
  const cartElements = [
    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      description:
        "This is a image of multiple color bursts ,if there is an error in image loading it will be replaced by the image of a cat",
    },

    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      description:
        "This is a image of black color bursting into white ,if there is an error in image loading it will be replaced by the image of a cat",
    },

    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      description:
        "This is a image of black and golden design ,if there is an error in image loading it will be replaced by the image of a cat",
    },
  ];

  return (
    <div className="App">
      <ResuableComponent items={cartElements} />
    </div>
  );
}

export default App;
