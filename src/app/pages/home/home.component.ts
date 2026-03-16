import { Component } from '@angular/core';
import { Router } from '@angular/router';

type EventType = 'deslave' | 'trafico' | 'clima';

interface Event {
  id: string;
  type: EventType;
  title: string;
  location: string;
  time: string;
  verified: boolean;
  votes: { up: number; down: number };
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  filter: 'all' | EventType = 'all';

  constructor(private router: Router) {}

  mockEvents: Event[] = [
    {
      id: "1",
      type: "deslave",
      title: "Deslave en Autopista Norte",
      location: "Km 45, Autopista Norte",
      time: "Hace 15 min",
      verified: true,
      votes: { up: 124, down: 3 },
      description: "Carril izquierdo bloqueado por derrumbe"
    },
    {
      id: "2",
      type: "trafico",
      title: "Tráfico Pesado",
      location: "Av. Principal, Centro",
      time: "Hace 30 min",
      verified: false,
      votes: { up: 45, down: 2 },
      description: "Congestión vehicular por accidente"
    },
    {
      id: "3",
      type: "clima",
      title: "Lluvia Intensa",
      location: "Zona Sur",
      time: "Hace 45 min",
      verified: true,
      votes: { up: 89, down: 1 },
      description: "Visibilidad reducida y calzada resbaladiza"
    }
  ];

  get filteredEvents() {
    if (this.filter === 'all') return this.mockEvents;
    return this.mockEvents.filter(e => e.type === this.filter);
  }

  navigateToEvent(id: string) {
    this.router.navigate(['/event', id]);
  }

  setFilter(type: 'all' | EventType) {
    this.filter = type;
  }
}
