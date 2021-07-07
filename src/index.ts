export class Withdrawal {
  private lowerNote: number

  constructor(private notes: number[]) {
    this.lowerNote = Math.min(...this.notes)
  }

  toArray(value: number): number[] {
    this.validate(value)

    const result: number[] = []
    let i = value
    while (i >= this.lowerNote) {
      const note = this.highestNotePossible(i)
      result.push(note)
      i = i - note
    }

    return result
  }

  toMap(value: number): Record<number, number> {
    this.validate(value)

    const result: Record<number, number> = {}
    let i = value
    while (i >= this.lowerNote) {
      const note = this.highestNotePossible(i)
      result[note] = result?.[note] ? result[note] + 1 : 1
      i = i - note
    }

    return result
  }

  private validate(value: number) {
    if (value < this.lowerNote) {
      throw new Error('value_not_allowed')
    }

    if (value === 3 && this.lowerNote === 2) {
      throw new Error('value_not_allowed')
    }

    const notesMod = value % this.lowerNote
    if (this.lowerNote !== 2 && notesMod > 0 && notesMod < this.lowerNote) {
      throw new Error('value_not_allowed')
    }
  }

  private highestNotePossible(value: number): number {
    let currentNote = this.notes[0]
    for (const note of this.notes) {
      if (note <= value && note > currentNote) {
        currentNote = note
      }
    }
    return currentNote
  }
}
