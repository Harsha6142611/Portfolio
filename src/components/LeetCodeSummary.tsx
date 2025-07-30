import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type LeetCodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoints: number;
};

const LeetCodeSummary = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${import.meta.env.VITE_LEETCODE_USERNAME}`
        );
        if (!res.ok) throw new Error("Failed to fetch LeetCode data");
        const data = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (error) return <div className="text-red-500 text-center mt-6">⚠️ {error}</div>;
  if (!stats) return <div className="text-gray-400 text-center mt-6">Loading LeetCode stats...</div>;

  return (
    <div className="flex justify-center items-start px-4 sm:px-0 mt-12 mb-12">
      <div
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300 cursor-pointer"
        onClick={() => navigate("/leetcode")}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          🚀 My LeetCode Summary
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Total Solved */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-800/20 border border-green-500/30 text-center p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <p className="text-5xl font-extrabold text-green-300 drop-shadow">{stats.totalSolved}</p>
            <p className="text-sm text-gray-300 mt-2">Problems Solved</p>
          </div>

          {/* Ranking */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-800/20 border border-yellow-500/30 text-center p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold text-yellow-300 drop-shadow">#{stats.ranking}</p>
            <p className="text-sm text-gray-300 mt-2">Global Ranking</p>
          </div>
        </div>

        {/* Difficulty Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white">
          <div className="bg-white/5 border border-green-400/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            🟢 <span className="font-semibold">Easy</span><br />
            <span className="text-lg">{stats.easySolved} / {stats.totalEasy}</span>
          </div>
          <div className="bg-white/5 border border-yellow-400/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            🟡 <span className="font-semibold">Medium</span><br />
            <span className="text-lg">{stats.mediumSolved} / {stats.totalMedium}</span>
          </div>
          <div className="bg-white/5 border border-red-400/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
            🔴 <span className="font-semibold">Hard</span><br />
            <span className="text-lg">{stats.hardSolved} / {stats.totalHard}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeSummary;
