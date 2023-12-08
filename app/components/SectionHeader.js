export default function SectionHeader({ title, text }) {
    return (
      <div className="text-left space-y-2">
        <h2 className="text-4xl font-semibold text-secondary-700">{title}</h2>
        <p className="text-primary-500 font-medium">{text}</p>
      </div>
    );
  }