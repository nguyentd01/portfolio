import React from 'react';
import { Github, Mail, Linkedin, Facebook } from 'lucide-react';

// Define the custom TradingView icon with adjusted size and black and white colors
const TradingViewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 500 500"
    fill="none"
    stroke="currentColor"
    strokeWidth="20"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      stroke="currentColor"
      d="M 74.268 158.688 L 216.747 158.711 L 217.506 338.161 L 145.466 337.657 L 145.445 229.983 L 74.2 229.871 L 74.268 158.688 Z"
    />
    <circle stroke="currentColor" cx="270.59" cy="192.178" r="35.956" />
    <polygon
      stroke="currentColor"
      points="343.41 158.808 426.417 158.896 351.232 336.856 269.104 336.679 342.837 158.951"
    />
  </svg>
);

export default function ContactPage() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nguyentd010@gmail.com',
      href: 'mailto:nguyentd010@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'nguyentd01',
      href: 'https://github.com/nguyentd01',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Đình Nguyên Trần',
      href: 'https://linkedin.com/in/đình-nguyên-trần-a3322b2a7',
      size: 14,
    },
    {
      icon: TradingViewIcon,
      label: 'TradingView',
      value: 'nguyentd010',
      href: 'https://www.tradingview.com/u/nguyentd010/',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Trần Đình Nguyên',
      href: 'https://www.facebook.com/profile.php?id=100088513592407',
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
              <div
                className={
                  contact.label === 'TradingView'
                    ? 'relative left-[-2px]'
                    : ''
                }
              >
                <contact.icon
                  size={contact.size || 16}
                  className="group-hover:text-black dark:group-hover:text-white transition-colors"
                />
              </div>
              <span className="font-light">{contact.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
