export default class NumberUtil {

  static sum (t: number[]): number {
    return 0
  }


  static average (t: number[]): number {
    return 0
  }


  /**
   * @throws Error when array is empty
   * @param t
   */
  static min (t: number[]): number {
    return 0
  }


  /**
   * @throws Error when array is empty
   * @param t
   */
  static max (t: number[]): number {
    return 0
  }

  /**
   * -1 if not found
   * otherwise index of element in array t
   * @param t
   * @param element
   */
  static findIndex (t: number[], element: number): number {
    return 0
  }

  static isPrime (n: number): boolean {
    let b = Math.sqrt(n)
    let a = 0
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
      a = n % i
      if (a == 0) {
        return false
      }
    }
    return true
  }
}
