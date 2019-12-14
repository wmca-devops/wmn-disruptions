import React from 'react';
import TrainInfo from './TrainInfo';
import TramSearch from '../../Search/TramSearch';

function Train() {
  return (
    <div>
      <h6>Train Info</h6>
      <TramSearch />
      <h6>API Loaded Data</h6>
      <TrainInfo />
    </div>
  );
}

export default Train;
