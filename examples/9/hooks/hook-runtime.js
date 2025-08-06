const hooks = {};

export function addHook(hookName, hookImpl) {
  (hooks[hookName] ??= []).push(hookImpl);
}

export function runHook(hookName, ...args) {
  (hooks[hookName] || []).forEach(fn => fn(...args));
}
