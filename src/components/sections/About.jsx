import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section pt-4">
      <div className="container mx-auto">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Get to know me better
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--accent-primary)] opacity-50 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass glow">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A passionate developer from <span className="gradient-text">India</span>
            </h3>
            
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I'm a Full Stack Developer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With expertise in modern web technologies,
              I love turning complex problems into simple, elegant solutions.
            </p>
            
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or solving coding challenges. 
              I believe in continuous learning and staying updated with the latest 
              trends in technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-[var(--text-muted)] text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-[var(--text-muted)] text-sm">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-[var(--text-muted)] text-sm">Commits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
