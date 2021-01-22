// https://github.com/ahmed-jabed/Assignment-3


// this is problem No. 1   (kilometer to meter convert)

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return 'Please, input positive value'
    }
    return meter;
}

// suppose , we can measure,  5 kilometer = how many meters?

var fiveKilometer = kilometerToMeter(12);
console.log(fiveKilometer);


//  this is problem No. 2 


function budgetCalculator(watches, phones, laptops) {
    var watches;
    var phones;
    var laptops;
    watches = watches * 50;
    phones = phones * 100;
    laptops = laptops * 500;
    var total = watches + phones + laptops;
    if (watches < 0 || phones < 0 || laptops < 0) {
        return ' Alert, check how much you buy?'
    }
    return total;
}

//  i want to buy a kindy phone and two watches for me and my brother.

var buy = budgetCalculator(2, 2, 1);
console.log(buy);


// this is problem No. 3 

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else if (days <= 20) {
        var firstHalfDays = 10 * 100;
        var remainingDays = days - 10;
        var secondHalfDays = remainingDays * 80;
        totalCost = firstHalfDays + secondHalfDays;
        return totalCost;
    } else if (days > 20) {
        var remainingDays = days - 20;
        var firstHalfDays = 10 * 100;
        var secondHalfDays = 10 * 80;
        var thirdHalfDays = remainingDays * 50;
        totalCost = firstHalfDays + secondHalfDays + thirdHalfDays;
        return totalCost;
    }
    return totalCost;
}

// suppose, i want to stay in a hotel next 19 days, how much cost? 

var we = hotelCost(22);
console.log('Your total cost is', we)


//  this is problem 4

function megaFriend(arry){
    var result ='';
    for(var i=0; i<arry.length; i++){
        var currentResult= arry[i];
        if(currentResult.length > result.length){
            result = currentResult;
        }
    }
    return result;
}

// this is a sample 

var friends = ['kulsum', 'jorina', 'kuddus', 'keya', 'thisIsMegaBondhu', 'AHmed', 'rajRAzon'];

console.log(megaFriend(friends));