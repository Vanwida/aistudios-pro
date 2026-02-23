import { FiInfo, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

interface CalloutProps {
    type?: "info" | "warning" | "success";
    title?: string;
    children: React.ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
    const styles = {
        info: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            icon: <FiInfo className="text-blue-400 text-xl" />,
            titleColor: "text-blue-400"
        },
        warning: {
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            icon: <FiAlertTriangle className="text-orange-400 text-xl" />,
            titleColor: "text-orange-400"
        },
        success: {
            bg: "bg-green-500/10",
            border: "border-green-500/20",
            icon: <FiCheckCircle className="text-green-400 text-xl" />,
            titleColor: "text-green-400"
        }
    };

    const selected = styles[type];

    return (
        <div className={`my-6 rounded-xl border p-4 flex gap-4 ${selected.bg} ${selected.border}`}>
            <div className="flex-shrink-0 mt-1">{selected.icon}</div>
            <div>
                {title && <h5 className={`font-semibold mb-1 ${selected.titleColor}`}>{title}</h5>}
                <div className="text-gray-300 text-sm leading-relaxed prose-p:my-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
