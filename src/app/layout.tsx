import type { Metadata } from "next";
import { Syncopate, Poppins } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-syncopate",
});

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Naman Sharma | Full-Stack Developer & AI Enthusiast",
    description: "Portfolio of Naman Sharma - Computer Science student at SRM University specializing in full-stack development, machine learning, and innovative software solutions.",
    keywords: ["Naman Sharma", "Full-Stack Developer", "AI", "Machine Learning", "Web Development", "React", "Next.js", "Python"],
    authors: [{ name: "Naman Sharma" }],
    openGraph: {
        title: "Naman Sharma | Full-Stack Developer & AI Enthusiast",
        description: "Portfolio showcasing projects in web development, machine learning, and software engineering.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Naman Sharma | Full-Stack Developer",
        description: "Portfolio of Naman Sharma - Full-Stack Developer & AI Enthusiast",
    },
    icons: {
        icon: "/images/profile.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${syncopate.variable} ${poppins.variable}`}>
            <body>{children}</body>
        </html>
    );
}
