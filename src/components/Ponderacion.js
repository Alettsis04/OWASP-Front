import React from "react";

const Ponderacion = ({ valor }) => {
  return (
    <>
      <div className="row justify-content-center align-items-center text-center">
        {valor < 3 && (
          <div className="col-auto">
            <div className="info-box bg-success">
              <span className="info-box-icon">
                <i className="far fa-thumbs-up" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Bajo</span>
                <span className="info-box-number">{valor}</span>
              </div>
            </div>
          </div>
        )}
        {valor >= 3 && valor < 6 && (
          <div className="col-auto">
            <div className="info-box bg-warning">
              <span className="info-box-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Medio</span>
                <span className="info-box-number">{valor}</span>
              </div>
            </div>
          </div>
        )}
        {valor >= 6 && valor <= 9 && (
          <div className="col-auto">
            <div className="info-box bg-danger">
              <span className="info-box-icon">
                <i className="fas fa-times-circle"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Alto</span>
                <span className="info-box-number">{valor}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Ponderacion;
