import React, { useState } from 'react';
import { ChevronDown, Zap, Command, Crown, Sparkles, MapPin } from 'lucide-react';

// --- Data for Breathing Exercises ---
const exercises = {
  part1: {
    title: "Discovering Your Hidden Superpower",
    icon: Zap,
    description: "Begin your journey by awakening the dormant power within. This section introduces foundational techniques to connect your breath with the creative forces of the universe, shifting you from a passive observer to an active participant in your reality.",
    techniques: [
        { title: "Gateway Breath", instructions: "In a quiet space, sit comfortably. Inhale deeply for four counts, hold for four counts, exhale for four counts, and hold empty for four counts. While practicing, focus on a single desire you wish to manifest.", why: "This balanced, four-part rhythm (box breathing) calms the nervous system and creates a stable energetic state. This stability opens a clear channel between your focused intention and the quantum field, allowing your desire to be 'heard' without the interference of chaotic thoughts." },
        { title: "Cosmic Synchronization Breath", instructions: "In a quiet space, place your hand over your heart. Feel its rhythm and begin breathing in time with your heartbeat—inhaling for four beats and exhaling for four beats. As you breathe, visualize your desires being carried to you on a cosmic tide.", why: "Your heartbeat is your personal connection to the universal rhythm. By aligning your breath with this fundamental pulse, you synchronize your personal energy field with the expansive, creative flow of the cosmos, allowing your desires to manifest in harmony with universal forces rather than against them." },
        { title: "Master's Concealment Breath", instructions: "While sitting naturally in any public space, breathe slowly and intentionally. With each inhale, silently draw in the energy of your intention. With each exhale, invisibly direct this power toward your desired manifestation.", why: "This technique allows you to build and direct potent creative energy without alerting or alarming the collective unconscious. By keeping the practice internal and subtle, you prevent the resistance and skepticism of others from diluting the power of your focused intention." },
        { title: "Life Force Activation Breath", instructions: "Sit quietly and visualize golden light entering your body with each inhalation. Feel this energy filling your cells and then expanding outward with each exhalation to touch everything you wish to manifest. Continue for seven breaths.", why: "This works by consciously directing 'Prana' or 'Chi'—the universal life force energy that animates all of creation. Visualizing it as golden light gives the formless energy a tangible quality, making it easier to command and project towards your specific manifestation goals." },
        { title: "Foundation Power Breath", instructions: "In a quiet space, inhale for seven counts, hold for one, exhale for seven counts, hold for one. During this practice, focus only on gratitude and positive visions. Start with three cycles.", why: "The 7-1-7-1 pattern aligns your nervous system with the frequency at which thought transforms into matter. The brief pause (1 count) acts as a powerful anchor point, 'sealing' your intention in the quantum field before releasing it. Focusing on gratitude ensures you are manifesting from a high-vibrational state." },
        { title: "The Creator's Activation Breath", instructions: "Sit in a quiet space with your spine straight. Breathe deeply and slowly, and with each breath repeat: 'I am the creator of my reality.' Visualize yourself as a powerful architect of existence, shaping circumstances with each breath.", why: "This technique rewires your identity at a subconscious level. By synchronizing the affirmation 'I am the creator' with the physical act of breathing, you shift from a passive 'victim' mindset to an active 'creator' state, changing the fundamental signal you send to the universe." },
        { title: "Universal Communication Breath", instructions: "Sit in stillness and choose one clear desire. As you inhale deeply, silently say, 'Please bring this to me.' Hold your breath gently while affirming, 'I trust your wisdom.' Then exhale completely while declaring with certainty, 'It is done.'", why: "This pattern mimics a direct, respectful conversation with the universe. The inhale is a clear request. The hold is an act of faith and surrender. The exhale is a declaration of certainty. This three-part structure communicates your desire with clarity, trust, and conviction—the three key elements for successful manifestation." },
        { title: "The Liberation Breath", instructions: "Sit quietly and observe your natural breath. With each inhale, visualize golden light dissolving chains of limitation. With each exhale, see doors of infinite possibility opening. Continue for seven minutes.", why: "This works by breaking the hypnotic trance of ordinary consciousness. Unconscious breathing reinforces your current limitations. By consciously breathing with imagery of liberation, you actively dissolve the energetic and mental constructs that keep you trapped, awakening your mind to possibilities that were previously invisible." },
        { title: "The Truth Revealing Breath", instructions: "Sit quietly with your eyes closed, breathing deeply while asking, 'What within me is creating my current reality?' As insights arise, breathe healing light into each revelation.", why: "Your breath acts as a mirror to your subconscious. By asking a direct question and then breathing deeply, you create the space for the answer to surface from within. Breathing 'into' the revelation then uses life force energy to transmute the underlying belief or fear at its source, healing the root cause of your current reality." },
        { title: "The Threshold Crossing Breath", instructions: "Sit in perfect stillness with your spine erect. Inhale for twelve counts, hold for four, exhale for twelve. Affirm: 'I accept my divine power... I am ready... I step into my true nature.' Practice for twelve cycles.", why: "The long, 12-count breath expands your energetic capacity, preparing your nervous system to handle a higher frequency of power. The affirmations are declarations of consent to a new level of reality. This combination signals to the universe that you are consciously choosing to graduate from an ordinary to an extraordinary existence." },
    ]
  },
  part2: {
    title: "Commanding Reality with Each Breath",
    icon: Command,
    description: "Move from discovery to direct influence. The exercises in this section are potent tools for manifestation, teaching you to channel your breath and emotions to command specific outcomes in your life, from wealth to relationships.",
    techniques: [
        { title: "The Elemental Mastery Breath", instructions: "Inhale for four (Earth), hold for four (Water), exhale for four (Fire), pause for four (Air). Feel the qualities of each element as you breathe. Practice for twelve cycles.", why: "This aligns you with the four fundamental building blocks of physical reality. By invoking the qualities of each element with your breath (grounding, flow, passion, manifestation), you command the very forces that govern the material world, making your intentions more potent and tangible." },
        { title: "Instant Manifestation Breath", instructions: "Sit in perfect stillness with a specific desire in mind. Inhale for seven seconds (see it done), hold for seven (feel it done), exhale for seven (release it). Practice no more than three times in succession.", why: "The 7-7-7 rhythm creates a powerful resonant frequency that bypasses the normal delays of manifestation. The three stages—seeing, feeling, and releasing—form a complete creative cycle in a compressed timeframe, launching your desire into reality with incredible speed and precision." },
        { title: "The Emotional Transmutation Breath", instructions: "Recall a situation that fills you with righteous anger. Inhale this powerful force and direct it entirely into your chosen desire. Hold for four counts, feeling it transform into pure creative power. Exhale this transformed energy into your vision.", why: "Strong emotions like anger contain immense raw energy. This technique works by hijacking that raw power. Instead of wasting it on destructive thoughts, you channel it through your breath, transmuting it from chaotic anger into focused, creative fuel for your manifestation." },
        { title: "Millionaire's Frequency Breath", instructions: "Inhale for eight counts visualizing money flowing to you. Hold for four counts, embracing worthiness. Exhale for eight counts, releasing all doubts about prosperity.", why: "This pattern attunes your nervous system to the vibrational frequency of abundance. The 8-4-8 rhythm creates a state of calm receptivity, while the visualization and feeling of worthiness reprogram your subconscious mind to expect and attract wealth as its natural state." },
        { title: "Soulmate Magnetism Breath", instructions: "Sit quietly, hand on heart. Inhale, visualizing your heart expanding with radiant love. Hold, feeling this love fill you. Exhale, sending this love out as a magnetic call to your perfect partner.", why: "This technique turns your heart into a powerful energetic beacon. Pure, unconditional love is the most magnetic force in the universe. By breathing this energy, you broadcast a specific soul-signature that resonates across time and space, attracting the person who is a vibrational match to your true self." },
        { title: "Miracle Pause Breath", instructions: "Begin with a slow, deep inhale. At the top of your breath, pause naturally. In this pause, hold your chosen desire in clear awareness. Feel yourself existing in the timeless void where all possibilities await your selection.", why: "The pause between breaths is a 'zero-point' field—a gateway to the quantum realm where time and space do not exist. By placing your intention into this void, you are planting a seed in the field of pure potential before it collapses into physical reality, allowing for 'miraculous' outcomes." },
        { title: "Block Dissolution Breath", instructions: "Identify your most persistent limitation. Close your eyes and locate it in your body. Breathe directly into this space, visualizing your breath as pure light dissolving the barrier.", why: "Internal blocks are simply trapped, stagnant energy. Conscious breath is a flow of pure life force. By directing your breath *into* the block, you are introducing a powerful current that breaks up the stagnant energy, dissolving the fear or belief at its source and releasing the trapped power for your use." },
        { title: "Regenerative Healing Breath", instructions: "Sit comfortably and focus on an area needing healing. Inhale, visualizing golden healing light flowing into this area. Hold, seeing it penetrate every cell. Exhale, feeling the cells awaken to wholeness.", why: "This technique uses the breath to deliver the body's original blueprint of perfect health. The golden light is a visualization of pure life force. By directing this energy with focused intent, you remind the cells of their innate intelligence and trigger the body's natural capacity for regeneration and healing." },
        { title: "Environmental Transformation Breath", instructions: "Sit quietly and breathe deeply, visualizing each exhale carrying waves of peace and harmony throughout your environment, touching everyone in your life and gently elevating their energy.", why: "Your breath creates an energetic field that extends beyond your body. This technique works by consciously programming that field with positive intentions. The waves of peace you send out on your exhale literally alter the vibrational atmosphere of your space, influencing everyone within it on a subtle, energetic level." },
        { title: "Unconquerable Warrior Breath", instructions: "Sit with your spine straight. Inhale for six (power/courage), hold for two (victory), exhale for six (release weakness/fear), hold empty for two (anchor confidence).", why: "This pattern biochemically and energetically creates a state of invincibility. The 6-count inhale builds power, the hold solidifies intent, the 6-count exhale purges doubt, and the final hold anchors the feeling of triumph. It systematically removes the frequency of victimhood and replaces it with the frequency of victory." },
    ]
  },
  part3: {
    title: "Becoming Too Powerful for Your Old Life",
    icon: Crown,
    description: "Ascend to the highest levels of mastery. These advanced practices are for those ready to transcend ordinary limitations, bend physical laws, and fully integrate their identity as a sovereign creator of their own existence.",
    techniques: [
        { title: "Impossibility Transcendence Breath", instructions: "Choose something you previously labeled impossible. Sit in perfect stillness and breathe with the authority of a divine creator. Inhale with absolute certainty. Hold with the feeling of reality conforming to your will. Exhale with finality.", why: "This works by shifting your identity from one who asks permission of reality to one who commands it. The universe responds to the authority of your conviction. By breathing with the absolute certainty of a creator, you collapse quantum possibilities into your desired outcome, making the 'impossible' manifest." },
        { title: "Temporal Transcendence Breath", instructions: "Sit in stillness. Breathe deeply, visualizing yourself existing in all moments at once. Inhale wisdom from your future self. Hold in the eternal now. Exhale healing into your past.", why: "This technique leverages the truth that all time is simultaneous in the quantum field. Your breath acts as a vehicle for consciousness to travel along your timeline. You can retrieve resources from a 'future' that has already happened and resolve traumas from a 'past' that is still present, collapsing your entire timeline into a healed, empowered state." },
        { title: "Matter Influence Breath", instructions: "Sit quietly and feel your absolute unity with all physical reality. Breathe while knowing that your consciousness and the matter around you are one. Direct your conscious intention through your breath into the physical world.", why: "This is based on the principle of non-duality. Matter is not separate from consciousness; it IS consciousness in a different form. By breathing with this deep knowing, you dissolve the illusion of separation. Matter then recognizes your intention as its own, and aligns with it effortlessly." },
        { title: "Divine Love Breathing", instructions: "Sit quietly. With each inhalation, feel pure love filling your heart. With each exhalation, let this love expand outward to embrace all existence. Feel your heart growing vast enough to hold the entire universe.", why: "Love is the fundamental, creative force of the universe. This technique aligns you with that source code. By breathing pure, unconditional love, you become a channel for the most powerful creative energy in existence, capable of manifesting miracles that defy ordinary logic." },
        { title: "Synchronicity Orchestration Breath", instructions: "Sit quietly. Inhale, visualizing golden threads of light from your heart to all you desire. Exhale, imagining you are gently pulling these threads, arranging circumstances with precision.", why: "This technique operates on the understanding that all things are interconnected in a universal web. Your breath, infused with intention, sends vibrations through this web. This practice allows you to consciously 'tune' these vibrations, pulling on the threads of reality to orchestrate perfect timing, meetings, and opportunities." },
        { title: "The Dragon Awakening Breath", instructions: "Sit in perfect stillness. Visualize a sleeping dragon at the base of your spine. With each inhale, feel warmth kindling there. With each exhale, see a divine flame spreading upward. Halt if any ego arises.", why: "This awakens Kundalini energy, the raw, primal force of creation that lies dormant in the body. It is the most potent manifestation power available. It is 'dangerous' because this raw power amplifies whatever is in your consciousness, making purity of intent absolutely essential for safe and effective use." },
        { title: "Lineage Connection Breath", instructions: "Sit in stillness. With each inhale, visualize opening to receive the wisdom of all masters who have achieved what you aspire to. With each exhale, allow your consciousness to dissolve and merge with this lineage.", why: "This works by tapping into the collective consciousness or 'Akashic Records.' The wisdom and experience of every master who has ever lived exists as an energetic signature in this field. Your breath, when tuned by intention, can access and download this information directly into your awareness." },
        { title: "Sovereign Recognition Breath", instructions: "Sit in perfect stillness. Breathe naturally while holding the recognition: 'I am not using breath - I am the breath of existence itself...' Feel the illusion of separation dissolving with each breath.", why: "This is the shift from 'doing' to 'being'. Instead of using breath as a tool, you recognize that you ARE the creative force that breathes. This dissolves all effort and resistance. Reality responds to you not because you are commanding it, but because it recognizes you as its source." },
        { title: "Cosmic Unity Breath", instructions: "Sit in perfect stillness and let your breath flow effortlessly. With each inhale, feel yourself expanding beyond personal identity. With each exhale, recognize that you are the universe breathing itself. Let go of all techniques.", why: "This is the ultimate state of non-dual awareness. You realize there is only one breath, one consciousness, one existence. All separation dissolves. In this state, there is no 'you' manifesting something 'out there'. There is only the universe expressing its infinite potential through your form." },
        { title: "Integration Mastery Breath", instructions: "Sit in perfect stillness and breathe deeply. With each inhale, draw in the divine recognition of your true identity. With each exhale, release all attachments to limitation. Affirm your power and release all that cannot contain it.", why: "This final practice solidifies your new state of being. It uses the breath to consciously integrate your expanded awareness into your physical body and energy field, while simultaneously releasing the old energetic structures and attachments of your former, limited self. It is the act of consciously embodying your mastery." },
    ]
  }
};

// --- Accordion Component for each exercise ---
const ExerciseAccordion = ({ title, instructions, why }) => {
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
          isOpen ? 'max-h-[30rem]' : 'max-h-0'
        }`}
      >
        <div className="p-5 pt-0 text-yellow-300/80 leading-relaxed">
          <p className="mb-4">{instructions}</p>
          <h4 className="text-yellow-200 font-semibold flex items-center gap-2 mb-2">
            <Sparkles size={18} className="opacity-80" />
            Why It Works
          </h4>
          <p className="text-yellow-300/70 text-sm">{why}</p>
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
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-16 pb-20 text-center bg-gray-900" style={{background: 'radial-gradient(ellipse at 50% -20%, rgba(253, 224, 71, 0.2), rgba(253, 224, 71, 0))'}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 tracking-wider" style={{fontFamily: "'Cinzel', serif", textShadow: '0 0 20px rgba(253, 224, 71, 0.6)'}}>
                    AetherFlow
                </h1>
                <p className="text-yellow-200/70 mt-4 text-xl">
                    Your Breath Controls Reality
                </p>
            </div>
        </div>

        <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl -mt-10">
            {/* Combined Intro Section */}
            <section className="mb-12 p-8 bg-gray-800/60 backdrop-blur-sm border border-yellow-300/20 rounded-xl shadow-2xl shadow-yellow-500/5">
                <h3 className="text-3xl text-center font-semibold text-yellow-300 mb-4" style={{fontFamily: "'Cinzel', serif"}}>What is Aether?</h3>
                <p className="text-yellow-200/70 max-w-3xl mx-auto text-center mb-8">
                In ancient philosophy, Aether was the fifth element—the pure, primordial substance filling the universe. It is the raw material of creation. In AetherFlow, it represents the invisible life force energy (Prana or Chi) you command with your breath. To master your breath is to master the flow of Aether, sculpting reality from the fabric of the cosmos.
                </p>
                <div className="w-16 h-px bg-yellow-300/20 mx-auto my-8"></div>
                <h2 className="text-3xl text-center font-semibold text-yellow-300 mb-4" style={{fontFamily: "'Cinzel', serif"}}>How & Why It Works</h2>
                <p className="text-yellow-100/80 leading-relaxed text-center">
                    Your breath is the bridge between consciousness and the physical world. By breathing unconsciously, you reinforce your current reality. By breathing with focused intention, you issue new commands to the fabric of existence. Each pattern in this app attunes your energy to a specific frequency, allowing you to dissolve limitations, attract desires, and align with the cosmic flow of creation. This isn't just relaxation; it's the art of reality-sculpting.
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
                        why={exercise.why}
                        />
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center mt-12 py-8 border-t border-yellow-300/10">
                <div className="text-yellow-200/60 text-sm">
                    <p className="font-semibold text-yellow-200/80">
                        Created & Gathered by Charles A. Paris
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2">
                        <MapPin size={14} />
                        Sharing these breathing techniques for healing, gathered on a personal journey in Philadelphia.
                    </p>
                </div>
                <p className="text-yellow-200/50 mt-8">Master your breath. Master your reality.</p>
            </footer>
        </div>
      </div>
    </div>
  );
}
