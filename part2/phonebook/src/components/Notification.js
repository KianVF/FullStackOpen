const Notification = ({ message, msgColor }) => {
  const red = {
    color: "red",
    background: "lightgray",
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    marginButtom: 10,
    fontSize: 20,
  };
  const green = {
    color: "green",
    background: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    marginButtom: 10,
  };
  const blue = {
    color: "blue",
    background: "lightgray",
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    marginButtom: 10,
    borderStyle: "solid",
  };
  if (message === null) {
    return null;
  }
  if (msgColor === "green") {
    return <div style={green}>{message}</div>;
  } else if (msgColor === "red") {
    return <div style={red}>{message}</div>;
  } else if (msgColor === "blue") {
    return <div style={blue}>{message}</div>;
  }
};
export default Notification;
