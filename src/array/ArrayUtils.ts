import IPerson from '../interface/IPerson';
import dotenv from 'dotenv'

dotenv.config()

class ArrayUtils {

    /**
     * @param persons
     * @returns string[]
     */
    static lastNames(persons: IPerson[]): string[] {
        return persons.map(function (person) {
            return person.last_name
        })
    }

    /**
     * @returns IPerson[]
     * @param persons
     */
    static personsWithLastNameUpperCased(persons: IPerson[]): IPerson[] {
        let i: number
        let resul : IPerson[] = []
        for (i = 0; i < persons.length; i++) {
            resul.push({
                id: persons[i].id,
                first_name: persons[i].first_name,
                last_name: persons[i].last_name.toUpperCase()
            })
        }
        return resul
    }

    static personsWithFullName (persons: IPerson[]): IPerson[] {
        return []
    }

    /**
     * @param
     */
    static sortNumbers(t: number[]): number[] {
        let tmp;
        for (let i = 0; i < t.length; i++) {
            for (let min = i; min < t.length; min++) {
                if (t[min] < t[i]) {
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
    static map(t: number[], callback: any): any {
        let c = []
        for (let j = 0; j < t.length; j++) {
            c.push(callback(t[j]))
        }
        return c
    }

    /**
     *
     * @param t
     */
    static sortByAge(t: IPerson[]): IPerson[] {
        return t
    }

    static adults (t: IPerson[]): IPerson[] {
        return []
    }

    static range(from: number, to: number): number[] {
        let dump = []
        for (let i = from; i <= to; i++) {
            dump.push(i)
        }
        return dump
    }
}

export class ArrayUtilsSolution extends ArrayUtils {
}

export default process.env.PERSON === 'buddy' ? ArrayUtilsSolution : ArrayUtils
