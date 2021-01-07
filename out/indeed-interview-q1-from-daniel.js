"use strict";
// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayClicks = void 0;
// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:
// counts = [ "900,google.com",
//      "60,mail.yahoo.com",
//      "10,mobile.sports.yahoo.com",
//      "40,sports.yahoo.com",
//      "300,yahoo.com",
//      "10,stackoverflow.com",
//      "20,overflow.com",
//      "5,com.com",
//      "2,en.wikipedia.org",
//      "1,m.wikipedia.org",
//      "1,mobile.sports",
//      "1,google.co.uk"]
// Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)
// Sample output (in any order/format):
// calculateClicksByDomain(counts) =>
// com:                     1345
// google.com:              900
// stackoverflow.com:       10
// overflow.com:            20
// yahoo.com:               410
// mail.yahoo.com:          60
// mobile.sports.yahoo.com: 10
// sports.yahoo.com:        50
// com.com:                 5
// org:                     3
// wikipedia.org:           3
// en.wikipedia.org:        2
// m.wikipedia.org:         1
// mobile.sports:           1
// sports:                  1
// uk:                      1
// co.uk:                   1
// google.co.uk:            1
// n: number of domains in the input
// (individual domains and subdomains have a constant upper length)
function displayClicks(clicksArray) {
    var clicksTally = {};
    for (var _i = 0, clicksArray_1 = clicksArray; _i < clicksArray_1.length; _i++) {
        var siteClicks = clicksArray_1[_i];
        var separateClicksFromSite = siteClicks.split(',');
        var clicks = Number(separateClicksFromSite[0]);
        var allSubDomains = separateClicksFromSite[1].split('.');
        for (var i = 0; i < allSubDomains.length; i++) {
            var reassembled = allSubDomains.slice(i).join('.');
            clicksTally[reassembled]
                ? (clicksTally[reassembled] += clicks)
                : (clicksTally[reassembled] = clicks);
        }
    }
    debugger;
    return clicksTally;
}
exports.displayClicks = displayClicks;
displayClicks([
    '900,google.com',
    '60,mail.yahoo.com',
    '10,mobile.sports.yahoo.com',
    '40,sports.yahoo.com',
    '300,yahoo.com',
    '10,stackoverflow.com',
    '20,overflow.com',
    '5,com.com',
    '2,en.wikipedia.org',
    '1,m.wikipedia.org',
    '1,mobile.sports',
    '1,google.co.uk',
]);
//# sourceMappingURL=indeed-interview-q1-from-daniel.js.map