# Cash Withdrawal

A project to study testing with jest.

Add the valid notes, a value to receive and the application returns the correct bills amount.

---

## Installation and usage

Requires [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed

Clone the repo and run `yarn install`

To build run `yarn build`

To test run `yarn test`

---

## Example

```typescript
import { Withdrawal } from './index'

const notes = [2, 5, 10, 20, 50, 100]
const withdrawal = new Withdrawal(notes)

const array = withdrawal.toArray(150)
console.log(array)
// [100, 50]

const map = withdrawal.toMap(150)
console.log(map)
// { 100: 1, 50: 1 }
```
