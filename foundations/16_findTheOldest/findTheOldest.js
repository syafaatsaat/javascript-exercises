const findTheOldest = function(people) {
    const sortedPeople = people.sort((a, b) => {
        let currentYear = (new Date()).getFullYear();
        let ageA = 0;
        if ('yearOfDeath' in a) {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            ageA = currentYear - a.yearOfBirth;
        }

        let ageB = 0;
        if ('yearOfDeath' in b) {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            ageB = currentYear - b.yearOfBirth;
        }

        return (ageB < ageA) ? -1 : 1;
    });
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
