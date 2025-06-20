// src/components/NewsBlogger.jsx
import React from 'react';


const articles = [
  {
    title: 'Breaking: Market Hits Record Highs',
    author: 'Tim Shedrack',
    content: 'The stock market hit new records today with tech companies leading the charge...',
    image: 'https://picsum.photos/id/1011/800/400'
  },
  {
    title: 'AI Revolution: What to Expect',
    author: 'Jane Doe',
    content: 'Artificial Intelligence is transforming industries at a fast pace. Here’s what experts predict...',
    image: 'https://picsum.photos/id/1027/800/400'
  },
  {
    title: '5 Tips to Improve Your Writing',
    author: 'John Smith',
    content: 'Want to be a better writer? Start by reading more and practicing daily...',
    image: 'https://picsum.photos/id/1035/800/400'
  },
  {
    title: 'Global Warming Threatens Coastal Cities',
    author: 'Sarah Green',
    content: 'Sea levels are rising at an alarming rate. Scientists urge immediate climate action.',
    image: 'https://picsum.photos/id/1042/800/400'
  },
  {
    title: 'Top 10 Travel Destinations for 2025',
    author: 'Alex Travels',
    content: 'From Bali to Iceland, here are the must-visit locations for next year’s wanderlust.',
    image: 'https://picsum.photos/id/1053/800/400'
  },
  {
    title: 'React 19 Released: What’s New',
    author: 'Dev News',
    content: 'The latest version of React includes performance upgrades and new hooks.',
    image: 'https://picsum.photos/id/1060/800/400'
  },
  {
    title: 'Health Tips: Eating Clean on a Budget',
    author: 'Dr. Lily',
    content: 'You can eat healthy without spending too much. Here’s how to plan your meals wisely.',
    image: 'https://picsum.photos/id/1070/800/400'
  },
  {
    title: 'The Rise of Remote Work in Africa',
    author: 'Emeka Obi',
    content: 'More Africans are joining the remote work revolution and earning globally.',
    image: 'https://picsum.photos/id/1084/800/400'
  },
  {
    title: 'How to Start a Successful YouTube Channel',
    author: 'Content Master',
    content: 'Want to grow on YouTube? These beginner tips will set you up for success.',
    image: 'https://picsum.photos/id/109/800/400'
  },
  {
    title: 'Football: Champions League Recap',
    author: 'Sports Today',
    content: 'A thrilling night of goals and drama leaves fans speechless.',
    image: 'https://picsum.photos/id/110/800/400'
  },
  {
    title: 'Student Builds App That Solves Math Homework',
    author: 'Tech Daily',
    content: 'A 16-year-old genius created an AI-powered app that solves math problems in seconds.',
    image: 'https://picsum.photos/id/111/800/400'
  },
  {
    title: 'Nigerian Fashion Goes Global',
    author: 'Style Africa',
    content: 'Designers from Lagos are taking the global stage with bold new styles.',
    image: 'https://picsum.photos/id/112/800/400'
  },
  {
    title: 'The Future of Electric Cars',
    author: 'Auto World',
    content: 'Electric vehicles are becoming more affordable and eco-friendly.',
    image: 'https://picsum.photos/id/113/800/400'
  },
  {
    title: 'The Secret Behind Viral TikToks',
    author: 'Social Buzz',
    content: 'Ever wonder why some TikToks go viral? It’s all about timing, trends, and engagement.',
    image: 'https://picsum.photos/id/114/800/400'
  },
  {
    title: 'How to Stay Focused While Studying',
    author: 'Exam Coach',
    content: 'Get better grades by mastering your study environment and routines.',
    image: 'https://picsum.photos/id/115/800/400'
  },
  {
    title: 'Coding Bootcamps: Worth It in 2025?',
    author: 'Dev Careers',
    content: 'Bootcamps can be life-changing, but are they the best way to learn in today’s world?',
    image: 'https://picsum.photos/id/116/800/400'
  },
  {
    title: 'Mobile Photography Tips from Pros',
    author: 'Photo Weekly',
    content: 'Take stunning photos with just your phone. Here’s what the pros recommend.',
    image: 'https://picsum.photos/id/117/800/400'
  }
];

export default function Dullnews() {
  return (
    <div className="news-container">
      <header className="news-header">
        <h1>📰 Dull News Blogger</h1>
        <p>Your daily dose of fresh and fearless stories. arise and shine</p>
      </header>

      <main className="articles">
        {articles.map((article, index) => (
          <article key={index} className="news-article">
              <img src={article.image} alt={article.title} className="article-image" /> 
             <h2>{article.title}</h2>
        
            <p className="author">By {article.author}</p>
            <p>{article.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}
