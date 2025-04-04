import React from 'react';
import CurrentYear from './components/CurrentYear';
import Logo from './components/Logo';
import { HeroLogo } from './components/Logo';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Animated Background Elements */}
      <div className="animated-bg"></div>
      <div className="bg-grid absolute inset-0 z-0"></div>
      <div className="network-grid"></div>
      <div className="gradient-bg"></div>
      
      {/* Wave effect overlays */}
      <div className="wave-container">
        <svg className="wave wave-1" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="wave-path accent1-wave" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave wave-2" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="wave-path accent2-wave" d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Glow points */}
      <div className="glow-point" style={{ top: '30%', left: '20%' }}></div>
      <div className="glow-point" style={{ top: '60%', left: '50%' }}></div>
      
      {/* Additional background animation elements - enhanced glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[40vw] h-[40vw] rounded-full bg-accent1/3 blur-[200px] animate-float-slow animated-float top-[-20vh] left-[-10vw] opacity-25"></div>
        <div className="absolute w-[35vw] h-[35vw] rounded-full bg-accent2/3 blur-[200px] animate-float-medium animated-float right-[-10vw] top-[30vh] opacity-25"></div>
        <div className="absolute w-[25vw] h-[25vw] rounded-full bg-accent1/4 blur-[150px] animate-float-fast animated-float bottom-[-10vh] left-[20vw] opacity-20"></div>
      </div>
      
      {/* Dynamic light streaks - enhanced glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute h-[1px] w-[60vw] bg-gradient-to-r from-transparent via-accent1/30 to-transparent top-[15vh] left-0 animate-light-streak"></div>
        <div className="absolute h-[1px] w-[40vw] bg-gradient-to-r from-transparent via-accent2/25 to-transparent top-[35vh] right-0 animate-light-streak-reverse"></div>
        <div className="absolute h-[1px] w-[80vw] bg-gradient-to-r from-transparent via-accent1/15 to-transparent bottom-[25vh] left-[10vw] animate-light-streak-slow"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-accent1/10 bg-opacity-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-texture z-0"></div>
        
        {/* Floating decoration elements - enhanced glow */}
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 rounded-full bg-accent1/4 blur-[150px] animate-float-slow animated-float top-1/4 -left-20 opacity-25"></div>
          <div className="absolute w-96 h-96 rounded-full bg-accent2/4 blur-[150px] animate-float-medium animated-float right-0 top-0 opacity-25"></div>
          <div className="absolute w-48 h-48 rounded-full bg-accent1/3 blur-[100px] animate-float-fast animated-float bottom-10 right-20 opacity-20"></div>
        </div>
        
        <div className="w-full relative z-10 overflow-visible px-0">
          <div className="w-full text-center overflow-visible">
            <div className="mb-4 sm:mb-10 overflow-visible w-full">
              <HeroLogo />
            </div>
            <p className="enhanced-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-4xl mx-auto text-fade-in px-2" style={{ "--delay": "0.3s" } as React.CSSProperties}>
              DeRisked Digital Group owns and operates a group of regulated companies as well as blockchain and trading infrastructure companies to power the world's on-chain digital asset future.
            </p>
            <div className="ornamental-divider my-12 w-1/2 mx-auto"></div>
            <div className="max-w-4xl mx-auto">
              <p className="refined-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mx-auto text-foreground/85 text-fade-in px-2" style={{ "--delay": "0.5s" } as React.CSSProperties}>
                DDG brings together the best of Tier-1 regulatory licensing for trading and financial services with innovative, patented blockchain technology for netting, clearing and settlement. By aggregating liquidity providers and trading venues and front-to-back trading with real-time netting, clearing, and guaranteed settlement infrastructure, we provide regulated custodians, trading firms and trading technology platforms with the next generation seamless, risk-mitigated global ecosystem. Our network of regulated entities and tech-driven platforms empowers the digital asset economy with the lowest risk and maximum capital efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Map / Org Chart */}
      <section id="visual-map" className="section py-28 px-4 relative">
        <div className="container mx-auto glass-section p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            <div className="relative">
              <div className="mb-16 relative">
                <h3 className="refined-heading text-2xl md:text-3xl text-center">Global Regulatory Coverage</h3>
                {/* Center vertical line connecting from heading to cards */}
                <div className="absolute h-12 w-[1px] bg-gradient-to-b from-accent1/60 to-accent1/20 left-1/2 -bottom-12 transform -translate-x-1/2"></div>
              </div>
              
              <div className="space-y-16 relative">
                {/* Vertical connector line */}
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-accent1/40 via-accent1/30 to-accent1/10 left-1/2 top-0 transform -translate-x-1/2 -z-10"></div>
                
                {/* Regulatory companies with app icon style */}
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent1/20 to-accent1/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent1/10 to-accent1/5 border border-accent1/20 group-hover:border-accent1/50 group-hover:shadow-accent1/20">
                      <div className="icon-glow bg-accent1/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent1/10 border border-accent1/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent1/60">BS</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">Bosonic Securities LLC</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>US Broker Dealer (FINRA)</li>
                          <li>Alternative Trading System (SEC)</li>
                          <li>Digital Asset Securities Permissions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent1/20 to-accent1/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent1/10 to-accent1/5 border border-accent1/20 group-hover:border-accent1/50 group-hover:shadow-accent1/20">
                      <div className="icon-glow bg-accent1/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent1/10 border border-accent1/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent1/60">PA</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">Perpetuals AG</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>EU Broker Dealer (Cysec)</li>
                          <li>Multilateral Trading Facility (MiFID II)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent1/20 to-accent1/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent1/10 to-accent1/5 border border-accent1/20 group-hover:border-accent1/50 group-hover:shadow-accent1/20">
                      <div className="icon-glow bg-accent1/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent1/10 border border-accent1/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent1/60">LO</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">LiquidityOne AG</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>Swiss SOR (SO-FIT)</li>
                          <li>Crypto derivatives permissions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute -left-8 top-0 bottom-0">
                <div className="modern-divider h-full"></div>
              </div>
              <div className="mb-16 relative">
                <h3 className="refined-heading text-2xl md:text-3xl text-center">Blockchain & Trading Infrastructure</h3>
                {/* Center vertical line connecting from heading to cards */}
                <div className="absolute h-12 w-[1px] bg-gradient-to-b from-accent2/60 to-accent2/20 left-1/2 -bottom-12 transform -translate-x-1/2"></div>
              </div>
              
              <div className="space-y-16 relative">
                {/* Vertical connector line */}
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-accent2/40 via-accent2/30 to-accent2/10 left-1/2 top-0 transform -translate-x-1/2 -z-10"></div>
                
                {/* Tech companies with app icon style */}
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent2/20 to-accent2/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent2/10 to-accent2/5 border border-accent2/20 group-hover:border-accent2/50 group-hover:shadow-accent2/20">
                      <div className="icon-glow bg-accent2/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent2/10 border border-accent2/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent2/60">BT</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">Bosonic Tech Inc</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>Blockchain infrastructure</li>
                          <li>Multi-custodial settlement</li>
                          <li>Self-custody solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent2/20 to-accent2/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent2/10 to-accent2/5 border border-accent2/20 group-hover:border-accent2/50 group-hover:shadow-accent2/20">
                      <div className="icon-glow bg-accent2/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent2/10 border border-accent2/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent2/60">PT</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">Perpetuals Tech AG</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>Matching Engine</li>
                          <li>Institutional trading platform</li>
                          <li>Retail trading platform</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Horizontal connector to card */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-accent2/20 to-accent2/60 mb-4"></div>
                  
                  <div className="app-icon-card group">
                    <div className="edge-glow"></div>
                    <div className="app-icon-inner bg-gradient-to-br from-accent2/10 to-accent2/5 border border-accent2/20 group-hover:border-accent2/50 group-hover:shadow-accent2/20">
                      <div className="icon-glow bg-accent2/5"></div>
                      {/* Placeholder Logo - Hexagonal */}
                      <div className="logo-placeholder-hex mx-auto mb-4">
                        <div className="hex-inner bg-accent2/10 border border-accent2/30">
                          <div className="hex-content flex items-center justify-center">
                            <div className="text-2xl font-bold text-accent2/60">LT</div>
                          </div>
                        </div>
                        <div className="hex-reflection"></div>
                      </div>
                      <h4 className="serif-title text-lg text-center mb-1">
                        <span className="gradient-text">LiquidityOne Tech Ltd</span>
                      </h4>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-3 text-center">
                        <ul className="no-bullet-list text-foreground/80 space-y-2 text-sm">
                          <li>Liquidity Aggregation</li>
                          <li>Smart Order Routing</li>
                          <li>Retail trading platform</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent1/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10 md:mb-0">
              <Logo />
              <p className="elegant-caption text-sm text-subtext mt-4">© <CurrentYear /> DeRisked Digital Group</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@derisked.io" className="subtle-link">Contact</a>
              <span className="text-foreground/20">|</span>
              <p className="refined-text text-xs text-foreground/50">Innovative regulated infrastructure</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}