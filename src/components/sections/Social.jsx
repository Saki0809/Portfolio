import SocialLinks from '../ui/SocialLinks';

const Social = () => {
  return (
    <section id="social" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">
          Connect with <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Find me on these platforms
        </p>


        <div className="flex justify-center">
          <SocialLinks />
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <span className="text-2xl">💬</span>
            <p className="text-[var(--text-secondary)]">
              Open to collaborations & opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
