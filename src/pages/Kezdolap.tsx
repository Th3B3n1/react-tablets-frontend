import { useEffect, useState } from 'react';
import { Tablet } from '../types';
import TabletCard from '../components/TabletCard';

function Kezdolap() {
  const [expensiveTablets, setExpensiveTablets] = useState<Tablet[]>([]);
  const [cheapTablets, setCheapTablets] = useState<Tablet[]>([]);
  const [popularTablet, setPopularTablet] = useState<Tablet | null>(null);

  useEffect(() => {
    fetchTablets();
  }, []);

  const fetchTablets = async () => {
    try {

      const expensiveResponse = await fetch('http://localhost:3000/tablets/expensive');
      const expensiveData: Tablet[] = await expensiveResponse.json();
      setExpensiveTablets(expensiveData);

      const cheapResponse = await fetch('http://localhost:3000/tablets/cheap');
      const cheapData: Tablet[] = await cheapResponse.json();
      setCheapTablets(cheapData);

      const popularResponse = await fetch('http://localhost:3000/tablets/popular');
      const popularData: Tablet = await popularResponse.json();
      setPopularTablet(popularData);
    } catch (error) {
      console.error('Hiba a tabletek lekérése során:', error);
      alert('Nem sikerült betölteni a tableteket.');
    }
  };

  return (
    <div>
      <h1>Kezdőlap</h1>

      <section>
        <h2>Legdrágább 3 tablet</h2>
        <div className="tablet-list">
          {expensiveTablets.map((tablet) => (
            <TabletCard key={tablet.id} showDelete={false} tablet={tablet} onDelete={() => {}} />
          ))}
        </div>
      </section>

      <section>
        <h2>Legolcsóbb 3 tablet</h2>
        <div className="tablet-list">
          {cheapTablets.map((tablet) => (
            <TabletCard key={tablet.id} showDelete={false} tablet={tablet} onDelete={() => {}} />
          ))}
        </div>
      </section>

      <section>
        <h2>Legnépszerűbb tablet</h2>
        {popularTablet ? (
          <TabletCard tablet={popularTablet} showDelete={false} onDelete={() => {}} />
        ) : (
          <p>Nincs elérhető adat.</p>
        )}
      </section>
    </div>
  );
}

export default Kezdolap;