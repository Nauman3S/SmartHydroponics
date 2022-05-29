uint8_t dataAvailable = 0;
String incmommingData = "";
void setupCommunicationHandler()
{
    Serial2.begin(9600);
}

void sendData(String d)
{
    String v = String("*") + d + String("^");
    Serial.println(v);
}

uint8_t isDataAvailable()
{
    return dataAvailable;
}

void loopCommunicationHandler()
{
    if (Serial.available())
    {
        incmommingData = Serial2.readString();
        dataAvailable=1;
    }
}
String readData(){

    dataAvailable=0;
    String d=incmommingData;
    incmommingData="";
    return d;
}