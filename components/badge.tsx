export interface BadgeProps {
    text: string;
    color: string;
}

// Mapping des couleurs pour Tailwind (classes complètes)
const colorClasses: Record<string, string> = {
    orange: "bg-orange-500/10 text-orange-700 dark:text-orange-400 ring-1 ring-inset ring-orange-500/20",
    blue: "bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20",
    yellow: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-500/20",
    purple: "bg-purple-500/10 text-purple-700 dark:text-purple-400 ring-1 ring-inset ring-purple-500/20",
    violet: "bg-violet-500/10 text-violet-700 dark:text-violet-400 ring-1 ring-inset ring-violet-500/20",
    red: "bg-red-500/10 text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-500/20",
    green: "bg-green-500/10 text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-500/20",
    gray: "bg-gray-500/10 text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-500/20",
};

function BadgeSingle({ text, color }: BadgeProps) {
    const colorClass = colorClasses[color] || colorClasses.gray;

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClass}`}>
            {text}
        </span>
    )
}

export default function Badge({ badges }: { badges: BadgeProps[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
                <BadgeSingle key={badge.text} text={badge.text} color={badge.color} />
            ))}
        </div>
    )
}