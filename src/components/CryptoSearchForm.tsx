import { currencies } from '../data'

const CryptoSearchForm = () => {
  return (
    <div>
      <form className='form'>
        <div className='field'>
            <label htmlFor='currency'>Currency:</label>
            <select name='currency' id='currency'>
                <option value="">-- Select --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className='field'>
            <label htmlFor='cryptocurrency'>Cryptocurrency:</label>
            <select name='cryptocurrency' id='ryptocurrency'>
                <option value="">-- Select --</option>
            </select>
        </div>

        <input type='submit' value='Quote' />
      </form>
    </div>
  )
}

export default CryptoSearchForm
