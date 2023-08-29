import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import TopHeader from '../components/TopHeader';
export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <ServicesGrid />
    </div>
  );
}
