import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ProductList from "../utils/ProductList";
import { useState, useEffect } from "react";

function Content() {

    const [selectedCategory, setSelectedCategory] = useState('所有'); // 初始類別
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [weight, setWeight] = useState(0);
    const [postPrice, setPostPrice] = useState(0);

    // 過濾特定類別的商品(by category)
    const filteredProducts = selectedCategory === '所有'
    ? ProductList
    : ProductList.filter(product => product.category === selectedCategory);

    // 使用 useEffect 確保在 weight 更新後再計算郵寄費用
    useEffect(() => {
        calculosPostPrice(weight);
        console.log(postPrice);
    }, [weight, postPrice]);
    
    // 購物車
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
        // 計算重量
        setWeight(weight => weight + product.mass);
    };
    
    // 移除物件
    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.product.id !== item.product.id);
        setCart(updatedCart);
        setTotal(total - item.product.price * item.quantity);
        setWeight(weight - item.product.mass * item.quantity);
    };

    // 計算包裹運費
    const calculosPostPrice = (e) => {
        const weightInKg = e/1000;
        let postPrice = 0;
        if (weightInKg < 5){
            postPrice = 600;
        } else {
            const extraWeight = weightInKg - 5;
            const extraCost = Math.ceil(extraWeight / 0.5) * 100;
            postPrice = 600 + extraCost;
        };

        setPostPrice(postPrice);
    };

    // 切換顯示產品在畫面上
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
                            <br/>
                            <ButtonGroup size="sm" aria-label="Basic example">
                                <Button variant="secondary" onClick={() => setSelectedCategory('所有')} >所有</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(1)}>胃腸藥</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(3)}>貼布、外用藥</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(4)}>營養補充品</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(5)}>眼藥水</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(6)}>感冒、頭痛藥</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(7)}>美妝</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(8)}>餅乾、糖果</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(9)}>禮盒</Button>
                                <Button variant="secondary" onClick={() => setSelectedCategory(10)}>三得利</Button>
                            </ButtonGroup>
                        </div>
                        {product}
                    </div>
                </div>
            </div>
            <div className="cart">
                <h2 className='text-center'>======================</h2>
                <h2 className='text-center'>我的購物清單</h2>
                <h4 className='text-center'>國際郵件運費為新台幣600元，超過5Kg後每0.5公斤追加100元</h4>
                <div className='text-center'>
                {cart.map((cartItem) => (
                    <div className="py-2" key={cartItem.product.id}>
                        {cartItem.product.info} - ${cartItem.product.price} x {cartItem.quantity}
                        &nbsp;&nbsp;&nbsp;
                        <button className='btn btn-danger' onClick={() => removeFromCart(cartItem)}>移除</button>
                    </div>
                ))}
                </div>
                &nbsp;&nbsp;&nbsp;
                <h4 className='text-center'>目前商品總重量: {weight} 公克</h4>
                <h4 className='text-center'>運費: ${postPrice} NT</h4>
                &nbsp;&nbsp;&nbsp;
                <h3 className='text-center'>總計: ${total + postPrice} NT</h3>
            </div>
        </div>
    );

}

export default Content;