import IPerson from "../interface/IPerson";
export class ObjectUtils {

  /**
   *
   * @param {object} input
   * @param {string} [input.name]
   */
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    // {name:'Virgine Lamesse'}
    let name:string[] = [];
    let keys:string[] = Object.values(input);
    for (let i = 0;i<keys.length;i++){
         name = keys[i].split(' ')
    }
    return {
      first_name: name.slice(0,name.length-1).join(' '),
      last_name: name[name.length-1],
    }
  }
}



export class ObjectUtilsSolution extends ObjectUtils {
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    const parts: string[] = input.name.split(' ')
    return {
      first_name: parts.slice(0, parts.length - 1).join(' '),
      last_name: parts[parts.length - 1],
    }
  }
}

export default process.env.PERSON === 'buddy' ? ObjectUtilsSolution : ObjectUtils
