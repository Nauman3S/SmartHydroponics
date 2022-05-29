#include <SoftwareSerial.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 12
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

SoftwareSerial mySerial(6, 5); // RX, TX
void setup()                   // main setup functions
{
    Serial.begin(115200);
    mySerial.begin(9600);
    sensors.begin();
}
float getDS18B20Readings()
{
    return sensors.getTempCByIndex(0);
}
int getTDSSensorReadings()
{
    return analogRead(A0);
}
int getpHSensorReadings()
{
    return analogRead(A1);
}
int getORPSensorReadings()
{
    return analogRead(A2);
}
int getCO2SensorReadings()
{
    return analogRead(A3);
}

String generateDataPayload()
{
    String pL = String(getDS18B20Readings()) + String(",") +
                String(getTDSSensorReadings()) + String(",") +
                String(getpHSensorReadings()) + String(",") +
                String(getORPSensorReadings()) + String(",") +
                String(getCO2SensorReadings());
    pL = String("*") + pL + String("*");
}

void loop()
{
    mySerial.println(generateDataPayload());
}