import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Loader from '../../components/loader';

//CSS
import './styles.css';

export default class Product extends Component {

	state = {
		product: [],
	}

	async componentDidMount(){

		const { id } = this.props.match.params;

		const response = await api.get(`/products/${id}`);

		this.setState({ product : response.data });
	}

	render(){

		const { product } = this.state;
		console.log(product);
		return (
			<>
			<div className={product.length !== 0 ? "hide" : ""}><Loader/></div>
			<div className={product.length !== 0 ? "containter-product-info" : "hide"}>	
				<div className="back-to-home">
					<Link to={'/'}> ← Voltar</Link>
				</div>

				<div className="product-info">
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<br/>
					URL: <a href={product.url}> {product.url} </a>

				</div>
			</div>
			</>
		);
	};
}