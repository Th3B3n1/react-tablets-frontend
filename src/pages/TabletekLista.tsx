import { useEffect, useState } from 'react';
import TabletCard from '../components/TabletCard';

type Tablet = {
  id: number;
  name: string;
  os: string;
  cpuSpeed: number;
  cores: number;
  screenSize: string;
  resolution: string;
  ram: string;
  price: number;
};

function TabletekLista() {
  const [tablets, setTablets] = useState<Tablet[]>([]); // Típusosítva a Tablet típushoz
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchTablets();
  }, []);

  const fetchTablets = async () => {
    try {
      const response = await fetch('http://localhost:3000/tablets');
      const data: Tablet[] = await response.json();
      setTablets(data);
    } catch (error) {
      console.error('Hiba a tabletek lekérése során:', error);
      alert('Nem sikerült betölteni a tableteket.');
    }
  };

  const handleDelete = async (id: number): Promise<boolean> => {
    try {
      await fetch(`http://localhost:3000/tablets/${id}`, { method: 'DELETE' });
      fetchTablets();
      alert('Tablet sikeresen törölve!');
      return true;
    } catch (error) {
      console.error('Hiba a tablet törlése során:', error);
      alert('Nem sikerült törölni a tabletet.');
      return false;
    }
  };

  const filteredTablets = tablets.filter((tablet) =>
    tablet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Tabletek Lista</h1>
      <input
        type="text"
        placeholder="Keresés..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="tablet-list">
        {filteredTablets.map((tablet) => (
          <TabletCard
            key={tablet.id}
            tablet={tablet}
            showDelete={true}
            onDelete={() => handleDelete(tablet.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TabletekLista;