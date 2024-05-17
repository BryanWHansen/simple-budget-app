import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import LikeButton from "./components/LikeButton";
import Summary from "./components/Summary";
import Form from "./components/Form";
import StateForm from "./components/StateForm";
import Divider from "@mui/material/Divider";

function App() {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nunc vulputate, dignissim odio a, tincidunt massa. Donec pharetra sem id diam lacinia, a iaculis neque pulvinar. Praesent erat orci, scelerisque sit amet sapien sit amet, ultrices faucibus velit. Quisque eget turpis a ante commodo hendrerit eget vitae metus. Sed quam risus, tempor quis vulputate et, placerat interdum dui. Cras fermentum venenatis ipsum sed luctus. Donec aliquet tincidunt pellentesque. Phasellus egestas ante enim, quis tincidunt odio facilisis a. Cras facilisis placerat justo eu tincidunt. Cras quis tellus congue, luctus purus vel, efficitur libero. Mauris arcu sapien, mollis facilisis magna id.'
  let cities = ["Houston", "Chicago", "New York", "Atlanta"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [summaryState, setSummaryState] = useState({
    maxChar: 100,
    buttonText: 'More'
  });

  const handleButtonClick = () => {
    setSummaryState(summaryState.maxChar > 0 ? {maxChar: -1, buttonText: 'Less'} : {maxChar: 100, buttonText: 'More'})
  }
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onclick={() => setAlertVisible(true)}>
        My Button
      </Button>
      <Divider component="div" style={{margin: "5px 0px"}}/>
      {/* <ListGroup
        items={cities}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      <LikeButton /> */}
      <div><h3>REF HOOK FORM</h3></div>
      <Form />
      <Divider component="div" style={{margin: "5px 0px"}}/>
      <div><h3>STATE HOOK FORM</h3></div>
      <StateForm />
      <Divider component="div" style={{margin: "5px 0px"}}/>
      <Summary maxChars={summaryState.maxChar} buttonText={summaryState.buttonText} handleButtonClick={handleButtonClick}>{message}</Summary>
    </div>
  );
}

export default App;
