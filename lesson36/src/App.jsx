import Header from "./pages/header";
import Main from "./pages/main";
import Footer from "./pages/footer";
import { createContext } from "react";

const smile = "❤️";
export const SmileContext = createContext(null);

export default function App() {
  return (
    <div className="m-4 space-y-5">
      <SmileContext value={smile}>
        <Header />
        <Main />
        <Footer />
      </SmileContext>
    </div>
  );
}
