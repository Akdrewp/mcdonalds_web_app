import { permanentRedirect } from 'next/navigation'

export default function Lander() {
  permanentRedirect("/home");
}
