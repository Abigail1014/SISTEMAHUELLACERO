"use client"; // Declaramos que este es un Client Component

import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/project/data-table";
import { columnsProject } from "@/components/project/column";
import { getRecentProjectList } from "@/lib/actions/project.actions";
import { Button } from "@/components/ui/button";

const ProjectTable = () => {
  const [dataProject, setDataProject] = useState([]);

  // Cargamos los datos de forma asíncrona en el cliente
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecentProjectList();
      setDataProject(data);
    };
    fetchData();
  }, []);

  // Manejo del clic en el botón
  const handleClick = () => {
    alert("Se Actualizo un Dato");
  };
  const handleClickDelete = () => {
    alert("Se Actualizo un Dato");
  };

  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-2xl mb-4">Proyectos</h2>
      <DataTable columns={columnsProject} data={dataProject} />
      <Button onClick={handleClick}>Actualizar</Button>
      <Button onClick={handleClickDelete}>Editar</Button>
      <Button onClick={handleClickDelete}>Eliminar</Button>
    </div>
  );
};

export default ProjectTable;