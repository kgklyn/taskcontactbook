import Header from "./components/Header";
import ContactContextProvider from "./ContactContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div>
      <ContactContextProvider>
        <Header />
        <MainRoutes />
      </ContactContextProvider>
    </div>
  );
}

export default App;
