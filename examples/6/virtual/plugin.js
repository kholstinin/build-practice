export default function configPlugin() {
  const virtualModuleId = 'virtual:config'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'config-plugin',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const config = {featureFlags: {a: true}}`
      }
    },
  }
}