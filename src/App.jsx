import styles from "./App.module.css"
import Display from "./components/display";
import Buttons from "./components/Buttons";
function App() {
  return <center>

    <div className={styles.calculator}>
      <Display/>
      <Buttons/>
      
    </div>
  </center>
}
export default App;