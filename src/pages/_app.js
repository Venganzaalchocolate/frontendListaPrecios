import "@/styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Este componente App sirve como envoltorio para todos los componentes de la página
// Recibe dos props: Component (el componente de la página actual) y pageProps (propiedades pasadas a la página)
export default function App({ Component, pageProps }) {
   // Renderiza el componente de la página actual y le pasa todas sus propiedades
  return <Component {...pageProps} />;
}
