import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./theme/ThemeProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
          <h1>LinkLei</h1>
        </Body>
      </Theme>
    </>
  );
}

export default App;
