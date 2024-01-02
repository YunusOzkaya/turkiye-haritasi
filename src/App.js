import React, { createElement, useState } from 'react';
import { Tooltip } from 'antd'
import TurkeyMap from 'turkey-map-react';
import {
  Adana,
  Adıyaman,
  Afyonkarahisar,
  Ağrı,
  Aksaray,
  Amasya,
  Ankara,
  Antalya,
  Artvin,
  Aydın,
  Balıkesir,
  Bartın,
  Batman,
  Bayburt,
  Bilecik,
  Bingöl,
  Bitlis,
  Bolu,
  Burdur,
  Bursa,
  Çanakkale,
  Çankırı,
  Çorum,
  Denizli,
  Diyarbakır,
  Düzce,
  Edirne,
  Elazığ,
  Erzincan,
  Erzurum,
  Eskişehir,
  Gaziantep,
  Giresun,
  Gümüşhane,
  Hakkari,
  Hatay,
  Iğdır,
  Isparta,
  Istanbul,
  Izmir,
  Kahramanmaraş,
  Karabük,
  Karaman,
  Kars,
  Kastamonu,
  Kayseri,
  Kilis,
  Kırıkkale,
  Kırklareli,
  Kırşehir,
  Kocaeli,
  Konya,
  Kütahya,
  Malatya,
  Manisa,
  Mardin,
  Mersin,
  Muğla,
  Muş,
  Nevşehir,
  Niğde,
  Ordu,
  Osmaniye,
  Rize,
  Sakarya,
  Samsun,
  Şanlıurfa,
  Siirt,
  Sinop,
  Sivas,
  Şırnak,
  Tekirdağ,
  Tokat,
  Trabzon,
  Tunceli,
  Uşak,
  Van,
  Yalova,
  Yozgat,
  Zonguldak,
} from 'turkey-district-maps-3'; import './App.css';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = ({ name }) => {
    setSelectedCity(name);
  };

  const handleDistrictClick = ({ name }) => {
    // Handle district click event
    console.log(`District ${name} is clicked!`);
  };


  const handleDistrictHover = ({ name }) => {
    // Handle district hover event
    return createElement(Tooltip, { title: name });
  };

  const customStyle = {
    idleColor: '#E30A17', // Arkaplan rengi
    hoverColor: '#FFFFFF', // Hover rengi
  };

  return (
    <div className={`app-container${selectedCity ? ' blur' : ''}`}>
      {/* General Turkey Map */}
      <TurkeyMap onClick={handleCityClick} customStyle={customStyle}
        cityWrapper={(cityComponent, cityData) => (
          <Tooltip title={cityData.name} key={cityData.id}>
            {cityComponent}
          </ Tooltip>
        )}
      />


      {/* Selected City Map */}
      {selectedCity && (
        <div className="selected-city-container">
          <div className="city-map">
            {selectedCity === 'Adana' && <Adana distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Adıyaman' && <Adıyaman distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Afyonkarahisar' && <Afyonkarahisar distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Ağrı' && <Ağrı distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Aksaray' && <Aksaray distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Amasya' && <Amasya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Ankara' && <Ankara distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Antalya' && <Antalya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Artvin' && <Artvin distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Aydın' && <Aydın distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Balıkesir' && <Balıkesir distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bartın' && <Bartın distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Batman' && <Batman distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bayburt' && <Bayburt distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bilecik' && <Bilecik distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bingöl' && <Bingöl distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bitlis' && <Bitlis distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bolu' && <Bolu distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Burdur' && <Burdur distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Bursa' && <Bursa distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Çanakkale' && <Çanakkale distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Çankırı' && <Çankırı distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Çorum' && <Çorum distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Denizli' && <Denizli distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Diyarbakır' && <Diyarbakır distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Düzce' && <Düzce distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Edirne' && <Edirne distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Elazığ' && <Elazığ distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Erzincan' && <Erzincan distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Erzurum' && <Erzurum distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Eskişehir' && <Eskişehir distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Gaziantep' && <Gaziantep distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Giresun' && <Giresun distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Gümüşhane' && <Gümüşhane distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Hakkâri' && <Hakkari distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Hatay' && <Hatay distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Iğdır' && <Iğdır distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Isparta' && <Isparta distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'İstanbul' && <Istanbul distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'İzmir' && <Izmir distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kahramanmaraş' && <Kahramanmaraş distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Karabük' && <Karabük distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Karaman' && <Karaman distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kars' && <Kars distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kastamonu' && <Kastamonu distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kayseri' && <Kayseri distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kilis' && <Kilis distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kırıkkale' && <Kırıkkale distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kırklareli' && <Kırklareli distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kırşehir' && <Kırşehir distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kocaeli' && <Kocaeli distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Konya' && <Konya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Kütahya' && <Kütahya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Malatya' && <Malatya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Manisa' && <Manisa distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Mardin' && <Mardin distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Mersin' && <Mersin distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Muğla' && <Muğla distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Muş' && <Muş distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Nevşehir' && <Nevşehir distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Niğde' && <Niğde distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Ordu' && <Ordu distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Osmaniye' && <Osmaniye distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Rize' && <Rize distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Sakarya' && <Sakarya distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Samsun' && <Samsun distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Şanlıurfa' && <Şanlıurfa onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Siirt' && <Siirt distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Sinop' && <Sinop distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Sivas' && <Sivas distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Şırnak' && <Şırnak distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Tekirdağ' && <Tekirdağ distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Tokat' && <Tokat distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Yalova' && <Yalova distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Tunceli' && <Tunceli distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Van' && <Van distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Trabzon' && <Trabzon distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Uşak' && <Uşak distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Yozgat' && <Yozgat distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
            {selectedCity === 'Zonguldak' && <Zonguldak distWrapper={(distComponent, distData) => (
              <Tooltip title={distData.name} key={distData.name}>
                {distComponent}
              </Tooltip>
            )} onClick={handleDistrictClick} onHover={handleDistrictHover} />}
          </div>
          <button onClick={() => setSelectedCity(null)}>Kapat</button>
        </div>
      )}
    </div>
  );
};

export default App;
