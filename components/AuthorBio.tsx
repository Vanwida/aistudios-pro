import Image from "next/image";

export default function AuthorBio() {
    return (
        <div className="flex items-center gap-4 py-8 border-y border-border my-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                <Image src="/vanwidaos.jpg" alt="Vanwida" width={64} height={64} className="w-full h-full object-cover" />
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
