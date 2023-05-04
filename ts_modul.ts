// 1. feladat

function PhErtek(vizsgaltErtek: number): any {
    if (vizsgaltErtek == 7) {
        document.write("A Ph érték alapján semleges.")
    }
    else if (vizsgaltErtek < 7) {
        document.write("A Ph érték alapján savas.")
    }
    else if (vizsgaltErtek > 7) {
        document.write("A Ph érték alapján lugos.")
    }
    else {
        document.write("A megadott érték helytelen.")
    }
}

let ertekPhp: string = PhErtek(7);
document.write(ertekPhp + "");

// 2. feladat

function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): number[] {
    let tomb: number[] = [];
    for (let i: number = 0; i < meret; i++) {
        tomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar));
    }
    return tomb;
}
let vizsgaltTomb = TombGenerator(15, 20, 0);


function PrimekSzama(vizsgaltTomb: number[]): number[] {
    let primekTombje: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 0; j < vizsgaltTomb[i]; j++) {
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

let primSzamok: number[] = PrimekSzama(vizsgaltTomb);
document.write(primSzamok + "");


// 3. feladat

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    let maganhangzokOsszege: number = 0;
    let maganHangzok: string[] = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j: number = 0; j < vizsgaltSzoveg.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                maganhangzokOsszege++;
            }
        }
    }
    return maganhangzokOsszege;
}

let maganhangzok: number = MaganHangzokSzama("Szeretem a programozást");
document.write(maganhangzok + "");