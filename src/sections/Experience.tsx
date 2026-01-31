import { motion } from "framer-motion";
import { experience, education } from "../data";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Experience & Education
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Experience */}
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-primary mb-8">
                            <Briefcase className="w-6 h-6" /> Professional Experience
                        </h3>
                        <div className="space-y-8 relative border-l-2 border-gray-700 ml-3 pl-8 pb-4">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 w-5 h-5 bg-secondary rounded-full border-4 border-dark" />
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                        <span className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                                            <Calendar className="w-4 h-4" /> {exp.period}
                                        </span>
                                    </div>
                                    <h5 className="text-lg text-secondary mb-4">{exp.company}</h5>
                                    <p className="text-gray-300 mb-4">{exp.description}</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-primary mb-8">
                            <GraduationCap className="w-6 h-6" /> Education
                        </h3>
                        <div className="space-y-8 relative border-l-2 border-gray-700 ml-3 pl-8 pb-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 w-5 h-5 bg-secondary rounded-full border-4 border-dark" />
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                        <span className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                                            <Calendar className="w-4 h-4" /> {edu.year}
                                        </span>
                                    </div>
                                    <h5 className="text-lg text-secondary mb-2">{edu.institution}</h5>
                                    <p className="text-gray-400">{edu.grade}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
