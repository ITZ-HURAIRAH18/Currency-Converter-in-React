import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onammount,
    oncurrency,
    oncurrencyoption = [],
    selectcurrency = 'usd',
    className = "",
}) {
    const amountid = useId();

    return (
        <div className={`bg-white p-3 rounded text-sm d-flex ${className}`}>
            <div className="w-50">
                <label htmlFor={amountid} className="text-secondary mb-2 d-block">
                    {label}
                </label>
                <input
                    id={amountid}
                    className="form-control border-0 border-bottom"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onammount && onammount(Number(e.target.value))}
                />
            </div>
            <div className="w-50 text-end">
                <p className="text-secondary mb-2">Currency Type</p>
                <select
                    className="form-select w-auto d-inline-block"
                    value={selectcurrency}
                    onChange={(e) => oncurrency && oncurrency(e.target.value)}
                >
                    {oncurrencyoption.map((cur) => (
                        <option key={cur} value={cur}>{cur}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
