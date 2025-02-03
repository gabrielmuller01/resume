import React from "react";
import './componentsStyle/Page4.css'; // Imports the specific CSS for Page4

function Page4() {
    return (
        <div className="page4">
            <div className="Title">
                <h2><strong>Courses And Certifications</strong></h2>
            </div>
            <div className="grid">
                <div className="grid-item large">
                    <h3>College</h3>
                    <p>Bachelor's Degree in Systems Analysis and Development</p>
                    <p>Expected Graduation: 2025</p>
                    <h4>Skills Developed:</h4>
                    <ul>
                        <li>Project development in various languages (JavaScript, Java, HTML5, C++, C#, ReactJS)</li>
                        <li>Data Structures, Programming Logic</li>
                        <li>Databases (MYSQL/SQL Server/PostgreSQL)</li>
                    </ul>
                </div>
                <div className="grid-item small">
                    <div className="item">
                        <h3>Courses</h3>
                        <ul>
                            <li>Basic Informatics - Infosul (1 year)</li>
                            <li>English - CLECS - Intermediate (3 years)</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Skills</h3>
                        <ul>
                            <li>Communication</li>
                            <li>Willingness to Learn</li>
                            <li>Good Teamwork</li>
                            <li>Creativity</li>
                            <li>Knowledge in JS, HTML, CSS</li>
                            <li>Basic Front-End (ReactJS) and Back-End (NodeJS) Knowledge</li>
                            <li>Material UI, Bootstrap</li>
                            <li>Git, Linux, Docker</li>
                            <li>SQL - PostgreSQL and SQL Server</li>
                            <li>Power BI</li>
                            <li>CMS/CRM/ERP</li>
                            <li>Advanced Hardware Knowledge</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;