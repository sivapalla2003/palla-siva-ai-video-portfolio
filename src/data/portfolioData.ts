import { CapabilityItem, PromptArchitectureItem, ToolCategory, WorkflowStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Palla Siva',
  primaryTitle: 'AI Video Prompt Engineer',
  secondaryTitle: 'Independent Filmmaker & Creative Technologist',
  experience: '1.5+ Years Hands-On Experience',
  email: 'pallasiva85636@gmail.com',
  brandStatement: 'From imagination to execution — these films are not just stories, but living proof of how prompt engineering and generative AI can turn a single idea into cinematic reality.',
  supportingStatement: 'Exploring the new frontier of creativity with code, intelligence and visual storytelling.',
  positioning: 'Palla Siva is an AI Video Prompt Engineer who transforms ideas, stories, educational concepts, cultural subjects and creative briefs into cinematic visual experiences using prompt engineering, generative AI, visual direction and video editing.',
  filmmakingHighlight: 'Alongside generative AI work, Palla Siva has independently directed and produced a 10-minute live-action short film, handling story, direction, mobile cinematography, editing, effects and music.',
  socials: {
    linkedin: 'https://linkedin.com/in/pallasiva',
    youtube: 'https://youtube.com/@virtualvorld',
    instagram: 'https://instagram.com/virtualvorld',
    emailMailto: 'mailto:pallasiva85636@gmail.com',
  },
};

export const PROMPT_ARCHITECTURE: PromptArchitectureItem[] = [
  {
    key: 'SUBJECT',
    question: 'Who or what is being shown?',
    description: 'Precise physical identity, wardrobe textures, facial traits, age, posture, and emotional state.',
    example: 'A 20-year-old student with tousled curls, dark navy hoodie with ribbed hems, introspective gaze.',
  },
  {
    key: 'ACTION',
    question: 'What is happening in the scene?',
    description: 'Specific physical actions, gestures, micro-movements, and interactions with surrounding props.',
    example: 'Extends a trembling hand toward the shimmering digital screen as golden dust particles scatter.',
  },
  {
    key: 'ENVIRONMENT',
    question: 'Where does the scene exist?',
    description: 'Spatial architecture, foreground elements, weather, temporal atmosphere, and depth layers.',
    example: 'Ancient moss-covered cedar forest canopy, misty morning fog clinging to tree trunks, damp fern floor.',
  },
  {
    key: 'COMPOSITION',
    question: 'How is the frame structured?',
    description: 'Aspect ratios, rule-of-thirds, negative space, leading lines, framing devices, and optical depth.',
    example: 'Symmetrical center-weighted framing with foreground foliage creating natural organic vignettes.',
  },
  {
    key: 'CAMERA',
    question: 'How does the camera move?',
    description: 'Mount type, trajectory, speed, elevation, Dutch angles, orbital sweeps, and dolly push-ins.',
    example: 'Slow 35mm dolly push-in at chest height, imperceptible deceleration ending in tight medium close-up.',
  },
  {
    key: 'LENS',
    question: 'What optical characteristics shape the shot?',
    description: 'Focal length, aperture, bokeh characteristics, anamorphic flares, and depth of field falloff.',
    example: '50mm anamorphic prime lens, f/1.8 shallow depth of field, oval horizontal bokeh light streaks.',
  },
  {
    key: 'LIGHTING',
    question: 'How is the scene illuminated?',
    description: 'Key, fill, rim lighting, Kelvin temperature, volumetric god-rays, bounce sources, and contrast ratio.',
    example: 'Soft diffused northern window daylight key (5600K) with warm tungsten desk lamp fill (3200K) and subtle rim.',
  },
  {
    key: 'MOTION',
    question: 'What moves and at what velocity?',
    description: 'Internal kinetic energy, hair wind dynamics, fabric flutter, water ripples, and background motion.',
    example: 'Subtle breeze fluttering jacket seams at 24fps, water ripples radiating gently outwards.',
  },
  {
    key: 'MOOD',
    question: 'What emotional tone governs the shot?',
    description: 'Psychological undertone, tension, melancholia, wonder, urgency, reverie, or peace.',
    example: 'Contemplative solitude shifting gradually into transcendent serenity and emotional release.',
  },
  {
    key: 'STYLE',
    question: 'What visual grammar governs the aesthetic?',
    description: 'Film stock, grain structure, color grading palette, documentary realism vs. stylized anime cinema.',
    example: 'High-end cinema grain, Kodak 5219 film stock emulation, muted teal shadows with warm amber skin tones.',
  },
  {
    key: 'CONTINUITY',
    question: 'What must remain consistent across cuts?',
    description: 'Wardrobe details, lighting direction, eye-line match, facial bone structure, and spatial orientation.',
    example: 'Preserve exact scar on left eyebrow, consistent crimson bowtie knot, identical lighting key angle from frame left.',
  },
  {
    key: 'CONSTRAINTS',
    question: 'What negative boundaries prevent artifacts?',
    description: 'Explicit exclusions to eliminate morphing, limb duplication, uncanny valley glitches, and jitter.',
    example: 'No facial morphing, maintain stable hands and 5 fingers, eliminate plastic skin waxiness, avoid jittering textures.',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cinematic-ai-video',
    number: '01',
    title: 'Cinematic AI Video',
    description: 'Crafting visually arresting short films and commercial-grade cinematic sequences with nuanced lighting and cinematic camera language.',
    tags: ['Lighting', 'Color Grading', 'Aspect Ratio', 'Atmosphere'],
  },
  {
    id: 'text-to-video',
    number: '02',
    title: 'Text-to-Video',
    description: 'Synthesizing complex multi-layered textual creative briefs directly into high-fidelity moving frames with precise temporal cohesion.',
    tags: ['Diffusion Prompts', 'Prompt Grammar', 'Motion Control'],
  },
  {
    id: 'image-to-video',
    number: '03',
    title: 'Image-to-Video',
    description: 'Breathing kinetic life into still artwork, concept photography, and architectural renders while preserving composition and detail.',
    tags: ['Motion Brush', 'Keyframe Animation', 'Physics Simulation'],
  },
  {
    id: 'ai-short-films',
    number: '04',
    title: 'AI Short Films',
    description: 'End-to-end conceptualization, narrative structuring, character development, and scene continuity for complete cinematic short stories.',
    tags: ['Narrative Arcs', 'Story Beats', 'Sound Design', 'Pacing'],
  },
  {
    id: 'documentary-storytelling',
    number: '05',
    title: 'Documentary Storytelling',
    description: 'Constructing immersive non-fiction explorations, deep-sea expeditions, nature journeys, and historical documentations.',
    tags: ['Observational Framing', 'Voiceover Timing', 'Scale'],
  },
  {
    id: 'character-driven-scenes',
    number: '06',
    title: 'Character-Driven Scenes',
    description: 'Directing complex interpersonal dialogue, shot/reverse-shot exchanges, emotional close-ups, and naturalistic performances.',
    tags: ['Facial Nuance', '180° Rule', 'Dialogue Cadence'],
  },
  {
    id: 'world-building',
    number: '07',
    title: 'World Building',
    description: 'Visualizing imaginary worlds, architectural futures, greenfield infrastructure projects, and monumental natural landscapes.',
    tags: ['Scale Calibration', 'Atmospheric Fog', 'Geographic Depth'],
  },
  {
    id: 'educational-explainers',
    number: '08',
    title: 'Educational Explainers',
    description: 'Demystifying abstract technical topics, machine learning systems, and concepts through stylized animations and structured visual storytelling.',
    tags: ['3D Paper Style', 'Infographics', 'Concept Simplification'],
  },
  {
    id: 'product-visualization',
    number: '09',
    title: 'Product Visualization',
    description: 'Producing high-end commercial showcases for luxury timepieces, hardware, and industrial products with macro camera choreography.',
    tags: ['Macro Optics', 'Studio Rim Light', 'Reflective Materials'],
  },
  {
    id: 'social-media-videos',
    number: '10',
    title: 'Social Media Videos',
    description: 'High-retention visual hooks, vertical formats, channel intros, and platform-optimized video pacing tailored for modern audiences.',
    tags: ['Retention Hooks', 'Dynamic Typography', 'Fast Cuts'],
  },
  {
    id: 'cultural-travel-visuals',
    number: '11',
    title: 'Cultural & Travel Visuals',
    description: 'Documenting sacred heritage routes, temple architecture, traditional festivities, and majestic geographic regions with reverent depth.',
    tags: ['FPV Drones', 'Devotional Atmosphere', 'Heritage'],
  },
  {
    id: 'ai-video-editing',
    number: '12',
    title: 'AI Video Editing',
    description: 'Advanced assembly, temporal speed-ramping, color grading, visual audio synchronization, and visual effects in CapCut and suites.',
    tags: ['CapCut', 'Audio Sync', 'Color Timing', 'Transitions'],
  },
  {
    id: 'live-action-short-films',
    number: '13',
    title: 'Live-Action Short Films',
    description: 'Independent live-action production demonstrating real-world directing, mobile cinematography, physical blocking, and end-to-end ownership.',
    tags: ['Directing', 'Mobile Cine', 'Physical Blocking', 'Resourcefulness'],
  },
  {
    id: 'creative-direction',
    number: '14',
    title: 'Creative Direction',
    description: 'Translating abstract themes, brand narratives, and emotional concepts into unified visual styles, mood boards, and aesthetic guidelines.',
    tags: ['Visual Identity', 'Mood Boards', 'Aesthetic Coherence'],
  },
  {
    id: 'camera-motion-prompting',
    number: '15',
    title: 'Camera & Motion Prompting',
    description: 'Mastery of cinematic optical instructions: pan, tilt, pedestal, roll, crane sweeps, Dutch tilts, and complex compound trajectories.',
    tags: ['Camera Trajectory', 'Optical Velocity', 'Dutch Angles'],
  },
  {
    id: 'character-consistency',
    number: '16',
    title: 'Character Consistency',
    description: 'Techniques for locking character facial landmarks, hair volumes, clothing styling, and anatomical proportions across sequence cuts.',
    tags: ['Reference Locks', 'Multi-Angle Stability', 'Continuity'],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Research',
    description: 'Deep dive into subject matter, cultural contexts, historical references, and thematic nuances to ground the visual concept in truth.',
    deliverable: 'Subject dossiers & thematic references',
  },
  {
    step: '02',
    title: 'Ideation',
    description: 'Brainstorming core narrative metaphors, visual motifs, emotional arcs, and unique creative angles that will captivate viewers.',
    deliverable: 'Core concept & logline',
  },
  {
    step: '03',
    title: 'Script',
    description: 'Drafting structured screenplays with scene beats, character dialogues, timing markers, and voiceover pacing specifications.',
    deliverable: 'Timed screenplay & beat sheet',
  },
  {
    step: '04',
    title: 'Visual References',
    description: 'Curating targeted mood boards, color palettes, lens choices, film stocks, and lighting setups from cinema and nature.',
    deliverable: 'Visual mood boards & style guides',
  },
  {
    step: '05',
    title: 'Prompt Design',
    description: 'Architecting structured prompts incorporating subject, action, camera choreography, lens optics, lighting, and negative constraints.',
    deliverable: 'Structured prompt matrix',
  },
  {
    step: '06',
    title: 'Image / Video Generation',
    description: 'Iterative generation across leading AI models, benchmarking temporal stability, artifact control, and aesthetic fidelity.',
    deliverable: 'Raw high-resolution video shots',
  },
  {
    step: '07',
    title: 'Camera & Motion Direction',
    description: 'Fine-tuning camera velocity, pan/tilt speeds, focal shifts, and simulated physical momentum to mirror live-action cinematography.',
    deliverable: 'Choreographed camera sequences',
  },
  {
    step: '08',
    title: 'Consistency Review',
    description: 'Rigorous frame-by-frame quality checks verifying character facial landmarks, wardrobe integrity, environment lighting, and scale.',
    deliverable: 'Continuity-verified shot selection',
  },
  {
    step: '09',
    title: 'Editing & Post-Production',
    description: 'Cutting the footage to musical rhythm, integrating sound effects, color grading for unified tone, and applying visual polish in CapCut.',
    deliverable: 'Locked timeline & color grade',
  },
  {
    step: '10',
    title: 'Final Delivery',
    description: 'Master export in optimized aspect ratios with metadata, ready for festival screening, client handoff, or social distribution.',
    deliverable: 'Master cinematic film cut',
  },
];

export const TOOLKIT_CATEGORIES: ToolCategory[] = [
  {
    category: 'AI & Prompting',
    tools: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    category: 'AI Video Generation',
    tools: ['Google Flow', 'Runway', 'Seedance'],
  },
  {
    category: 'Visual Creation',
    tools: ['Leonardo.Ai', 'Pinterest'],
  },
  {
    category: 'Research & References',
    tools: ['Google', 'GitHub', 'Discovery Channel References'],
  },
  {
    category: 'Video Editing & VFX',
    tools: ['CapCut', 'Sound Design'],
  },
  {
    category: 'Music & Audio Assets',
    tools: ['Pixabay', 'Original Voiceover'],
  },
  {
    category: 'Publishing & Platforms',
    tools: ['YouTube', 'Instagram', 'LinkedIn', 'Netlify'],
  },
  {
    category: 'Independent Filmmaking',
    tools: ['Mobile Camera', 'Selfie Stick', 'Natural Lighting'],
  },
];
