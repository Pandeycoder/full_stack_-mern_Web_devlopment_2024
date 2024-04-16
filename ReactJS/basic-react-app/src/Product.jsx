import "./Product.css";
function Product({title,price}){

    // console.log(props.title);
    return (
    <div className="Product">
        <h3>{title}</h3>
        <h5>Price: {price/2}</h5>
    </div> 
    );
}

export default Product