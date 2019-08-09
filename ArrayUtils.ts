import IPerson from '../interface/IPerson';

export default class ArrayUtils {

  /**
   * @param persons
   * @returns string[]
   */
  static lastNames (persons: IPerson[]): string[] {
    return []
  }

  /**
   * @returns IPerson[]
   * @param persons
   */
  static personsWithLastNameUpperCased (persons: IPerson[]) {
    return []
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
