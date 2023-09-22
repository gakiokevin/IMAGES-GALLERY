
 const style = {
   backgroundColor:'lightgray',
   maxWidth:'1000px',
   height:'100px',
   margin:'30px auto',
   padding:'10px',
   borderRadius:'3px'

 }


const Welcome = ()=>{
   return (
      <div style={style} className="welcome">
         <h2 style={{margin:'3px 4px'}} className="welcomeTitle">ImagesGallery</h2>
         <p style={{marginTop:'12px',fontSize:'16px'}} className="welcometext">Welcome to ImagesGallery, this is a simple web application the fetches images from UNSPLASH API.To get started, search any image on the input field above</p>
      </div>
   )
}
export default Welcome