import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"
import Product from '../../app/models/Product';
import Geral from '../../app/controls/Geral';

export default class ShoppingCardPage extends Component{

	// products: Array<Product>;

	// renderProducts(){
	// 	let elements: Array<JSX.Element> = [];
	// 	if(this.products != null){
	// 		this.products.forEach(product => {
	// 			elements.push((
	// 				<li className="list-group-item" key={product.id}>
	// 					<div className="row align-items-center">
	// 						<div className="col-3">

	// 							{/* <!-- Image --> */}
	// 							<a href="product.html">
	// 								<img src={"/assets/img/products/"+product.pictures[0]} className="img-fluid" />
	// 							</a>

	// 						</div>
	// 						<div className="col">

	// 							{/* <!-- Title --> */}
	// 							<div className="d-flex mb-2 font-weight-bold">
	// 								<a className="text-body" href="product.html">{product.name}</a> <span className="ml-auto">${product.price}</span>
	// 							</div>

	// 							{/* <!-- Text --> */}
	// 							<p className="mb-7 font-size-sm text-muted">
	// 								Size: M <br/>
	// 								Color: {Product.getColorName(product.filter.color[0])}
	// 							</p>

	// 							{/* <!--Footer --> */}
	// 							<div className="d-flex align-items-center">

	// 								{/* <!-- Select --> */}
	// 								<select className="custom-select custom-select-xxs w-auto">
	// 									<option value="1">1</option>
	// 									<option value="1">2</option>
	// 									<option value="1">3</option>
	// 								</select>

	// 								{/* <!-- Remove --> */}
	// 								<a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={() => {
	// 									this.products = this.products.filter(p => {
	// 										return p.id != product.id;
	// 									});
	// 									this.renderProducts();
	// 								}}>
	// 									<i className="fe fe-x"></i> Remove
	// 								</a>

	// 							</div>

	// 						</div>
	// 					</div>
	// 				</li>
	// 			))
	// 		})
	// 	}
	// 	ReactDOM.render(elements, document.getElementById("product-container"));
	// }

	// constructor(props:any){
	// 	super(props);
	// 	let products: Array<Product> = require("../../data/products.json");

	// 	let arr = Geral.getRandomNumber(0, products.length - 1, 3).map(n => n - 1);

	// 	this.products = [
	// 		products[arr[0]],
	// 		products[arr[1]],
	// 		products[arr[2]],
	// 	];
	// }

	// componentDidMount(){
	// 	this.renderProducts();
	// }

  // render(){
  //   return (
	// 		<div className="accountorderspage">
	// 			<Navbar className="border-bottom" />

	// 			{/* <!-- BREADCRUMB --> */}
	// 			<nav className="py-5">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-12">

	// 							{/* <!-- Breadcrumb --> */}
	// 							<ol className="breadcrumb mb-0 font-size-xs text-gray-400">
	// 								<li className="breadcrumb-item">
	// 									<a className="text-gray-400" href="index.html">Home</a>
	// 								</li>
	// 								<li className="breadcrumb-item active">
	// 									Shopping Cart
	// 								</li>
	// 							</ol>

	// 						</div>
	// 					</div>
	// 				</div>
	// 			</nav>

	// 			{/* <!-- CONTENT --> */}
	// 			<section className="pt-7 pb-12">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-12">

	// 							{/* <!-- Heading --> */}
	// 							<h3 className="mb-10 text-center">Shopping Cart</h3>

	// 						</div>
	// 					</div>
	// 					<div className="row">
	// 						<div className="col-12 col-md-7">

	// 							{/* <!-- List group --> */}
	// 							<ul className="list-group list-group-lg list-group-flush-x mb-6" id="product-container">
	// 							</ul>

	// 							{/* <!-- Footer --> */}
	// 							<div className="row align-items-end justify-content-between mb-10 mb-md-0">
	// 								<div className="col-12 col-md-7">

	// 									{/* <!-- Coupon --> */}
	// 									<form className="mb-7 mb-md-0">
	// 										<label className="font-size-sm font-weight-bold" htmlFor="cartCouponCode">
	// 											Coupon code:
	// 										</label>
	// 										<div className="row form-row">
	// 											<div className="col">

	// 												{/* <!-- Input --> */}
	// 												<input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*" />

	// 											</div>
	// 											<div className="col-auto">

	// 												{/* <!-- Button --> */}
	// 												<button className="btn btn-sm btn-dark" type="submit">
	// 													Apply
	// 												</button>

	// 											</div>
	// 										</div>
	// 									</form>

	// 								</div>
	// 								<div className="col-12 col-md-auto">

	// 									{/* <!-- Button --> */}
	// 									<button className="btn btn-sm btn-outline-dark">Update Cart</button>

	// 								</div>
	// 							</div>

	// 						</div>
	// 						<div className="col-12 col-md-5 col-lg-4 offset-lg-1">

	// 							{/* <!-- Total --> */}
	// 							<div className="card mb-7 bg-light">
	// 								<div className="card-body">
	// 									<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
	// 										<li className="list-group-item d-flex">
	// 											<span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
	// 										</li>
	// 										<li className="list-group-item d-flex">
	// 											<span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
	// 										</li>
	// 										<li className="list-group-item d-flex font-size-lg font-weight-bold">
	// 											<span>Total</span> <span className="ml-auto font-size-sm">$89.00</span>
	// 										</li>
	// 										<li className="list-group-item font-size-sm text-center text-gray-500">
	// 											Shipping cost calculated at Checkout *
	// 										</li>
	// 									</ul>
	// 								</div>
	// 							</div>

	// 							{/* <!-- Button --> */}
	// 							<Link className="btn btn-block btn-dark mb-2" to="/checkout">Proceed to Checkout</Link>

	// 							{/* <!-- Link --> */}
	// 							<Link className="btn btn-link btn-sm px-0 text-body" to="/shop">
	// 								<i className="fe fe-arrow-left mr-2"></i> Continue Shopping
	// 							</Link>

	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>

	// 			{/* <!-- FEATURES --> */}
	// 			<section className="bg-light py-9">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-12 col-md-6 col-lg-3">

	// 							{/* <!-- Item --> */}
	// 							<div className="d-flex mb-6 mb-lg-0">

	// 								{/* <!-- Icon --> */}
	// 								<i className="fe fe-truck font-size-lg text-primary"></i>

	// 								{/* <!-- Body --> */}
	// 								<div className="ml-6">

	// 									{/* <!-- Heading --> */}
	// 									<h6 className="heading-xxs mb-1">
	// 										Free shipping
	// 									</h6>

	// 									{/* <!-- Text --> */}
	// 									<p className="mb-0 font-size-sm text-muted">
	// 										From all orders over $100
	// 									</p>

	// 								</div>

	// 							</div>

	// 						</div>
	// 						<div className="col-12 col-md-6 col-lg-3">

	// 							{/* <!-- Item --> */}
	// 							<div className="d-flex mb-6 mb-lg-0">

	// 								{/* <!-- Icon --> */}
	// 								<i className="fe fe-repeat font-size-lg text-primary"></i>

	// 								{/* <!-- Body --> */}
	// 								<div className="ml-6">

	// 									{/* <!-- Heading --> */}
	// 									<h6 className="mb-1 heading-xxs">
	// 										Free returns
	// 									</h6>

	// 									{/* <!-- Text --> */}
	// 									<p className="mb-0 font-size-sm text-muted">
	// 										Return money within 30 days
	// 									</p>

	// 								</div>

	// 							</div>

	// 						</div>
	// 						<div className="col-12 col-md-6 col-lg-3">

	// 							{/* <!-- Item --> */}
	// 							<div className="d-flex mb-6 mb-md-0">

	// 								{/* <!-- Icon --> */}
	// 								<i className="fe fe-lock font-size-lg text-primary"></i>

	// 								{/* <!-- Body --> */}
	// 								<div className="ml-6">

	// 									{/* <!-- Heading --> */}
	// 									<h6 className="mb-1 heading-xxs">
	// 										Secure shopping
	// 									</h6>

	// 									{/* <!-- Text --> */}
	// 									<p className="mb-0 font-size-sm text-muted">
	// 										You're in safe hands
	// 									</p>

	// 								</div>

	// 							</div>

	// 						</div>
	// 						<div className="col-12 col-md-6 col-lg-3">

	// 							{/* <!-- Item --> */}
	// 							<div className="d-flex">

	// 								{/* <!-- Icon --> */}
	// 								<i className="fe fe-tag font-size-lg text-primary"></i>

	// 								{/* <!-- Body --> */}
	// 								<div className="ml-6">

	// 									{/* <!-- Heading --> */}
	// 									<h6 className="mb-1 heading-xxs">
	// 										Over 10,000 Styles
	// 									</h6>

	// 									{/* <!-- Text --> */}
	// 									<p className="mb-0 font-size-sm text-muted">
	// 										We have everything you need
	// 									</p>

	// 								</div>

	// 							</div>

	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>
				
	// 			<Footer />
	// 		</div>
  //   )
  // }
}