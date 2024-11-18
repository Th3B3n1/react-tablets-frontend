import { useEffect, useState } from 'react';
import TabletCard from '../components/TabletCard';
import { Tablet } from '../types';

function TabletekFullCRUD() {
    const [tablets, setTablets] = useState<Tablet[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [sortBy, setSortBy] = useState('name');
    const [order, setOrder] = useState('asc');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchTablets();
    }, [page, limit, sortBy, order, search]);

    const fetchTablets = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/pagetablets?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}&search=${search}`
            );
            const data = await response.json();
            setTablets(data.tablets);
            setTotal(data.total);
        } catch (error) {
            console.error('Error fetching tablets:', error);
            alert('Nem sikerült betölteni a tableteket.');
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await fetch(`http://localhost:3000/tablets/${id}`, { method: 'DELETE' });
            fetchTablets();
        } catch (error) {
            console.error('Error deleting tablet:', error);
            alert('Nem sikerült törölni a tabletet.');
        }
    };

    return (
        <div>
            <h1>Tabletek Full CRUD</h1>

            <div>
                <input
                    type="text"
                    placeholder="Keresés..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="name">Név</option>
                    <option value="price">Ár</option>
                    <option value="os">Operációs rendszer</option>
                </select>
                <select onChange={(e) => setOrder(e.target.value)} value={order}>
                    <option value="asc">Növekvő</option>
                    <option value="desc">Csökkenő</option>
                </select>
            </div>

            <div className="tablet-list">
                {tablets.map((tablet) => (
                    <TabletCard key={tablet.id} tablet={tablet} onDelete={() => handleDelete(tablet.id)} showDelete={false} />
                ))}
            </div>

            <div>
                <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
                    Előző
                </button>
                <span>
                    {page} / {Math.ceil(total / limit)}
                </span>
                <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(total / limit)}>
                    Következő
                </button>
            </div>
        </div>
    );
}

export default TabletekFullCRUD;
