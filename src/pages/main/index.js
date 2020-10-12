import React, {Component} from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import Loader from '../../components/loader';

//CSS
import './styles.css';

export default class Main extends Component {

	state = {
		products: [],
		productsInfo: {},
		page: 1,
		isLoader: true
	}	

	componentDidMount(){
		this.loadProducts();
	}

	loadProducts = async (page = 1) => {
		this.setState({isLoader: true});

		const response = await api.get(`/products?page=${page}`);

		const { docs, ...productsInfo } = response.data;
		
		this.setState({ products: docs , productsInfo, page ,isLoader: false});
	};

	nextPage = () => {
		const { page, productsInfo } = this.state;

		if(page === productsInfo.pages) return;

		const pageNumber = page + 1;

		this.loadProducts(pageNumber);
	}

	prevPage = () => {
		const { page } = this.state;

		if (page === 1) return;

		const pageNumber = page - 1;

		this.loadProducts(pageNumber);
	}

	render(){

		const { products, page, productsInfo, isLoader } = this.state;
		
		return (
			<>
			<div className={isLoader ? "loading" : "hide"}><Loader/></div>
			<div className={isLoader ? "hide" : "product-list"}>
				{products.map(product => (
					<article key={product._id}>
						<strong>{product.title}</strong>
						<p>{product.description}</p>

						<Link to={`/product/${product._id}`}>Acessar</Link>
					</article>
				))}

				<div className="actions">
					<button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
					<button disabled={page === productsInfo.pages} onClick={this.nextPage}>Próxima</button>
				</div>
			</div>
			</>
		);
	}
}