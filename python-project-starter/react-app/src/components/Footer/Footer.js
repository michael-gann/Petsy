import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactCountryFlag from "react-country-flag"
import ISO6391 from 'iso-639-1'
import currencyFormatter from 'currency-formatter'

function Footer() {
    const [countryCode, setCountryCode] = useState(null)
    const [countryName, setCountryName] = useState(null)
    const [currencySymbol, setCurrencySymbol] = useState(null)
    const [currency, setCurrency] = useState(null)
    const [language, setLanguage] = useState(null)


    useEffect(() => {
        const getCountryInfo = async () => {
            let res = await axios.get('https://ipapi.co/json/')
            setCountryCode(res.data.country_code)
            setCountryName(res.data.country_name)
            setLanguage(ISO6391.getName(res.data.languages.split(",")[0].split("-")[0]))
            setCurrency(res.data.currency)
            const currencyData = await currencyFormatter.findCurrency(res.data.currency)
            setCurrencySymbol(currencyData.symbol)
        }
        getCountryInfo()
    }, [])

    return (
        <div className="footer">
            <div className="top-footer">

            </div>
            <div className="bottom-footer">
                <div className="country">
                    {countryName}
                    <ReactCountryFlag
                        countryCode={countryCode}
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title={countryCode}
                    /> |
                    {language}({countryCode}) | {currencySymbol} ({currency})
                </div>
            </div>
        </div>
    )
}

export default Footer
