import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function CarPriceManager() {
  const [prices, setPrices] = useState({
    balenoAuto: 0,
    balenoManual: 0,
    endeavourAuto: 0,
    ertigaAuto: 0,
    ertigaManual: 0,
    fortunerAuto: 0,
    i10Auto: 0,
    i10Manual: 0,
    i20AutoSunRoof: 0,
    i20Manual: 0,
    miniCooper: 0,
    swiftAuto: 0,
    swiftManual: 0,
    tharAuto: 0,
    tharHardTopAuto: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const docRef = doc(db, 'carPrice', 'carPrice');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPrices(docSnap.data());
        }
        setLoading(false);
      } catch (err) {
        setError('Error fetching prices');
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const handlePriceChange = (field, value) => {
    setPrices(prev => ({
      ...prev,
      [field]: Number(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const docRef = doc(db, 'carPrice', 'carPrice');
      await updateDoc(docRef, prices);
      setSuccess(true);
    } catch (err) {
      setError('Error updating prices');
    }
    setLoading(false);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Car Price Manager</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(prices).map(([field, value]) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => handlePriceChange(field, e.target.value)}
                className="border rounded-md p-2"
                min="0"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Updating...' : 'Update Prices'}
          </button>
          
          {success && (
            <span className="text-green-500">
              Prices updated successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
