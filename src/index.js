module.exports = function reverse(n) {
    return (
        parseFloat(
            n.toString(),
            n.split(''),
            n.reverse(),
            n.join('')
        ) * Math.sign(n)
    )

}
