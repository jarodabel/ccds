import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

type resource = {
  title: string;
  link: string;
  description: string;
  labels?: string[];
};

const resources: resource[] = [
  {
    description: 'LYFTE/ Maternal / Child Health Program, Teen Pregnancy',
    link: 'https://chcsek.org',
    title: 'Community Health Center-SEK',
    // labels: ['healthcare', 'ages - all', 'a', 'b', 'c', 'd', 'e']
  },
  {
    description: 'Infant/Toddler special needs',
    link: 'https://www.tiny-k.org',
    title: 'SEK Birth to Three Program',
  },
  {
    description: 'Maternal/Child Health, Teen/Pregnancy, Prenatal Classes',
    link: 'https://www.crawfordcountykansas.org',
    title: 'Crawford County Health Department',
  },
  {
    description: 'Case Management',
    link: 'https://crawfordmentalhealth.org',
    title: 'Crawford County Mental Health-Discovery',
  },
  {
    description: 'Home Visiting',
    link: 'https://headstartprogram.us',
    title: 'SEK-CAP Early Head Start',
  },
  {
    description: 'Home Visiting',
    link: 'https://kcsl.org',
    title: 'KCSL-Healthy Families',
  },
  {
    description: 'Home Visiting',
    link: 'https://greenbush.org',
    title: 'Parents As Teachers-Greenbush',
  },
  {
    description: 'Home Visiting',
    link: 'https://usd250.org',
    title: 'Tiny Dragons Literacy Program',
  },
  {
    description: 'Parenting Classes',
    link: 'https://viemedicalclinic.org',
    title: 'Vie Medical Clinic',
  },
];
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  resourceGroups;
  externalLink = faExternalLinkAlt;
  constructor() {}

  ngOnInit(): void {
    this.resourceGroups = this.groupResources();
  }

  groupResources(): resource[][] {
    const list = [...resources];
    const groups = [];
    const size = 3;

    while (list.length > 0) {
      groups.push(list.splice(0, size));
    }
    return groups;
  }

  openLink(tileObj): void{
    window.open(tileObj.link);
  }
}
