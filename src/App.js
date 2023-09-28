import "./App.css";
import PhotoCarousel from "./components/PhotoCarousel";
import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1080/1920",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080"
  ]);
  return (
    <div className="app">
      <PhotoCarousel photos={photos} />
    </div>
  );
}

export default App;
