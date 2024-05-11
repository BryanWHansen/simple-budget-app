import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import LikeButton from "./components/LikeButton";

function App() {
  let cities = ['Houston', 'Chicago', 'New York', 'Atlanta'];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color='primary' onclick={() => setAlertVisible(true)}>My Button</Button>
      <ListGroup items={cities} heading="cities" onSelectItem={handleSelectItem}/>
      <LikeButton/>
    </div>
  );
}

export default App;
