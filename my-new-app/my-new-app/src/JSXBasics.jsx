import './JSXBasics.css'
let x = 30;
const me = {
    name : "sathish",
    age : 19
};
function mul(marks){
    return marks * 3;

}
function JSXBasics(){
    return(
        <div className='myclass'>
            <h2>the multiplication of 5 and 2 is : {5 * 2}</h2>
            <p>the value of x is : {x}</p>
            <p>the marks are : {mul(5)}</p>
            <p>my name is : {me.name}

            </p>
        </div>
    )
}
export default JSXBasics