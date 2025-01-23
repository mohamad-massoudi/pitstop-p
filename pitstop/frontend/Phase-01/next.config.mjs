// next.config.mjs
export default {
  webpack(config, { isServer }) {
    // اگر در محیط مرورگر هستیم، `child_process` را رد می‌کنیم
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
      };
    }
    return config;
  },
};
