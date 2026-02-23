import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    url: string;
    image?: string;
    featured?: boolean;
}

export default function ProductCard({ title, description, price, url, image, featured }: ProductCardProps) {
    return (
        <div className={`glass rounded-2xl overflow-hidden group flex flex-col h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(108,92,231,0.15)] ${featured ? "md:col-span-2 md:flex-row" : ""}`}>
            {image && (
                <div className={`relative bg-code ${featured ? "md:w-1/2" : "w-full aspect-[16/9]"}`}>
                    {/* Optional: Add next/image here */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900">
                        [Image: {title}]
                    </div>
                </div>
            )}

            <div className={`p-6 flex flex-col flex-grow ${featured ? "md:w-1/2 md:justify-center md:p-10" : ""}`}>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
                    <span className="glass px-3 py-1 rounded-full text-sm font-medium text-white border-primary/30">
                        ${price}
                    </span>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{description}</p>

                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors mt-auto"
                >
                    <span>Get it now via Gumroad</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
