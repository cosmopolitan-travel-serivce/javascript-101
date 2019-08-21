import IPerson from "../../interface/IPerson";
import {ObjectUtils} from "../../object/ObjectUtils";

export class ObjectUtilsSolution extends ObjectUtils {
  /**
   *
   * @param {object} input
   * @param {string} [input.name]
   */
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    const parts: string[] = input.name.split(' ')
    return {
      first_name: parts.slice(0, parts.length - 1).join(' '),
      last_name: parts[parts.length - 1],
    }
  }
}
