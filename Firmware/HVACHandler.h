#define R1 21
#define R2 19
#define R3 18
#define R4 5
#define R5 4
#define R6 2
#define R7 15
#define R8 26

#define SafteySwitch1 32
#define SafteySwitch2 33

#define STAGE1 1
#define STAGE2 2
#define STAGE3 3
#define ON 1
#define OFF 0
#define RV_ON_IN_COOL 1
#define RV_ON_IN_HEAT 2
#define SWITCH1 1
#define SWITCH2 2
int pins[8] = {R1, R2, R3, R4, R5, R6, R7, R8};
void setupSafteySwitches()
{
    pinMode(SafteySwitch1, INPUT_PULLUP);
    pinMode(SafteySwitch2, INPUT_PULLUP);
}
int getSafteySwitchState(uint8_t sw)
{
    if (sw == 1)
    {
        return !digitalRead(SafteySwitch1);
    }
    else if (sw == 2)
    {
        return !digitalRead(SafteySwitch2);
    }
}
void setupRelays()
{
    for (int i = 0; i < 8; i++)
    {
        pinMode(pins[i], OUTPUT);
        digitalWrite(pins[1], LOW);
    }
}

void relayControl(int r, bool state)
{
    digitalWrite(pins[r - 1], state);
}

void setHeating(uint8_t mode)
{
    if (mode == 1)
    {
        digitalWrite(pins[1], 0);
        digitalWrite(pins[2], 0);
        digitalWrite(pins[0], 1);
    }
    else if (mode == 2)
    {
        digitalWrite(pins[2], 0);
        digitalWrite(pins[0], 0);
        digitalWrite(pins[1], 1);
    }
    else if (mode == 3)
    {
        digitalWrite(pins[0], 0);
        digitalWrite(pins[1], 0);
        digitalWrite(pins[2], 1);
    }
}
void turnOffHeating()
{
    digitalWrite(pins[2], 0);
    digitalWrite(pins[0], 0);
    digitalWrite(pins[1], 0);
}
void turnOffCooling()
{
    digitalWrite(pins[3], 0);
    digitalWrite(pins[4], 0);
}
void setCooling(uint8_t mode)
{
    if (mode == 1)
    {
        digitalWrite(pins[4], 0);
        digitalWrite(pins[3], 1);
    }
    else if (mode == 2)
    {
        digitalWrite(pins[3], 0);
        digitalWrite(pins[4], 1);
    }
}

void controlIndoorFan(uint8_t state)
{
    if (state == 1)
    {
        digitalWrite(pins[5], 1);
    }
    else
    {
        digitalWrite(pins[5], 0);
    }
}

void controlReversingValve(uint8_t mode)
{
    if (mode == 1)
    {
        digitalWrite(pins[7], 0);
        digitalWrite(pins[6], 1);
    }
    else if (mode == 2)
    {
        digitalWrite(pins[6], 0);
        digitalWrite(pins[7], 1);
    }
    else if(mode==OFF){
        digitalWrite(pins[6], 0);
        digitalWrite(pins[7], 0);
    }
}
