import React from 'react';

function RfidStep() {
  return (
    <div id="step-2" className="step">
      <h2>Приложите RFID метку</h2>
      <div className="loading spinner-border text-primary" role="status">
        <span className="sr-only">Загрузка...</span>
      </div>
    </div>
  );
}

export default RfidStep;
