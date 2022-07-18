import React from "react";
import Ponderacion from "./Ponderacion";
import Selector from "./Selector";

const agente = {
  uno: {
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
  dos: {
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
  tres: {
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
  cuatro: {
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
};
const vulnerabilidad = {
  uno: {
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
  dos: {
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
  tres: {
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
  cuatro: {
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
};
const tecnico = {
  uno: {
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
  dos: {
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
  tres: {
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
  cuatro: {
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
};
const negocio = {
  uno: {
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
  dos: {
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
  tres: {
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
  cuatro: {
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
};

const Calculadora = () => {
  const listarRiesgos = () => {
    fetch("api/v1/risk/listar", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch(() => console.log("Algo pasó"));
  };

  const updateVal = (tema, posicion, valor) => {
    /* let newData;
    switch (tema) {
      case "agentes":
        newData = valAgentes;
        newData[posicion] = valor;
        setValAgentes(newData);
        break;
      case "vulnerabilidades":
        newData = valVulne;
        newData[posicion] = valor;
        setValVulne(newData);
        break;
      default:
        break;
    }
    updateProbabilidad(); */
  };

  return (
    <>
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
                        <th title={agente.uno.info}>{agente.uno.nombre}</th>
                        <th title={agente.dos.info}>{agente.dos.nombre}</th>
                        <th title={agente.tres.info}>{agente.tres.nombre}</th>
                        <th title={agente.cuatro.info}>
                          {agente.cuatro.nombre}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Selector
                            name={agente.uno.nombre}
                            opciones={agente.uno.opciones}
                            info={agente.uno.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={agente.dos.nombre}
                            opciones={agente.dos.opciones}
                            info={agente.dos.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={agente.tres.nombre}
                            opciones={agente.tres.opciones}
                            info={agente.tres.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={agente.cuatro.nombre}
                            opciones={agente.cuatro.opciones}
                            info={agente.cuatro.info}
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
                        <th title={vulnerabilidad.uno.info}>
                          {vulnerabilidad.uno.nombre}
                        </th>
                        <th title={vulnerabilidad.dos.info}>
                          {vulnerabilidad.dos.nombre}
                        </th>
                        <th title={vulnerabilidad.tres.info}>
                          {vulnerabilidad.tres.nombre}
                        </th>
                        <th title={vulnerabilidad.cuatro.info}>
                          {vulnerabilidad.cuatro.nombre}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Selector
                            name={vulnerabilidad.uno.nombre}
                            opciones={vulnerabilidad.uno.opciones}
                            info={vulnerabilidad.uno.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={vulnerabilidad.dos.nombre}
                            opciones={vulnerabilidad.dos.opciones}
                            info={vulnerabilidad.dos.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={vulnerabilidad.tres.nombre}
                            opciones={vulnerabilidad.tres.opciones}
                            info={vulnerabilidad.tres.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={vulnerabilidad.cuatro.nombre}
                            opciones={vulnerabilidad.cuatro.opciones}
                            info={vulnerabilidad.cuatro.info}
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
        <Ponderacion valor={4.4} />
        {/* ./Ponderación */}
      </div>
      {/* ./ Estimación de Probabilidad */}
      {/* Estimación de Impacto */}

      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa-solid fa-star" />
            Estimación de Imapcto
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
                        <th title={tecnico.uno.info}>{tecnico.uno.nombre}</th>
                        <th title={tecnico.dos.info}>{tecnico.dos.nombre}</th>
                        <th title={tecnico.tres.info}>{tecnico.tres.nombre}</th>
                        <th title={tecnico.cuatro.info}>
                          {tecnico.cuatro.nombre}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Selector
                            name={tecnico.uno.nombre}
                            opciones={tecnico.uno.opciones}
                            info={tecnico.uno.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={tecnico.dos.nombre}
                            opciones={tecnico.dos.opciones}
                            info={tecnico.dos.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={tecnico.tres.nombre}
                            opciones={tecnico.tres.opciones}
                            info={tecnico.tres.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={tecnico.cuatro.nombre}
                            opciones={tecnico.cuatro.opciones}
                            info={tecnico.cuatro.info}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <Ponderacion valor={4.4} />
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
                        <th title={negocio.uno.info}>{negocio.uno.nombre}</th>
                        <th title={negocio.dos.info}>{negocio.dos.nombre}</th>
                        <th title={negocio.tres.info}>{negocio.tres.nombre}</th>
                        <th title={negocio.cuatro.info}>
                          {negocio.cuatro.nombre}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Selector
                            name={negocio.uno.nombre}
                            opciones={negocio.uno.opciones}
                            info={negocio.uno.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={negocio.dos.nombre}
                            opciones={negocio.dos.opciones}
                            info={negocio.dos.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={negocio.tres.nombre}
                            opciones={negocio.tres.opciones}
                            info={negocio.tres.info}
                          />
                        </td>
                        <td>
                          <Selector
                            name={negocio.cuatro.nombre}
                            opciones={negocio.cuatro.opciones}
                            info={negocio.cuatro.info}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              <Ponderacion valor={4.4} />
              </div>
              {/* /.card */}
            </div>
            {/* /.Impacto del Negocio */}
          </div>
        </div>
        <Ponderacion valor={4.4} />
        {/* ./ Estimación de Impacto */}
      </div>
    </>
  );
};

export default Calculadora;
