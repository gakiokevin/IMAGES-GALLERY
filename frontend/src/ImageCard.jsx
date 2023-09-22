const ImageCard = ({image,imageDelete })=>{
   return (
      <div className="imageCard">
         <img src={image.urls.small} alt="hellow" />
        <h2>{image.title.toUpperCase()}</h2>
        <button onClick={()=>(imageDelete(image.id))}>Delete</button>
      </div>
   )
}
export default ImageCard