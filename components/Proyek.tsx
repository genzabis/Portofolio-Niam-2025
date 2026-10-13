'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PERSONAL_INFO, GITHUB_DESCRIPTION_TRANSLATIONS } from '../data/portfolioData';

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
        const response = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (response.ok) {
          const data = await response.json();
          setRepos(data.filter((repo: any) => !repo.fork).slice(0, 6));
        }
      } catch (error) {
        console.error('Failed to fetch GitHub repos', error);
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
    <section id="projects" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
            Project Portfolio
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-normal text-slate-900 tracking-tighter leading-none">
            Selected Works
          </h2>
          <p className="mt-6 text-base text-slate-500 max-w-xl mx-auto font-light">
            A selection of 8+ web applications, data management platforms, and applied technology research projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: index % 2 === 0 ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between border border-slate-200 bg-white hover:border-slate-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Content */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-col items-start gap-2 xl:flex-row xl:justify-between xl:gap-4 text-xs text-slate-400 uppercase tracking-[0.25em] mb-3">
                    <span className="shrink-0">{project.year}</span>
                    <span className="text-slate-900 font-medium">{project.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900 mb-4 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:opacity-60 transition-opacity"
                    >
                      <span>Visit Website</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open-source GitHub repositories */}
        {(loading || repos.length > 0) && (
          <div className="mt-32 pt-24 border-t border-slate-200">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 text-center md:text-left"
            >
              <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
                Open Source
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-slate-900 tracking-tighter">
                Recent Repositories
              </h2>
            </motion.div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border border-slate-200 p-8 animate-pulse bg-white">
                    <div className="h-6 bg-slate-200 rounded mb-4 w-3/4" />
                    <div className="space-y-2.5 mb-8">
                      <div className="h-3.5 bg-slate-100 rounded w-full" />
                      <div className="h-3.5 bg-slate-100 rounded w-4/5" />
                    </div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-slate-100 rounded w-16" />
                      <div className="h-3 bg-slate-100 rounded w-10" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map((repo, index) => (
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="block group"
                  >
                    <div className="border border-slate-200 p-8 h-full bg-white hover:border-slate-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-normal text-slate-900 mb-3 group-hover:text-slate-600 transition-colors break-words">
                          {repo.name}
                        </h3>
                        <p className="text-sm text-slate-600 font-sans font-light mb-8 line-clamp-3">
                          {GITHUB_DESCRIPTION_TRANSLATIONS[repo.name] || 'Public GitHub repository. View the source code and project details on GitHub.'}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 mt-auto">
                        <span>{repo.language || 'Code'}</span>
                        <div className="flex items-center gap-1 text-slate-600">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
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
