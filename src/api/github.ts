const GITHUB_API_BASE = "https://api.github.com";

const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
};

export const fetchUserRepos = async () => {
  const res = await fetch(
    `${GITHUB_API_BASE}/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`,
    { headers }
  );
  return await res.json();
};

export const fetchRecentCommits = async (repo: string) => {
  const res = await fetch(
    `${GITHUB_API_BASE}/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${repo}/commits`,
    { headers }
  );
  return await res.json();
};
