import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import "../styles/all-product.css";

const Pizzas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [sortState, setSortState] = useState("none");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.valueOf === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  /*-------sortMethods------*/

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  /*----------*/

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input type="text" placeholder="I'm looking for...." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /><span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                  <option value="DEFAULT" disabled>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  {/* <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option> */}
                </select>
              </div>
            </Col>


            {displayPage.sort(sortMethods[sortState].method).map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-3">
                <ProductCard item={item} />
              </Col>
            ))}
            <div className="d-flex justify-content-center mt-4 mb-4">
              <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel={"Prev"} nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Pizzas;
