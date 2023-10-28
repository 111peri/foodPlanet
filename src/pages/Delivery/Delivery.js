import React, { useState } from 'react';

function Delivery() {
    const [restaurant, setRestaurant] = useState('');
    const [dish, setDish] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="delivery">
            <h2>Оформление заказа</h2>
            <form onSubmit={handleSubmit}>
                <div className="delivery">
                    <label className="delivery_select">Выберите ресторан:</label>
                    <select className="delivery" value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
                        <option value="restaurant1">Ресторан 1</option>
                        <option value="restaurant2">Ресторан 2</option>
                        <option value="restaurant3">Ресторан 3</option>
                    </select>
                </div>
                <div>
                    <label className="delivery_select">Выберите блюдо:</label>
                    <select value={dish} onChange={(e) => setDish(e.target.value)}>
                        <option value="burger">Бургер</option>
                        <option value="pizza">Пицца</option>
                        <option value="sushi">Суши</option>
                    </select>
                </div>
                <div>
                    <label className="delivery_address">Адрес доставки:</label>
                    <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                </div>
                <div className="delivery">
                    <label>Комментарии к заказу, если есть:</label>
                    <textarea value={specialInstructions} onChange={(e) => setSpecialInstructions(e.target.value)} />
                </div>
                <button className="delivery_submit" type="submit">Заказать</button>
            </form>
        </div>
    );
}

export default Delivery;
