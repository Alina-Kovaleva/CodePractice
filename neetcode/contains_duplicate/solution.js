class MySolution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    return new Set(nums).size !== nums.length;
  }
}

console.log(new MySolution().hasDuplicate([1, 2, 3, 3]));

// Time Complexity: O(n)
// Space Complexity: O(n)

//Other Solutions

class BruteForce {
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

console.log(new BruteForce().hasDuplicate([1, 2, 3, 4]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)

class Sorting {
  hasDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        return true;
      }
    }
    return false;
  }
}

console.log(new Sorting().hasDuplicate([1, 2, 3, 3]));

// Time Complexity: O(nlogn)
// Space Complexity: O(1) or O(n) depending on the sorting algorithm

class HashSet {
  hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}

console.log(new HashSet().hasDuplicate([1, 2, 3, 4]));

// Time Complexity: O(n)
// Space Complexity: O(n)

class HashSetLength {
  hasDuplicate(nums) {
    return new Set(nums).size < nums.length;
  }
}

console.log(new HashSetLength().hasDuplicate([1, 2, 3, 3]));

// Time Complexity: O(n)
// Space Complexity: O(n)
