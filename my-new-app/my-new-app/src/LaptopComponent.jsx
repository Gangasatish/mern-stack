
function LaptopComponent({brand, year, ...rest}){
    return(
        <div>
            {/* <h1>this is my laptop component. The brand of the laptop is {props.brand} and the color is {props.color}. The manufacturing year was {props.year}</h1>
            <p>the version is {props.con.ver}</p>
            <p>the yonger is {props.check[0]}</p> */}
            <h1> The brand of laptop is {brand} and manufacturing year is {year} and the color is {rest.color}</h1>
        </div>
        
    )
}

export default LaptopComponent;
