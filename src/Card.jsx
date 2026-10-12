import profilePic from './assets/u.jpg'
function Card(){
  return(
    <div className="card">
     <img className="card-img" src={profilePic} alt="profile picture"></img>
     <h2 className="card-title">Yisma Code</h2>
     <p className="card-text">I make Intractive Websites and Write Clear Code</p>
    </div>
  );
}
export default Card