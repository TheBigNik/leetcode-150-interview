// class Person {
//   id: number;
//   dayLearned: number;

//   constructor(id: number, dayLearned: number) {
//     this.id = id;
//     this.dayLearned = dayLearned;
//   }

//   canShare(day: number, delay: number, forget: number): boolean {
//     return day - this.dayLearned >= delay && day - this.dayLearned < forget;
//   }
// }

// function peopleAwareOfSecretSim(n: number, delay: number, forget: number): number {
//   let people: Person[] = [new Person(1, 1)];
//   let nextId = 2;

//   for (let day = 2; day <= n; day++) {
//     const newPeople: Person[] = [];
//     for (const person of people) {
//       if (person.canShare(day, delay, forget)) {
//         newPeople.push(new Person(nextId++, day));
//       }
//     }
//     people = people.concat(newPeople);
//   }

//   return people.filter(person => n - person.dayLearned < forget).length;
// }

/*
 * @lc app=leetcode id=2327 lang=typescript
 *
 * [2327] Number of People Aware of a Secret
 */

// @lc code=start

function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
  const MOD = 1_000_000_007;

  const share = new Array<number>(n + 2).fill(0);
  const diff = new Array<number>(n + forget + 5).fill(0);

  share[1] = 1;

  diff[1 + delay] = (diff[1 + delay] + 1) % MOD;
  diff[1 + forget] = (diff[1 + forget] - 1 + MOD) % MOD;

  let sharers = 0;

  for (let day = 2; day <= n; day++) {
    sharers = (sharers + diff[day]) % MOD;
    share[day] = sharers;

    const start = day + delay;
    const stop = day + forget;
    if (start < diff.length) diff[start] = (diff[start] + share[day]) % MOD;
    if (stop < diff.length) diff[stop] = (diff[stop] - share[day] + MOD) % MOD;
  }

  let result = 0;
  const startAware = Math.max(1, n - forget + 1);
  for (let day = startAware; day <= n; day++) {
    result = (result + share[day]) % MOD;
  }
  return result;
}

// // @lc code=end
