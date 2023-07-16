import "./App.css";
import ResuableComponent from "./ReusableComponent";

function App() {
  const cartElements = [
    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      description:
        "Design a reusable React component that displays a list of items, each represented by a card with an image and a description. Explain how you would handle cases where the image URL is broken or not loading",
    },

    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      description:
        "Design a reusable React component that displays a list of items, each represented by a card with an image and a description. Explain how you would handle cases where the image URL is broken or not loading",
    },

    {
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      description:
        "Design a reusable React component that displays a list of items, each represented by a card with an image and a description. Explain how you would handle cases where the image URL is broken or not loading",
    },
  ];

  return (
    <div className="App">
      <ResuableComponent items={cartElements} />
    </div>
  );
}

export default App;
