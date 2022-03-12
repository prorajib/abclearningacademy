import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCourses from '../hooks/useCourses';
import './Home.css';
import PopularCourse from './PopularCourse/PopularCourse';

const Home = () => {
    const [courses, setCourse] = useCourses([]);
    courses.length =6;
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate("/courses");
    }
    return (
        <div className='home'>
            <main>
                <section className='home'>
                    <div className='header-home'>
                          <Row>
                              <Col md={8}>
                                <p>Learn from the Professionals</p>
                                <h1>Join Today, Learn and Change Your Life.</h1>
                                <button className='btn-regular' onClick={handleclick}>Explore Our Courses</button>
                              </Col>
                              <Col></Col>

                          </Row>
                    </div>

                     <div className='courses-hoe container mt-0 my-5'>
                        <h2 className='mb-4'>Popular Courses</h2>
                        <hr className='line' />
                        <Row xs={1} md={3} className="g-4">
                        {courses.map((course) => (
                            <Col>
                                <PopularCourse key={course.id} course={course}></PopularCourse>
                            </Col>
                        ))}
                    </Row>
                     </div>
                </section>
            </main>
        </div>
    );
};

export default Home;