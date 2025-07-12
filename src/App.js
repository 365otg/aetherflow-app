import React, { useState } from 'react';
import { ChevronDown, Zap, Command, Crown } from 'lucide-react';

// --- Data for Breathing Exercises ---
const exercises = {
  part1: {
    title: "Discovering Your Hidden Superpower",
    icon: Zap,
    description: "Begin your journey by awakening the dormant power within. This section introduces foundational techniques to connect your breath with the creative forces of the universe, shifting you from a passive observer to an active participant in your reality.",
    techniques: [
        { title: "Gateway Breath", instructions: "In a quiet space, sit comfortably. Inhale deeply for four counts, hold for four counts, exhale for four counts, and hold empty for four counts. While practicing, focus on a single desire you wish to manifest." },
        { title: "Cosmic Synchronization Breath", instructions: "In a quiet space, place your hand over your heart. Feel its rhythm and begin breathing in time with your heartbeat—inhaling for four beats and exhaling for four beats. As you breathe, visualize your desires being carried to you on a cosmic tide." },
        { title: "Master's Concealment Breath", instructions: "While sitting naturally in any public space, breathe slowly and intentionally. With each inhale, silently draw in the energy of your intention. With each exhale, invisibly direct this power toward your desired manifestation." },
        { title: "Life Force Activation Breath", instructions: "Sit quietly and visualize golden light entering your body with each inhalation. Feel this energy filling your cells and then expanding outward with each exhalation to touch everything you wish to manifest. Continue for seven breaths." },
        { title: "Foundation Power Breath", instructions: "In a quiet space, inhale for seven counts, hold for one count, exhale for seven counts, and hold for one count. During this practice, focus only on gratitude for what you already have and positive visions of what you wish to create. Start with three cycles and increase as you master maintaining positive focus." },
        { title: "The Creator's Activation Breath", instructions: "Sit in a quiet space with your spine straight. Breathe deeply and slowly, and with each breath repeat: 'I am the creator of my reality.' Visualize yourself as a powerful architect of existence, shaping circumstances with each breath." },
        { title: "Universal Communication Breath", instructions: "Sit in stillness and choose one clear desire. As you inhale deeply, silently say, 'Please bring this to me.' Hold your breath gently while affirming, 'I trust your wisdom.' Then exhale completely while declaring with certainty, 'It is done.'" },
        { title: "The Liberation Breath", instructions: "Sit quietly and observe your natural breath. With each inhale, visualize golden light dissolving chains of limitation around your body, mind, and spirit. With each exhale, see doors of infinite possibility opening in every direction. Continue for seven minutes." },
        { title: "The Truth Revealing Breath", instructions: "Sit quietly with your eyes closed, breathing deeply while asking, 'What within me is creating my current reality?' As insights arise, breathe healing light into each revelation to transform resistance into receptivity, fear into faith, and limitation into possibility." },
        { title: "The Threshold Crossing Breath", instructions: "Sit in perfect stillness with your spine erect. Inhale for twelve counts while silently affirming: 'I accept my divine power.' Hold for four counts while contemplating: 'I am ready to transcend all limitations.' Exhale for twelve counts while declaring: 'I step into my true nature as a master of reality.' Hold empty for four counts. Practice for twelve cycles." },
    ]
  },
  part2: {
    title: "Commanding Reality with Each Breath",
    icon: Command,
    description: "Move from discovery to direct influence. The exercises in this section are potent tools for manifestation, teaching you to channel your breath and emotions to command specific outcomes in your life, from wealth to relationships.",
    techniques: [
        { title: "The Elemental Mastery Breath", instructions: "Begin in a seated position with a straight spine. Inhale for four counts, feeling earth energy rising through your feet. Hold for four counts, allowing water's wisdom to flow through you. Exhale for four counts, letting fire's power purify your intention. Pause for four counts, as air carries your creation into manifestation. Practice for twelve cycles." },
        { title: "Instant Manifestation Breath", instructions: "Sit in perfect stillness with a specific desire in mind. Inhale for exactly seven seconds while seeing your desire as already accomplished. Hold your breath for seven seconds, feeling the emotions of having your desire. Exhale for seven seconds, releasing all attachment. Practice no more than three times in succession." },
        { title: "The Emotional Transmutation Breath", instructions: "Recall a situation that fills you with righteous anger. Feel the energy rising, and instead of focusing on the problem, inhale this force and direct it into your chosen desire. Hold the energized breath for four counts, feeling the emotion transform into pure creative power. Exhale this transformed energy into your vision of success. Practice for seven breaths." },
        { title: "Millionaire's Frequency Breath", instructions: "Inhale for eight counts while visualizing streams of money flowing toward you. Hold for four counts, feeling completely worthy of unlimited wealth. Exhale for eight counts, releasing any doubts about your right to prosperity." },
        { title: "Soulmate Magnetism Breath", instructions: "Sit quietly with your eyes closed and your hand over your heart. As you inhale, visualize your heart expanding with radiant love energy. While holding your breath, feel this love filling every cell. Exhale smoothly, sending this love energy out as a magnetic call to your perfect partner." },
        { title: "Miracle Pause Breath", instructions: "Begin with a slow, deep inhale. At the top of your breath, pause naturally and hold your chosen desire in clear awareness. Gradually extend this pause. When complete, exhale smoothly." },
        { title: "Block Dissolution Breath", instructions: "Identify your most persistent limitation (a fear, belief, or pattern). Close your eyes and locate where this limitation lives in your body. Breathe directly into this space, visualizing your breath as pure light dissolving the barrier." },
        { title: "Regenerative Healing Breath", instructions: "Sit comfortably and focus on an area of your body needing healing. As you inhale, visualize golden healing light flowing into this area. Hold your breath briefly, seeing the light penetrate every cell with the pattern of perfect health. As you exhale, feel the cells awakening to their natural state of wholeness." },
        { title: "Environmental Transformation Breath", instructions: "Sit quietly in your space and breathe deeply. Visualize each exhale carrying waves of peace and harmony throughout your environment, touching everyone in your life and elevating their energy." },
        { title: "Unconquerable Warrior Breath", instructions: "Sit with your spine straight and shoulders relaxed. Inhale deeply for six counts, drawing in power and courage. Hold for two counts while seeing yourself victorious. Exhale for six counts, releasing all doubt and fear. Hold empty for two counts, anchoring unshakeable confidence." },
    ]
  },
  part3: {
    title: "Becoming Too Powerful for Your Old Life",
    icon: Crown,
    description: "Ascend to the highest levels of mastery. These advanced practices are for those ready to transcend ordinary limitations, bend physical laws, and fully integrate their identity as a sovereign creator of their own existence.",
    techniques: [
        { title: "Impossibility Transcendence Breath", instructions: "Choose something you have labeled impossible. Sit in perfect stillness and breathe with the authority of a divine creator. Inhale the certainty that limitations are only for those who accept them. Hold the breath, feeling reality conforming to your will. Exhale with the finality of a command that must be obeyed." },
        { title: "Temporal Transcendence Breath", instructions: "Sit in perfect stillness, allowing your awareness to expand beyond linear time. Breathe deeply, visualizing yourself existing in all moments at once. As you inhale, draw wisdom from your future self who has achieved your desires. As you hold your breath, feel yourself in the eternal now. As you exhale, send healing into past experiences." },
        { title: "Matter Influence Breath", instructions: "Sit quietly and feel your absolute unity with all physical reality. Breathe while knowing your consciousness and the matter around you are one. Direct your conscious intention through your breath into the physical world." },
        { title: "Divine Love Breathing", instructions: "Sit quietly, allowing your breath to become slow and deep. With each inhalation, feel pure love filling your heart. With each exhalation, let this love expand outward to embrace all existence." },
        { title: "Synchronicity Orchestration Breath", instructions: "Sit quietly with your eyes closed. Breathe slowly and deeply. As you inhale, visualize golden threads of light extending from your heart to everything you desire. With each exhale, imagine gently pulling these threads, orchestrating a cosmic dance." },
        { title: "The Dragon Awakening Breath", instructions: "Sit in perfect stillness with an aligned spine. Breathe with measured patience. Visualize a sacred dragon coiled at the base of your spine. With each inhale, sense warmth kindling. As you exhale, see a divine flame spreading upward. Halt if any ego arises." },
        { title: "Lineage Connection Breath", instructions: "Sit in stillness and breathe deeply. With each inhale, visualize opening to receive the wisdom of all masters. With each exhale, allow your consciousness to dissolve and merge with this lineage." },
        { title: "Sovereign Recognition Breath", instructions: "Sit in perfect stillness. Breathe naturally while holding the recognition: 'I am not using breath - I am the breath of existence itself...' Feel the illusion of separation dissolving with each breath." },
        { title: "Cosmic Unity Breath", instructions: "Sit in perfect stillness and let your breath flow effortlessly. With each inhale, feel yourself expanding beyond personal identity. With each exhale, recognize that you are the universe breathing itself. Let go of all techniques." },
        { title: "Integration Mastery Breath", instructions: "Sit in perfect stillness and breathe deeply. With each inhale, draw in the divine recognition of your true identity. With each exhale, release all attachments to limitation. Let your breath affirm: 'I accept my infinite power... I release... all that cannot contain the radiant light of my true nature.'" },
    ]
  }
};

// --- Accordion Component for each exercise ---
const ExerciseAccordion = ({ title, instructions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-yellow-200/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-yellow-100 hover:bg-yellow-200/5 transition-colors duration-300"
      >
        <span>{title}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 pt-0 text-yellow-300/80 leading-relaxed">
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('part1');
  const activePart = exercises[activeTab];

  const tabKeys = Object.keys(exercises);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased" style={{background: 'radial-gradient(ellipse at top, #1f2937, #111827)'}}>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        
        {/* Header */}
        <header className="text-center my-8">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300 tracking-wider" style={{fontFamily: "'Cinzel', serif", textShadow: '0 0 15px rgba(253, 224, 71, 0.5)'}}>
            AetherFlow
          </h1>
          <p className="text-yellow-200/70 mt-3 text-lg">Your Breath Controls Reality</p>
        </header>

        {/* Description */}
        <section className="my-12 p-6 bg-gray-800/50 border border-yellow-300/20 rounded-xl shadow-2xl shadow-yellow-500/5">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">How & Why It Works</h2>
          <p className="text-yellow-100/80 leading-relaxed">
            Your breath is the bridge between consciousness and the physical world. It's the native language of the universe. By breathing unconsciously, you reinforce your current reality. By breathing with focused intention, you issue new commands to the fabric of existence. Each pattern in this app attunes your energy to a specific frequency, allowing you to dissolve limitations, attract desires, and align with the cosmic flow of creation. This isn't just relaxation; it's the art of reality-sculpting.
          </p>
        </section>

        {/* Tabs */}
        <nav className="flex flex-col sm:flex-row justify-center border-b border-yellow-300/20 mb-8">
          {tabKeys.map((key, index) => {
            const part = exercises[key];
            const Icon = part.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-4 px-2 text-center text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === key
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-yellow-200/60 hover:text-yellow-200 hover:bg-yellow-200/5'
                }`}
              >
                <Icon size={20} />
                <span>Part {index + 1}</span>
              </button>
            )
          })}
        </nav>

        {/* Content */}
        <main>
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-yellow-300" style={{fontFamily: "'Cinzel', serif"}}>{activePart.title}</h3>
                <p className="mt-2 text-yellow-200/70 max-w-2xl mx-auto">{activePart.description}</p>
            </div>
            <div className="bg-gray-800/50 border border-yellow-300/20 rounded-xl overflow-hidden shadow-lg">
                {activePart.techniques.map((exercise, index) => (
                    <ExerciseAccordion
                    key={index}
                    title={exercise.title}
                    instructions={exercise.instructions}
                    />
                ))}
            </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 py-6 border-t border-yellow-300/10">
            <p className="text-yellow-200/50">Master your breath. Master your reality.</p>
        </footer>
      </div>
    </div>
  );
}
