import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import StepZero from '../src/components/StepZero';
import BottleDetails from '../src/components/BottleDetails';
import RfidStep from '../src/components/RfidStep';
import ButtonStep from '../src/components/ButtonStep';
import SuccessStep from '../src/components/SuccessStep';


function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [rfidCode, setRfidCode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (currentStep > 0) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [currentStep]);

  const showStep = (step) => {
    setCurrentStep(step);
  };

  const startTimer = () => {
    setTimeLeft(60);
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          resetProgress();
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    setTimeLeft(60);
  };

  const resetProgress = () => {
    setCurrentStep(0);
    setSelectedSlot(null);
    stopTimer();
  };

  const selectSlot = (slot) => {
    // Fetch bottle details here
    setSelectedSlot(slot);
    showStep(1);
  };

  const selectPortion = (portionType) => {
    showStep(2);
    fetch('/rfid', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.is_valid) {
          alert('Невалидный rfid');
          resetProgress();
          showStep(0);
        } else {
          setRfidCode(data.rfid_code);
          showStep(3);
          fetch('/button', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ slot_number: selectedSlot, portion_type: portionType, rfid: rfidCode })
          })
            .then(response => response.json())
            .then(result => {
              if (result.success) {
                showStep(4);
              } else {
                alert(result.message || 'Доступ запрещен или лимит превышен.');
                resetProgress();
              }
            });
        }
      });
  };

  return (
    <div className="App">
      {currentStep === 0 && <StepZero selectSlot={selectSlot} />}
      {currentStep === 1 && <BottleDetails selectPortion={selectPortion} resetProgress={resetProgress} />}
      {currentStep === 2 && <RfidStep />}
      {currentStep === 3 && <ButtonStep />}
      {currentStep === 4 && <SuccessStep resetProgress={resetProgress} />}
      <div id="timer" className="text-right p-2">
        {timeLeft}
      </div>
    </div>
  );
}

export default App;
