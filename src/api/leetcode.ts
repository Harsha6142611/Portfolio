export const fetchLeetCodeStats = async (username: string) => {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  if (!res.ok) throw new Error("Failed to fetch LeetCode data");
  return await res.json();
};
