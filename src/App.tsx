import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title"><span>Crypto</span> Price Tracker</h1>

        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
      <footer>
        <p>
          Developed by <a href="https://github.com/SebaFretes/" target="_blank"><span>Sebastian Fretes</span></a>
        </p>
      </footer>
    </>
  )
}

export default App
