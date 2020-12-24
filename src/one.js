console.log('Awaiting test...');

const numPlayers = (k, scores) => {
  const rankPlayers = scores.sort((a, b) => b - a);
  console.log(rankPlayers);

  const ranks = [];
  for (let i = 0; i < rankPlayers.length; i++) {
    if (rankPlayers[i - 1] && rankPlayers[i - 1] === rankPlayers[i]) {
      ranks.push(ranks[ranks.length - 1]);
    } else {
      ranks.push(i + 1);
    }
  }
  console.log(ranks);

  const n = ranks.filter((rank) => rank <= k).length;
  console.log(n);
};

numPlayers(4, [5, 10, 10, 20, 20, 20, 60, 80, 100]);
