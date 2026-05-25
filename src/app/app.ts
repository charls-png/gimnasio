import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Testimonials } from './testimonials/testimonials';
import { WhatsappButton } from './whatsapp-button/whatsapp-button';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, About, Testimonials, WhatsappButton, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
