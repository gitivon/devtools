import { target } from '@vue-devtools/shared-utils'
import SharedData from '@vue-devtools/shared-utils/lib/shared-data'

export interface PageConfig {
  openInEditorHost?: string
  defaultSelectedAppId?: string
}

let config: PageConfig = {}

export function getPageConfig (): PageConfig {
  return config
}

export function initOnPageConfig () {
  // User project devtools config
  if (Object.hasOwnProperty.call(target, 'VUE_DEVTOOLS_CONFIG')) {
    config = SharedData.pageConfig = target.VUE_DEVTOOLS_CONFIG

    // Open in editor
    if (Object.hasOwnProperty.call(config, 'openInEditorHost')) {
      SharedData.openInEditorHost = config.openInEditorHost
    }
  }
}
