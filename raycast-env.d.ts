/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-file-here` command */
  export type CreateFileHere = ExtensionPreferences & {
  /** Clipboard Fallback - When enabled, shows an error instead of creating file in /tmp and copying to clipboard when no file explorer is focused */
  "disableClipboardFallback": boolean
}
  /** Preferences accessible in the `create-file-to-clipboard` command */
  export type CreateFileToClipboard = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-file-here` command */
  export type CreateFileHere = {
  /** default.txt */
  "fileName": string
}
  /** Arguments passed to the `create-file-to-clipboard` command */
  export type CreateFileToClipboard = {
  /** default.txt */
  "fileName": string
}
}

