import Table from 'react-bootstrap/Table';

function FilesTable({items}) {
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {items && items?.map(item => {
            return item?.lines?.map(line => {
                return (
                    <tr key={`fileLine_${line.file}${line.hex}`}>
                        <td>{item?.file}</td>
                        <td>{line?.text}</td>
                        <td>{line?.number}</td>
                        <td>{line?.hex}</td>
                    </tr>
                )
            }) 
        })}
      </tbody>
    </Table>
  );
}

export default FilesTable;