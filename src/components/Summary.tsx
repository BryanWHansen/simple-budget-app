import React from "react";

interface Props {
    children: string,
    maxChars?: number,
    buttonText: string,
    handleButtonClick: () => void
}
const Summary = ({children, maxChars = 100, buttonText, handleButtonClick}: Props) => {
    
  return (
    <>
      {maxChars > 0 ? <p>{children.substring(0, maxChars) + '...'}</p> : <p>{children}</p>}
      <button className="btn btn-primary" onClick={handleButtonClick}>{buttonText}</button>
    </>
  );
};

export default Summary;
