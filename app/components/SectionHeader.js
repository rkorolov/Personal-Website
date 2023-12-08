export default function SectionHeader({ title, text }) {
    return (
      <div className="text-left space-y-2 font-serif">
        <h2 className="text-4xl font-semibold text-secondary-700 font-style: italic">{title}</h2>
        <p className="text-pink-400 font-small ml-4 font-mono">{text}</p>
      </div>
    );
  }