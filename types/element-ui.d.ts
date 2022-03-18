import Vue, { PluginObject } from 'vue'
import { LzbComponent, LzbComponentSize, LzbHorizontalAlignment } from './component'

import { ElButton } from './button'
import { ElInput } from './input'
import { ElInfiniteScroll } from './infinite-scroll'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of lz-component-b */
export const version: string

/**
 * Install all lz-component-b components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(Lzb)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** Lzb component common definition */
export type Component = LzbComponent

/** Component size definition for button, input, etc */
export type ComponentSize = LzbComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = LzbHorizontalAlignment

/** Button Component */
export class Button extends ElButton {}

/** Input Component */
export class Input extends ElInput {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<ElInfiniteScroll>;
