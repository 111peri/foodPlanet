import React, { useState } from 'react';
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'

function Contacts() {
    const [address, setAddress] = useState('улица,дом,кв');
    const [phone, setPhone] = useState('+996704164171');
    const [email, setEmail] = useState('info@example.com');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="save_contact">
            <h2>Контакты</h2>
            {isEditing ? (
                <form className='save_contacts_item'>
                    <div className="save_contacts_item">
                        <label className='save_contacts_item'>Адрес:</label>
                        <input  type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='save_contacts_item'>
                        <label className='save_contacts_item'>Телефон:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='save_contacts_item'>
                        <label className='save_contacts_item'>Электронная почта:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button onClick={handleSave}>Сохранить</button>
                </form>
            ) : (
                <div className='contact_items'>
                    <p>Адрес: {address}</p>
                    <p>Телефон: {phone}</p>
                    <p>Электронная почта: {email}</p>
                    <p>Режим работы: Пн-Вс 9:00-00:00</p>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                    <p>Вы можете связаться с нами через следующие социальные сети и мессенджеры:</p>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/ваш_инстаграм">Инстаграм</a>
                            <img src={instagram} alt="#"/>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=ваш_номер">WhatsApp</a>
                            <img src={whatsapp} alt="#"/>
                        </li>
                    </ul>
                </div> )}



        </div>
    );
}

export default Contacts;