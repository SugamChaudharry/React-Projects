import { useState } from 'react'
import {InputBox} from './components'
import {useCurrencyInfo} from "./hooks";


function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const  currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyinfo[to])
  }

  const BackgroundImage =
    "https://images.pexels.com/photos/1046159/pexels-photo-1046159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}>
      <div className="w-full">
        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                // amount={amount}
                currencyoption={options}
                onCurrencyChange={(currncy) => setAmount(amount)}
                onAmountChange={(amount)=>setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-700 border-2 border-amber-500 text-amber-500 hover:bg-amber-500  hover:text-neutral-700 hover:border-neutral-700 active:bg-amber-600 active:px-3 active:py-1  rounded-md px-4 py-1.5"
                onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyoption={options}
                onCurrencyChange={(currncy) => setTo(currncy)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-700 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-700 hover:border-neutral-700  active:bg-amber-600 active:translate-y-1 px-5 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default App
