// import React from "react";
// import Table from "react-bootstrap/Table";

// function Tble1() {
//   const allKeys = Object.keys(localStorage);

//   const data = allKeys.map((key) => {
//     const dataStore = localStorage.getItem(key);
//     return JSON.parse(dataStore);
//   });
//   console.log(data[0].fname);


//   const addRow = (i) => {
//     console.log(data[i].fname);
//     if (!data[i]) {

//       return null;
//     }
//     console.log("In"+data[i].fname)
//     return (
//       <tr>
        
//         <td>{data[i].fname}</td>
//         <td>{data[i].lname}</td>
//         <td>{data[i].city}</td>
//         <td>{data[i].State}</td>
//       </tr>
//     );
//   };
//   return (
//     <div>
//       <Table responsive>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>City</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>{data.map((i) => addRow(i))}</tbody>
//       </Table>
//     </div>
//   );
// }

// export default Tble1;
import React from "react";
import Table from "react-bootstrap/Table";

function Tble1() {
  const allKeys = Object.keys(localStorage);

  const data = allKeys.map((key) => {
    const dataStore = localStorage.getItem(key);
    return JSON.parse(dataStore);
  });

  const addRow = (rowData, index) => {
    console.log(rowData.fname);
    if (!rowData) {
      return null;
    }

    return (
      <tr key={index}>
        <td>{rowData.fname}</td>
        <td>{rowData.lname}</td>
        <td>{rowData.city}</td>
        <td>{rowData.State}</td>
      </tr>
    );
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => addRow(rowData, index))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tble1;
