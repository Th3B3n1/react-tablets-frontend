import { useState } from 'react';

function TabletekFelvetel() {
  const [tablet, setTablet] = useState({
    name: '',
    os: '',
    cpuSpeed: '',
    cores: '',
    screenSize: '',
    resolution: '',
    ram: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTablet({ ...tablet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/tablets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tablet),
      });
      setTablet({
        name: '',
        os: '',
        cpuSpeed: '',
        cores: '',
        screenSize: '',
        resolution: '',
        ram: '',
        price: '',
      });
      alert('Tablet sikeresen hozzáadva!');
    } catch (error) {
      console.error('Hiba a tablet hozzáadása során:', error);
      alert('Hiba történt a tablet hozzáadása során.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Név" value={tablet.name} onChange={handleChange} required />
      <input type="text" name="os" placeholder="Operációs rendszer" value={tablet.os} onChange={handleChange} required />
      <input type="number" name="cpuSpeed" placeholder="CPU sebesség (GHz)" value={tablet.cpuSpeed} onChange={handleChange} required />
      <input type="number" name="cores" placeholder="Magok száma" value={tablet.cores} onChange={handleChange} required />
      <input type="text" name="screenSize" placeholder="Képernyő méret (hüvelyk)" value={tablet.screenSize} onChange={handleChange} required />
      <input type="text" name="resolution" placeholder="Felbontás" value={tablet.resolution} onChange={handleChange} required />
      <input type="text" name="ram" placeholder="RAM mérete" value={tablet.ram} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Ár (Ft)" value={tablet.price} onChange={handleChange} required />
      <button type="submit">Tablet hozzáadása</button>
    </form>
  );
}

export default TabletekFelvetel;