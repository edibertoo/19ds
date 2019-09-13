function fib (n) {
    let z = 0
    let x = 1
    let m = 1

    for(let i = 1; i <= n; i++) {
        console.log(m)
        m = z + x
        
        z = x
        x = m
    }
}
