//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { WindowStateSettings } from '@bfemulator/app-shared';
import { Action } from 'redux';

export const REMEMBER_THEME = 'REMEMBER_THEME';
export const REMEMBER_BOUNDS = 'REMEMBER_BOUNDS';
export const REMEMBER_ZOOM_LEVEL = 'REMEMBER_ZOOM_LEVEL';

export interface WindowStateAction<P> extends Action {
  type: WindowStateActionType;
  payload?: P;
  state?: P;
}

export declare type WindowStateActionType = 'REMEMBER_THEME' | 'REMEMBER_BOUNDS' | 'REMEMBER_ZOOM_LEVEL';
export declare type WindowStatePayload = RememberZoomLevelPayload | RememberBoundsPayload | RememberThemePayload;

export interface RememberThemePayload {
  theme?: string;
}

export interface RememberBoundsPayload {
  displayId?: number;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
}

export interface RememberZoomLevelPayload {
  zoomLevel?: number;
}

export function rememberTheme(theme: string): WindowStateAction<RememberThemePayload> {
  return {
    type: REMEMBER_THEME,
    payload: {
      theme,
    },
  };
}

export function rememberBounds(state: WindowStateSettings): WindowStateAction<RememberBoundsPayload> {
  return {
    type: REMEMBER_BOUNDS,
    state,
  };
}

export function rememberZoomLevel(state: WindowStateSettings): WindowStateAction<RememberZoomLevelPayload> {
  return {
    type: REMEMBER_ZOOM_LEVEL,
    state,
  };
}
