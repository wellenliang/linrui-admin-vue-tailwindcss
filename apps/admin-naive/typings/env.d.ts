declare namespace Env {
  /** router history mode 路由历史模式 */
  type RouterHistoryMode = 'hash' | 'history' | 'memory';

  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_BASE_URL: string;

    readonly VITE_APP_TITLE: string;
  }
}
