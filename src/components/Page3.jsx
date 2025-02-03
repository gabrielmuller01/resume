import React from "react";
import './componentsStyle/Page3.css'; // Imports the specific CSS for Page3

function Page3() {
    return (
        <div className="page3">
            <div className="Title">
                <h2><strong>Work experience</strong></h2>
            </div>
            <div className="columns">
                <div className="column">
                    <h3>Company</h3>
                    <p>Com. De Medicamentos Ltda (Farmácias São João)</p>
                    <h3>Position</h3>
                    <p>Financial Operator</p>
                    <h3>Period</h3>
                    <p>02/2020 - 04/2021</p>
                    <h3>Activities</h3>
                    <ul>
                        <li>Operate Cash Register and Customer Service</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <p>Grupo Uniftec</p>
                    <h3>Position</h3>
                    <p>Information Systems Programming Assistant</p>
                    <h3>Period</h3>
                    <p>06/2021 - 05/2023</p>
                    <h3>Activities</h3>
                    <ul>
                        <li>N2 and N3 Support to units</li>
                        <li>Use of ERP System (Totvs)</li>
                        <li>System Maintenance - Front-End Languages (ReactJS, JavaScript, HTML5, CSS)</li>
                        <li>Development of the registration site (inscricao.uniftec.com.br)</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <p>Denker Engenharia de Sistemas</p>
                    <h3>Position</h3>
                    <p>C# Programmer</p>
                    <h3>Period</h3>
                    <p>05/2023 - 11/2023</p>
                    <h3>Activities</h3>
                    <ul>
                        <li>Development of software for industrial automation and general automation</li>
                        <li>Use of Linux and Windows Systems</li>
                        <li>Integration with SQL Server databases</li>
                        <li>MVC</li>
                        <li>Development of an application for robot control, using C#, SQL Server, MVC, and client/server</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <p>Everflow Tecnologia Ltda</p>
                    <h3>Position</h3>
                    <p>Customer Support/Customer Success</p>
                    <h3>Period</h3>
                    <p>12/2023 - 01/2025</p>
                    <h3>Activities</h3>
                    <ul>
                        <li>Customer support via chat to use ERP</li>
                        <li>Creation of content models (Using HTML, CSS, and JavaScript)</li>
                        <li>Data imports via API Make</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page3;