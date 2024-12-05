import { format } from "date-fns";

export default function DatePill({ date }) {
  return (
    <p className="text-xs font-medium px-2 py-1 rounded-full bg-sage text-cream inline">
      {format(new Date(date), "MMMM yyyy")}
    </p>
  );
}