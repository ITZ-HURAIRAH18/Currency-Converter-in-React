    import { useEffect, useState } from "react";

    function useCurrencyinfo(currency) {
        const [data, setData] = useState({});

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                    
                    if (!res.ok) {
                        throw new Error(`API error: ${res.status} ${res.statusText}`);
                    }

                    const jsonData = await res.json();
                    setData(jsonData[currency] || {}); // Ensure it doesn't return undefined
                } catch (error) {
                    console.error("Currency API fetch error:", error);
                    setData({}); // Set empty object on error
                }
            };

            fetchData();
        }, [currency]);

        return data;
    }

    export default useCurrencyinfo;
