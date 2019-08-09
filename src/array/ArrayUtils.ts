import IPerson from '../interface/IPerson';

export default class ArrayUtils {

  /**
   * @param persons
   * @returns string[]
   */
  static lastNames (persons: IPerson[]): string[] {
    return persons.map(function (person) {
              return person.last_name
    })
  }

  /**
   * @returns IPerson[]
   * @param persons
   */
  static personsWithLastNameUpperCased (persons: IPerson[]) : IPerson[]{
    let n:string ="";
    let i:number;
    let m:string[]= [];
    let per:IPerson[] = [];
    let firstname:string = "";
    let lastname:string = "";
    let name :string;

   for (i = 0;i<persons.length;i++) {
        firstname = persons[i].first_name
        lastname = persons[i].last_name.toUpperCase()
   }
    name = firstname +' '+lastname
    m= name.split(' ')
   per.push({
        first_name: m.slice(0,m.length-1).join(' '),
        last_name:m[m.length-1]
   })

  }

  /**
   * @param t
   */
  static sortNumbers (t: number[]): number[] {
    let tmp;
    for (let i = 0;i<t.length;i++) {
      for(let min = i;min<t.length;min++) {
        if(t[min]<t[i]) {
          tmp = t[i]
          t[i] = t[min]
          t[min] = tmp
        }
      }
    }
    return t
  }

  /**
   * @param t
   * @param callback
   */
  static map (t: number[], callback: any): any {
    let c = []
    for (let j = 0;j<t.length;j++) {
      c.push(callback(t[j]))
    }
    return c
  }
}
