// Scrivi un programma che stampi i numeri da 1 a 100,


for (var i=1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
        console.log("FizzBuzz");
    } else if ( (i % 3) == 0) { //per i multipli di 3 stampi "Fizz" al posto del numero 
        console.log("Fizz");
    } else if((i % 5) == 0) {//per i multipli di 5 stampi Buzz.
        console.log("Buzz");
    } else {
        console.log(i);
    }

}