import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ImageCard from "./ImageCard";
import Welcome from "./Welcome";
import "./App.css";
const App = () => {
  const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  // function to handle the the fetch 
  const handleSubmit = (e) => {
   e.preventDefault();
   if (word.trim() !==''){
      
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((error) => console.log(error));
    setWord("");
   }else {
      alert('Please type in a word')
   }
  };
  // function to delete the image
  const handleImageDelete = (id)=>{
   setImages(images.filter((img)=>(img.id !== id)))
  }

  return (
    <div className="App">
      <Header />
      <Search word={word} setword={setWord} handleSubmit={handleSubmit} />

      {images.length ? (
        <main>
          {
            images.map((image) => <ImageCard key={image.id} image={image} imageDelete ={handleImageDelete} />)}
        </main>
      ) : (
        <Welcome />
      )}
    </div>
  );
};
export default App;
