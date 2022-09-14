const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  Obj = {}
  if (n1 > n2 && n1 > n3) {
    Obj = { min: n3, mid: n2, max: n1 }
    return Obj
  } else if (n1 > n2 && n1 < n3) {
    Obj = {min: n2, mid: n1, max: n3}
    return Obj
  }else if (n1 < n2 && n1 < n3&& n2>n3) {
    Obj = { min: n1, mid: n3, max: n2 }
    return Obj
    }else  {
      Obj = { min: n1, mid: n2, max: n3 }
    return Obj 
    }
}
module.exports = minMedMax
