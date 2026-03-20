import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/communities")({
  component: CommunitiesPage,
});

function CommunitiesPage() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Communities</h3>
      <p className="text-sm text-gray-600">Explore farming communities here.</p>
    </div>
  );
}
