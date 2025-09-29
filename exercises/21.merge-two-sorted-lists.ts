/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
    if (!list1 && !list2) return [];
    const mergedListNoOrder: number[] | null = list1.concat(list2)
  const numberCounter: { [key: number]: number } | null = {};

  mergedListNoOrder.forEach((number) => {
    if (number in numberCounter) numberCounter[number] += 1;
    else numberCounter[number] = 1;
  });

  const result: number[] = [];
  for (let i in numberCounter) result.push(Number(i) * numberCounter[i]);
  return result;
}
// @lc code=end
