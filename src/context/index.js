import React, { createContext } from "react";

const TicketContext = createContext({});

const baseUrl = process.env.REACT_APP_API;

function TicketProvider(props) {
  const [count, setCount] = React.useState(1);
  return (
    <TicketContext.Provider
      value={{
        count,
        setCount,
      }}
      {...props}
    />
  );
}

export { TicketContext, TicketProvider };
