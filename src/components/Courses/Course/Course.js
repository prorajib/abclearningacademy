import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';
import Rating from 'react-rating';
import useCourse from '../../hooks/useCourses';
import './Course.css';
const Course = (props) => {
    
        const{course} = props;
        const {
            instructor,
            img,
            category,
            courseTitle,
            level,
            rating,
            enrolled,
            price,
        } = course;
        return (
            <Card className="popular-course ">
            <Card.Img variant="top" src={img} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="popular-course-category">{category}</p>
                    <p className="popular-course-level">{level}</p>
                </div>
                <h5 className="popular-course-title">{courseTitle}</h5>
                <p className="popular-course-instructor">Instructor : {instructor}</p>
                <div className="popular-course-review d-flex justify-content-between align-items-center">
                    <p className='rating-p'>
                    <Rating
                initialRating={rating}
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color"
                  readonly
                ></Rating>
                    </p>
                    <p className="users-icon">
                        <FaUsers/> {enrolled}
                    </p>
                </div>
                {price ? (
                    <p className="popular-course-price mt-auto">$ {price}</p>
                ) : (
                    <p className="popular-course-price-free mt-auto">Free</p>
                )}
            </Card.Body>
        </Card>
        );

};

export default Course;