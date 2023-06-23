import React, { useState, useEffect } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


const InvitedFriendsTable = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "status", header: "Status" },
    { field: "date", header: "Date registered" },
  ];

  useEffect(() => {
    // wait 5 sec for data to be fetched
    setTimeout(() => {
      setProducts([
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
        {
          name: "Axole",
          date: "2021-12-02 12:35",
          email: "axole@mail.com",
          status: "active",
        },
      ]);
    }, 5000);
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }} size="normal"  paginator  rows={10} sortMode="multiple"
      className="p-5">
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} id={i} sortable/>
        ))}
      </DataTable>
    </div>
  );
};

export default InvitedFriendsTable;
