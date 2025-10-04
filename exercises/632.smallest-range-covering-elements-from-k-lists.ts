/*
 * @lc app=leetcode id=632 lang=typescript
 *
 * [632] Smallest Range Covering Elements from K Lists
 */

// @lc code=start
function smallestRange(nums: number[][]): number[] {
  type Item = { val: number; from: number };

  const mergedList: Item[] = [];
  nums.forEach((numList, idx) => numList.forEach(num => mergedList.push({ val: num, from: idx })));

  const sortedMergedList: Item[] = mergedList.sort((a, b) => a.val - b.val);

  const need = nums.length;
  const count = new Map<number, number>();
  let have = 0;
  let left = 0;

  let bestLeft = sortedMergedList[0].val;
  let bestRight = sortedMergedList[sortedMergedList.length - 1].val;

  for (let right = 0; right < sortedMergedList.length; right++) {
    const rFrom = sortedMergedList[right].from;
    count.set(rFrom, (count.get(rFrom) ?? 0) + 1);
    if (count.get(rFrom) === 1) have++;

    while (have === need) {
      const tempRange: [number, number] = [sortedMergedList[left].val, sortedMergedList[right].val];
      if (tempRange[1] - tempRange[0] < bestRight - bestLeft) {
        bestLeft = tempRange[0];
        bestRight = tempRange[1];
      }

      const lFrom = sortedMergedList[left].from;
      const newCnt = (count.get(lFrom) ?? 0) - 1;
      if (newCnt === 0) {
        count.delete(lFrom);
        have--;
      } else {
        count.set(lFrom, newCnt);
      }
      left++;
    }
  }

  return [bestLeft, bestRight];
}
// @lc code=end

