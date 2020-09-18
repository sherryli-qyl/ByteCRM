const { faMarsDouble } = require("@fortawesome/free-solid-svg-icons")



function sortDate(array) {
    array.sort(function (a, b) {
        return b.date < a.date ? -1 : 1
    })
}


export default sortDate;