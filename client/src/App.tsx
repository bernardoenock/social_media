import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./theme/ThemeProvider";
import { ToastContainer } from "react-toastify";

import Loader from "./components/Loader";
import { useLoad } from "./providers/Loading";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const { isLoad } = useLoad();

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
          <Loader isLoad={isLoad} />
          <Header />
          <Main />
          <h1>LinkLei</h1>
        </Body>
      </Theme>
    </>
  );
}

export default App;
