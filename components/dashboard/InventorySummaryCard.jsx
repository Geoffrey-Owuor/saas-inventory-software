export default function InventorySummaryCard({ item }) {
  return (
    <>
      <div className="mb-4 flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 transition-all duration-300 hover:border-blue-500">
        <h2 className="text-sm text-slate-500 uppercase">{item.title}</h2>
        <h4 className="text-2xl">{item.number}</h4>
      </div>
    </>
  );
}
