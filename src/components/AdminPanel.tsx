"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchPendingPoints, approvePoint, rejectPoint } from "@/lib/api";
import type { MapPoint } from "@/types";

export default function AdminPanel() {
  const [points, setPoints] = useState<MapPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);

  useEffect(() => {
    fetchPendingPoints()
      .then(setPoints)
      .finally(() => setLoading(false));
  }, []);

  const handleApprove = async (id: string) => {
    setProcessing(id);
    try {
      await approvePoint(id);
      setPoints((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setProcessing(null);
    }
  };

  const handleReject = async (id: string) => {
    setProcessing(id);
    try {
      await rejectPoint(id);
      setPoints((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setProcessing(null);
    }
  };

  if (loading) return <p className="text-gray-500">Loading…</p>;
  if (points.length === 0)
    return <p className="text-gray-500">No pending submissions.</p>;

  return (
    <div className="space-y-6">
      {points.map((point) => (
        <div
          key={point.id}
          className="border rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          <div>
            <p className="font-semibold text-lg">{point.authorName}</p>
            <p className="text-xs text-gray-400">
              Submitted:{" "}
              {new Date(point.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            {point.changeDescription && (
              <p className="text-sm mt-1 text-gray-700">
                {point.changeDescription}
              </p>
            )}
            <p className="text-xs text-gray-400 mt-1">
              Old photo year: {point.oldPhotoYear} &nbsp;|&nbsp; Coordinates:{" "}
              {point.latitude.toFixed(5)}, {point.longitude.toFixed(5)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1 font-medium">Before</p>
              <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={point.oldPhotoUrl}
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 font-medium">After</p>
              <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={point.newPhotoUrl}
                  alt="After"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleApprove(point.id)}
              disabled={processing === point.id}
              className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50 transition"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(point.id)}
              disabled={processing === point.id}
              className="flex-1 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50 transition"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
