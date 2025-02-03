import React from "react";
import './componentsStyle/Page2.css';// Importa o CSS específico para o Page2

function Page2() {
    return (
        <div className="page2">
            <div className="Title">
                <h2><strong>Contact Informations</strong></h2>
            </div>
            <div className="InfoContainer">
                <div className="contact-item">
                    <p><strong>Mail:</strong> gabriel.polidoro123@outlook.com</p>
                    <p><strong>Phone:</strong> +55 54 9 9682-0018</p>
                    <p><strong>Adress:</strong> Rua Exemplo, 123, Cidade, Estado</p>
                </div>
            </div>
        </div>
    );
}

export default Page2;