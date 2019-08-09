import IPerson from '../interface/IPerson';
import dotenv from 'dotenv'
import ArrayUtilsSolution from "../implementation/array/ArrayUtilsSolution";
dotenv.config()

class ArrayUtils {

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
         id:persons[i].id,
        first_name: m.slice(0,m.length-1).join(' '),
        last_name:m[m.length-1]
   })
  return  per
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

  /**
   *
   * @param t
   */
  static sortByAge (t: IPerson[]): IPerson[] {
    return t
  }
}

export default process.env.PERSON === 'buddy' ? ArrayUtilsSolution : ArrayUtils
