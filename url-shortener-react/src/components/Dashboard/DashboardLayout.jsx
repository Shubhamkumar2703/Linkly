import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Graph from "./Graph.jsx";
import ShortenPopUp from "./ShortenPopUp.jsx";
import ShortenUrlList from "./ShortenUrlList.jsx";
import Loader from "../../Loader.jsx";

import { useStoreContext } from "../../contextApi/ContextApi.jsx";
import {
  useFetchMyShortUrls,
  useFetchTotalClicks,
} from "../../hooks/useQuery.js"; 

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  const {
    isLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const {
    isLoading: graphLoading,
    data: totalClicks = [],
  } = useFetchTotalClicks(token, onError);

  if (graphLoading) return <Loader />;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 px-4 sm:px-8 lg:px-14 py-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>
            <p className="text-slate-600 text-sm">
              Monitor your links and track engagement
            </p>
          </div>

          <button
            onClick={() => setShortenPopUp(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            + Create Short Link
          </button>
        </div>

        {/* Graph Section */}
        <div className="bg-white rounded-xl shadow-sm p-5 relative">
          {totalClicks.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-lg font-semibold text-slate-800">
                No analytics data yet
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-sm">
                Start sharing your links to see engagement insights here.
              </p>
            </div>
          )}

          <div className="h-80">
            <Graph graphData={totalClicks} />
          </div>
        </div>

        {/* Shortened URLs */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Your Short Links
          </h2>

          {!isLoading && myShortenUrls.length === 0 ? (
            <div className="flex items-center justify-center py-14">
              <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-lg">
                <FaLink className="text-indigo-600 text-xl" />
                <p className="text-slate-700 text-sm font-medium">
                  You haven’t created any short links yet
                </p>
              </div>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} />
          )}
        </div>
      </div>

      {/* Create Short URL Popup */}
      <ShortenPopUp
        open={shortenPopUp}
        setOpen={setShortenPopUp}
        refetch={refetch}
      />
    </div>
  );
};

export default DashboardLayout;
