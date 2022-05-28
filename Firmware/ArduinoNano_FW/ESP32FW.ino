#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 5); // RX, TX
void setup() // main setup functions
{
    Serial.begin(115200);
    mySerial.begin(9600);
}

void loop()
{

}