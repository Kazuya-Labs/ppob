export const  Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-700 rounded-full animate-spin"></div>

      <p className="mt-3 text-slate-600 font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
}