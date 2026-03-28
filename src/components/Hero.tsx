import { motion } from 'motion/react';
import { SplineScene } from './ui/spline-scene';
import { GradientSocialMenu } from './ui/gradient-social-menu';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Full-screen Spline layer */}
      {/* <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div> */}

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute inset-y-0 left-0 w-full md:w-[115%] lg:w-[115%] md:translate-x-[9%] lg:translate-x-[12%]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Foreground content layer */}
      <div className="relative z-10 min-h-screen pt-16 sm:pt-20 pointer-events-none">
        <div className="w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Side - Text */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-start space-y-6 md:pr-12 md:translate-x-6 lg:translate-x-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              hello world! I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Chloe Hallaert
              </span>
              <br />
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              software engineer
            </motion.p>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-1 pointer-events-auto"
            >
              <GradientSocialMenu />
            </motion.div>
          </motion.div>

          {/* Right side spacer so the robot still appears visually on the right */}
          <div className="flex-1 w-full h-[50vh] md:h-full" />
        </div>
      </div>
    </section>
  );
}