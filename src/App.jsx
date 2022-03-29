import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";



function App() {
  return (
    <div>
        <ClimaProvider>

              <header>
                <h1>Buscador de Clima</h1>
              </header>
              <AppClima />
              
        </ClimaProvider>
        
    </div>
  );
}

export default App;
