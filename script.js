function threeSum(arr, target) {
// write your code here
   arr.sort((a, b) => a - b);
  let closestSum = Infinity; // Initialize with a large value.

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // If the current sum is closer to the target, update the closestSum.
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Adjust pointers based on the current sum relative to the target.
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
