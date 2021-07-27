import './App.css';
import React, { useState, useEffect } from 'react'
import InfoBox from './component/box';
import DateBox from './component/date';
import ApexChart from './component/chart';
import Logo from './img/logo.svg';

function App() {
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries/kr/")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  return (
    <div className="App">
      <div className="logo">
        <img src={ Logo }/>
      </div>
      <DateBox/>
      <div className="InfoBoxBody">
        <InfoBox
          title="확진자"
          cases={ countryInfo.todayCases }
          total={ countryInfo.cases }
        />
        <InfoBox
          title="완치자"
          cases={ countryInfo.todayRecovered }
          total={ countryInfo.recovered }
        />
        <InfoBox
          title="사망자"
          cases={ countryInfo.todayDeaths }
          total={ countryInfo.deaths }
        />
      </div>
      <ApexChart></ApexChart>
    </div>
  );
}

export default App;
