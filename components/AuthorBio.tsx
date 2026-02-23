import Image from "next/image";

export default function AuthorBio() {
    return (
        <div className="flex items-center gap-4 py-8 border-y border-border my-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-code">
                {/* Replace with actual Vanwida avatar later if requested, for now a placeholder is fine */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                    👽
                </div>
            </div>
            <div>
                <h4 className="font-bold text-white text-lg">Vanwida</h4>
                <p className="text-gray-400 text-sm">
                    AI Entrepreneur & Agent Builder. Writing about systems, autonomous agents, and shipping products fast.
                </p>
            </div>
        </div>
    );
}
