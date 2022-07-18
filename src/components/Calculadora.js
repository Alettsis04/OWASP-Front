import React, { useState } from "react";
import { Gravedad } from "./Gravedad";
import Ponderacion from "./Ponderacion";
import Selector from "./Selector";

const agente = [
  {
    nombre: "Nivel de Habilidad",
    info: "¿Cuán hábil técnicamente consideraría el grupo esperado de agentes amenazantes?",
    opciones: [
      "0",
      "1 - Sin habilidades técnicas",
      "2",
      "3 - Algunas habilidades técnicas",
      "4",
      "5 - Usuario avanzado de informáticar",
      "6 - Habilidades de red y programación",
      "7",
      "8",
      "9 - Habilidades de penetración de seguridad",
    ],
  },
  {
    nombre: "Motivo",
    info: "¿Qué tan motivado está este grupo de agentes de amenazas para encontrar y explotar esta vulnerabilidad?",
    opciones: [
      "0",
      "1 - Recompensa baja o nula",
      "2",
      "3",
      "4 - Posible recompensa",
      "5",
      "6",
      "7",
      "8",
      "9 - Recompensa alta",
    ],
  },
  {
    nombre: "Oportunidad",
    info: "¿Qué recursos y oportunidades se requieren para que este grupo de agentes de amenazas encuentre y explote esta vulnerabilidad?",
    opciones: [
      "0 - Se requiere acceso completo o recursos costosos",
      "1",
      "2",
      "3",
      "4 - Acceso o recursos especiales requeridos",
      "5",
      "6",
      "7 - Se requiere algún acceso o recursos",
      "8",
      "9 - No se requiere acceso ni recursos",
    ],
  },
  {
    nombre: "Tamaño",
    info: "¿Qué tan grande es este grupo de agentes amenazantes?",
    opciones: [
      "0",
      "1",
      "2 - Desarrolladores, administradores de sistemas",
      "3",
      "4 - Usuarios de la intranet",
      "5 - Socios",
      "6 - Usuarios autenticados",
      "7",
      "8",
      "9 - Usuarios de internet anónimos",
    ],
  },
];
const vulnerabilidad = [
  {
    nombre: "Facilidad de descubrimiento",
    info: "¿Qué tan fácil es para este grupo de agentes de amenazas descubrir esta vulnerabilidad?",
    opciones: [
      "0",
      "1 - Prácticamente imposible",
      "2",
      "3 - Difícil",
      "4",
      "5",
      "6",
      "7 - Fácil",
      "8",
      "9 - Herramientas automatizadas disponibles",
    ],
  },
  {
    nombre: "Facilidad de explotación",
    info: "¿Qué tan fácil es para este grupo de agentes de amenazas explotar esta vulnerabilidad?",
    opciones: [
      "0",
      "1 - Teórica",
      "2",
      "3 - Difícil",
      "4",
      "5 - Fácil",
      "6",
      "7",
      "8",
      "9 - Herramientas automatizadas disponibles",
    ],
  },
  {
    nombre: "Conciencia",
    info: "¿Qué tan conocida es esta vulnerabilidad para este grupo de agentes de amenazas?",
    opciones: [
      "0",
      "1 - Desconocida",
      "2",
      "3",
      "4 - Oculta",
      "5",
      "6 - Obvia",
      "7",
      "8",
      "9 - Conocimiento público",
    ],
  },
  {
    nombre: "Detección de intrusos",
    info: "¿Qué probabilidad hay de que se detecte un exploit?",
    opciones: [
      "0",
      "1 - Detección activa en la aplicación",
      "2",
      "3 - Registrado y revisado",
      "4",
      "5",
      "6",
      "7",
      "8 - Registrado sin revisión",
      "9 - No registrado",
    ],
  },
];
const tecnico = [
  {
    nombre: "Pérdida de Confidencialidad",
    info: "¿Cuántos datos podrían divulgarse y qué tan confidenciales son?",
    opciones: [
      "0",
      "1",
      "2 - Mínima (Data no crítica)",
      "3",
      "4 - Mínima (Data crítica)",
      "5",
      "6 - Considerable(Data no crítica)",
      "7 - Considerable (Data crítica)",
      "8",
      "9 - Corrupción de datos total",
    ],
  },
  {
    nombre: "Pérdida de Integridad",
    info: "¿Cuántos datos podrían corromperse y qué tan dañados están?",
    opciones: [
      "0",
      "1 - Mínima (Data no crítica)",
      "2",
      "3 - Mínima (Data crítica)",
      "4",
      "5 - Considerable(Data no crítica)",
      "6",
      "7 - Considerable (Data crítica)",
      "8",
      "9 - Corrupción de datos total",
    ],
  },
  {
    nombre: "Pérdida de Disponibilidad",
    info: "¿Cuánto servicio podría perderse y cuán vital es?",
    opciones: [
      "0",
      "1 - Mínima (Servicios no críticos)",
      "2",
      "3 - Mínima (Servicios críticos)",
      "4",
      "5 - Considerable (Servicios no críticos)",
      "6",
      "7 - Considerable (Servicios críticos)",
      "8",
      "9 - Pérdida total de los servicios",
    ],
  },
  {
    nombre: "Pérdida de Auditabilidad",
    info: "¿Son las acciones de los agentes amenazantes rastreables a un individuo?",
    opciones: [
      "0",
      "1 - Totalmente auditable",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7 - Posiblemente auditable",
      "8",
      "9 - No auditable",
    ],
  },
];
const negocio = [
  {
    nombre: "Daño económico",
    info: "¿Cuánto daño financiero resultará de un exploit?",
    opciones: [
      "0",
      "1 - Menor que el costo de la solución total",
      "2",
      "3 - Efecto menor en el costo anual",
      "4",
      "5",
      "6",
      "7 - Efecto significante en el costo anual",
      "8",
      "9 - Efecto devastador (bancarrota)",
    ],
  },
  {
    nombre: "Daño en la imagen",
    info: "¿Un exploit resultaría en un daño a la reputación que perjudicaría al negocio?",
    opciones: [
      "0",
      "1 - Daño mínimo",
      "2",
      "3",
      "4 - Perdida de grandes cuentas",
      "5 - Pérdida de credibilidad a gran escala",
      "6",
      "7",
      "8",
      "9 - Daño total de imagen",
    ],
  },
  {
    nombre: "No cumplimiento",
    info: "¿Cuánta exposición introduce el incumplimiento?",
    opciones: [
      "0",
      "1",
      "2 - Mínimo",
      "3",
      "4",
      "5 - Medio",
      "6",
      "7 - Alto",
      "8",
      "9",
    ],
  },
  {
    nombre: "Violación a la privacidad",
    info: "¿Cuánta información de identificación personal podría divulgarse?",
    opciones: [
      "0",
      "1",
      "2",
      "3 - Una persona",
      "4",
      "5 - Cientos de personas",
      "6",
      "7 - Miles de personas",
      "8",
      "9 - Millones de personas",
    ],
  },
];

const Calculadora = () => {
  const [valProbabilidad, setValProbabilidad] = useState(0.0);
  const [valImpacto, setValImpacto] = useState(0.0);
  const [valTecnico, setValTecnico] = useState(0.0);
  const [valNegocio, setValNegocio] = useState(0.0);
  const [dataRisk, setDataRisk] = useState({
    nombre: "",
    habilidad: 0,
    motivo: 0,
    oportunidad: 0,
    tamannio: 0,
    descubrimiento: 0,
    explotacion: 0,
    conciencia: 0,
    deteccion: 0,
    confidencialidad: 0,
    integridad: 0,
    disponibilidad: 0,
    responsabilidad: 0,
    financiero: 0,
    reputacion: 0,
    cumplimiento: 0,
    privacidad: 0,
    totalProbabilidad: 0,
    totalImpacto: 0,
    _id: "",
    __v: 0,
  });

  const enviarRiesgo = () => {
    console.log("Data a enviar: ");
    console.log(dataRisk);
    fetch("api/v1/risk/guardar", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: dataRisk,
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch(() => console.log("Algo pasó"));
  };

  const updateRiesgos = () => {
    setValProbabilidad(
      (parseInt(dataRisk.habilidad) +
        parseInt(dataRisk.motivo) +
        parseInt(dataRisk.oportunidad) +
        parseInt(dataRisk.tamannio) +
        parseInt(dataRisk.descubrimiento) +
        parseInt(dataRisk.explotacion) +
        parseInt(dataRisk.conciencia) +
        parseInt(dataRisk.deteccion)) /
        8
    );

    setValTecnico(
      (parseInt(dataRisk.confidencialidad) +
        parseInt(dataRisk.integridad) +
        parseInt(dataRisk.disponibilidad) +
        parseInt(dataRisk.responsabilidad)) /
        4
    );

    setValNegocio(
      (parseInt(dataRisk.financiero) +
        parseInt(dataRisk.reputacion) +
        parseInt(dataRisk.cumplimiento) +
        parseInt(dataRisk.privacidad)) /
        4
    );

    setValImpacto(
      (parseInt(dataRisk.confidencialidad) +
        parseInt(dataRisk.integridad) +
        parseInt(dataRisk.disponibilidad) +
        parseInt(dataRisk.responsabilidad) +
        parseInt(dataRisk.financiero) +
        parseInt(dataRisk.reputacion) +
        parseInt(dataRisk.cumplimiento) +
        parseInt(dataRisk.privacidad)) /
        8
    );
  };

  const updateVal = (e) => {
    let dataFactor = e.target.id.split("-");
    let newData = dataRisk;
    switch (dataFactor[1]) {
      case "1":
        newData.habilidad = e.target.value;
        break;
      case "2":
        newData.motivo = e.target.value;
        break;
      case "3":
        newData.oportunidad = e.target.value;
        break;
      case "4":
        newData.tamannio = e.target.value;
        break;
      case "5":
        newData.descubrimiento = e.target.value;
        break;
      case "6":
        newData.explotacion = e.target.value;
        break;
      case "7":
        newData.conciencia = e.target.value;
        break;
      case "8":
        newData.deteccion = e.target.value;
        break;
      case "9":
        newData.confidencialidad = e.target.value;
        break;
      case "10":
        newData.integridad = e.target.value;
        break;
      case "11":
        newData.disponibilidad = e.target.value;
        break;
      case "12":
        newData.responsabilidad = e.target.value;
        break;
      case "13":
        newData.financiero = e.target.value;
        break;
      case "14":
        newData.reputacion = e.target.value;
        break;
      case "15":
        newData.cumplimiento = e.target.value;
        break;
      case "16":
        newData.privacidad = e.target.value;
        break;
      default:
        newData.nombre = e.target.value;
        break;
    }
    setDataRisk(newData);
    updateRiesgos();
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ingresa el nombre del Riesgo"
        onChange={updateVal}
      />
      {/* Estimación de Probabilidad */}
      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa-solid fa-star" />
            Estimación de Probabilidad
            <i className="fa-solid fa-star" />
          </h3>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Agentes de Amenaza */}
            <div className="col-md-6">
              {/* card */}
              <div className="card card-default">
                {/* card-header */}
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fa-regular fa-user"></i>
                    Factores de Agentes de Amenazas
                  </h3>
                </div>
                {/* /.card-header */}
                {/* card-body */}
                <div className="card-body row">
                  <table className="table table-striped">
                    <thead className="bg-light">
                      <tr>
                        <th title={agente[0].info}>{agente[0].nombre}</th>
                        <th title={agente[1].info}>{agente[1].nombre}</th>
                        <th title={agente[2].info}>{agente[2].nombre}</th>
                        <th title={agente[3].info}>{agente[3].nombre}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td onChange={updateVal}>
                          <Selector
                            name={agente[0].nombre}
                            opciones={agente[0].opciones}
                            info={agente[0].info}
                            factor={"1-1"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={agente[1].nombre}
                            opciones={agente[1].opciones}
                            info={agente[1].info}
                            factor={"1-2"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={agente[2].nombre}
                            opciones={agente[2].opciones}
                            info={agente[2].info}
                            factor={"1-3"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={agente[3].nombre}
                            opciones={agente[3].opciones}
                            info={agente[3].info}
                            factor={"1-4"}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.Agentes de Amenaza */}

            {/* Vulnerabilidades */}
            <div className="col-md-6">
              {/* card */}
              <div className="card card-default">
                {/* card-header */}
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-exclamation-triangle" />
                    Factores de Vulnerabilidades
                  </h3>
                </div>
                {/* /.card-header */}
                {/* card-body */}
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="bg-light">
                      <tr>
                        <th title={vulnerabilidad[0].info}>
                          {vulnerabilidad[0].nombre}
                        </th>
                        <th title={vulnerabilidad[1].info}>
                          {vulnerabilidad[1].nombre}
                        </th>
                        <th title={vulnerabilidad[2].info}>
                          {vulnerabilidad[2].nombre}
                        </th>
                        <th title={vulnerabilidad[3].info}>
                          {vulnerabilidad[3].nombre}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td onChange={updateVal}>
                          <Selector
                            name={vulnerabilidad[0].nombre}
                            opciones={vulnerabilidad[0].opciones}
                            info={vulnerabilidad[0].info}
                            factor={"2-5"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={vulnerabilidad[1].nombre}
                            opciones={vulnerabilidad[1].opciones}
                            info={vulnerabilidad[1].info}
                            factor={"2-6"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={vulnerabilidad[2].nombre}
                            opciones={vulnerabilidad[2].opciones}
                            info={vulnerabilidad[2].info}
                            factor={"2-7"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={vulnerabilidad[3].nombre}
                            opciones={vulnerabilidad[3].opciones}
                            info={vulnerabilidad[3].info}
                            factor={"2-8"}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.Vulnerabilidades */}
          </div>
        </div>
        {/* Ponderación */}
        <Ponderacion valor={valProbabilidad} />
        {/* ./Ponderación */}
      </div>
      {/* ./ Estimación de Probabilidad */}

      {/* Estimación de Impacto */}
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa-solid fa-star" />
            Estimación de Impacto
            <i className="fa-solid fa-star" />
          </h3>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Impacto Técnico */}
            <div className="col-md-6">
              {/* card */}
              <div className="card card-default">
                {/* card-header */}
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fa-regular fa-user"></i>
                    Factores de Impacto Técnio
                  </h3>
                </div>
                {/* /.card-header */}
                {/* card-body */}
                <div className="card-body row">
                  <table className="table table-striped">
                    <thead className="bg-light">
                      <tr>
                        <th title={tecnico[0].info}>{tecnico[0].nombre}</th>
                        <th title={tecnico[1].info}>{tecnico[1].nombre}</th>
                        <th title={tecnico[2].info}>{tecnico[2].nombre}</th>
                        <th title={tecnico[3].info}>{tecnico[3].nombre}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td onChange={updateVal}>
                          <Selector
                            name={tecnico[0].nombre}
                            opciones={tecnico[0].opciones}
                            info={tecnico[0].info}
                            factor={"3-9"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={tecnico[1].nombre}
                            opciones={tecnico[1].opciones}
                            info={tecnico[1].info}
                            factor={"3-10"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={tecnico[2].nombre}
                            opciones={tecnico[2].opciones}
                            info={tecnico[2].info}
                            factor={"3-11"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={tecnico[3].nombre}
                            opciones={tecnico[3].opciones}
                            info={tecnico[3].info}
                            factor={"3-12"}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <Ponderacion valor={valTecnico} />
              </div>
              {/* /.card */}
            </div>
            {/* /.Impacto Técnico*/}

            {/* Impacto del Negocio */}
            <div className="col-md-6">
              {/* card */}
              <div className="card card-default">
                {/* card-header */}
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-exclamation-triangle" />
                    Factores de Impacto del Negocio
                  </h3>
                </div>
                {/* /.card-header */}
                {/* card-body */}
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="bg-light">
                      <tr>
                        <th title={negocio[0].info}>{negocio[0].nombre}</th>
                        <th title={negocio[1].info}>{negocio[1].nombre}</th>
                        <th title={negocio[2].info}>{negocio[2].nombre}</th>
                        <th title={negocio[3].info}>{negocio[3].nombre}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td onChange={updateVal}>
                          <Selector
                            name={negocio[0].nombre}
                            opciones={negocio[0].opciones}
                            info={negocio[0].info}
                            factor={"4-13"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={negocio[1].nombre}
                            opciones={negocio[1].opciones}
                            info={negocio[1].info}
                            factor={"4-14"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={negocio[2].nombre}
                            opciones={negocio[2].opciones}
                            info={negocio[2].info}
                            factor={"4-15"}
                          />
                        </td>
                        <td onChange={updateVal}>
                          <Selector
                            name={negocio[3].nombre}
                            opciones={negocio[3].opciones}
                            info={negocio[3].info}
                            factor={"4-16"}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <Ponderacion valor={valNegocio} />
              </div>
              {/* /.card */}
            </div>
            {/* /.Impacto del Negocio */}
          </div>
        </div>
        <Ponderacion valor={valImpacto} />
      </div>
      {/* ./ Estimación de Impacto */}

      {/* Gravedad */}
      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa-solid fa-star" />
            Gravedad
            <i className="fa-solid fa-star" />
          </h3>
        </div>
        <div className="card-body">
          <Gravedad impacto={valImpacto} probabilidad={valProbabilidad} />
        </div>
        <button
          type="button"
          className="btn btn-block btn-success btn-sm mb-2"
          onClick={enviarRiesgo}
        >
          Guardar Riesgo
        </button>
      </div>
    </>
  );
};

export default Calculadora;
