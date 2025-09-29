import React from 'react';

const projects = [
  {
    title: 'Novel_Scraper',
    description: 'My First Coding Project!!!',
    date: 'Jul.2023',
    link: 'https://github.com/nguyentd01/metruyencv_downloader'
  },
  {
    title: 'subreddit-data-downloader',
    description: 'Extract and clean data from subreddits',
    date: 'Oct.2024',
    link: 'https://github.com/nguyentd01/subreddit-data-downloader'
  },
  {
    title: 'FinancialAdvice-Qwen2.5',
    description: 'Fine-tuned Qwen 2.5 on Economics dataset (from r/AskEconomics)',
    date: 'Oct.2024',
    link: 'https://huggingface.co/nguyentd/FinancialAdvice-Qwen2.5-7B.gguf'
  },
  {
    title: 'Trading Strategy',
    description: '(Pinescript) Use SMI + Nadaraya Watson Envelope + SMA',
    date: 'Dec.2024',
    link: 'https://www.tradingview.com/script/WMt0guGu-Kernel-Regression-Envelope-with-SMI-Oscillator/'
  },
  {
    title: 'Financial data fetcher (for strategy backtesting)',
    description: 'A fast python CLI program that fetch high quality OHLCV FX, crypto,... data from Dukascopy',
    date: 'Sep.2025',
    link: 'https://github.com/nguyentd01/duka_dl'
  }
  {
    title: 'My side hustle',
    description: (
      <>
        (Not a project)<br />
        Playerauctions shop: <br />
        $3k in total sales, 125+ orders with 100+ feedback (100.00% 5-stars feedback).<br />
        *School kept me busy, so this shop was just a summer thing.*
      </>
    ),
    date: 'Summer.2023/2024',
    link: 'https://www.playerauctions.com/store/nguyentd010'
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      {projects.map((project, index) => (
        <article key={index} className="group">
          <div className="mb-2">
            <h2 className="text-4xl md:text-6xl font-light tracking-[-0.05em]">
              <a 
                href={project.link}
                className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h2>
          </div>
          <div className="flex justify-between items-baseline text-sm">
            <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>
            <span className="text-neutral-500 dark:text-neutral-400">{project.date}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
