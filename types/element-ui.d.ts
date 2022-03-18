import Vue, { PluginObject } from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { ElButton } from './button'
import { ElInput } from './input'
import { ElTooltip } from './tooltip'
import { ElIcon } from './icon'
import { ElInfiniteScroll } from './infinite-scroll'
export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment

/** Button Component */
export class Button extends ElButton {}

/** Input Component */
export class Input extends ElInput {}

/** Tooltip Component */
export class Tooltip extends ElTooltip {}

/** Icon Component */
export class Icon extends ElIcon {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<ElInfiniteScroll>;
