import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Hamburguer01 from "./components/images/hamburguer01.webp";
import Hamburguer02 from "./components/images/hamburguer02.webp";
import Hamburguer03 from "./components/images/hamburguer03.webp";
import Pizza01 from "./components/images/pizza01.webp";
import Pizza02 from "./components/images/pizza02.jpg";
import Pizza03 from "./components/images/pizza03.jpeg";
import Bebida01 from "./components/images/bebida01.webp";
import Bebida02 from "./components/images/bebida02.webp";
import Bebida03 from "./components/images/bebida03.webp";
import Bebida04 from "./components/images/bebida04.jpg";

export default function App() {
  const pop_up = (image, titleBox, paragraphBox, priceProduct) => {
    const area = document.createElement("div");
    area.setAttribute("class", "area-box");
    area.style.cssText = `
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: 5;
      background-color: rgba(0,0,0,0.6); 
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;
    document.body.prepend(area);

    area.addEventListener("click", () => {
      const div = document.querySelector(".area");
      document.body.removeChild(area);
    });

    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.cssText = `
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 2px 2px 4px rgba(0,0,0, 0.454);
      border: 8px solid #fff;
      color: #000;
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 0px;
      overflow: hidden;
    `;
    area.appendChild(box);

    const img = document.createElement("img");
    img.style.cssText = `
      box-shadow: inset 4px 2px 2px rgba(0,0,0, 0.7);
      border-radius: 10px;
      height: auto;
      width: 100%;
    `;
    img.src = image;
    box.appendChild(img);

    const section = document.createElement("section");
    section.style.cssText = `
      padding: 20px;
      background-color: #fff;
      color: #000;
    `;
    box.appendChild(section);

    const title = document.createElement("h2");
    title.innerHTML = titleBox;
    section.appendChild(title);

    const line = document.createElement("hr");
    line.style.cssText = `
      background: #000;
      height: 2px;
      width: 90%;
      margin-top: 10px;
      margin-bottom: 10px;
      border: 2px solid #000;
    `;
    section.appendChild(line);

    const paragraph = document.createElement("p");
    paragraph.style.cssText = `
      font-size: 1.3rem;
    `;
    paragraph.innerHTML = paragraphBox;

    section.appendChild(paragraph);

    section.appendChild(document.createElement("br"));

    const price = document.createElement("h2");
    price.style.cssText = `
      text-align: end;
      margin-top: 10px; 
    `;
    price.innerHTML = `Preço: R$${priceProduct}`;
    section.appendChild(price);
  };

  const links = () => {
    const links = [...document.querySelectorAll("div.link")];
    const tagsA = [...document.querySelectorAll("a")];

    tagsA.forEach((tagA) => {
      tagA.addEventListener("click", (event) => {
        let linkSelected = event.target.parentElement;
        let linkS = document.querySelector(".selected");

        linkS.classList.remove("selected");
        linkSelected.classList.add("selected");
      });
    });
  };

  useEffect(() => {
    links();
  });

  return (
    <div className="container">
      <header>
        <h1>
          <i className="fi fi-ss-hamburger"></i>
        </h1>
        <h2>Hamburgueria Ea.</h2>
      </header>
      <nav>
        <div className="links">
          <div className="link selected">
            <a href="#hamburgueres">Hamburgueres</a>
          </div>
          <div className="link">
            <a href="#pizzas">Pizzas</a>
          </div>
          <div className="link">
            <a href="#bebidas">Bebidas</a>
          </div>
        </div>
        <div className="bar" id="bar">
          <section className="hamburgueres"></section>
          <section className="pizzas"></section>
          <section className="bebidas"></section>
          <section className="acais"></section>
        </div>
      </nav>
      <main>
        <section className="secao" id="hamburgueres">
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Hamburguer01,
                  "Duo Burguers.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "40,00"
                )
              }
            ></div>
            <div className="image-burguer">
              <img src={Hamburguer01} alt="item do cardápio" />
            </div>
            <article>
              <h2>Duo Burguers.</h2>
              <br />
              <h2>R$ 40,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Hamburguer02,
                  "Hambúrguer da Casa.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "20,00"
                )
              }
            ></div>

            <div className="image-burguer">
              <img src={Hamburguer02} alt="item do cardápio" />
            </div>
            <article>
              <h2>Hamburguer da Casa.</h2>
              <br />
              <h2>R$ 20,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Hamburguer03,
                  "Hambúrguer King.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "25,00"
                )
              }
            ></div>

            <div className="image-burguer">
              <img src={Hamburguer03} alt="item do cardápio" />
            </div>
            <article>
              <h2>Hamburguer King.</h2>
              <br />
              <h2>R$ 25,00</h2>
            </article>
          </section>
        </section>
        <section className="secao" id="pizzas">
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Pizza01,
                  "Pizza de Calabresa.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "30,00"
                )
              }
            ></div>
            <div className="image-pizza">
              <img src={Pizza01} alt="item do cardápio" />
            </div>
            <article>
              <h2>Pizza de Calabresa.</h2>
              <br />
              <h2>R$ 30,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Pizza02,
                  "Pizza de Queijo.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "30,00"
                )
              }
            ></div>

            <div className="image-pizza">
              <img src={Pizza02} alt="item do cardápio" />
            </div>
            <article>
              <h2>Pizza de Queijo.</h2>
              <br />
              <h2>R$ 30,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Pizza03,
                  "Pizza de Frango.",
                  "Pão semi-italiano, tomate, cebola, alface, hambúrguer caseiro e molho da casa.",
                  "30,00"
                )
              }
            ></div>

            <div className="image-pizza">
              <img src={Pizza03} alt="item do cardápio" />
            </div>
            <article>
              <h2>Pizza de Frango.</h2>
              <br />
              <h2>R$ 30,00</h2>
            </article>
          </section>
        </section>
        <section className="secao" id="bebidas">
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Bebida01,
                  "Água sem Gás.",
                  "Água Mineral sem gás.",
                  "2,00"
                )
              }
            ></div>
            <div className="image-bebida">
              <img src={Bebida01} alt="item do cardápio" />
            </div>
            <article>
              <h2>Água sem Gás.</h2>
              <br />
              <h2>R$ 2,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Bebida02,
                  "Água com Gás.",
                  "Água mineral com gás.",
                  "3,00"
                )
              }
            ></div>

            <div className="image-bebida">
              <img src={Bebida02} alt="item do cardápio" />
            </div>
            <article>
              <h2>Água com Gás.</h2>
              <br />
              <h2>R$ 3,00</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Bebida03,
                  "Coca Cola Zero.",
                  "Refrigerante coca cola zero açúcar.",
                  "3,50"
                )
              }
            ></div>

            <div className="image-bebida">
              <img src={Bebida03} alt="item do cardápio" />
            </div>
            <article>
              <h2>Coca Cola Sem Áçucar.</h2>
              <br />
              <h2>R$ 3,50</h2>
            </article>
          </section>
          <section>
            <div
              className="cursor"
              onClick={() =>
                pop_up(
                  Bebida04,
                  "Coca Cola",
                  "Refrigerante coca cola tradicional.",
                  "3,50"
                )
              }
            ></div>

            <div className="image-bebida">
              <img src={Bebida04} alt="item do cardápio" />
            </div>
            <article>
              <h2>Coca Cola Tradicional.</h2>
              <br />
              <h2>R$ 3,50</h2>
            </article>
          </section>
        </section>
      </main>
      <footer>
        <h3>
          {" "}
          <i className="fi fi-ss-hamburger"></i>
        </h3>
        <h3>Hamburgueria Ea.</h3>
        <br />
        <p>Estado: Rio Grande do Norte.</p>
        <br />
        <p>Horário de Abertua: Das 18h até às 22h.</p>
        <br />
        <p>Cidade: São José de Mipibu.</p>
        <br />
        <p>Endereço: Rua João Paiva Rodrigues Nº290.</p>
        <br />
        <div className="button-zap"><a href="https://api.whatsapp.com/send?phone=5584996383032" target="_blank"><i class="fi fi-brands-whatsapp"></i><h3>Faça o seu Pedido!</h3></a></div>
        <div className="button-instagram"><a href="https://instagram.com/iago_028" target="_blank"><i class="fi fi-brands-instagram"></i><h3>Siga o nosso perfil!</h3></a></div>
      </footer>
      <a className="iconZap" href="https://api.whatsapp.com/send?phone=5584996383032" target="_blank"><i class="fi fi-brands-whatsapp"></i></a>
    </div>
  );
}
