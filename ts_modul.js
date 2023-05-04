// 1. feladat
function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek == 7) {
        document.write("A Ph érték alapján semleges.");
    }
    else if (vizsgaltErtek < 7) {
        document.write("A Ph érték alapján savas.");
    }
    else if (vizsgaltErtek > 7) {
        document.write("A Ph érték alapján lugos.");
    }
    else {
        document.write("A megadott érték helytelen.");
    }
}
var ertekPhp = PhErtek(7);
document.write(ertekPhp + "");
// 2. feladat
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var tomb = [];
    for (var i = 0; i < meret; i++) {
        tomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar));
    }
    return tomb;
}
var vizsgaltTomb = TombGenerator(15, 20, 0);
function PrimekSzama(vizsgaltTomb) {
    var primekTombje = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 0; j < vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekTombje.push(vizsgaltTomb[i]);
        }
    }
    return primekTombje;
}
var primSzamok = PrimekSzama(vizsgaltTomb);
document.write(primSzamok + "");
// 3. feladat
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganhangzokOsszege = 0;
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < vizsgaltSzoveg.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                maganhangzokOsszege++;
            }
        }
    }
    return maganhangzokOsszege;
}
var maganhangzok = MaganHangzokSzama("Szeretem a programozást");
document.write(maganhangzok + "");
