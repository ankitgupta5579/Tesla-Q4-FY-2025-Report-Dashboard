/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { HeroSection } from './components/sections/HeroSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FinancialsSection } from './components/sections/FinancialsSection';
import { OperationsSection } from './components/sections/OperationsSection';
import { VerdictSection } from './components/sections/VerdictSection';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-body selection:bg-accent-primary selection:text-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <InsightsSection />
        <FinancialsSection />
        <OperationsSection />
        <VerdictSection />
      </main>

      <footer className="py-8 text-center border-t border-border-subtle mt-24">
        <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
          created by Ankit Gupta
        </p>
      </footer>
    </div>
  );
}
