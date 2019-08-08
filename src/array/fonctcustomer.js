
function findIndex(t,cb) {
    var b = -1
    for (var i= 0;i<t.length;i++) {
      if (cb(t[i])) {
          b = i;
          break;
      }
    }
    return b
}
function filter(t,cb) {
    var b = []
    for (var i = 0;i<t.length;i++) {
        if (cb(t[i])) {
            b.push(t[i])
        }
    }
    return b
}

function estPremier(n) {
    var b = Math.sqrt(n)
    var a = 0
    if (n<2) {
        return false
    }
    if (n==2) {
        return true
    }
    if (n%2==0) {
        return false
    }
    for (var i = 3; i<b;i +=2) {
        a = n%i
        if (a==0) {
            return false
        }
    }
    return true
}

function  map(t,cb) {
    var c = []
    for (var j = 0;j<t.length;j++) {
            c.push(cb(t[j]))
    }
    return c
}
function copy(t) {
    var tab = []
    for (var i = 0;i<t.length;i++) {
        for (var j= i;j<t.length;j++) {
            tab[j] = t[i]
        }
    }
    return tab
}

var p = [{firstname:'Virgine',lastname:'Lamesse',age:25},{firstname:'Zeynab',lastname:'Sarr',age:20},{firstname:'Kine',lastname:'Sidibe',age:27},{firstname:'Arona',lastname:'Sow',age:21},{firstname:'Kine',lastname:'Sow',age:24},{firstname:'Kouna',lastname:'Fall',age:33},{firstname:'Fatou',lastname: 'Fall',age:18}]
var u = [{firstname:'Virgine',lastname:'Lamesse',age:25},{firstname:'Zeynab',lastname:'Sarr',age:20},{firstname:'Kine',lastname:'Sidibe',age:27},{firstname:'Arona',lastname:'Sow',age:21},{firstname:'Kine',lastname:'Sow',age:24},{firstname:'Kouna',lastname:'Fall',age:33},{firstname:'Fatou',lastname:' Fall',age:18}]
var i1 = findIndex(u,function (person) {
    return person.name == 'Kine Sidibe' && person.age == 27
})
var t = [1,3,4,8,5,0,17, 21]
var i2 = findIndex(t, function(number) {
    return number == 5
})
var majeurs = filter(u, function (person) {
    return person.age >= 18
})
var pairs = filter(t, function (number) {
    return number % 2 == 0
})
var triplets = map(t, function (number) {
      return number * 3
})
var premiers = filter(t, function (number) {
    return estPremier(number)
})
var names = map(u, function (person) {
    return person.lastname
})

//var estpremier = estPremier(3)
console.log('index of sidibe in u = %d', i1)
console.log('index of 5 in %o = %d', t, i2)
console.log('les majeurs de u sont: %o ', majeurs)
console.log('les elements paires de t sont: %o ', pairs)
console.log('les elements triplets de %o sont: %o ', t, triplets)
console.log('les differents noms de famille de %o sont: %o ', u, names)
//console.log('le nombre in estpremier',estpremier)
console.log('les nombres premiers de %o sont: %o ', t, premiers)
console.log(estPremier(3))
console.log(copy(u))