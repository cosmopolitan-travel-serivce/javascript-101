import {kMaxLength} from "buffer";

export class NumberUtils {

  static sum (t: number[]): number {
    let som = 0
    for (let i = 0;i<t.length;i++) {
           som += t[i]
    }
    return som
  }
  static average (t: number[]): number {
    if (t.length==0) {
      return 0
    }
    return this.sum(t)/t.length
  }


  /**
   * @throws Error when array is empty
   * @param t
   */
  static min (t: number[]): number {
    let na:number[] = [];
    let min: number;
    let j:number = 0;
    for (let i:number = 0;i<t.length;i++) {
      if(!(isNaN(t[i]))) {
        na = t.filter(function (tab,j) {
            if (j<t.length) {
                return t[j]
            }


        })


     }
    }
      console.log(na);
      if (na.length==0) {
          throw new Error('Error when array is empty')
      }
      min = na[0];
      for (let k:number =1;k<na.length;k++) {
          if (na[k]<min) {
              min = na[k]
          }

      }
            return min
        }

  /* if (t[0]== null) {
        throw new Error('Error when array is empty')
      }
      for(let i= 0;i<t.length;i++) {
        if(isNaN(t[i])) {
          tab.push(t[i])
          if(tab.length!=0) {
            throw new Error('The elements of arrays contains a NaN')
          }
        }
        na.push(!(isNaN(t[i])))
      }
      for(let j =1 ;na.length;j++) {
         if(na[0]==null) {
           throw new Error('')
         }
         if(na[j]<min) {
           min = na[j]
         }
      }
      return min*/
  /**
   * @throws Error when array is empty
   * @param t
   */
  static max (t: number[]): number {
    const error:any = Error;
    if (t[0]== null) {
      throw new Error('')
    }
    let max:number = t[0]
    for (let i = 1;i<t.length;i++) {
      if (t[i]>max) {
        max = t[i]
      }
    }
    return max
  }

  /**
   * -1 if not found
   * otherwise index of element in array t
   * @param
   */
  static findIndex (t: number[], element: number): number {
    let b = -1
    for (let i = 0;i<t.length;i++) {
      if (t[i]==element) {
         b = i;
        break;
      }
    }
    return b
  }
  static isPrime (n: number): boolean {
    let b = Math.sqrt(n);
    let a = 0;
    if (n<2) {
        return false
    }
    if (n==2) {
        return true
    }
    if (n%2==0) {
        return false
    }
    for (let i = 3; i<b;i +=2) {
        a = n%i;
        if (a==0) {
            return false
        }
    }
    return true

  }
}


export class NumberUtilsSolution extends NumberUtils {}


export default process.env.PERSON === 'buddy' ? NumberUtilsSolution : NumberUtils
