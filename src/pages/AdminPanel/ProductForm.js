import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            price: 0,
            description: '',
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете отправить данные о продукте на сервер или выполнить другие необходимые действия
        console.log(this.state);
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit} className="product_form">
                <div>
                    <label>Название продукта</label><br/>
                    <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Цена</label><br/>
                    <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Описание</label><br/>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </div>
                <button type="submit">Добавить продукт</button>
            </form>
        );
    }
}

export default ProductForm;