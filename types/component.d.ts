import Vue from 'vue'

/** Lzb component common definition */
export declare class LzbComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type LzbComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type LzbHorizontalAlignment = 'left' | 'center' | 'right'
