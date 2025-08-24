import React from 'react';
import styles from './style.css'; // You might need this if style.css contains Tailwind @apply directives or other critical global styles.
// If it contains only the compiled CSS from Lovable, it might not be needed or could conflict.
// If Lovable uses Tailwind, ensure Tailwind is configured in your Docusaurus project.

const UpdatedHome = () => {
  return (
<div>



    <div className="min-h-screen bg-background">
      {/* Navigation - Docusaurus has its own nav. You might want to remove this if you prefer Docusaurus's default.
          For now, I'm keeping it as it's part of the Lovable design. */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">MJ</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">About</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">Skills</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">Experience</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">Projects</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">Education</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-foreground hover:text-primary transition-colors">Certificates</button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Meet Jain</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">AI/ML Engineer &amp; Full-Stack Developer</p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">Passionate about leveraging Artificial Intelligence and Machine Learning to solve real-world problems. Currently pursuing B.Tech in AI/ML with expertise in predictive analytics, web development, and open-source contributions.</p>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-gradient-secondary border-border/50 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+91 9967155568</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>meet.jain563@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 transform transition-all duration-300 h-11 rounded-md px-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 h-4 w-4">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Get In Touch
                </button>
                <div className="flex gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-4 w-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-4 w-4">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Skills &amp; Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A comprehensive toolkit spanning AI/ML, web development, and data science</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-6 w-6 text-primary">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">AI &amp; Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Machine Learning</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Deep Learning</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Natural Language Processing</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Computer Vision</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Predictive Analytics</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Generative AI</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">TensorFlow</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">PyTorch</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Keras</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Scikit Learn</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">XGBoost</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">LightGBM</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">spaCy</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">NLTK</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">HuggingFace Transformers</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">LangChain</div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-6 w-6 text-primary">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Programming &amp; Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Python</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">JavaScript</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">TypeScript</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">C++</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">C</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">ReactJS</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Next.js</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Express</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Node.js</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Streamlit</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">HTML</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">CSS</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Tailwind CSS</div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database h-6 w-6 text-primary">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Data &amp; Analytics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Data Science</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Business Analytics</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Stock Trading Analytics</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">SQL</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">PostgreSQL</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">MongoDB</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Advanced Excel</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Power BI</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">MLflow</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Weights &amp; Biases</div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-6 w-6 text-primary">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">DevOps &amp; Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">AWS</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Docker</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">CI/CD</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Linux</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">System Design</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Monorepo</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Turborepo</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Git</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">GitHub Actions</div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings h-6 w-6 text-primary">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Tools &amp; Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Docusaurus</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Postman</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">ORM</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Prisma</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Next Auth</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Scaling</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Documentation</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Technical Writing</div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-6 w-6 text-primary">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Leadership</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Critical Thinking</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Innovation</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Resilience</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Problem Solving</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Team Collaboration</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Time Management</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Adaptability</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Continuous Learning</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">English</div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 transition-colors cursor-default">Hindi</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Building expertise through impactful internships and leadership roles</p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">Intern</h3>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary border-primary/50">Internship</div>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building h-4 w-4 mr-2">
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                      </svg>
                      <span className="font-medium">Larsen and Toubro</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4 mr-1">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>July 2025 - September 2025</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-1">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Chennai</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Assisted in analyzing geospatial data related to infrastructure networks using data analytics and machine learning techniques to support operational improvements</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Supported the preparation and preprocessing of spatial datasets using Python and GIS tools to enable pattern recognition and meaningful data segmentation</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Contributed to the development of interactive dashboards and visualizations using tools such as Power BI to help monitor performance and aid decision-making</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies &amp; Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Python</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Machine Learning</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">GIS</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Power BI</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Data Analytics</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Geospatial Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">Executive Director &amp; Maintainer</h3>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary border-primary/50">Leadership</div>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building h-4 w-4 mr-2">
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                      </svg>
                      <span className="font-medium">TCET Open Source</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4 mr-1">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>June 2023 - November 2023</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-1">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Open Source Organization</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Led and delivered four technical bootcamps (Docusaurus, Arch Linux, TCET Linux, GitHub), training 6+ members and increasing open-source participation by 30%</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Authored the TCET Linux OS documentation using Markdown and CI/CD, reducing onboarding time by 30% and supporting 2,000+ daily active users</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Managed repository operations during Hacktoberfest 2023, maintaining 100% CI/CD pipeline reliability across 15+ pull requests</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex">
                        <span className="text-primary mr-2">•</span>
                        <span>Promoted from Intern to Executive Director &amp; Repository Maintainer (Level 6) for driving impactful documentation and collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies &amp; Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Leadership</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Documentation</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">CI/CD</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Linux</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Docusaurus</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Git</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Open Source</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Technical Writing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Projects &amp; Research</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Innovative solutions at the intersection of AI, finance, and cybersecurity</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-6 w-6 text-primary">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">In Progress</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">Stox Sight</h3>
                  <p className="text-sm text-muted-foreground mb-2">AI-Powered Predictive Analytics for Secure Stock and Crypto Markets</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3 mr-1">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>April 2025 - Current</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Currently designing and iterating an AI-driven system using Python, Scikit-Learn, TensorFlow, and PyTorch to forecast stock and crypto prices with up to 15% improved accuracy, while building FastAPI + Streamlit pipelines for automated PDF reports and actionable investment insights.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>15% improved accuracy in stock and crypto price forecasting</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>FastAPI + Streamlit pipeline for automated PDF reports</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>Real-time market analysis and actionable investment insights</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Python</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Scikit-Learn</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">TensorFlow</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">PyTorch</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">FastAPI</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Streamlit</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Financial Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">TCET - B.Tech. Project</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-6 w-6 text-primary">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">Business Data Management Project</h3>
                  <p className="text-sm text-muted-foreground mb-2">Data-Driven Strategies for Wholesale Operations</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3 mr-1">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>October 2024 - April 2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Designing and implementing data-driven strategies for wholesale grocery operations using segmentation, time series forecasting, and churn prediction, optimizing pricing and inventory management with projected 12% profit increase and 8% reduction in customer attrition.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>12% projected profit increase through optimization</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>8% reduction in customer attrition</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>Advanced segmentation and forecasting models</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Data Science</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Time Series Analysis</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Churn Prediction</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Business Analytics</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Python</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">IIT Madras</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-primary">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs text-primary border-primary/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-3 w-3 mr-1">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                      81/100 (A Grade)
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">System Threat Forecaster</h3>
                  <p className="text-sm text-muted-foreground mb-2">MLP Project for Cybersecurity</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3 mr-1">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>January 2025 - April 2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Developing and deploying threat detection models (Logistic Regression, Random Forest, LightGBM) in Python, achieving 62.57% malware risk prediction accuracy and system property analysis; awarded 81/100 (A Grade) for project excellence.</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>62.57% malware risk prediction accuracy</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>Advanced threat detection using multiple ML models</span>
                        </li>
                        <li className="text-xs text-muted-foreground flex">
                          <span className="text-primary mr-2">•</span>
                          <span>Awarded A Grade (81/100) for project excellence</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Machine Learning</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Cybersecurity</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Logistic Regression</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Random Forest</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">LightGBM</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Python</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">IIT Madras</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Academic excellence across leading institutions in AI/ML and Data Science</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-6 w-6 text-primary">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">Primary Degree</div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs text-primary border-primary/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-3 w-3 mr-1">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                      CGPA: 9.47 / 10
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Bachelor of Technology</h3>
                    <p className="text-lg text-primary font-medium">Artificial Intelligence and Machine Learning</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-4 w-4 mr-2">
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                        <path d="M22 10v6"></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                      <span className="font-medium">Thakur College of Engineering and Technology (TCET)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4 mr-1">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>November 2022 - June 2026</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-1">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Mumbai, MH, India</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-primary font-medium mb-2">Currently in Fourth Year Seventh Semester</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive program covering advanced AI/ML concepts, deep learning, computer vision, and practical applications in industry.</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Current CGPA</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-muted rounded-full h-2 mr-2">
                          <div className="bg-gradient-primary h-2 rounded-full transition-all duration-500" style={{ width: '94.7%' }}></div>
                        </div>
                        <span className="text-sm font-bold text-primary">9.47 / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-6 w-6 text-primary">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Concurrent Degree</div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs text-primary border-primary/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-3 w-3 mr-1">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                      CGPA: 7.35
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Bachelor of Science</h3>
                    <p className="text-lg text-primary font-medium">Data Science and its Applications</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-4 w-4 mr-2">
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                        <path d="M22 10v6"></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                      <span className="font-medium">Indian Institute of Technology Madras (IIT-M)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4 mr-1">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>October 2022 - June 2026</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-1">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-primary font-medium mb-2">Currently in Diploma Level</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Rigorous online program focusing on statistical analysis, machine learning, and data-driven decision making from one of India's premier institutes.</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Current CGPA</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-muted rounded-full h-2 mr-2">
                          <div className="bg-gradient-primary h-2 rounded-full transition-all duration-500" style={{ width: '73.5%' }}></div>
                        </div>
                        <span className="text-sm font-bold text-primary">7.35</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates &amp; Learning</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Continuous learning through premier institutions and industry experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-5 w-5 text-primary">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Foundation in Programming &amp; Data Science</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">IIT Madras</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-blue-500/10 text-blue-400 border-blue-500/50">Data Science</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive foundation program covering programming fundamentals and data science principles.</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-5 w-5 text-primary">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">In Progress</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Deep Learning Specialization</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">Deeplearning.ai</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-purple-500/10 text-purple-400 border-purple-500/50">Deep Learning</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Advanced specialization covering neural networks, CNNs, RNNs, and deep learning applications.</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-5 w-5 text-primary">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">In Progress</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Cohort 1-100 Web Dev Senior Engineer</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">Harkirat Singh</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-green-500/10 text-green-400 border-green-500/50">Web Development</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Advanced full-stack web development program covering modern frameworks and system design.</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-5 w-5 text-primary">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Machine Learning Specialization</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">Stanford Online</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-purple-500/10 text-purple-400 border-purple-500/50">Machine Learning</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive machine learning course covering supervised and unsupervised learning algorithms.</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-5 w-5 text-primary">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Cohort 0-1 Web Dev Junior Engineer</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">Harkirat Singh</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-green-500/10 text-green-400 border-green-500/50">Web Development</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Foundation web development program covering HTML, CSS, JavaScript, and React fundamentals.</p>
                </div>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 hover:shadow-glow-secondary transition-all duration-300 bg-gradient-secondary border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-5 w-5 text-primary">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Completed</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">Implementing Machine Learning Techniques using Numpy</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 mr-2 text-muted-foreground">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">IIT Madras Workshop</span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs mb-3 bg-purple-500/10 text-purple-400 border-purple-500/50">Machine Learning</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Hands-on workshop implementing ML algorithms from scratch using NumPy.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-gradient-secondary border-border/50 inline-block">
                <div className="flex items-center justify-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-5 w-5 text-primary">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium">View All Certificates</p>
                    <p className="text-xs text-muted-foreground">Complete portfolio available online</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Visit Portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Docusaurus has its own footer. You might want to remove this if you prefer Docusaurus's default.
          For now, I'm keeping it as it's part of the Lovable design. */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-sm">meet.jain563@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-sm">+91 9967155568</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">About</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">Skills</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">Experience</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">Projects</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">Education</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 justify-start text-muted-foreground hover:text-foreground">Certificates</button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-3">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent h-10 w-10 hover:border-primary/50 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-4 w-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent h-10 w-10 hover:border-primary/50 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-4 w-4">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent h-10 w-10 hover:border-primary/50 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent h-10 w-10 hover:border-primary/50 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs">View Certificate Portfolio</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">Built with 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-3 w-3 text-red-500 fill-red-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg> by Meet Jain • Ready for Docusaurus Integration
            </p>
          </div>
        </div>
      </footer>
    </div></div>
  );
};

export default UpdatedHome;
