import { useState } from 'react';
import './App.css';
import InputBox from './components/input';
import useCurrencyinfo from './hooks/usecurrencyinfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('pkr');
    const [result, setResult] = useState(0);

    const currencyinfo = useCurrencyinfo(from);
    const option = Object.keys(currencyinfo || {});

    const swap = () => {
        setFrom(to);
        setTo(from);
        setResult(amount);
        setAmount(result);
    };

    const convert = () => {
        if (currencyinfo[to]) {
            setResult(amount * currencyinfo[to]);
        }
    };

    return (
        <div
            className="d-flex flex-wrap justify-content-center align-items-center vh-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('https://i.pinimg.com/736x/17/f0/3f/17f03ffc1060f6dcce85e5612e3be3fa.jpg')` }}
        >
            <div className="w-100">

            <h1 className='text-light mb-5'>Currency Converter</h1>
                <div className="w-100 mx-auto border rounded-lg p-4 backdrop-blur-sm bg-white bg-opacity-50" style={{ maxWidth: "400px" }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="mb-3">
                            <InputBox
                                label="From"
                                amount={amount}
                                oncurrencyoption={option}
                                oncurrency={(currency) => setFrom(currency)}
                                selectcurrency={from}
                                onammount={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="position-relative text-center my-3">
                            <button
                                type="button"
                                className="btn btn-dark position-absolute start-50 translate-middle"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="mb-4">
                            <InputBox
                                label="To"
                                amount={result}
                                oncurrencyoption={option}
                                oncurrency={(currency) => setTo(currency)}
                                selectcurrency={to}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 py-2">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
