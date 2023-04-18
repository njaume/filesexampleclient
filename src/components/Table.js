import { default as BootstrapTable } from "react-bootstrap/Table";

const Table = ({ head = [], items = [] }) => {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={`tableHead_${h}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items &&
          items?.map((item) => {
            return (
              <tr key={`table_${item?.key}`}>
                {item?.cols?.map((col) => (
                  <td key={`tableHead_${col}`}>{col}</td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
