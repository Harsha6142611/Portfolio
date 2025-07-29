import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { addDays, subDays } from "date-fns";

const LeetCodePage = () => {
  const [stats, setStats] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("https://leetcode-stats-api.herokuapp.com/{import.meta.env.VITE_LEETCODE_USERNAME}");
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats) return <div className="text-gray-400">Loading...</div>;

  const pieData = [
    {
      name: "Easy",
      value: stats.easySolved,
      color: "#22c55e",
    },
    {
      name: "Medium",
      value: stats.mediumSolved,
      color: "#eab308",
    },
    {
      name: "Hard",
      value: stats.hardSolved,
      color: "#ef4444",
    },
  ];

  const totalSolved = stats.totalSolved;

  const DifficultyWidget = ({
    label,
    solved,
    total,
    color,
    bgColor,
    borderColor,
  }: {
    label: string;
    solved: number;
    total: number;
    color: string;
    bgColor: string;
    borderColor: string;
  }) => (
    <div
      className={`w-40 h-24 rounded-lg px-4 py-3 flex flex-col justify-between ${bgColor} border ${borderColor} shadow-md`}
    >
      <p className={`text-sm font-semibold ${color}`}>{label}</p>
      <p className="text-white text-lg font-bold text-right">{solved}/{total}</p>
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-[#111827] text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">LeetCode Detailed Stats</h1>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center bg-[#1f2937] p-8 rounded-lg">
        {/* 🍩 Donut Chart */}
        <div className="w-full max-w-xs">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={85}
                outerRadius={95}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
                cornerRadius={10}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  position="center"
                  content={() => (
                    <g>
                      <text
                        x="50%"
                        y="42%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="26"
                        fill="#fff"
                        fontWeight="bold"
                      >
                        {totalSolved}
                      </text>
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        fontSize="14"
                        fill="#9ca3af"
                      >
                        ✓ Solved
                      </text>
                    </g>
                  )}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 🔹 Vertical Difficulty Widgets */}
        <div className="flex flex-col gap-6 mt-10 items-center md:mt-0 md:ml-16">
          <DifficultyWidget
            label="Easy"
            solved={stats.easySolved}
            total={stats.totalEasy}
            color="text-green-400"
            bgColor="bg-green-950"
            borderColor="border-green-500"
          />
          <DifficultyWidget
            label="Medium"
            solved={stats.mediumSolved}
            total={stats.totalMedium}
            color="text-yellow-400"
            bgColor="bg-yellow-950"
            borderColor="border-yellow-500"
          />
          <DifficultyWidget
            label="Hard"
            solved={stats.hardSolved}
            total={stats.totalHard}
            color="text-red-400"
            bgColor="bg-red-950"
            borderColor="border-red-500"
          />
        </div>
        
      </div>

      {/* 📋 Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        <div className="bg-green-900 p-4 rounded text-center shadow-md">
          <p className="text-2xl font-bold">{stats.totalSolved}</p>
          <p className="text-gray-300">Total Problems Solved</p>
        </div>
        <div className="bg-blue-900 p-4 rounded text-center shadow-md">
          <p className="text-2xl font-bold">#{stats.ranking}</p>
          <p className="text-gray-300">Global Ranking</p>
        </div>
        <div className="bg-yellow-900 p-4 rounded text-center shadow-md">
          <p className="text-2xl font-bold">{stats.contributionPoints}</p>
          <p className="text-gray-300">Contribution Points</p>
        </div>
      </div>
    </div>
  );
};

export default LeetCodePage;
