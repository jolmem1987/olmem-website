type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-4xl font-bold text-white">{title}</h2>
      {description && <p className="text-lg leading-8 text-gray-400">{description}</p>}
    </div>
  );
}