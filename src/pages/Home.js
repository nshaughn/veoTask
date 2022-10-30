
import Products from "../products-example.json"

const Home = () => {

    const handleClick = () => {
        console.log("Add to basket")
    }

    return ( 
        <div className="home">
            <br></br>
            <h2>Homepage</h2>
            <br></br>
                <div className="products">
                    {
                        Products.map( (product, index) => {
                            return (
                                <div key={index}>
                                    <div key={product.title} className="productList">
                                        <h3>{product.title}</h3><br></br>
                                        <img src={product.image} alt={product.title} /> <br></br>
                                        <p className="description">{product.description}</p>
                                        <p>Price: £{ Math.floor(Math.random() * 50) + 50  } <button onClick={handleClick}>Add to order</button></p>
                                        <br></br><br></br>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                </div>                            
        </div>
     );
}
 
export default Home;
