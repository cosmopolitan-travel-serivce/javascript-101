import IPerson from '../interface/IPerson';
import env from 'dotenv';

env.config();
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
        let result : IPerson[] = [];
        for (let i:number = 0; i < persons.length; i++) {
            result.push({
                id: persons[i].id,
                first_name: persons[i].first_name,
                last_name: persons[i].last_name.toUpperCase()
            })
        }
        return result
    }

    /**
     * @param
     */
    static sortNumbers(t: number[]): number[] {
        let tmp;
        for (let i = 0; i < t.length; i++) {
            for (let min = i; min < t.length; min++) {
                if (t[min] < t[i]) {
                    tmp = t[i];
                    t[i] = t[min];
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
        let c = [];
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
        let adults: IPerson[] = [];
        for (let i:number = 0; i < t.length; i++) {
            if (t[i].age!>=18) {
                adults.push({
                    id: t[i].id,
                    first_name: t[i].first_name,
                    last_name: t[i].last_name,
                    age:t[i].age
                })
            }
        }
        return adults
    }
    static range(from: number, to: number): number[] {
        let dump = [];
        for (let i = from; i <= to; i++) {
            dump.push(i)
        }
        return dump
    }
    static personsWithFullName (persons: IPerson[]): IPerson[] {
        let result : IPerson[] = [];
        for (let i:number = 0; i < persons.length; i++) {
                result.push({
                    id: persons[i].id,
                    first_name: persons[i].first_name,
                    last_name: persons[i].last_name,
                    age:persons[i].age,
                    full_name:persons[i].first_name+" "+persons[i].last_name

                })
        }
        return result
    }

}

export class ArrayUtilsSolution extends ArrayUtils {}

export default process.env.PERSON === 'buddy' ? ArrayUtilsSolution : ArrayUtils
