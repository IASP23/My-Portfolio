import Perfil from "../../assets/img/LOGO HACKER TECNOLOGICO.png";
import "./card.css";
export function CardHome() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}>
      <div className="card rounded text-white bg-primary mb-3">
        <div className="card-header bg-dark">Quien soy?</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-8 p-5 text-center">
              <h4 className="card-title">Hola mi nombre es Ismael</h4>
              <p className="card-text  ">
                Soy un estudiante de Ingenieria en Software, me encanta
                programar y disfruto mucho el estar actualizado con las
                tendecias relacionadas a la Tecnólogia, me interesa en especial
                el desarrollo de sitios web...
              </p>
            </div>
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                id="foto-perfil"
                src={Perfil}
                className="img-thumbnail p-2 "
                alt="Ismael"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
