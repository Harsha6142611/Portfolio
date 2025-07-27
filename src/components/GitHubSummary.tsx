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
      className="w-full p-2 transition-all duration-300"
      onClick={() => navigate("/github")}
    >
      <h2 className="text-xl font-semibold mb-5 text-center text-white">
        My GitHub Summary
      </h2>

      <div
        className="grid gap-6 w-full"
        style={{ gridTemplateColumns: "30% 70%" }}
      >
        {/* Repo Count Widget */}
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors flex flex-col items-center justify-center h-[200px] shadow cursor-pointer">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Github className="w-6 h-6" />
            <span className="text-lg font-medium text-white">GitHub</span>
          </div>
          <p className="text-4xl font-bold text-white">{repoCount}</p>
          <p className="text-gray-300 mt-2">Public Repositories</p>
        </div>

        {/* Contribution Calendar */}
        <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors h-[200px] flex items-center overflow-x-auto shadow">
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
      </div>
    </div>
  );
};

export default GitHubSummary;
