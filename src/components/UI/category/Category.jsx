import React from 'react';
import { Container, Row, Col } from 'reactstrap';
/*-----category image import----------*/
import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';
/*-----end category image import----------*/
import '../../../styles/category.css';
const categoryDate = [
    {
        display: 'Fastfood',
        imageUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imageUrl: categoryImg02
    },
    {
        display: 'Asian Food',
        imageUrl: categoryImg03
    },
    {
        display: 'Row Meat',
        imageUrl: categoryImg04
    },
]

const Category = () => {
    return (
        <Container>
            <Row>
                {categoryDate.map((item, index) => (
                    <Col lg="3" md="4" sm="6" key={index} className="mb-3">
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imageUrl} alt={item.display} />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))
                }
            </Row>
        </Container>
    )
}

export default Category