import React, { useState } from 'react';
import axios from 'axios';
import ZipCodeForm from './Zipcodeform';
import LocationInfo from './LocationInfo';

const App = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (zipCode) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.zippopotam.us/in/${zipCode}`);
      setLocation({
        country: response.data.country,
        state: response.data.places[0]['state'],
        placeName: response.data.places[0]['place name'],
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearLocationInfo = () => {
    setLocation(null);
  };

  return (
    <div>
      <ZipCodeForm onFormSubmit={fetchLocationInfo} />
      <LocationInfo
        location={location}
        isLoading={isLoading}
        error={error}
        onClear={clearLocationInfo}
      />

    </div>
  );
};

export default App;
