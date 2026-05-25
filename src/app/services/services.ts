import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      icon: '🏋️',
      title: 'Musculación',
      desc: 'Programa de hipertrofia y fuerza diseñado para maximizar tu ganancia muscular con técnica impecable y progresión inteligente.',
      tags: ['Fuerza', 'Hipertrofia', 'Potencia'],
      popular: false,
    },
    {
      icon: '🔥',
      title: 'Entrenamiento Personal',
      desc: 'Sesiones 1 a 1 totalmente personalizadas. Tu coach estará contigo en cada repetición para garantizar resultados y prevenir lesiones.',
      tags: ['1 a 1', 'Personalizado', 'Premium'],
      popular: true,
    },
    {
      icon: '⚡',
      title: 'HIIT & Cardio',
      desc: 'Quema grasa de forma eficiente con nuestros circuitos de alta intensidad. Máximos resultados en el mínimo tiempo.',
      tags: ['Cardio', 'Fat Burn', 'Resistencia'],
      popular: false,
    },
    {
      icon: '🥗',
      title: 'Nutrición Deportiva',
      desc: 'Plan alimenticio adaptado a tus objetivos, metabolismo y estilo de vida. Porque el 70% del resultado está en la cocina.',
      tags: ['Dieta', 'Suplementos', 'Hábitos'],
      popular: false,
    },
    {
      icon: '🧘',
      title: 'Recuperación Activa',
      desc: 'Sesiones de movilidad, stretching y técnicas de recuperación para que tu cuerpo rinda al máximo sin acumular fatiga.',
      tags: ['Movilidad', 'Flexibilidad', 'Bienestar'],
      popular: false,
    },
    {
      icon: '👥',
      title: 'Clases Grupales',
      desc: 'Entrena rodeado de personas que comparten tu energía y motivación. La comunidad que impulsa a seguir cuando el cuerpo no quiere.',
      tags: ['Comunidad', 'Motivación', 'Fun'],
      popular: false,
    },
  ];
}
