import ProductList from "../utils/ProductList";
import { useState } from "react";

function Content() {

    const [selectedCategory, setSelectedCategory] = useState('所有'); // 初始類別
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // 過濾特定類別的商品
    const filteredProducts = selectedCategory === '所有'
    ? ProductList
    : ProductList.filter(product => product.category === selectedCategory);
    
    //購物車
    const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex((item) => item.product.id === product.id);
    
        if (existingItemIndex !== -1) {
          // 商品已存在於購物車中，更新數量
          updatedCart[existingItemIndex].quantity += 1;
        } else {
          // 商品不在購物車中，添加新項目
          updatedCart.push({ product, quantity: 1 });
        }
    
        setCart(updatedCart);
        setTotal(total + product.price);
    };
    
    //移除物件
    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.product.id !== item.product.id);
        setCart(updatedCart);
        setTotal(total - item.product.price * item.quantity);
    };

    const product = filteredProducts.map(e => {
        return (
            <div key={e.id} className="col-md-4 py-5">
                <div className="card">
                    <img src={e.img} alt={e.name} className="card-img-top" />
                    <div className="card-body">
                        <h5>{e.name}</h5>
                        <p>$ {e.price}</p>
                        <p>{e.info}</p>
                        <button className='btn btn-primary' onClick={() => addToCart(e)}>新增到購物車</button>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div className="Content">
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="categories">
                            <h2>商品分類</h2>
                            <button onClick={() => setSelectedCategory('所有')}>所有</button>
                            <button onClick={() => setSelectedCategory('1')}>服裝</button>
                            <button onClick={() => setSelectedCategory('2')}>鞋子</button>
                            <button onClick={() => setSelectedCategory('3')}>飾品</button>
                        </div>
                        {product}
                    </div>
                </div>
            </div>
            <div className="cart text-center">
                ===========================
                <h2>我的購物清單</h2>
                <div>
                {cart.map((cartItem) => (
                    <div className="py-2" key={cartItem.product.id}>
                        {cartItem.product.info} - ${cartItem.product.price} x {cartItem.quantity}
                        &nbsp;&nbsp;&nbsp;
                        <button className='btn btn-danger' onClick={() => removeFromCart(cartItem)}>移除</button>
                    </div>
                ))}
                </div>
                <p>總計: ${total}</p>
            </div>
        </div>
    );

}

export default Content;