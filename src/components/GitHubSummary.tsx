import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserRepos } from "../api/github";
import GitHubCalendar from "react-github-calendar";
import { Github } from "lucide-react";
import { Tooltip } from 'react-tooltip';

const GitHubSummary = () => {
  const [repoCount, setRepoCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserRepos().then((repos) => {
      setRepoCount(repos.length);
    });
  }, []);

  return (
    <div
      className="w-full px-4 py-10 flex justify-center items-center"
      onClick={() => navigate("/github")}
    >
      <div className="w-full md:w-[90%] lg:w-[80%] bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-blue-400/30 transition-all duration-300 shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
          🌟 My GitHub Summary
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center"
        >
          {/* Repo Count Widget */}
          <div className="bg-gradient-to-tr from-gray-800/80 to-gray-900/80 p-6 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg text-center cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 text-blue-400 mb-3">
                <Github className="w-6 h-6" />
                <span className="text-xl font-semibold text-white">GitHub</span>
              </div>
              <p className="text-5xl font-extrabold text-white">{repoCount}</p>
              <p className="text-gray-300 mt-2">Public Repositories</p>
            </div>
          </div>

          {/* Contribution Calendar */}
          <div className="bg-gray-800/40 p-4 rounded-xl shadow-lg hover:scale-[1.01] transition-transform duration-300 overflow-x-auto">
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
      </div>
    </div>
  );
};

export default GitHubSummary;
