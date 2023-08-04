import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  let cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <span>Hello World</span>
      </Alert>
      <Button color="primary" onClick={() => console.log("Clicked Button")}>
        <span>Click Me</span>
      </Button>
    </div>
  );
}

export default App;
