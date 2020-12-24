console.log('Awaiting test...');

/**
 * This function determines the number of players involved in a game
 * that will be advancing to the next round
 *
 * @param {number} k - The least rank allowed to move on to the next round
 * @param {number[]} scores - Scores of players in the game
 * @return {number} - Number of players advancing to the next round
 */
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
  return n;
};

numPlayers(4, [5, 10, 10, 20, 20, 20, 60, 80, 100]);
