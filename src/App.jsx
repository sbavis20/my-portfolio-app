import Navbar from './components/NavBar';
import Header from './components/Header';

export default function App() {
  return (
    <div className="relative">
    {/* Navbar - MUST have fixed + h-16 */}
    <Navbar />

    {/* Main content - MUST be first sibling after navbar */}
    <main className="pt-16"> {/* pt-16 matches navbar height */}
      <Header />

    </main>
  </div>
  );
}
