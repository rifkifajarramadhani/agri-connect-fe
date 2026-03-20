import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: MarketPage,
});

function MarketPage() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Market</h3>
      <p className="text-sm text-gray-600">Find produce and agri products in the marketplace.</p>
    </div>
  );
}
