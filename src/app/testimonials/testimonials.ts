import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      name: 'Andrea López',
      role: 'Perdió 18 kg en 5 meses',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      stars: 5,
      text: 'Carlos cambió completamente mi relación con el entrenamiento. Nunca pensé que podría sentirme así de bien. Su método es diferente a todo lo que había probado antes — no es solo ejercicio, es un estilo de vida.',
      before: '82 kg',
      after: '64 kg',
    },
    {
      name: 'Diego Ramírez',
      role: 'Ganó 8 kg de músculo',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      stars: 5,
      text: 'Llevaba 2 años entrenando sin resultados. En 4 meses con Carlos logré más que en esos 2 años juntos. La diferencia es el conocimiento y la personalización. Ahora entreno con propósito.',
      before: '65 kg',
      after: '73 kg',
    },
    {
      name: 'Valeria Torres',
      role: 'Corrió su primer 10K',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      stars: 5,
      text: 'Empecé sin poder correr 5 minutos seguidos. Hoy completé mi primer 10K en menos de una hora. Carlos no solo me dio el plan físico, también la mentalidad para no rendirme.',
      before: '5 min',
      after: '10 km',
    },
    {
      name: 'Mauricio Silva',
      role: 'Eliminó el dolor de espalda',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      stars: 5,
      text: 'Tenía dolor crónico de espalda por mi trabajo de oficina. El programa de movilidad y fuerza de Carlos lo resolvió en 3 semanas. Ahora entreno sin limitaciones. 100% recomendado.',
      before: 'Dolor crónico',
      after: 'Sin dolor',
    },
    {
      name: 'Sofía Mendez',
      role: 'Transformación postparto',
      avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
      stars: 5,
      text: 'Después de dos embarazos creía que nunca volvería a sentirme bien en mi cuerpo. Carlos adaptó cada entrenamiento a mi recuperación y hoy me siento mejor que antes de ser mamá.',
      before: 'Postparto',
      after: 'Mejor que nunca',
    },
    {
      name: 'Rodrigo Vargas',
      role: 'Competidor amateur',
      avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      stars: 5,
      text: 'Participé en mi primera competencia de físicoculturismo gracias a Carlos. Su preparación es de nivel profesional. La periodización, la nutrición, el pico de forma — todo perfectamente calculado.',
      before: 'Amateur',
      after: 'Top 3 regional',
    },
  ];

  get starsArray() {
    return Array(5).fill(0);
  }
}
