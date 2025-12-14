import api from '../api/api';

export default function SweetCard({ sweet, reload }) {
  const purchase = async () => {
    await api.post(`/sweets/${sweet.id}/purchase`);
    reload();
  };

  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={purchase}
      >
        Purchase
      </button>
    </div>
  );
}
