import { Link } from "react-router-dom";
import GreenError from '../../assets/404 error with people holding the numbers-bro.svg';
import "./Error.scss";

function Error () {
  return (
      <div className="error-page">
          <main>
              <section className="error">
                  <h2 className="sr-only">Error 404</h2>
                  <img src={GreenError} alt="error 404" className="green-error"/> 
                  <p className="text-error">La page demandée n&apos;existe pas...</p>
                  
                  < Link to="/">
                      <button className="button-404">Retour page d&apos;accueil</button>
                  </Link>
              </section>
          </main>
      </div>
  )
}

export default Error