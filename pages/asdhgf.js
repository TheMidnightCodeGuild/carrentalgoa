import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';

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

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);
  const [enquiriesError, setEnquiriesError] = useState(null);

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

    const fetchEnquiries = async () => {
      try {
        setEnquiriesLoading(true);
        const enquiriesCollection = collection(db, 'Enquiries');
        const enquiriesSnapshot = await getDocs(enquiriesCollection);
        const enquiriesList = enquiriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEnquiries(enquiriesList);
        setEnquiriesLoading(false);
      } catch (err) {
        setEnquiriesError('Error fetching enquiries');
        setEnquiriesLoading(false);
      }
    };

    fetchPrices();
    fetchEnquiries();
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

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">Admin Dashboard</h1>
      
      <div className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">Car Price Manager</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Object.entries(prices).map(([field, value]) => (
              <div key={field} className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
                <label className="text-sm font-medium mb-1">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handlePriceChange(field, e.target.value)}
                  className="border rounded-md p-2 text-sm sm:text-base"
                  min="0"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300 text-sm sm:text-base"
            >
              {loading ? 'Updating...' : 'Update Prices'}
            </button>
            
            {success && (
              <span className="text-green-500 text-sm sm:text-base mt-2 sm:mt-0">
                Prices updated successfully!
              </span>
            )}
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">Customer Enquiries</h2>
        {enquiriesLoading ? (
          <div className="p-4 text-center">Loading enquiries...</div>
        ) : enquiriesError ? (
          <div className="p-4 text-red-500 text-center">{enquiriesError}</div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0 sm:rounded-lg shadow">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-3 sm:px-4 border-b text-left text-xs sm:text-sm">Name</th>
                  <th className="py-2 px-3 sm:px-4 border-b text-left text-xs sm:text-sm">Email</th>
                  <th className="py-2 px-3 sm:px-4 border-b text-left text-xs sm:text-sm hidden sm:table-cell">Phone</th>
                  <th className="py-2 px-3 sm:px-4 border-b text-left text-xs sm:text-sm hidden md:table-cell">Message</th>
                  <th className="py-2 px-3 sm:px-4 border-b text-left text-xs sm:text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length > 0 ? (
                  enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-gray-50">
                      <td className="py-2 px-3 sm:px-4 border-b text-xs sm:text-sm">{enquiry.name}</td>
                      <td className="py-2 px-3 sm:px-4 border-b text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{enquiry.email}</td>
                      <td className="py-2 px-3 sm:px-4 border-b text-xs sm:text-sm hidden sm:table-cell">{enquiry.phone}</td>
                      <td className="py-2 px-3 sm:px-4 border-b text-xs sm:text-sm hidden md:table-cell truncate max-w-[200px] lg:max-w-none">{enquiry.message}</td>
                      <td className="py-2 px-3 sm:px-4 border-b text-xs sm:text-sm">
                        {enquiry.timestamp ? new Date(enquiry.timestamp.toDate()).toLocaleDateString() : 'N/A'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center text-gray-500 text-sm">No enquiries found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
