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
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/Harsha614261");
        if (!res.ok) throw new Error("Failed to fetch LeetCode data");
        const data = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchLeetCodeStats();
  }, []);

  // if (error) return <div className="text-red-600">⚠️ {error}</div>;
  if (!stats) return <div className="text-gray-500">Loading LeetCode stats...</div>;

  return (
    <div className="cursor-pointer w-full p-2 transition-all duration-300" 
      onClick={() => navigate("/leetcode")}>
      <h2 className="text-xl font-semibold mb-3 text-center">My LeetCode Summary</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Total Solved Widget */}
        <div className="p-4 rounded-md flex flex-col justify-center items-center h-[100px] border border-gray-200">
          <p className="text-3xl font-bold">{stats.totalSolved}</p>
          <p className="text-sm text-gray-600">Problems Solved</p>
        </div>

        {/* Ranking Widget */}
        <div className="p-4 rounded-md flex flex-col justify-center items-center h-[100px] border border-gray-200">
          <p className="text-3xl font-bold">#{stats.ranking}</p>
          <p className="text-sm text-gray-600">Global Ranking</p>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeSummary;
