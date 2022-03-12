import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useCourse from '../hooks/useCourses';
import Course from './Course/Course';

const Courses = () => {
    const [courses, setCourses] = useCourse([]);

    return (
        <div>
              <div className='courses-hoe container mt-0 my-5'>
                        <h2 className='mb-4'> Courses</h2>
                        <hr className='line' />
                        <Row xs={1} md={3} className="g-4">
                        {courses.map((course) => (
                            <Col>
                                <Course key={course.id} course={course}></Course>
                            </Col>
                        ))}
                    </Row>
                     </div>
        </div>
    );
};

export default Courses;