import { useMemo } from 'react'
import { useCryptoStore } from '../store'

const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);


  return (
    <div className='result-wrapper'>
        {hasResult && (
            <>
                <h2>Quote</h2>
                    <div className='result'>
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt='crypto-image'/>
                        <div>
                            <p>Current price: <span>{result.PRICE}</span></p>
                            <p>Highest price today: <span>{result.HIGHDAY}</span></p>
                            <p>Lowest price today: <span>{result.LOWDAY}</span></p>
                            <p>Change 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Last updated: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
            </>
        )}
    </div>
  )
}

export default CryptoPriceDisplay
