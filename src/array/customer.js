// trie par age
var person = [{name:'Virgine Lamesse',age:25},{name:'Zeynab Sarr',age:20},{name:'Kine Sidibe',age:27},{name:'Arona Sow',age:21},{name:'Kine Sow',age:24},{name:'Kouna Fall',age:33},{name:'Fatou Fall',age:18}]
var rs = []
var resutat = []
var tmp
var tp
var p
for (var i = 0;i<person.length;i++) {
    var age = person[i].age
    rs.push(age)
}
for (var k=0;k<rs.length;k++) {
    for (var imin =k;imin<rs.length;imin++) {
        if (rs[k]>rs[imin]) {
            tmp = rs[k]
            rs[k] = rs[imin]
            rs[imin] = tmp
        }
    }
    for(var i = 0 ;i<person.length;i++) {
        if(person[i].age == rs[k]) {
            p = person[i]
        }
    }
    firstname = p.name.split(' ')
    console.log(firstname)
    resutat.push({ first_name: firstname[0],
        last_name: firstname[1],
        age: p.age
    })
}
console.log(resutat)
// Trie par firstname et lastname
var parts = []
var part = []
var lastname = []
var firstname = []
var i
var f = ""
var n = []
var nam = []
var  us
var lasts = []
var firsts = []
var names = []
var resul = []
var pers = []
var name
var pi
var result = []
for (i = 0;i<person.length;i++) {
    name = person[i].name
    name = name.split(' ')
    nam.push(name)
    lasts.push(name[1])
    firsts.push(name[0])
}
for (j = 0; j<lasts.length;j++) {
    for (var k = j;k<lasts.length;k++) {
        if (lasts[j]>lasts[k]) {
            tmp = lasts[j]
            lasts[j] = lasts[k]
            lasts[k] = tmp
        }
    }
    for (var l = 0;l<nam.length;l++) {
        var lasnam = ""
        lasnam += nam[l][1]
        if (lasnam==lasts[j]) {
            pi =nam[l]
        }
    }
    result.push({
        first_name: pi.slice(0,pi.length-1).join(' '),
        last_name: pi[pi.length-1]
    })
}
console.log(result)
for (var k=0;k<firsts.length;k++) {
    for (var imin =k;imin<firsts.length;imin++) {
        if (firsts[k]>firsts[imin]) {
            tmp = firsts[k]
            firsts[k] = firsts[imin]
            firsts[imin] = tmp
        }
    }
}



/*var person = [
    {
        "id": 1,
        "name": "Kouna Galass Fall",
        "email": "kouna@ctsfares,com",
        "age" : 20,
        "phone": "77 567 89 34",
        "website": "ctsfares.org",
        "company": "cts"
    } ,
    {
        "id": 2,
        "name": "Mareme Diallo Diop",
        "email": "maremediop@hotmail.com",
        "age": 22,
        "phone": "77-345-87-12",
        "website": "atos.net",
        "company": "atos"
    } ,
    {
        "id": 3,
        "name": "Babacar Cisse Dia",
        "email": "babacar@ctsfares.com",
        "age": 18,
        "phone": "70-463-08-12",
        "website": "ctsfares.info",
        "company": "cts"
    },
    {
        "id": 4,
        "name": "Mame Matar Seye",
        "email": "atos.org",
        "age": 25,
        "phone": "77-170-96-23",
        "website": "kale.biz",
        "company": "atos"
    },
    {
        "id": 5,
        "name": "Habibou Cheikhouna Diabong",
        "email": "Lucio_Hettinger@annie.ca",
        "age": 27,
        "phone": "76-954-12-89",
        "website": "ctsfares.info",
        "company": "cts"
    },
    {
        "id": 6,
        "name": "Mouhamed Fadhel Fall",
        "email": "Karley_Dach@jasper.info",
        "age": 26,
        "phone": "77-935-84-78",
        "website": "atos.org",
        "company": "atos"
    },
    {
        "id": 7,
        "name": "Cheikh Sidy Fall",
        "age": 23,
        "email": "Telly.Hoeger@billy.biz",
        "phone": "77-067-61-32",
        "website": "ctsfares.io",
        "company": "cts"
    }
]
var name = ""
var firstname = []
var lastname = ""
var tab = []
for (var i = 0;i<person.length;i++) {
    tab[i] = person[i].name.split(' ')
    for (var j = 0;j<tab[i].length;j++) {
        firstname = tab[0][0]+" "+tab[0][1]
    }
    }
//name = name.split(' ')
console.log(firstname) */
/*
var res = []
var resul = []
var age = []
var tmp
var person = [{name:'Virgine Lamesse',age:25},{name:'Zeynab Sarr',age:20},{name:'Arona Sow',age:21},{name:'Kouna Fall',age:33},{name:'Fatou Fall',age:18}]
for (var i = 0;i<person.length;i++) {
    var parts = person[i].name.split(' ')
    var first_name = ""
    parts.forEach((part, index) => {
        if (index < parts.length - 1) {
            first_name += parts[index]
        }
    })
    res.push({
        first_name: parts.slice(0, parts.length - 1).join(' '),//first_name,
        last_name: parts[parts.length - 1]
    })
}
console.log(res)
for (var j = 0;j<person.length;j++) {
    var parts = person[j].name.split(' ')
    var last_name = ""
    parts.forEach((part, index) => {
        if (index < parts.length - 1) {
            last_name += parts[index]
        }
    })
      resul.push({
          last_name: parts[parts.length-1]
      })

}
console.log(resul)
for (var j = 0;j<person.length;j++) {
    var parts = person[j].name.split(' ')
    var ages = person[j].age
    var last_name = ""
    parts.forEach((part, index) => {
        if (index < parts.length - 1) {
            last_name += parts[index]
        }
    })
    if (ages<25) {
    age.push({
        first_name:parts.slice(0,parts.length-1).join(' '),
        last_name: parts[parts.length-1]
    })
    }
}
console.log(age)*/
/*for (var j = 0;j<person.length;j++) {
    var parts = person[j].name.split(' ')
    var last_name = ""
    for (var i=0;i<person) {
    }
    resul.push({
        last_name: parts[parts.length-1]
    })

}*/
//console.log(firsts)
//console.log(lasts)
//console.log(firsts)
/*for (i = 0;i<person.length;i++) {
    parts.push(person[i].name)
}
for (var j = 0;j<parts.length;j++) {
    for (k = j;k<parts.length;k++) {
        if (parts[j]>parts[k]){
            tp = parts[j]
            parts[j]= parts[k]
            parts[k]= tp
        }
        part = parts[j].split(' ')
        console.log(part)
        lasts.push(part[part.length - 1])
        for (j = 0; j<lasts.length;j++) {
            for (var k = j;k<lasts.length;k++) {
                if (lasts[j]>lasts[k]) {
                    tmp = lasts[j]
                    lasts[j] = lasts[k]
                    lasts[k] = tmp
                }
            }
            /*for (var h = 0;h<part.length;h++) {
                var personne = ""
                if (lasts[j]==part[part.length - 1]) {
                     personne += part[h]

                    console.log(personne)
                }
            }

        }
    }
   /* resul.push({
        first_name: personne[0],//first_name,
        last_name: personne[personne.length - 1]
    })
}
console.log(resul)*/























































