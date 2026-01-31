import { motion } from "framer-motion";
import { skills } from "../data";



export const About = () => {
    return (
        <section id="about" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        About Me & Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a passionate Junior Frontend Developer with a strong foundation in modern web technologies.
                            I graduated from the Faculty of Computers and Artificial Intelligence, Helwan University in 2025 with a Very Good GPA (2.83).
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            My expertise lies in building responsive, accessible, and performant web applications using
                            React.js, Next.js, and TypeScript. I thrive in collaborative Agile environments and constantly
                            seek to improve my skills and deliver high-quality solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                                <h3 className="text-xl font-semibold mb-4 capitalize text-secondary">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
