class MySolution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // console.log(`S: ${s}, T: ${t}`);
    const sMap = new Map()
    const tMap = new Map()
    for (let i = 0; i < s.length; i++) {
      sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
      tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
    }

    // console.log("sMap: ", sMap);
    // console.log("tMap", tMap);

    return sMap.size === tMap.size && [...sMap.keys()].every(key => sMap.get(key) === tMap.get(key))
  }
}
// Time Complexity: O(n+ m)
// Space Complexity: O(1)
// Where n is the length of string s and m is the length of string t.
console.log('MySolution', new MySolution().isAnagram('racecar', 'carrace'), 'Expected: true')
console.log('MySolution', new MySolution().isAnagram('jar', 'jam'), 'Expected: false')
console.log('MySolution', new MySolution().isAnagram('xx', 'x'), 'Expected: false')
console.log('MySolution', new MySolution().isAnagram('bbcc', 'ccbc'), 'Expected: false')

class Sorting {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }

    let sSort = s.split('').sort().join()
    let tSort = t.split('').sort().join()
    return sSort == tSort
  }
}

// Time Complexity: O(nlogn+mlogm)
// Space Complexity: O(1) or O(n + m);
// Where  n is the length of string  s and  m is the length of string  t.
console.log('Sorting', new Sorting().isAnagram('racecar', 'carrace'), 'Expected: true')
console.log('Sorting', new Sorting().isAnagram('jar', 'jam'), 'Expected: false')
console.log('Sorting', new Sorting().isAnagram('xx', 'x'), 'Expected: false')
console.log('Sorting', new Sorting().isAnagram('bbcc', 'ccbc'), 'Expected: false')

class HashTable {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }

    const countS = {}
    const countT = {}
    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1
      countT[t[i]] = (countT[t[i]] || 0) + 1
    }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false
      }
    }
    return true
  }
}

// Time Complexity: O(n+m)
// Space Complexity: O(1) since we have at most 26 different characters
console.log('HashTable', new HashTable().isAnagram('racecar', 'carrace'), 'Expected: true')
console.log('HashTable', new HashTable().isAnagram('jar', 'jam'), 'Expected: false')
console.log('HashTable', new HashTable().isAnagram('xx', 'x'), 'Expected: false')
console.log('HashTable', new HashTable().isAnagram('bbcc', 'ccbc'), 'Expected: false')

class HashTableOptimal {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }

    const count = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }
    return count.every(val => val === 0)
  }
}

// Time Complexity: O(n+m)
// Space Complexity: O(1) since we have at most 26 different characters
console.log('HashTableOptimal', new HashTableOptimal().isAnagram('racecar', 'carrace'), 'Expected: true')
console.log('HashTableOptimal', new HashTableOptimal().isAnagram('jar', 'jam'), 'Expected: false')
console.log('HashTableOptimal', new HashTableOptimal().isAnagram('xx', 'x'), 'Expected: false')
console.log('HashTableOptimal', new HashTableOptimal().isAnagram('bbcc', 'ccbc'), 'Expected: false')
