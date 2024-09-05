const GridTable = ({tHeader=[],data=[],displaycd}) => {
    return(
  <table className="table">
    <thead>
      <tr>
        {tHeader.map((el) => (
          <th key={el?.id}>{el?.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((tr) => (
        <tr key={tr.id}>
          {tHeader.map((th) => (
            <td key={`${tr.id}-${th.id}`}>{displaycd(tr, th)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
    )
};
export default GridTable;
