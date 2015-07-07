#Mastermind
Implementacja gry "Mastermind" wykonana w (strasznie zabugowanym) środowisku Titanium Studio (taki wymóg).

Był to projekt na zaliczenie przedmiotu Cross-Platform Development na Universitat de Vic w Hiszpanii, stąd w tle widnieje zdjęcie Kopernika jako wyraz lokalnego patriotyzmu.

*Program został stworzony we współpracy z Pawłem Chojnackim.*

## Zasady gry:

Program losuje ciąg 4 kolorów z 8 możliwych (mogą się powtarzać). Zadaniem gracza jest odgadnięcie tego ciągu w co najwyżej 10-ciu próbach.

Ułatwieniem są informacje w postaci:
- liczby kolorów odgadniętych przez gracza,
- liczby kolorów, które występują w zadanym ciągu, lecz na innej pozycji.

## Obsługa

Na początku wyświetla się alert z wylosowanymi identyfikatorami kolorów, więc jeśli ktoś nie chce oszukiwać to powinien zamknąć oczy ;)

Następnie klikając na kwadraciki proponujemy swój układ kolorów. Po kliknięciu przycisku *Dalej* gra zwróci informację nt. trafności próby.
