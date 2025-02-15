import React from "react";

const GitHubStats = () => {
  const username = "triggerAustin"; // Replace with your GitHub username

  return (
    <div className="w-full mx-auto rounded-lg p-4 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">GitHub Statistics</h2>
      <div className="mt-6 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
          alt="Top Languages"
          className="h-40 object-contain"
        />
        <img
          src={`https://streak-stats.demolab.com/?user=${username}&theme=radical`}
          alt="GitHub Streak"
          className="h-40 object-contain"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className="h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default GitHubStats;
