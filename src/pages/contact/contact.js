import React from "react";
import { FaFacebookSquare, FaWhatsapp, FaGithub } from "react-icons/fa";
import "../contact/contact.css";
export function Contact() {
  return (
    <>
      <div
        class="container d-flex justify-content-center align-items-center"
        style={{ maxHeight: "100vh" }}>
        <form className="card rounded-3 p-2 col-sm-8 col-md-4 ">
          <div>
            <h2 className="pb-2 border-bottom">Contactame</h2>
            <div className="form-group row"></div>
            <div className="form-group ">
              <label for="name" className="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre y Apellido"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="form-label mt-4">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="alguien@email.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="form-label mt-4">
                Cell Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="099999999"
              />
            </div>
            <div className="form-group">
              <label for="exampleTextarea" className="form-label mt-4">
                Enviame un mensaje
              </label>
              <textarea
                className="form-control"
                id="textArea"
                rows="3"></textarea>
            </div>
            <div className="row">
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button
                    type="submit"
                    className="btn btn-success rounded-5 shadow me-auto m-2">
                    Enviar
                  </button>
                </li>
                <li className="d-flex align-items-center px-2">
                  <FaFacebookSquare />
                </li>
                <li className="d-flex align-items-center px-2">
                  <FaWhatsapp />
                </li>

                <li className="d-flex align-items-center px-2">
                  <FaGithub />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
