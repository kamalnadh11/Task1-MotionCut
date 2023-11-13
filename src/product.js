
import Slider from "./slider"
import './App.css'

const Product=({ cartItemCount, onAddToCart })=>{
    return(
        <div>
            <Slider />
            <div>
            <div className="pc">
            <div className="pc1">
                <img src="./images/a2.jpg" alt="Apex Legends"/>
                <h3>Apex Legends</h3>
                <p>Price : 20$</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
            <div className="pc1">
                <img src="./images/a4.jpg" alt="Red Dead Redemption 2"/>
                <h3>Red Dead Redemption 2</h3>
                <p>Price : 60$</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
            <div className="pc1">
                <img src="./images/a5.jpeg" alt="Grand Theft Auto V"/>
                <h3>Grand Theft Auto V</h3>
                <p>Price : 60$</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
            <div className="pc1">
                <img src="./images/a6.jpg" alt="Counter Strike"/>
                <h3>Counter Strike</h3>
                <p>Price : 20$</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
            </div>

        </div>
    )
};
export default Product;