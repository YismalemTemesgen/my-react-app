// click event = An interaction when a user clicks on a specific element. we can respond to clicks by passing a callback to the onclick event handler.
function Button(){

  let count = 0;
const handleclick = (e) => e. target.textContent = "OUCH!";
/* const handleclick = (name) => {
     if(count){
       count++;
       console.log(`${name} you clicked me ${count} time/s`);
     } else {
        console.log(`${name} stop clicking me!`);
     }
 };*/

  const styles = {
  backgroundColor: "hsl(200, 100%, 50%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",

  }
  return (
    <button style={styles}  onDoubleClick={(e) => handleclick(e)}>Click Me </button>
  );
}
export default Button