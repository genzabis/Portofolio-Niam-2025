import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const Proyek: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data.filter((repo: any) => !repo.fork).slice(0, 6));
        }
      } catch (error) {
        console.error("Failed to fetch GitHub repos", error);
      } finally {
        setLoading(false);
      }
    };

    if (PERSONAL_INFO.githubUsername) {
      fetchRepos();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <section id="projects" className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[90%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Portfolio</span>
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter leading-none">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 mt-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index % 2 === 0 ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
            >
              <div>
                <p className="text-xs font-normal text-slate-500 dark:text-zinc-500 uppercase tracking-[0.3em] mb-4 transition-colors">{project.year}</p>
                <h3 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 dark:text-white mb-4 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-zinc-400 italic transition-colors font-sans font-light mb-6">
                  {project.role}
                </p>
                <p className="text-base text-slate-500 dark:text-zinc-500 transition-colors font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Repositori GitHub */}
        {(loading || repos.length > 0) && (
          <div className="mt-48 pt-32 border-t border-slate-100 dark:border-zinc-900 transition-colors">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24"
            >
              <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Open Source</span>
              <h2 className="text-5xl md:text-7xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
                Recent Repositories
              </h2>
            </motion.div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border border-slate-200 dark:border-zinc-800 p-8 animate-pulse">
                    <div className="h-7 bg-slate-200 dark:bg-zinc-800 rounded mb-4 w-3/4" />
                    <div className="space-y-3 mb-10">
                      <div className="h-4 bg-slate-100 dark:bg-zinc-800/50 rounded w-full" />
                      <div className="h-4 bg-slate-100 dark:bg-zinc-800/50 rounded w-5/6" />
                      <div className="h-4 bg-slate-100 dark:bg-zinc-800/50 rounded w-2/3" />
                    </div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-slate-100 dark:bg-zinc-800/50 rounded w-16" />
                      <div className="h-3 bg-slate-100 dark:bg-zinc-800/50 rounded w-10" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                {repos.map((repo, index) => (
                  <motion.a 
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group block"
                  >
                    <div className="border border-slate-200 dark:border-zinc-800 p-8 h-full hover:bg-slate-50 dark:hover:bg-zinc-900/30 transition-all duration-500">
                      <h3 className="text-2xl font-serif font-normal text-slate-900 dark:text-white mb-4 transition-colors group-hover:opacity-60 duration-500 break-words">
                        {repo.name}
                      </h3>
                      <p className="text-base text-slate-600 dark:text-zinc-400 font-sans font-light mb-10 transition-colors line-clamp-3">
                        {repo.description || "No description."}
                      </p>
                      <div className="flex items-center justify-between text-xs font-normal text-slate-500 dark:text-zinc-500 uppercase tracking-widest mt-auto">
                        <div className="flex gap-4">
                          {repo.language && <span>{repo.language}</span>}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Proyek;
