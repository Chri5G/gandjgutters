import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const Roofing = () => {
  return (
    <div className="bg-gray-50 pt-14">
      <SwapColumnFeatures />
    </div>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature img={featureInView.img} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Callout Section */}
          <span className="rounded-full bg-logo_blue px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold text-dark_blue">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          {/* Picture Section */}
          <ExampleFeature img={featureInView.img} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ img }) => {
  console.log(img)
  return (
    <div className="relative w-full h-96 rounded-xl bg-gray-900 shadow-xl"
      style={{ backgroundImage: `url(${img})`,
                backgroundPosition: 'center',  // Center the image
                backgroundSize: 'contain',       // Ensure it covers the div 
                backgroundRepeat: 'no-repeat'  // No repeat
            }}
    >
    </div>
  );
};

export default Roofing;

const features = [
  {
    id: 1,
    callout: "What",
    title: "What is Roofing?",
    description:"Roofing is the installation of the top covering of a building that protects it from weather like rain, wind, and sun. It includes layers such as decking, underlayment, flashing, and the outer material—like shingles or metal. A roof helps safeguard the structure, improve energy efficiency, and enhance curb appeal.",
    contentPosition: "r",
    img: '/imgs/roofing/1.webp',
  },
  {
    id: 2,
    callout: "New Roof?",
    title: "Signs You Need a New Roof",
    description:
    <ul>
      <li><FaStar className="inline mr-2 text-yellow-400"/> Missing, curling, or cracked shingles.</li>
      <li><FaStar className="inline mr-2 text-yellow-400"/> Water stains on ceilings or attic leaks.</li>
      <li><FaStar className="inline mr-2 text-yellow-400"/> Excessive granules in gutters (for asphalt roofs).</li>
      <li><FaStar className="inline mr-2 text-yellow-400"/> Sagging areas or structural dips.</li>
      <li><FaStar className="inline mr-2 text-yellow-400"/> Roof age: 20+ years old (depending on material).</li>
    </ul>,
    contentPosition: "l",
    img: '/imgs/roofing/2.jpeg',
  },
  {
    id: 3,
    callout: "Install",
    title: "Roofing Installation Process",
    description:"Roof Installation begins by tearing off the old roofing and inspecting the decking for damage. After making necessary repairs, contractors install underlayment and flashing. The new roofing material is then applied, followed by ridge caps and proper ventilation. The project wraps up with a thorough cleanup to leave your property spotless.",
    contentPosition: "r",
    img: '/imgs/roofing/3.jpg',
  },

  {
    id: 4,
    callout: "Who",
    title: "Let Professionals Install Your Gutters",
    description:
    <p>At <strong className="text-logo_blue">G&J Seamless Gutters</strong>, we are the experts in gutter installation. Let our professional team handle all your gutter needs. <a href="/contact" className="text-logo_blue hover:underline">Contact Us</a> now for a seamless experience!"</p>,
    contentPosition: "l",
    img: '/imgs/logo.webp',
  },
  {
    id: 5,
    callout: "Maintenance",
    title: "Roofing Maintenance Tips",
    description:
    <p>Maintain your roof by cleaning gutters regularly and checking for damage after storms. Trim trees to prevent branches from scraping the roof. Inspect flashing and sealants around chimneys and vents for wear. For long-term protection, schedule professional roof inspections every year or two.</p>,
    contentPosition: "r",
    img: '/imgs/roofing/4.jpeg',
  },
];
