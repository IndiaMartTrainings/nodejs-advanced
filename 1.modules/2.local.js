var log = {
    info: function(info){
        console.log(`Info : ${info}`)
    },
    warning: function(warning){
        console.log(`warning : ${warning}`)
    },
    error: function(error){
        console.log(`error : ${error}`)
    },
}

module.exports = log

// module.exports.display = function(display){
//     console.log(`display : ${display}`)
// }