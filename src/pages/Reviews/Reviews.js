import React from "react";

const Reviews = () => {
    const reviews = [
        {
            image: '',
            name: 'Сергей',
            description: 'Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)',

        },
        {
            image: '',
            name: 'Анна',
            description: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо! ' ,
        },
        {
            image: '',
            name: 'Яна',
            description: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо! ' ,
        },
        {
            image: '',
            name: 'Анна',
            description: 'Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна! ' ,
        },
    ];

    return (
        <div className="reviews__list">
            {reviews.map((review, index) => (
                <div key={index} className="reviews__item">
                    <div className='reviews__title'>
                    <h2 className="reviews__name">{review.name}</h2>
                    <p className="reviews__descr">{review.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
