const battleDetails = [
  { opponents: ["ram", "indrajeet"], winner: "ram", points: 50 },
  { opponents: ["hanuman", "indrajeet"], winner: "indrajeet", points: 40 },
  { opponents: ["lakshman", "indrajeet"], winner: "lakshman", points: 45 },
  { opponents: ["ram", "kumbhakarna"], winner: "ram", points: 35 },
  { opponents: ["hanuman", "lankini"], winner: "hanuman", points: 25 },
  { opponents: ["sugriva", "vali"], winner: "ram", points: 30 },
  { opponents: ["angad", "angad"], winner: "angad", points: 20 },
  { opponents: ["jatayu", "ravsan"], winner: "ravan", points: 15 },
  { opponents: ["ram", "maricha"], winner: "ram", points: 10 },
];

const playerDetails = [
  { name: "ram", team: "ram", age: 26 },
  { name: "lakshman", team: "ram", age: 24 },
  { name: "hanuman", team: "ram", age: 30 },
  { name: "Sugriva", team: "ram", age: 35 },
  { name: "Angad", team: "ram", age: 22 },
  { name: "Vibhishan", team: "Vibhishan", age: 40 },
  { name: "Jambavan", team: "ram", age: 50 },
  { name: "Ravan", team: "Vibhishan", age: 45 },
  { name: "Kumbhakarna", team: "Vibhishan", age: 42 },
  { name: "Meghanada", team: "Vibhishan", age: 27 },
];

// 1.which player won the most number of battils?
// 2.which player won the most number of points?
const obj = {};
battleDetails?.map(item => {
  if (!obj[item?.winner]) {
    obj[item.winner] = {
      wins: 0,
      totalPoints: 0,
    };
  }
  if (obj[item?.winner]) {
    obj[item.winner].wins++;
    obj[item.winner].totalPoints += item.points;
  }
});

console.log(obj);

// 3.which team won the most battils?
// 3.which player did not participate in any battils?

let obj2 = {};

playerDetails?.map(li => {
  if (!obj2[li.team]) {
    obj2[li.team] = [];
  }
  obj2[li.team].push(li.name);
});

console.log(obj2);

let teamObj = {};
battleDetails.forEach(team => {
  const { points, winner } = team;
  const winnerLower = winner.toLowerCase();

  for (const key in obj2) {
    if (obj2[key].map(name => name.toLowerCase()).includes(winnerLower)) {
      if (!teamObj[key]) {
        teamObj[key] = { wins: 0, totalPoints: 0 };
      }
      teamObj[key].wins += 1;
      teamObj[key].totalPoints += points;
      break;
    }
  }
});

console.log(teamObj);

const data2 = new Set(
  battleDetails
    ?.map(li => li.opponents)
    .flat()
    .map(opponent => opponent.toLowerCase())
);

let data = playerDetails?.map(li => li.name.toLowerCase());
const notParticipated = data?.filter(player => !data2.has(player));

console.log(notParticipated); // Output the results
