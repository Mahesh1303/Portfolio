import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Myskills from "./pages/My_Skills/Skills.page";
import Myprojects from "./pages/Projects/Project.page";
import { MyContact } from "./pages/My_Contact/MyContact";
import Education from "./pages/Education/Education";

export function App() {
  return (
    <>
      <Header />
      <About />
      <Myskills />
      <Myprojects />
      <Education/>
      <MyContact />
    </>
  );
}

export default App;
