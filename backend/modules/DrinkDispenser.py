from storage.Storage import Storage
from modules.Pin import PinMode
from modules.DispanserPin import PumpPin
import time


class DrinkDispenser:

    def __init__(self, slot_number: int, volume: float):
        self.storage = Storage()

        print("жижа")

        pump_address, pump_pin_number = self.storage.dispander_pin(slot_number)
        self.pump_pin = PumpPin(pump_address, pump_pin_number)
        self.pump_pin.pin.set_mode(PinMode.OUTPUT)
        self.pump_pin.write(0x00)
        print("Куралес")
        time.sleep(volume)
        self.pump_pin.write(0xFF)
        print("знающий")
