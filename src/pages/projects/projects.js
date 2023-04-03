import React from "react";
import LogoGit from "../../assets/img/github_logo.png";
import p1 from "../../assets/img/P1.jpg";
export function Projects() {
  return (
    <>
      <div className="container p-2">
        <h2 className="pb-2 border-bottom">Proyectos</h2>
        <div className="row row-cols-1 row-cols-lg-3 g-4 py-5 d-flex justify-content-center align-items-center">
          <div className="col">
            {/* Desde aqui empiezo a mappear */}
            <div className="card card-cover overflow-hidden bg-primary rounded-5 shadow-lg">
              <img src={p1} className="img-fluid" alt="p1" />
              <div className="d-flex flex-column  px-5  text-white text-shadow-1">
                <h2 className="pt-3 mb-4 display-6 lh-1 fw-bold">R</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      className="rounded-circle border border-white"
                      src={LogoGit}
                      alt="GitHub"
                      width="32"
                      height="32"
                      style={{ background: "#fff" }}
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      {/*     <use xlink:href="#geo-fill"></use> */}
                    </svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      {/*      <use xlink:href="#calendar3"></use> */}
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
