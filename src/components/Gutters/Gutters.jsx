import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Gutters = () => {
  return (
    <div className="bg-white">
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

export default Gutters;

const features = [
  {
    id: 1,
    callout: "What",
    title: "What are Gutters?",
    description:"Gutters are systems of channels installed along the edges of your roof to collect rainwater and direct it away from your home. They prevent water from damaging your roof, siding, foundation, and landscaping by safely guiding it to a designated drainage area.",
    contentPosition: "r",
    img: '/imgs/logo.webp',
  },
  {
    id: 2,
    callout: "Why",
    title: "Why are Gutters Important",
    description:
    <p><strong className="text-logo_blue">Water Control:</strong> Gutters protect your home from water damage by directing rainwater away from critical areas like your foundation and roof.<br /><strong className="text-logo_blue">Foundation Protection:</strong> Gutters prevent water from pooling around your home’s foundation, which can lead to cracks, leaks, or flooding.<br /><strong className="text-logo_blue">Prevent Erosion:</strong> Without gutters, water can erode the soil around your home, affecting the landscape and even leading to uneven ground or washouts.</p>,
    contentPosition: "l",
    img: '/imgs/logo.webp',
  },
  {
    id: 3,
    callout: "Sizes",
    title: "Gutter Sizing",
    description:
    <p>Proper gutter sizing is essential to ensure that the gutters can handle the volume of water during heavy rain. The size of gutters is typically determined by the roof's square footage and the rainfall in your area.<br /><strong className="text-logo_blue">5-inch gutters:</strong> Ideal for standard homes with average rainfall.<br /><strong className="text-logo_blue">6-inch gutters:</strong> Recommended for larger homes or areas with heavy rainfall, as they can handle more water flow.</p>,
    contentPosition: "r",
    img: '/imgs/gutter_sizes.jpg',
  },
  {
    id: 4,
    callout: "Types",
    title: "Types of Gutters",
    description:
    <p>We offer a variety of gutter options, including <strong className="text-logo_blue">Custom Half-Round Gutters</strong> for a classic, rounded look, and <strong className="text-logo_blue">Custom Box Gutters</strong> for a more modern, sleek design, all tailored to fit your home's unique style and needs.</p>,
    contentPosition: "l",
    img: '/imgs/gutter_types.avif',
  },
  {
    id: 5,
    callout: "Who",
    title: "Let Professionals Install Your Gutters",
    description:
    <p>At <strong className="text-logo_blue">G&J Seamless Gutters</strong>, we are the experts in gutter installation. Let our professional team handle all your gutter needs. <a href="/contact" className="text-logo_blue hover:underline">Contact Us</a> now for a seamless experience!"</p>,
    contentPosition: "r",
    img: '/imgs/logo.webp',
  },
];
