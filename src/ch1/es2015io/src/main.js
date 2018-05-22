// 自作の計算モジュール[calctest.js]を取り込む
import {add, mul} from './calctest.js'

// 取り込んだ関数を利用
console.log(add(2, 3))
console.log(mul(6, 8))

import * as ct from './calctest.js'

import { add as addF, mul as mulF } from './calctest.js'

// kakezanモジュールを取り込む
import kakezan from './kakezan.js'
// kakezan関数を利用
const v = kakezan(2, 3)
console.log(v)
