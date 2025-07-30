import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserRepos } from "../api/github";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import { FiArrowLeft } from "react-icons/fi";

const GitHubPage = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserRepos().then((repos) => {
      const sorted = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(sorted);
    });
  }, []);

  const visibleRepos = repos.slice(0, visibleCount);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-gray-300 hover:text-white flex items-center gap-1"
      >
        <FiArrowLeft className="text-xl" />
        <span className="text-sm">Back</span>
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        GitHub Activity & Stats
      </h1>

      {/* 🔥 Top Repositories (Dynamic) */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {visibleRepos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white/10 backdrop-blur-md p-6 h-52 rounded-xl border border-white/20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-purple-500/50 group relative overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition">
                  {repo.name}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
              </div>
              <div className="text-sm text-gray-200 mt-4">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 🛠{" "}
                {repo.language || "N/A"}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-blue-300 hover:text-blue-400 underline text-xs"
                >
                  View Repo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>


      {/* ➕ Show More Button */}
      {visibleCount < repos.length && (
        <div className="text-center mb-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 transition rounded-full text-white font-semibold shadow-md"
          >
            Show More
          </button>
        </div>
      )}

      {/* 🟩 Contribution Calendar */}
      <section className="flex justify-center mb-12">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-purple-400/40 transition-all duration-300">
          <h2 className="text-xl font-bold mb-4 text-center text-white">Contribution Activity</h2>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username={import.meta.env.VITE_GITHUB_USERNAME}
              blockSize={14}
              blockMargin={4}
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
        </div>
      </section>


      {/* 📊 Stats Summary */}
      <section className="text-center text-lg text-gray-300">
        <h2 className="font-bold text-xl mb-2">Total Public Repositories: {repos.length}</h2>
        <p>Keep pushing commits 💻🔥</p>
      </section>
    </div>
  );
};

export default GitHubPage;
