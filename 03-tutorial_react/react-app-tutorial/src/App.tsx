import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const buttonClick = () => {
    console.log("Clicked");
    setAlertVisibility(true);
  };

  const alertClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={alertClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="secondary" onClick={buttonClick}>
        My Button
      </Button>
      <br />
      <Button onClick={buttonClick}>My Second Button</Button>
      <br />
      <Button color="info" onClick={buttonClick}>
        My Third Button
      </Button>
    </div>
  );
}

export default App;
