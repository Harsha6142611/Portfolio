import React, { useEffect, useState } from "react";
import { fetchUserRepos } from "../api/github";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from 'react-tooltip';

const GitHubPage = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetchUserRepos().then((repos) => {
      const sorted = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(sorted);
    });
  }, []);

  const top6 = repos.slice(0, 6);

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub Activity & Stats</h1>

      {/* 🔥 Top 6 Repositories */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {top6.map((repo) => (
          <div key={repo.id} className="bg-gray-800 p-5 rounded-lg shadow hover:scale-105 transition-transform">
            <h2 className="font-semibold text-lg">{repo.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{repo.description}</p>
            <div className="text-sm text-gray-300">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 🛠 {repo.language}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-400 text-sm underline block mt-2"
              rel="noreferrer"
            >
              View Repo
            </a>
          </div>
        ))}
      </section>

      {/* 🟩 Contribution Calendar */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Contribution Activity</h2>
        <div className="bg-gray-800 p-4 rounded">
        <GitHubCalendar
          username={import.meta.env.VITE_GITHUB_USERNAME}
          blockSize={12}
          blockMargin={2}
          colorScheme="light"
          showWeekdayLabels
          transformData={(contributions) =>
            contributions.map((day) => ({
              ...day,
              tooltip: `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`,
            }))
          }
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "github-tooltip",
              "data-tooltip-content": activity.tooltip,
            })
          }
        />
    
        <Tooltip id="github-tooltip" />


        </div>
      </section>

      {/* 📊 Stats Summary */}
      <section>
        <h2 className="text-xl font-bold mb-4">Total Public Repositories: {repos.length}</h2>
        {/* Additional sections for languages, stars, forks will go here */}
      </section>
    </div>
  );
};

export default GitHubPage;
