let firstName: string = "Andrei";
let lastName: string = "Dascal";

function getFullName(fName: string, lName: string): void {
    console.log(fName.length);

    console.log(`${fName} ${lName}`);
}

function isAdult(age: number | string): boolean {
    let ageAsNumber = age;

    if(typeof(age) === 'string')
        ageAsNumber = age as unknown as number;

    return ageAsNumber > 18;
    // if(ageAsNumber > 18)
    //     return true;

    // return false;
}

function logPerson(firstName: string, lastName: string, age: number = 18, cnp?: string) {
    throw new Error("Not Implemented Exception");
}

//TEST

isAdult("18");
isAdult(18);
// isAdult(true);

getFullName("5", "10");
getFullName("Test", "Test1");
getFullName(firstName, lastName);

logPerson("Andrei", "Dascal");
logPerson("Andrei", "Dascal", 22);
logPerson("Andrei", "Dascal", 22, "12344556");