import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./theme/ThemeProvider";
import { ToastContainer } from "react-toastify";

import Loader from "./components/Loader";
import { useLoad } from "./providers/Loading";

import Home from "./pages/Home";

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
          <Home />
        </Body>
      </Theme>
    </>
  );
}

export default App;
