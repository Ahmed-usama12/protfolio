import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { ArrowRight, Github, Linkedin, Mail, Download, Eye } from "lucide-react";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-secondary font-medium mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        {personalInfo.name}
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
                        {personalInfo.title}
                    </h3>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
                        {personalInfo.summary}
                    </p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg shadow-primary/25"
                            >
                                View Projects <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href="/Resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-primary/50 hover:bg-primary/10 text-primary rounded-full font-medium flex items-center gap-2 transition-colors"
                            >
                                Download CV <Download size={20} />
                            </motion.a>

                            <motion.a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-200 rounded-full font-medium flex items-center gap-2 transition-colors"
                            >
                                View CV <Eye size={20} />
                            </motion.a>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: personalInfo.github },
                                { icon: Linkedin, href: personalInfo.linkedin },
                                { icon: Mail, href: `mailto:${personalInfo.email}` },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, color: "#3B82F6" }}
                                    className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:bg-gray-800 transition-colors border border-gray-700/50"
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
