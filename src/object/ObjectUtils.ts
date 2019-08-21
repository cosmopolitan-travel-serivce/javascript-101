import IPerson from "../interface/IPerson";

export class ObjectUtils {

  /**
   *
   * @param {object} input
   * @param {string} [input.name]
   */
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    // {name:'Virgine Lamesse'}
    return {
      first_name: '',
      last_name: '',
    }
  }
}



export class ObjectUtilsSolution extends ObjectUtils {
}

export default process.env.PERSON === 'buddy' ? ObjectUtilsSolution : ObjectUtils
