import React from 'react';
import { Github, Mail, Twitter } from 'lucide-react';

export default function ContactPage() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nguyentd010@gmail.com',
      href: 'mailto:nguyentd010@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/nguyentd01',
      href: 'https://github.com/nguyentd01'
    },
  ];

  return (
    <div className="space-y-8">
      <ul className="space-y-6">
        {contacts.map((contact, index) => (
          <li key={index}>
            <a
              href={contact.href}
              className="group flex items-center space-x-3 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white visited:text-neutral-600 dark:visited:text-neutral-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon size={16} className="group-hover:text-black dark:group-hover:text-white transition-colors" />
              <span className="font-light">{contact.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}