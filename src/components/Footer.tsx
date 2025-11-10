import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-[rgba(100,100,120,0.2)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(100,100,120,0.1)] hover:bg-[rgba(99,102,241,0.2)] flex items-center justify-center text-[#9ca3af] hover:text-[#6366f1] transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <div className="flex items-center space-x-2 text-[#9ca3af]">
            <span>Made with</span>
            <Heart size={16} className="text-[#ef4444] fill-[#ef4444]" />
            <span>© 2025 Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
