import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "../data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    form.current?.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    toast.error('Failed to send message. Please try again.');
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-dark/50 text-white relative overflow-hidden">
            <Toaster position="bottom-right" />
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk!</h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">{personalInfo.email}</span>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                                    <Phone size={24} />
                                </div>
                                <span className="text-lg">{personalInfo.phone}</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 group">
                                <div className="p-3 bg-gray-800 rounded-lg text-gray-400">
                                    <MapPin size={24} />
                                </div>
                                <span className="text-lg">{personalInfo.location}</span>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors border border-gray-700/50"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors border border-gray-700/50"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
                    >
                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">My Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">My Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="I'd like to hire you..."
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>Sending... <Loader2 size={20} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Ahmed Osama. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};
