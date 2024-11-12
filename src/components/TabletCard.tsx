import { Tablet } from '../types';

type TabletCardProps = {
  tablet: Tablet;
  onDelete: () => void;
};

function TabletCard({ tablet, onDelete }: TabletCardProps) {
  return (
    <div className="tablet-card">
      <h2>{tablet.name}</h2>
      <p>OS: {tablet.os}</p>
      <p>CPU Speed: {tablet.cpuSpeed} GHz</p>
      <p>Cores: {tablet.cores}</p>
      <p>Screen Size: {tablet.screenSize}</p>
      <p>Resolution: {tablet.resolution}</p>
      <p>RAM: {tablet.ram}</p>
      <p>Price: {tablet.price} Ft</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TabletCard;