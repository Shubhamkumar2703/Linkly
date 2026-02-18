import dayjs from "dayjs";
import { useEffect, useState } from "react";

import {
  FaExternalLinkAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import api from "../../api/api";
import { useStoreContext } from "../../contextApi/ContextApi";
import Graph from "./Graph";


const ShortenItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdDate,
}) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const domain = BACKEND_BASE_URL.replace(/^https?:\/\//, "");

const fullShortUrl = `${BACKEND_BASE_URL}/${shortUrl}`;


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullShortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const analyticsToggleHandler = () => {
    if (!showAnalytics) {
      setSelectedUrl(shortUrl);
    }
    setShowAnalytics((prev) => !prev);
  };

  const fetchAnalytics = async () => {
  setLoading(true);

  const start = dayjs()
      .startOf("2020")
      .format("2020-01-01T00:00:00");

    const end = dayjs()
      .endOf("2030")
      .format("2030-12-31T23:59:59");

  try {
    const { data } = await api.get(
      `/api/urls/analytics/${selectedUrl}?startDate=${start}&endDate=${end}`
    );

    setAnalyticsData(data);
    setSelectedUrl("");
  } catch (err) {
    console.error(err);
    navigate("/error", { state: { message: "Failed to fetch analytics data. Please try again later." } });
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (selectedUrl) fetchAnalytics();
  }, [selectedUrl]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">

      {/* Top section */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

        {/* URL info */}
        <div className="flex-1 space-y-2 overflow-x-auto">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <a
              href={`http://localhost:8080/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {`http://localhost:8080/${shortUrl}`}
            </a>

            <FaExternalLinkAlt className="text-sm" />
          </div>

          <p className="text-slate-600 text-sm break-all">
            {originalUrl}
          </p>

          <div className="flex items-center gap-6 pt-2 text-sm">
            <div className="flex items-center gap-1 text-emerald-600 font-medium">
              <MdOutlineAdsClick className="text-lg" />
              <span>{clickCount}</span>
              <span>
                {clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <FaRegCalendarAlt />
              <span>
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:justify-end">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            {copied ? "Copied" : "Copy"}
            {copied ? <LiaCheckSolid /> : <IoCopy />}
          </button>

          <button
            onClick={analyticsToggleHandler}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Analytics
            <MdAnalytics />
          </button>
        </div>
      </div>

      {/* Analytics Panel */}
      {showAnalytics && (
        <div className="border-t pt-5 relative min-h-80">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <Hourglass
                visible={true}
                height="50"
                width="50"
                colors={["#6366f1", "#a5b4fc"]}
              />
              <p className="text-sm text-slate-600">
                Loading analytics...
              </p>
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-lg font-semibold text-slate-800">
                    No analytics data yet
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm">
                    Share your short link to start tracking engagement.
                  </p>
                </div>
              )}

              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShortenItem;
