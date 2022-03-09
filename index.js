const returnFirstTwoDrivers = function (drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function (drivers){
    const lastTwoDrivers = drivers.slice(-2)
    return lastTwoDrivers;
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}

