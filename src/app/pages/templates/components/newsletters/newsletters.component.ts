import { Component, Input } from '@angular/core';
import { newsletters } from '../../models/newsletters.model';

@Component({
  selector: 'app-templates-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css'],
})
export class NewslettersComponent {
  title: string = 'newsletters';
  subtitle: string =
    'Dive into the world of cybersecurity with our daily newsletter. Stay informed on the latest malware notices and emerging threats. Your shortcut to staying secure in the digital age.';

  owner: string = 'owner';
  contact: string = 'contact@email.com';

  @Input() newsletters: newsletters[] = [
    {
      category: 'Malware',
      news: [
        {
          title:
            'Unveiling the Threat Landscape: A Deep Dive into Emerging Malware Trends',
          link: 'https://example.com',
        },
        {
          title:
            'Defending the Digital Realm: A Guide to Recognizing and Neutralizing Malicious Software',
          link: 'https://example.com',
        },
        {
          title:
            'Malware Unmasked: Exploring Advanced Threats and Countermeasures',
          link: 'https://example.com',
        },
      ],
    },
    {
      category: 'Ransomware',
      news: [
        {
          title:
            'Ransomware Warfare: Understanding Tactics and Trends in Cyber Extortion Campaigns',
          link: 'https://example.com',
        },
        {
          title:
            'Decrypting the Threat: Navigating the Landscape of Ransomware Campaigns',
          link: 'https://example.com',
        },
        {
          title:
            'Ransomware Resilience: Strategies for Businesses to Safeguard Against Digital Hostage-Taking',
          link: 'https://example.com',
        },
      ],
    },
    {
      category: 'Vulnerabilities',
      news: [
        {
          title:
            'Office in Peril: Uncovering the Latest Zero-Day Vulnerability Exploiting Business Suites',
          link: 'https://example.com',
        },
        {
          title:
            'Beyond the Desk: Zeroing in on the Latest Office Software Breach',
          link: 'https://example.com',
        },
        {
          title:
            'Excel at Risk: Navigating the Latest Zero-Day Vulnerabilities in Office Applications',
          link: 'https://example.com',
        },
      ],
    },
  ];
}
