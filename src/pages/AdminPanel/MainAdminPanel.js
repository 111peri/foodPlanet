import React from 'react';
import Logo_footer from '../../assets/Logo_footer.png'

function MainAdminPanel(props) {
    return (
        <div className="admin_panel">
            <div>
                <img src={Logo_footer} alt="#"/>
            </div>
            <ul>
                <li>Главная</li>
                <li>Заказы</li>
                <li>Меню</li>
                <li>Контакты</li>
                <li>Отзывы</li>
                <li>Сотрудники</li>
            </ul>


        </div>
    );
}

export default MainAdminPanel;