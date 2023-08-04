function ListGroup() {
  let cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
  ];
  cities = [];

  return (
    <>
      <h1>List Group</h1>
      {cities.length === 0 && <p>No Cities Found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
