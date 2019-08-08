import IPerson from '../interface/IPerson';

export default class ArrayUtils {

  /**
   * @param persons
   * @returns string[]
   */
  static lastNames (persons: IPerson[]): string[] {
    return persons.map((person: IPerson) => {
      return person.last_name
    })
  }

  /**
   * @returns IPerson[]
   * @param persons
   */
  static personsWithLastNameUpperCased (persons: IPerson[]) {
    return persons.map(function (person) {
      return Object.assign({}, person, {
        last_name: person.last_name.toUpperCase()
      })
    });
  }

  /**
   * @param t
   */
  static sortNumbers (t: number[]): number[] {
    return []
  }

  static map (t: number[], callack: any): any {
    return t
  }
}
