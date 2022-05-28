#define R1 32
#define R2 19
#define R3 18
#define R4 5
#define R5 4
#define R6 2
#define R7 15
#define R8 26


int pins[8] = {R1, R2, R3, R4, R5, R6, R7, R8};


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
