export class NumberUtils {

  static sum (t: number[]): number {
    let som = 0
    for (let i = 0; i < t.length; i++) {
      som += t[i]
    }
    return som
  }

  static average (t: number[]): number {
    if (t.length == 0) {
      return 0
    }
    return this.sum(t) / t.length
  }


  /**
   * @throws Error when array is empty
   * @param t
   */
  static min (t: number[]): number {
    let na: number[] = t.filter(function (j) {
      return !isNaN(j)
    });
    if (na.length == 0) {
      throw new Error('Error when array is empty')
    }
    let min: number = na[0];
    for (let k: number = 1; k < na.length; k++) {
      if (na[k] < min) {
        min = na[k]
      }
    }
    return min
  }


    /**
     * @throws Error when array is empty
     * @param t
     */
    static max(t: number[]): number {
        let na: number[] = t.filter(function (j) {
            return !isNaN(j)
        });
        if (na.length == 0) {
            throw new Error('Error when array is empty')
        }
        let max: number = na[0];
        for (let k: number = 1; k < na.length; k++) {
            if (na[k] >  max) {
                max = na[k]
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
    for (let i = 0; i < t.length; i++) {
      if (t[i] == element) {
        b = i;
        break;
      }
    }
    return b
  }

  static isPrime (n: number): boolean {
    let b = Math.sqrt(n);
    let a = 0;
    if (n < 2) {
      return false
    }
    if (n == 2) {
      return true
    }
    if (n % 2 == 0) {
      return false
    }
    for (let i = 3; i < b; i += 2) {
      a = n % i;
      if (a == 0) {
        return false
      }
    }
    return true

  }
}


export class NumberUtilsSolution extends NumberUtils {
}


export default process.env.PERSON === 'buddy' ? NumberUtilsSolution : NumberUtilsSolution
