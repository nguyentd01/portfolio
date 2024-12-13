import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How did you design this website?',
      answer: "I started by trying to imitate others website. From there, I adapted and personalized it to fit my own style, focusing on simplicity and cleanness"
    }
    ,
    {
      question: 'What inspired the design of this portfolio website?',
      answer: " I wanted a clean, minimalist design that put the focus on my work. I drew inspiration from Keita Yamada's portfolio design (https://p5aholic.me/), which is definitely one of the best portfolios I've seen ."
    },
    {
      question: 'What do you plan for the future?',
      answer: "Continue learning, taking on new challenges, grinding hard to achieve my goals and dreams."
    },
  ];

  return (
    <div className="space-y-12">
      {faqs.map((faq, index) => (
        <div key={index} className="space-y-2">
          <h3 className="text-2xl mb-4 text-neutral-900 dark:text-white">{faq.question}</h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed tracking-tight text-lg max-w-2xl">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
