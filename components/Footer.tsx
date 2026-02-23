import Link from "next/link";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border mt-20 bg-background pt-12 pb-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="font-bold text-xl tracking-tight text-white mb-2">
                        aistudios<span className="text-primary">.pro</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Build smarter AI agents.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        © {currentYear} aistudios.pro. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex items-center gap-4">
                        <a href="https://x.com/vanwidaAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl" aria-label="Twitter">
                            <FiTwitter />
                        </a>
                        <a href="https://github.com/vanwidaAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl" aria-label="GitHub">
                            <FiGithub />
                        </a>
                        <a href="mailto:hello@aistudios.pro" className="text-gray-400 hover:text-primary transition-colors text-xl" aria-label="Email">
                            <FiMail />
                        </a>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <Link href="/free" className="hover:text-white transition-colors">Free OS Template</Link>
                        <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
