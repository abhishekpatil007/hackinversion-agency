import { motion } from 'framer-motion';
import { Component as TypewriterTestimonial } from '../components/ui/typewriter-testimonial';


export default function TestimonialsDemo() {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_1.mp3',
      text: 'This product has revolutionized my workflow. The intuitive interface and powerful features make it an indispensable tool for my daily tasks. Highly recommended for anyone looking to boost productivity.',
      name: 'John Doe',
      jobtitle: 'Software Engineer',
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_2.mp3',
      text: 'An exceptional experience from start to finish. The customer support is top-notch, and the product consistently exceeds my expectations. I can confidently say this is the best in its class.',
      name: 'Jane Smith',
      jobtitle: 'Marketing Manager',
    },
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_3.mp3',
      text: 'The design is sleek, and the performance is unparalleled. It truly stands out among competitors. This investment has paid off exponentially in terms of efficiency and results.',
      name: 'Alex Johnson',
      jobtitle: 'UX Designer',
    },
    {
      image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_4.mp3',
      text: 'I was skeptical at first, but this product delivered beyond my wildest dreams. It is robust, reliable, and has become an essential part of my professional toolkit. Simply amazing!',
      name: 'Emily White',
      jobtitle: 'Project Lead',
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_5.mp3',
      text: 'This tool is a game-changer for data analysis. The visualisations are clear, and the insights gained are invaluable. It has transformed how we approach our business decisions.',
      name: 'David Lee',
      jobtitle: 'Data Scientist',
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_6.mp3',
      text: 'I appreciate the continuous updates and improvements. The team behind this product clearly listens to user feedback. It keeps getting better with every release. Fantastic!',
      name: 'Sarah Chen',
      jobtitle: 'Operations Manager',
    },
    {
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_7.mp3',
      text: 'The support I received was outstanding. They quickly resolved my issue and went above and beyond. It is comforting to know such dedicated professionals are behind this software.',
      name: 'Michael Brown',
      jobtitle: 'Customer Support Lead',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      audio: 'audio_8.mp3',
      text: 'This is exactly what I needed! It simplified complex tasks and allowed me to focus on what truly matters. The seamless integration with my existing tools was a huge plus.',
      name: 'Chris Taylor',
      jobtitle: 'Entrepreneur',
    },
  ];

  return (
    <div className="min-h-screen text-white font-inter relative">
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Typewriter Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive testimonials with typewriter effect and audio playback. 
            Hover over the avatars to see the testimonials in action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl"
        >
          <TypewriterTestimonial testimonials={testimonials} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-gray-400"
        >
          <p className="text-sm">
            Note: Audio files are not included. The component will show console warnings for missing audio files.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 