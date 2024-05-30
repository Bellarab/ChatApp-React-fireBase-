import Chat from "./Components/chat/Chat";
import Details from "./Components/details/Details";
import List from "./Components/list/List";

const App = () => {
  return (
    <div className="container">
      <List></List>
      <Chat></Chat>
      <Details></Details>
    </div>
  );
};

export default App;
