import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
         <Product title="phone" price={30000}/>
         <Product title="laptop" price={50000}/>
         <Product title="pen" price={10}/>
        </>
    );
}

export default ProductTab