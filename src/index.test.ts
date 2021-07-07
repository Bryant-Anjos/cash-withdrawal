import { Withdrawal } from './index'

describe('Withdrawal.toArray', () => {
  const sum = (notes: number[]): number => notes.reduce((prev, curr) => prev + curr)

  it('150 should return 100 and 50', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toArray(150)
    expect(response.length).toBe(2)
    expect(response).toStrictEqual([100, 50])
    expect(sum(response)).toBe(150)
  })

  it('125 should return 100, 20 and 5', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toArray(125)
    expect(response.length).toBe(3)
    expect(response).toStrictEqual([100, 20, 5])
    expect(sum(response)).toBe(125)
  })

  it('379 should return 3x100, 1x50, 1x20, 1x5 and 2x2', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toArray(379)
    expect(response.length).toBe(8)
    expect(response).toStrictEqual([100, 100, 100, 50, 20, 5, 2, 2])
    expect(sum(response)).toBe(379)
  })

  it('3 should return value_not_allowed error', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toArray(3)).toThrow('value_not_allowed')
  })

  it('100 should return 10x10', () => {
    const notes = [10]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toArray(100)
    expect(response.length).toBe(10)
    expect(response).toStrictEqual(Array(10).fill(10))
    expect(sum(response)).toBe(100)
  })

  it('35 should return value_not_allowed error', () => {
    const notes = [10]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toArray(35)).toThrow('value_not_allowed')
  })

  it('35 should return 7x5', () => {
    const notes = [5]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toArray(35)
    expect(response.length).toBe(7)
    expect(response).toStrictEqual(Array(7).fill(5))
    expect(sum(response)).toBe(35)
  })

  it('37 should return value_not_allowed error', () => {
    const notes = [5]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toArray(37)).toThrow('value_not_allowed')
  })
})

describe('Withdrawal.toMap', () => {
  const sum = (notes: Record<number, number>): number =>
    Object.entries(notes).reduce((prev, [note, amount]) => prev + +note * amount, 0)

  it('150 should return 100 and 50', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toMap(150)
    expect(response).toStrictEqual({
      100: 1,
      50: 1,
    })
    expect(sum(response)).toBe(150)
  })

  it('125 should return 100, 20 and 5', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toMap(125)
    expect(response).toStrictEqual({
      100: 1,
      20: 1,
      5: 1,
    })
    expect(sum(response)).toBe(125)
  })

  it('379 should return 3x100, 1x50, 1x20, 1x5 and 2x2', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toMap(379)
    expect(response).toStrictEqual({
      100: 3,
      50: 1,
      20: 1,
      5: 1,
      2: 2,
    })
    expect(sum(response)).toBe(379)
  })

  it('3 should return value_not_allowed error', () => {
    const notes = [2, 5, 10, 20, 50, 100]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toMap(3)).toThrow('value_not_allowed')
  })

  it('100 should return 10x10', () => {
    const notes = [10]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toMap(100)
    expect(response).toStrictEqual({ 10: 10 })
    expect(sum(response)).toBe(100)
  })

  it('35 should return value_not_allowed error', () => {
    const notes = [10]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toArray(35)).toThrow('value_not_allowed')
  })

  it('35 should return 7x5', () => {
    const notes = [5]
    const withdrawal = new Withdrawal(notes)
    const response = withdrawal.toMap(35)
    expect(response).toStrictEqual({ 5: 7 })
    expect(sum(response)).toBe(35)
  })

  it('37 should return value_not_allowed error', () => {
    const notes = [5]
    const withdrawal = new Withdrawal(notes)
    expect(() => withdrawal.toArray(37)).toThrow('value_not_allowed')
  })
})
