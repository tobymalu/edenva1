import type { Lang } from "@/i18n/ui";

export interface Testimonial {
  text: string;
  author: string;
}

export const TESTIMONIALS: Record<Lang, Testimonial[]> = {
  es: [
    {
      text: "Yo no fui al restaurante, fui directamente a las tirolesas. En realidad de lo mejor en Vallarta. Explican bien al principio las medidas de seguridad y todo, los equipos no son incómodos, la vista que se tiene desde las tirolesas es espectacular. En serio fue demasiado divertido, mi amiga y yo lo amamos.",
      author: "Sunshine Hope",
    },
    {
      text: "Mi novia y yo hicimos las tirolesas y fue increíble, los instructores muy atentos y amables. En todo momento nos sentimos seguros y no parábamos de reír.",
      author: "Mario Montaño",
    },
    {
      text: "Perfecto para desconectar y disfrutar del aire libre. ¡Lo recomiendo al 100%!",
      author: "María Fernández",
    },
  ],
  en: [
    {
      text: "I didn't go to the restaurant, I went straight to the zip lines. Honestly one of the best in Vallarta. They explain the safety measures well at the start, the equipment isn't uncomfortable, and the view from the zip lines is spectacular. It was so much fun, my friend and I loved it.",
      author: "Sunshine Hope",
    },
    {
      text: "My girlfriend and I did the zip lines and it was incredible — the instructors were very attentive and friendly. We felt safe the whole time and couldn't stop laughing.",
      author: "Mario Montaño",
    },
    {
      text: "Perfect to disconnect and enjoy the outdoors. I recommend it 100%!",
      author: "María Fernández",
    },
  ],
};
