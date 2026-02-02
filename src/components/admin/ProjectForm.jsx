import { useState, useEffect } from 'react';

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tech_stack: [],
    github_url: '',
    live_url: '',
    image_url: '',
  });
  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        tech_stack: project.tech_stack || [],
        github_url: project.github_url || '',
        live_url: project.live_url || '',
        image_url: project.image_url || '',
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTech = () => {
    if (techInput.trim() && !formData.tech_stack.includes(techInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tech_stack: [...prev.tech_stack, techInput.trim()],
      }));
      setTechInput('');
    }
  };

  const removeTech = (tech) => {
    setFormData((prev) => ({
      ...prev,
      tech_stack: prev.tech_stack.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-white focus:outline-none focus:border-[var(--accent-primary)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-2">Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Project title"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Brief description of the project"
        />
      </div>

      {/* Tech Stack */}
      <div>
        <label className="block text-sm font-medium mb-2">Tech Stack</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTech();
              }
            }}
            className={inputClass}
            placeholder="Add technology"
          />
          <button
            type="button"
            onClick={addTech}
            className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tech_stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-sm"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTech(tech)}
                className="text-[var(--text-muted)] hover:text-red-400"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* GitHub URL */}
      <div>
        <label className="block text-sm font-medium mb-2">GitHub URL</label>
        <input
          type="url"
          name="github_url"
          value={formData.github_url}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://github.com/username/repo"
        />
      </div>

      {/* Live URL */}
      <div>
        <label className="block text-sm font-medium mb-2">Live Demo URL</label>
        <input
          type="url"
          name="live_url"
          value={formData.live_url}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://your-demo.vercel.app"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button type="submit" className="btn btn-primary flex-1">
          {project ? 'Update Project' : 'Add Project'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
