 // click event = An interaction when a user clicks on a specific element. we can respond to clicks by passing a callback to the onclick event handler.
 function ProfilePicture(){
    
    const imageUrl ='./src/assets/u.jpg';

    const handleClick = (e)=> e.target.style.display = "none";

    return (<img className="img" onClick={(e) => handleClick(e)} src={imageUrl}></img>);
 }
 export default ProfilePicture